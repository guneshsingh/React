import { useState } from 'react'
import Usercard from "./componenets/usercard";
import button1 from "./assets/button1.png";
import "./App.css";
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      
      <Usercard name="nhi"/>
      <Usercard name="helooo"/>
      <Usercard/>
    </div>
  )
}

export default App
