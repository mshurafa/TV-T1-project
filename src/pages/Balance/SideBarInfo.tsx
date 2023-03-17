import React,{forwardRef, useEffect, useState} from 'react'
import { Button, Card, Image, RightSideBar } from 'components'
import {Tag} from 'components'
import { Timeline } from 'primereact/timeline';

import Bank from '../../../public/assets/img/bank.png'
import Cash from '../../../public/assets/img/cash.svg'
import axios from 'axios';
import { getCookie } from 'lib/js-cookie';

import { API_WITHDRAWAL_URLS, COOKIES_KEYS } from 'data/constants'
import { useSWR, type Fetcher } from "lib/swr";
import { Skeleton } from 'primereact/skeleton';
type Props = {
    ref:string
}
// function dateToRelativeString(inputDate) {
//     const MS_IN_SECOND = 1000;
//     const MS_IN_MINUTE = MS_IN_SECOND * 60;
//     const MS_IN_HOUR = MS_IN_MINUTE * 60;
//     const MS_IN_DAY = MS_IN_HOUR * 24;
//     const MS_IN_WEEK = MS_IN_DAY * 7;
//     const MS_IN_MONTH = MS_IN_DAY * 30;
//     const MS_IN_YEAR = MS_IN_DAY * 365;

//     const date = new Date(inputDate);
//     const now = new Date();

//     const elapsedMs = now - date;

