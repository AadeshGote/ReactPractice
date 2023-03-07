import React,{ useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
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
          <div className='pgname'><h2>SIGNUP</h2></div>

          <div className='inputdiv'> <input type="text" placeholder="username" id="username" onChange={(e)=>{
                setUsername(e.target.value)
            }} /><br></br></div>

          <div className='inputdiv'> <input type="password" placeholder="password" id="password" onChange={(e)=>{
                setPassword(e.target.value)
            }}  /><br></br></div>

          <div className='btn'><button onClick={handleSubmit} id="signup">SIGNUP</button></div>

          <div className='tologin'><h3>Alredy have account? <Link to={'/Login'} id="link">Login</Link></h3></div>
            
        </form>



        {/* 
           

           

            
               */}
    </div>
  )
}

export default Signup