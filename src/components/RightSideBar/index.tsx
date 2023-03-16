import React,{forwardRef, useState} from 'react'
import { Sidebar } from 'primereact/sidebar';
import Button from 'components/Button';
import { Search } from 'lib/@heroicons';


type Props = {
    ref:string
}

export const RightSideBar =({Id,children,visible,setVisible,title,className,...rest}:props) => {

    const customIcons = (
        <React.Fragment>
                <span className="flex-grow py-3 order-2 self-center justify-center items-center text-center align-content-center font-bold text-xl">{title}</span>
        </React.Fragment>
    );
  return (
    <Sidebar className='bg-[#F2F4F7] text-black'  visible={visible} position="right" onHide={() => setVisible(false)} icons={customIcons}>
        <div className="" slot="header">
        </div>
        {children}
    </Sidebar>
  )
}

export default RightSideBar
