import React,{useEffect,useState} from 'react'

const UseEffect = () => {
    let [count,setCount]=useState(0)
    let [input,setInput]=useState("")

    useEffect(()=>{
        console.log(`you clicked ${count}times`);
        console.log(`you typed ${input.length} times`);
    },[count,input])

  return (
    <div>
        <h1>{count}</h1>
        <input type="text" onChange={(e)=>{
            setInput(e.target.value)
        }}/>
        <button onClick={()=>{
            setCount(count+1)
        }}>click</button>
    </div>
  )
}

export default UseEffect