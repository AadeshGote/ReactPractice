
//json server CLI command compulsory:--npx json-server --watch db.json  --port 4000
//Run this command along with npm start but in different terminal total 2 terminal.
import React,{useState} from 'react'
import axiosInstance from './axiosinstance';
import { useNavigate } from 'react-router-dom';
const CreatePost = () => {
    let[coursename , setCoursename] = useState("")
    let[authorname , setAuthorname] = useState("")
    let navigate = useNavigate()

    let handleSubmit = async (e)=>{
       e.preventDefault()
    try{
        let payload={
            coursename,
            authorname
           }
           let data =  await axiosInstance.post("/posts",payload)
          navigate('/viewposts')
    }
    catch{
        console.log("UNABLE TO CONNECT TO SERVER");
    }

    }

  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
           <fieldset>
                <legend>CREATE POST</legend>
                <label htmlFor="CourseName">CourseName</label>
            <input type="text" id="CourseName" onChange={(e)=>{
                setCoursename(e.target.value)
            }}/> <br /> <br />
            <label htmlFor="AuthorName">AuthorName</label>
            <input type="text" id="AuthorName" onChange={(e)=>{
                setAuthorname(e.target.value)
            }} /> <br />
            <button>SUBMIT</button>

           </fieldset>
        </form>
    </div>
  )
}

export default CreatePost