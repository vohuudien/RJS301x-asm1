import React from 'react'
import './ListHotelCard.css'
const ListHotelCard = (props) => {
  return (
    <div className='list-item'>
    <img src={props.item.image_url} alt="" />
    <div className="text">
      <h2><a href="/detail">{props.item.name}</a></h2>
      <h3>{props.item.city}</h3>
      <h4>Starting from ${props.item.price}</h4>
      <span className='rate'>{props.item.rate}</span>
      <span>{props.item.type}</span>
    </div>
    </div>
  )
}

export default ListHotelCard