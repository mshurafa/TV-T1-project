import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function DataTableWithFormattedDate(props) {
  function getDateStr(dateStr) {
    const date = new Date(dateStr);
    const today = new Date();
    const yesterday = new Date(today.setDate(today.getDate() - 1));
    const isToday = date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
    const isYesterday = date.getDate() === yesterday.getDate() && date.getMonth() === yesterday.getMonth() && date.getFullYear() === yesterday.getFullYear();
    const dayStr = date.getDate().toString().padStart(2, '0');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthName = monthNames[date.getMonth()];

    if (isToday) {
      return `${dayStr}-${monthName}`;
    } else if (isYesterday) {
      return `${dayStr}-${monthName}`;
    } else {
      return '';
    }
  }

  const data = props.data.map(item => {
    return {
      ...item,
      formattedDate: getDateStr(item.date)
    }
  });

  return (
    <DataTable value={data}>
      <Column field="name" header="Name" />
      <Column field="formattedDate" header="Date" />
    </DataTable>
  );
}

function MyComponent() {
  const data = [
    { name: 'John', date: '2023-03-13T17:26:07.859Z' },
    { name: 'Jane', date: '2023-03-14T09:10:11.123Z' },
    { name: 'Bob', date: '2023-03-15T12:34:56.789Z' },
  ];

  return (
    <DataTable value={data} responsive={true} className="p-datatable-striped" header="My DataTable" paginator={true} rows={10} rowsPerPageOptions={[5, 10, 20]}>
      <DataTableWithFormattedDate data={data} />
    </DataTable>
  );
}
