import React,{forwardRef} from 'react'
import {withdrawal} from './SampleAPI.js'
import { RightSideBar } from 'components'

type Props = {
    ref:string
}

const index =({userI,children,className,...rest}:props) => {

  return (
    <RightSideBar></RightSideBar>
  )
}

export default index
