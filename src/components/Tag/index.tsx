import React from 'react'

type Props = {
    children:string
}
enum statusColor {
    'Pending'='text-yellow-500',
    'Ready'='text-blue-500',
    'Sent'='text-dark',
    'Complete'='text-dark',
    'Paid'='text-dark',
    'Canceled'='text-gray',
}
function Tag({children}: Props) {
  return (
    <div className={statusColor[children]}>
        {children}
    </div>
  )
}

export default Tag
