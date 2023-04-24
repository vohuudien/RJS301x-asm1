import React from 'react'
import "./HotelCard.css"

const HotelCard = (props) => {
  return (
    <div className='hotelCard'>
      <img src={props.item.image} alt=''/>
      <div className="text">
        <h2>{props.item.name}</h2>
        <p>{props.item.count} hotels</p>
      </div>
    </div>
  )
}

export default HotelCard