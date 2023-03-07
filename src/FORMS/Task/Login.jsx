import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
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
        <div className='logname'><h2>LOGIN</h2></div>

            <div className='logdiv'><input type="text" placeholder="username" id="user" onChange={(e)=>{
                setUsername(e.target.value)
            }} /><br></br></div>

           <div className='logdiv'> <input type="password" placeholder="password" id="pwd" onChange={(e)=>{
                setPassword(e.target.value)
            }}  /><br></br></div>

           <div className='logbtn'><button onClick={handleSubmit} id="login">LOGIN</button></div>

           <div className='tohome'><h3>Alredy have account? <Link to={'/'} id="loglink">SIGNUP</Link></h3></div>
        </form>
    </div>
  )
}

export default Login