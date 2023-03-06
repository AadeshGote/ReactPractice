import React,{ useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "./moduleCSS/Signup.css"

const Signup = () => {

    let navigate=useNavigate()
    let[username,setUsername]=useState("")
    let[password,setPassword]=useState("")

    let handleSubmit=(e)=>{
        e.preventDefault()
        localStorage.setItem("username",username)
        localStorage.setItem("password",password)
        navigate("/Login")
    }
  return (
    <div className='signcontainer'>
        <form action="">
            <h2>SIGNUP</h2>
            <input type="text" placeholder="username" id="username" onChange={(e)=>{
                setUsername(e.target.value)
            }} /><br></br>

            <input type="password" placeholder="password" id="password" onChange={(e)=>{
                setPassword(e.target.value)
            }}  /><br></br>

            <button onClick={handleSubmit} id="signup">SIGNUP</button>
              
        </form>
    </div>
  )
}

export default Signup