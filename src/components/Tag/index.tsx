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
    'cancelled'='Cancelled',
}
export function Tag({children , style}: Props) {
const Pending = 'bg-[#FFF9F0] font-semibold border border-gray-100 text-[#DAA545] rounded-full px-4 py-2'
const Completed = 'bg-[#EFEFEF] font-semibold border border-gray-100 text-dark rounded-full px-4 py-2'
const Ready = 'bg-[#F4F7FD] font-semibold border border-gray-100 text-blue rounded-full px-4 py-2'
const Sent = 'bg-[#F4F7FD] font-semibold border border-gray-100 text-blue rounded-full px-4 py-2'
const Cancelled = 'bg-[#EFEFEF] font-semibold border border-gray-100 text-dark rounded-full px-4 py-2'
  return (
    <div className={`${statusColor[statusText[children]]}
    ${style&&statusText[children]=='Pending'? Pending : ""}
    ${style&&statusText[children]=='Completed'? Completed : ""}
    ${style&&statusText[children]=='Ready'? Ready : ""}
    ${style&&statusText[children]=='Sent'? Sent : ""}
    ${style&&statusText[children]=='Cancelled'? Cancelled : ""}
     `}>
        {statusText[children]}
        {/* {children} */}
    </div>
  )
}

export default Tag;
