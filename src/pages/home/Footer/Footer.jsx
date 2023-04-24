import React from 'react'
import './Footer.css'
import ColumnFooter from './ColumnFooter/ColumnFooter';

const Footer = (props) => {
  return (
    <div className='groupFooter'>
    {props.data.map(item=><ColumnFooter key={Math.random().toFixed(2)} data={item}/>)}
    </div>
  )
}

export default Footer