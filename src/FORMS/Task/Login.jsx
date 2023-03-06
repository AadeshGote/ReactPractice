import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "./moduleCSS/Login.css"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    let navigate=useNavigate()
    let[username,setUsername]=useState("")
    let[password,setPassword]=useState("")

    let handleSubmit=(e)=>{
        e.preventDefault()
       let user=localStorage.getItem("username")
        let pwd=localStorage.getItem("password")
        if (username===user && password===pwd)
        {
            navigate("/Home")
            toast.success('Login Success',{position:toast.POSITION.TOP_RIGHT})
            
        }
        else
        {
            navigate("/Login")
            toast.error('Invalid Username or Password',{position:toast.POSITION.TOP_RIGHT})
            
        }
    }
  return (
    <div className='logcontainer'>
        
        <form action="">
            <input type="text" placeholder="username" id="username" onChange={(e)=>{
                setUsername(e.target.value)
            }} /><br></br>
            <input type="password" placeholder="password" id="password" onChange={(e)=>{
                setPassword(e.target.value)
            }}  /><br></br>

            <button onClick={handleSubmit} id="login">Login</button>
        </form>
    </div>
  )
}

export default Login