//     if (elapsedMs < MS_IN_MINUTE) {
//       return "just now";
//     } else if (elapsedMs < MS_IN_HOUR) {
//       const minutes = Math.floor(elapsedMs / MS_IN_MINUTE);
//       return `${minutes} Minute${minutes !== 1 ? "s" : ""} ago`;
//     } else if (elapsedMs < MS_IN_DAY) {
//       const hours = Math.floor(elapsedMs / MS_IN_HOUR);
//       return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
//     } else if (elapsedMs < MS_IN_WEEK) {
//       const days = Math.floor(elapsedMs / MS_IN_DAY);
//       return `${days} Day${days !== 1 ? "s" : ""} ago`;
//     } else if (elapsedMs < MS_IN_MONTH) {
//       const weeks = Math.floor(elapsedMs / MS_IN_WEEK);
//       return `${weeks} Week${weeks !== 1 ? "s" : ""} ago`;
//     } else if (elapsedMs < MS_IN_YEAR) {
//       const months = Math.floor(elapsedMs / MS_IN_MONTH);
//       return `${months} Month${months !== 1 ? "s" : ""} ago`;
//     } else {
//       const years = Math.floor(elapsedMs / MS_IN_YEAR);
//       return `${years} Year${years !== 1 ? "s" : ""} ago`;
//     }
//   }
function dateToRelativeString(inputDate) {
    const date = new Date(inputDate);
    const now = new Date();

    const diffTime = now - date;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return "Today";
    } else if (diffDays === 1) {
      return "Yesterday";
    } else if (diffDays > 1 && diffDays <= 7) {
      return `${diffDays} Days ago`;
    } else if (diffDays > 7 && diffDays <= 30) {
      const diffWeeks = Math.floor(diffDays / 7);
      return `${diffWeeks} Week${diffWeeks > 1 ? "s" : ""} ago`;
    } else if (diffDays > 30 && diffDays <= 365) {
      const diffMonths = Math.floor(diffDays / 30);
      return `${diffMonths} Month${diffMonths > 1 ? "s" : ""} ago`;
    } else if (diffDays > 365 && diffDays <= 365*2) {
      return "1 Year ago";
    } else {
      const diffYears = Math.floor(diffDays / 365);
      return `${diffYears} Years ago`;
    }
  }
  function dateTo12HourTime(inputDate) {
    const date = new Date(inputDate);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const suffix = hours >= 12 ? "PM" : "AM";
    const adjustedHours = hours % 12 || 12;
    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${adjustedHours}:${paddedMinutes} ${suffix}`;
  }
  function numberStatus(number) {
    if (number==1) {
        return 'One'
    }else if(number == 2){
        return 'Tow'
    }
    else{
        return 'Three'
    }
  }

const SideBarInfo =({Id,visible,title,setVisible,...rest}:props) => {
    const URL = 'https://talents-valley-backend.herokuapp.com/api'
    const [loading, setLoading] = useState(true);

    const [userInfo, setUserInfo] = useState({});
    const officeFetcher = async ([url, currentUser]) => {
        // console.log("test" , url, currentUser)
        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${currentUser.accessToken}`,
            },
        });
        return response.data.data;
    };
    const currentUser = getCookie(COOKIES_KEYS.currentUser);
    const { data: apiData, error: error1, isLoading: isLoading1 } = useSWR(
        [`${URL}/${API_WITHDRAWAL_URLS.WITHDRAWAL_DETAILS_ID(Id)}`, currentUser], officeFetcher,)

        useEffect(() => {
        if (apiData) {
            setLoading(false);
            setUserInfo(apiData.withdraw)
            console.log(userInfo);

        }
    }, [apiData]);

    useEffect(() => {
        // withdrawalData.getTable().then(data => setUserInfo(data[0]));
    }, []);


    const historyLen = userInfo?.history

    const customizedMarker = (item) => {
        return (
            <span className={`flex w-2rem text-[#8C8C8C] h-2rem align-items-center justify-content-center  border-circle z-1 shadow-1
            ${numberStatus(historyLen.length)==='Three'&&item.status==="completed"?"completed !text-[#4375FF]":""}
            ${numberStatus(historyLen.length)==='Tow'&&item.status==="sent"?"sent !text-[#4375FF]":""}
            ${numberStatus(historyLen.length)==='One'&&item.status==="pending"?"requested text-[#4375FF]":""}
            `}>
                <i className={`pi pi-circle-fill `}></i>
            </span>
        );
    };

    const customizeDateTime= (item)=>{
        return (
            <small className={`text-color-secondary flex flex-col -my-1 `} >
                <span className={`text-center
                ${numberStatus(historyLen.length)==='Three'&&item.status==="completed"?"!text-black":"text-gray-new2"}
                ${numberStatus(historyLen.length)==='Tow'&&item.status==="sent"?"!text-black":"text-gray-new2"}
                ${numberStatus(historyLen.length)==='One'&&item.status==="pending"?"text-text-black":"text-gray-new2"}
                `}>{dateTo12HourTime(item.createdAt)}</span>
                <span className='text-center text-xs text-gray-new2'>{dateToRelativeString(item.createdAt)}</span>
            </small>
        );
    };
    const customizeStatus= (item)=>{
        return (
            <small className={`text-color-secondary flex -my-0.5 w-14 `} >
                <span className={`capitalize text-sm
                ${numberStatus(historyLen.length)==='Three'&&item.status==="completed"?"font-bold text-black":"text-gray-new2"}
                ${numberStatus(historyLen.length)==='Tow'&&item.status==="sent"?"font-bold !text-black":"text-gray-new2"}
                ${numberStatus(historyLen.length)==='One'&&item.status==="pending"?"font-bold !text-black":"text-gray-new2"}
                `}>{item.status}</span>
            </small>
        );
    };

  return (
    <RightSideBar  title="Withdrawal" visible={visible} setVisible={setVisible}>
        {!loading&&<div className="flex gap-4 flex-col">
        <Card className='!shadow-none border  '>
            <div className="flex justify-between items-center border-b mx-4 pb-3 border-gray">
                <div className="font-semibold text-xl ">${userInfo?.amount}</div>
                <div className="">
                    {<Tag style={true}>{userInfo?.status}</Tag>}
                </div>
            </div>
            <div className="flex justify-between mt-3 mx-4">
                <div className="">
                   {userInfo?.typeWithdraw=='cash'?
                   <div className="py-3 font-semibold">{userInfo.office?.name}</div>
                    :
                    <div className="flex flex-col">
                        <div className="font-semibold">{userInfo?.bank?.bankName}</div>
                        <span className=''>{userInfo?.bank?.accountNumber}</span>
                    </div>
                   }
                </div>
                <div className="">
                    {userInfo?.typeWithdraw=='cash'?
                     <div className="mr-7">
                        <Image src={Cash} alt='bank' width={30} height={30}/>
                     </div>
                    :
                    <Image src={Bank} alt='bank' width={30} height={30}/>

                    }
                </div>
            </div>
        </Card>
        <Card className='!shadow-none border '>
            <div className="mx-4">
                <p className='font-bold'>Timeline</p>
                    <div className="mt-4 flex">
                        <div className="w-4/6">
                            <Timeline  value={userInfo.history} align="right" opposite={customizeStatus} marker={customizedMarker} content={customizeDateTime} />
                        </div>

                    </div>


            </div>
        </Card>
        <Card className='!shadow-none border '>
        <p className='font-bold mx-4'>Details</p>
        {userInfo?.typeWithdraw=='cash'?
        <div className="mx-4 mt-4">
            <div className="flex flex-col gap-4">
                    <div className="flex justify-between ">
                        <span className='text-gray-new2'>Recipient Name</span>
                        <span>{userInfo?.recipient?.name}</span>
                    </div>
                    <div className="flex justify-between">
                    <span className='text-gray-new2'>Expected Date</span>
                        <span>Within 24 Hours (Avg: 2hrs)</span>
                    </div>
            </div>
        </div>
        :
        <div className="mx-4 mt-4">
        <div className="flex flex-col gap-4">
                <div className="flex justify-between ">
                    <span className='text-gray-new2'>Bank Account Name</span>
                    <span>{userInfo?.bank?.accountName}</span>
                </div>
                <div className="flex justify-between">
                <span className='text-gray-new2'>Expected Date</span>
                    <span>Within 24 Hours (Avg: 2hrs)</span>
                </div>
        </div>
    </div>
        }

        </Card>
        <Card className='!shadow-none border'>
        <p className='font-bold mx-4'>Timeline</p>
        <div className={`mx-4 mt-3`}>
            <ul className='list-disc mx-4 flex flex-col gap-2'>
               {userInfo?.typeWithdraw=='cash'?
                   <div className="">
                     <li>Address: {userInfo?.office?.address}</li>
                    <li>Working hours from 9:00 am to 7:00 pm</li>
                    <li>Bring your ID for identification</li>
                    <li>Confirm receiving your payment</li>
                    <li>Office fees {userInfo?.office?.fees}</li>
                   </div>
                :
                <div className="">
                     <li>Open your bank account app to ensure payment delivery</li>
                     <li>Confirm receiving your payment</li>
                     <li>Confirm receiving your payment</li>
                </div>
               }
            </ul>
            </div>
        </Card>
        <div className="w-full">
            {userInfo.status==='completed'&&<Button className='w-full !bg-white !text-black drop-shadow-2xl py-4 mb-4'>Report a Problem</Button>}
            {userInfo.status==='ready' && <Button className='w-full !bg-white !text-black drop-shadow-2xl py-4 mb-4'>Cancel Withdrawal</Button>}
            {userInfo.status==='pending' && <Button className='w-full !bg-white !text-black drop-shadow-2xl py-4 mb-4'>Cancel Withdrawal</Button>}
        </div>

        </div>}
        {loading&&
            <div className="flex gap-4 flex-col">
                <Card className='!shadow-none border'>
                <Skeleton width="25.5rem" height="7rem"></Skeleton>
                </Card>
                <Card className='!shadow-none border'>
                <Skeleton width="25.5rem" height="7rem"></Skeleton>
                </Card>
                <Card className='!shadow-none border'>
                <Skeleton width="25.5rem" height="7rem"></Skeleton>
                </Card>
                <Card className='!shadow-none border'>
                <Skeleton width="25.5rem" height="7rem"></Skeleton>
                </Card>
                <Card className='!shadow-none border'>
                <Skeleton width="25.5rem" height="7rem"></Skeleton>
                </Card>

            </div>
        }
    </RightSideBar>
  )
}

export default SideBarInfo
