import React,{useState} from "react";
import axiosInstance from "./axiosinstance";
import { useNavigate } from "react-router-dom";

const Createposts=()=>{
    let[coursename,setCoursename]=useState("")
    let[trainername,setTrainername]=useState("")
    let navigate=useNavigate()

    let handleSubmit= async (e)=>{
          e.preventDefault()

         try 
         {
            let payload={coursename,trainername}
            let data= await axiosInstance.post('/posts',payload)
            navigate("/viewposts")
             console.log(data);
         }
         catch 
         {
            console.log("UNABLE TO CONNECT TO SERVER");
         }
    }
    

    return(
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="course">COURSE</label>
                <input type="text" id="course" onChange={(e)=>{
                    setCoursename(e.target.value)
                }}/><br></br>

                <label htmlFor="trainer">TRAINER</label>
                <input type="text" id="trainer" onChange={(e)=>{
                    setTrainername(e.target.value)
                }} /><br></br>

                <button>Create Post</button>
            </form>
        </div>
    )
}
export default Createposts