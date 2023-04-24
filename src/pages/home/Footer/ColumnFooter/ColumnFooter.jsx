import React from 'react'
import './ColumnFooter.css'

const ColumnFooter = (props) => {
  return (
    <div>
    {props.data.col_values.map(item=><div className='itemFooter' key={Math.random().toFixed(2)}><a href='#'>{item}</a></div>)}
    </div>
  )
}

export default ColumnFooter