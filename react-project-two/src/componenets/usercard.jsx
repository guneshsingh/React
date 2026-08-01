import React from 'react'
import button1 from "../assets/button1.png";
import "./usercard.css";
const usercard = (props) => {
  return (
    <div className='usercontainer'>
        <p id='name'>{props.name}</p>
        <img id='img'src={button1} alt="gun" />
        <p id='descd'>jhbjb</p>
    </div>
  )
}

export default usercard