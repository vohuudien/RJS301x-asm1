import React from 'react'
import "./NavBarItem.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const NavBarItem = (props) => {
  return (
    <div className={`navbarItem ${props.item.active?"active":""}`}>
      <FontAwesomeIcon icon={props.item.icon} />
      <p>{props.item.type}</p>
    </div>
  )
}

export default NavBarItem