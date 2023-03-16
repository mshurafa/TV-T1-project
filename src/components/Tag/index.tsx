import React from 'react'

type Props = {
    style:boolean
    children:string
}
enum statusColor {
    'Pending'='text-yellow-500',
    'Ready'='text-blue-500',
    'Sent'='text-dark',
    'Completed'='text-dark',
    'Canceled'='text-gray',
}
enum statusText {
    'pending'='Pending',
    'ready'='Ready',
    'sent'='Sent',
    'completed'='Completed',
    'cancelled'='cancelled',
}
export function Tag({children , style}: Props) {
const Pending = 'bg-[#FFF9F0] font-semibold border border-gray-100 text-[#DAA545] rounded-full px-4 py-2'
  return (
    <div className={`${statusColor[statusText[children]]} ${style&&statusText[children]=='Pending'? Pending : ""}`}>
        {statusText[children]}
        {/* {children} */}
    </div>
  )
}

export default Tag;
