import React, { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'components';
import {DataTableInfo} from 'data/testAPI/table'
import { ProductService } from 'data/testAPI/ProductService';


type Props = {}
function index({}: Props) {
    const [tableData, settableData] = useState([]);

    useEffect(() => {
        DataTableInfo.getTable().then(data => settableData(data));
    }, []);
    const customBodyTemplate = (tableData) => (
        <>
          <div>{tableData.Office}</div>
          <div>{tableData.Date}</div>
        </>
      );

  return (
    <div className="grid grid-cols-12 ">
        <div className="col-span-8 ">
        <Card className="">
            <DataTable  value={tableData}   tableStyle={{ minWidth: '50rem' }}>
                <Column className='text-red-500'  field="Office" header="Office" body={customBodyTemplate} sortable style={{ width: '25%' }} ></Column>
                <Column field="Date" header="Date" sortable style={{ width: '25%' }} ></Column>
                <Column field="Amount" header="Amount" sortable style={{ width: '25%' }} ></Column>
                <Column field="Name" header="Name" sortable style={{ width: '25%' }} ></Column>
                <Column field="status" header="Status" sortable style={{ width: '25%' }} ></Column>

            </DataTable>
        </Card>

        </div>
        <div className="col-span-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit inventore placeat, accusamus fugiat illum incidunt molestiae repellendus, voluptatum at saepe omnis? Dolorem laudantium dignissimos iusto corporis beatae exercitationem aut qui.</div>
    </div>
  )
}

export default index
