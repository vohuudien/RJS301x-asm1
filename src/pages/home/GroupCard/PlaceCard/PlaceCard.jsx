import React from 'react'
import "./PlaceCard.css"

const PlaceCard = (props) => {
  return (
    <div className='groupCard'>
    <div className="card">
      <img src={props.item.image} alt=''/>
      <div className="groupText">
        <h2>{props.item.name}</h2>
        <p>{props.item.subText}</p>
      </div>
    </div>
    </div>
  )
}

export default PlaceCard