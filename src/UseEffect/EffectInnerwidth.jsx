import React,{useEffect,useState} from 'react'

const Effect = () => {
    let [value,setValue]=useState(window.innerWidth)
    
    useEffect(()=>{
       window.addEventListener("resize",(e)=>{
        setValue(e.target.innerWidth)
       })
    },[value])

  return (
    <div>
       <div>
        <h1>{value}</h1>
       </div>
    </div>
  )
}

export default Effect