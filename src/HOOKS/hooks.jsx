import React from "react";
import { useState } from "react";

const Hooks=()=>{
  let [userName, setUserName]=useState("Aadesh")
  let [phone,setPhone]=useState(123456789)

  return(
    <div>
        <h1>{userName}</h1>
        <h1>{phone}</h1>

        <button onClick={()=>{
            setUserName("aadeshgote")
        }}>CLICK</button>
    </div>
  )
}
export default Hooks