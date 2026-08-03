import React, { useState } from 'react'
import "./counter.css";
const counter = () => {
    const[count,setcount]=useState(0)
  return (
    <div className='counter-container'>
        <p id="para">Yo have clicked {count} times</p>
        
        <button id="but" onClick={()=>{setcount(count+1)}}>Click here</button>
    </div>
  )
}

export default counter