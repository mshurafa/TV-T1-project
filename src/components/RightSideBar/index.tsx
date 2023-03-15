import React,{forwardRef, useState} from 'react'
import { Sidebar } from 'primereact/sidebar';
import Button from 'components/Button';

type Props = {
    ref:string
}

export const RightSideBar =({userId,children,visible,setVisible,className,...rest}:props) => {
    const [visibleRight, setVisibleRight] = useState(false);
  return (
    <div className={`card flex justify-content-center ${className}`}>
    <Sidebar visible={visible} position="right" onHide={() => setVisible(false)} >
        {children}
        <h2>Sidebar</h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
    </Sidebar>
</div>
  )
}

export default RightSideBar
