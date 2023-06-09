/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Dropdown } from 'primereact/dropdown';
import { Skeleton } from 'primereact/skeleton';
import { Paginator } from 'primereact/paginator';
import { classNames } from 'primereact/utils';

import { Column } from 'primereact/column';
import { Button, Image, Input } from 'components';
import Tag from 'components/Tag';
import { useSWR, type Fetcher } from "lib/swr";
import axios from "lib/axios";
import { API_WITHDRAWAL_URLS, COOKIES_KEYS } from 'data/constants'
import { getCookie } from 'lib/js-cookie';
import { Search } from 'lib/@heroicons';
import { images } from 'pages/home/homeImages';

const statusOptions = [
    { label: 'All', value: null },
    { label: 'Pending', value: 'pending' },
    { label: 'cancelled', value: 'cancelled' },
    { label: 'Ready', value: 'ready' },
    { label: 'Sent', value: 'sent' },
    { label: 'Completed', value: 'completed' },
];


type Props = {}
function index({ }: Props) {
    const URL = 'https://talents-valley-backend.herokuapp.com/api'
    const [tableData, settableData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [Status, setStatus] = useState('');
    const [offset, setOffset] = useState(0);
    const [limit, setlimit] = useState(5);
    const [totalItems, setTotalItems] = useState(0);
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
        [`${URL}/${API_WITHDRAWAL_URLS.GET_WITHDRAWAL_REQUEST_LIST}?limit=${limit}&offset=${offset}&search=${search}&${Status ? `filter=${Status}` : "&"}`, currentUser],officeFetcher,)

    // useEffect(() => {
    //     // DataTableInfo.getTable().then(data => settableData(data));
    // }, []);
    useEffect(() => {
        if (apiData) {
            setLoading(false);
            settableData(apiData.withdraws)
            setTotalItems(apiData.count)
        }
    }, [apiData]);
    // search
    const onFilter = (event) => {
        setSearch(event.target.value);
        console.log(search);
    };
    // status
    const onStatusChange = (event) => {
        setStatus(event.value);
    };
    //   pagination
    const onPageChange = (event) => {
        // console.log(event.page);
        // const first = event.first;
        // const rows = event.rows;
        setOffset(event.first);
        setlimit(event.rows);

    };



    const customHeader = (
        <div className="flex justify-between mb-1 xl:flex-row flex-col">
            <div className="xl:w-1/2 ">
                <Input
                    type="text"
                    onChange={onFilter}
                    placeholder="Search"
                    value={search}
                    withoutHelperText={true}
                    startIcon={<Search className='' />}

                />
            </div>
            <div className="xl:w-1/2 flex xl:justify-end justify-around gap-10 ">
                <div className="">
                    <Button className='!bg-white px-6 !text-blue flex  !font-normal justify-center items-center'>
                        <Image src={images.withdraw} alt='dsd' width={15} height={15} />
                        <span className='ml-2'>Withdraw</span>
                    </Button>
                </div>
                <div className={`w-52`}>
                    <Dropdown
                        id="status"
                        options={statusOptions}
                        value={Status}
                        placeholder="Filter a status"
                        onChange={onStatusChange}
                        className='w-full p-column-filter'
                    />
                </div>

            </div>
        </div>
    );


    const customBodyOffice = (tableData) => (
        <><div>{tableData.office?.name || tableData.bank.bankName}</div>
            <div className='text-gray'>{formatDateBodyTemplate(tableData)}</div>

        </>
    );

    const customBodyAmount = (tableData) => (
        <>  <span>{`$${tableData.amount}`}</span>
        </>
    )


    const customBodyrecipient = (tableData) => (
        <>
            <div>{tableData.recipient?.name || 'Test'}</div>
        </>
    );
    const statusBodyTemplate = (tableData) => {
        return <Tag>{tableData.status.charAt(0).toUpperCase() + tableData.status.slice(1)}</Tag>;
    };
    function formatDateBodyTemplate(tableData) {
        function getDateStr(dateStr) {
            const date = new Date(dateStr);
            const today = new Date();
            let yesterday = new Date();
            yesterday = new Date(yesterday.setDate(today.getDate() - 1));
            const isToday = date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
            const isYesterday = date.getDate() === yesterday.getDate() && date.getMonth() === yesterday.getMonth() && date.getFullYear() === yesterday.getFullYear();
            const dayStr = date.getDate().toString().padStart(2, '0');
            const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const monthName = monthNames[date.getMonth()];
            if (isToday) {return `Today`;}
            else if (isYesterday) {return `Yesterday`;}
             else {return `${dayStr}-${monthName}`;

        }
        }

        return getDateStr(tableData.createdAt);
    };
    const emptyMessage = () => (
        <>
            <div className='text-center'>No data found.</div>
        </>
    );

    const headerOffice = (
        <div className='text-gray-new font-normal'>
            <span>Office</span>
        </div>
    );
    const headerDate = (
        <div className='text-gray-new font-normal'>
            <span>Date</span>
        </div>
    );
    const headerAmount = (
        <div className='text-gray-new font-normal'>
            <span>Amoun</span>
        </div>
    );
    const headerStatus = (
        <div className='text-gray-new font-normal'>
            <span>Status</span>
        </div>
    );
    const headerRecipient = (
        <div className='text-gray-new font-normal'>
            <span>Name</span>
        </div>
    );

    // Fake table
    const items = Array.from({ length: 6 }, (v, i) => i);

    const bodyTemplate = () => {
        return <Skeleton></Skeleton>
    }

    return (
        <div className="grid grid-cols-1 xl:grid-cols-12 ">

            <div className="grid-cols-1 xl:col-span-8 ">
                <div className="p-4 rounded-sm">
                    <h2>Transactions</h2>
                    {!loading && <div className="">
                        <DataTable value={tableData} className="p-datatable-striped" header={customHeader} stripedRows selectionMode="single" emptyMessage={emptyMessage} rows={5} tableStyle={{ minWidth: '50rem' }}>
                            <Column className="text-center" field="Office" header={headerOffice} body={customBodyOffice} sortable style={{ width: '25%' }} ></Column>
                            <Column field="createdAt" header={headerDate} body={formatDateBodyTemplate} sortable style={{ width: '25%' }} ></Column>
                            <Column field="amount" header={headerAmount} body={customBodyAmount} sortable style={{ width: '25%' }} ></Column>
                            <Column field="Name" header={headerRecipient} body={customBodyrecipient} sortable style={{ width: '25%' }} ></Column>
                            <Column field="status" header={headerStatus} body={statusBodyTemplate} sortable style={{ width: '25%' }} ></Column>
                        </DataTable>
                        <Paginator
                            first={offset}
                            rows={5}
                            totalRecords={totalItems}
                            onPageChange={onPageChange}

                        />
                    </div>

                    }
                    {loading && (
                        <div className="card">
                            <DataTable value={items} className="p-datatable-striped">
                                <Column field="Office" header="Office" style={{ width: '25%' }} body={bodyTemplate}></Column>
                                <Column field="Date" header="Date" style={{ width: '25%' }} body={bodyTemplate}></Column>
                                <Column field="amount" header="Amount" style={{ width: '25%' }} body={bodyTemplate}></Column>
                                <Column field="Name" header="Name" style={{ width: '25%' }} body={bodyTemplate}></Column>
                                <Column field="Status" header="Status" style={{ width: '25%' }} body={bodyTemplate}></Column>
                            </DataTable>
                        </div>
                    )}
                </div>

            </div>
            <div className="grid-cols-1 xl:col-span-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit inventore placeat, accusamus fugiat illum incidunt molestiae repellendus, voluptatum at saepe omnis? Dolorem laudantium dignissimos iusto corporis beatae exercitationem aut qui.</div>
        </div>
    )
}

export default index
