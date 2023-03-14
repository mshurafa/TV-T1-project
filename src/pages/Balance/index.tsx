/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { DataTable, DataTableFilterMeta } from 'primereact/datatable';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { InputText } from 'primereact/inputtext';

import { Column } from 'primereact/column';
import { Card, Input } from 'components';
import {DataTableInfo} from 'data/testAPI/table'
import { ProductService } from 'data/testAPI/ProductService';
import Tag from 'components/Tag';
import { useSWR, type Fetcher } from "lib/swr";
import { useAxios } from "hooks";
import axios from "lib/axios";

import {API_WITHDRAWAL_URLS} from 'data/constants'

type Props = {}
function index({}: Props) {


    const [tableData, settableData] = useState([]);
    const [globalFilterValue, setGlobalFilterValue] = useState<string>('');
    const [filters, setFilters] = useState<DataTableFilterMeta>({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS},
    })


  const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters['global'].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

    const renderHeader = () => {
        return (

          <div className="flex justify-content-end">
            <span className="p-input-icon-left">
              <i className="pi pi-search" />
              <InputText
                value={globalFilterValue}
                onChange={onGlobalFilterChange}
                placeholder="Search"
              />
            </span>
          </div>
        );
      };
    useEffect(() => {
        DataTableInfo.getTable().then(data => settableData(data));
    }, []);
    useEffect(() => {

      return () => {
        // second
      }
    }, [])

    const customBodyOffice = (tableData) => (
        <>
          <div>{tableData.office?.name||tableData.bank.bankName}</div>
          <div>{formatDateBodyTemplate(tableData)}</div>
        </>
      );
    const customBodyAmount = (tableData) => (
        <>
          <div>{`$${tableData.amount}`}</div>
        </>
      );
    const customBodyrecipient = (tableData) => (
        <>
          <div>{tableData.recipient?.name}</div>
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

          if (isToday) {
            return `Today`;
          } else if (isYesterday) {
            return `Yesterday`;
          } else {
            return `${dayStr}-${monthName}`;
          }
        }

        return getDateStr(tableData.createdAt);
      }
;

    const header = renderHeader();

  return (
    <div className="grid grid-cols-12 ">

        <div className="col-span-8 ">
        <Card className="">
            <DataTable   header={header} value={tableData} paginator rows={5} tableStyle={{ minWidth: '50rem' }}>
                <Column field="Office" header="Office" body={customBodyOffice} sortable style={{ width: '25%' }} ></Column>
                <Column field="createdAt" header="Date" body={formatDateBodyTemplate}  sortable style={{ width: '25%' }} ></Column>
                <Column field="amount" header="amount" body={customBodyAmount} sortable style={{ width: '25%' }} ></Column>
                <Column field="Name" header="Name" body={customBodyrecipient} sortable style={{ width: '25%' }} ></Column>
                <Column field="status" header="Status" body={statusBodyTemplate} sortable style={{ width: '25%' }} ></Column>

            </DataTable>
        </Card>

        </div>
        <div className="col-span-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit inventore placeat, accusamus fugiat illum incidunt molestiae repellendus, voluptatum at saepe omnis? Dolorem laudantium dignissimos iusto corporis beatae exercitationem aut qui.</div>
    </div>
  )
}

export default index
