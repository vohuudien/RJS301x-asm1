import React from 'react'
import NavBarItem from './NavBarItem'

const Navbar = (props) => {
  return (
    <div>
    <h1>Booking Website</h1>
        <div className="navGroupButton">
          <button type="button">Register</button>
          <button type="button">Login</button>
        </div>
        <div className="navGroupItem">
          {props.data.map((item) => (
            <NavBarItem key={Math.random().toFixed(2)} item={item} />
          ))}
        </div>
    </div>
  )
}

export default Navbar