import Image from 'next/image';
import { images } from './homeImages'
import { Button, Card } from "components";
import { useState } from 'react';
import CreateInvoice from '../../../public/assets/img/CreateInvoice.png'

function Home() {
    const [Hidden, setHidden] = useState<boolean>(false)
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full">
            <div className={`md:col-span-8 mt-6 order-2 xl:order-1  md:order-1`}>
                <Card className={`${Hidden && 'hidden'} OurServices bg-white rounded-xl shadow-md !p-10 h-fit`}>
                    <div className=" flex flex-row justify-between ">
                        <span className="text-gray-dark text-xl ">Our Services</span>
                        <button className=" text-blue-light" onClick={() => setHidden(true)}>Hide</button>
                    </div>
                    <div className=" grid grid-cols-1 md:grid-cols-8 xl:grid-cols-12 xl:gap-4 md:gap-2 gap-1">
                        <div className="flex flex-col xl:col-span-3 md:col-span-2">
                            <div className="flex self-center ">
                                <Image src={'/assets/img/CreateInvoice.png'} width={256} height={198} alt="" className="  " />
                            </div>
                            <h3 className=" self-center text-black font-bold xl:text-xl md:text-md text-center">Create Invoice</h3>
                            <span className=" self-center text-gray-dark text-md text-center">Share it via email or link</span>
                        </div>

                        <div className=" flex justify-center ">
                            <div className="self-center ">
                                <Image src={images.arrow} alt="" className=" xl:scale-150 md:scale-75 rotate-90 xl:rotate-0 md:rotate-0 " />
                            </div>
                        </div>

                        <div className="flex flex-col xl:col-span-4 md:col-span-2">
                            <div className="flex self-center xl:h-[70%] md:h-3/6">
                                <Image src={images.ClientPaysIt} alt="" className="  " />
                            </div>
                            <h3 className=" self-center text-black font-bold xl:text-xl md:text-md text-center">Client Pays It</h3>
                            <span className=" text-center self-center text-gray-dark ">(PayPal - Credit Card - Bank Transfer)</span>
                        </div>

                        <div className=" flex justify-center">
                            <div className="self-center ">
                                <Image src={images.arrow} alt="" className="xl:rotate-0 md:rotate-0  xl:scale-150 md:scale-75 rotate-90 transform -scale-y-100" />
                            </div>
                        </div>


                        <div className="flex flex-col xl:col-span-3 md:col-span-2">
                            <div className="flex self-center xl:h-[70%] md:h-3/6">
                                <Image src={images.GetPaid} alt="" className="  " />
                            </div>
                            <h3 className=" self-center text-black font-bold xl:text-xl md:text-md text-center">Get Paid</h3>
                            <span className=" self-center text-gray-dark text-center">(Cash - Bank)</span>
                        </div>
                    </div>
                </Card>
            </div>

            <div className="md:col-span-4 mt-6 xl:order-2 md:order-2 order-1">
                <div className='bg-white rounded-xl shadow-md h-fit  p-6'>
                    <span className='block text-md text-gray-dark  w'>Balance</span>
                    <div className='flex '>
                        <span className=' text-center text-dark text-xl font-bold self-center '>$250.00</span>
                        <div className=" bg-[#F3F6FF] flex text-center justify-center p-2 rounded-xl ml-3 ">
                            <Image className="w-9/12" src={images.withdraw} alt="" />
                        </div>
                    </div>
                    <div className=" mt-4 flex xl:flex-row flex-col justify-evenly gap-4">
                        <Button className="!bg-[#F3F6FF] px-5 py-2 rounded-md flex justify-center items-center w-full" >
                            <span className="text-blue self-center font-bold text-xl text-center">+</span>
                            <span className="text-ml text-blue-light ml-3 self-center">Create Link</span>
                        </Button>

                        <Button className="!bg-[#F3F6FF] !hover:bg-black  px-5 py-2 rounded-md flex justify-center items-center w-full" >
                            <div className=" w-[10%]">
                                <Image className="" src={images.send} alt="" />
                            </div>
                            <span className="text-ml text-blue-light ml-3 self-center">Send Invoice</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Home;
