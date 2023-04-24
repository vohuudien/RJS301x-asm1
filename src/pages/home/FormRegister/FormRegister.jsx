import React from 'react'
import "./FormRegister.css"

const FormRegister = () => {
  const handleSubmit = (evt)=>{
  evt.preventDefault()
  }
  return (
    <div className='groupRegister'>
      <h2>Save time, save money!</h2>
      <p>Sign up and we'll send the best deals to you</p>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" placeholder='Your Email'/>
        </label>
        <button type="submit">Subscribe</button>
      </form>
    </div>
  )
}

export default FormRegister