import Tag from 'components/Tag';
import React from 'react'

type Props = {}

function DataTable({}: Props) {
  return (
    <div>index</div>
  )
}

export const customBodyOffice = (tableData) => (
    <>
      <div>{tableData.office?.name||tableData.bank.bankName}</div>
      <div className='text-gray'>{formatDateBodyTemplate(tableData)}</div>
    </>
  );
  export const customBodyAmount = (tableData) => (
    <>
      <div>{`$${tableData.amount}`}</div>
    </>
  );
  export const customBodyrecipient = (tableData) => (
    <>
      <div>{tableData.recipient?.name || 'Test'}</div>
    </>
  );
  export const statusBodyTemplate = (tableData) => {
    return <Tag>{tableData.status.charAt(0).toUpperCase() + tableData.status.slice(1)}</Tag>;
};
export function formatDateBodyTemplate(tableData) {
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
  };


export default DataTable;
