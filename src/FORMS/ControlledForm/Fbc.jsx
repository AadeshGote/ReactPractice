import React,{useState} from "react";

const Form=()=>{
    let[username,setUsername]=useState()
    let[password,setPassword]=useState()

    let handleSubmit=(e)=>{
            e.preventDefault()
            console.log({username,password});
    }

    return(
        <div>
            <form action="">
            <label htmlFor="username">USERNAME:</label>
            <input type="text" name="" id="username" onChange={(e)=>{
                setUsername(e.target.value)
            }}/>

            <label htmlFor="password">PASSWORD:</label>
            <input type="password" name="" id="password" onChange={(e)=>{
                setPassword(e.target.value)
            }}/>

            <button onClick={handleSubmit}>SUBMIT</button>
            </form>
        </div>
    )
}
export default Form