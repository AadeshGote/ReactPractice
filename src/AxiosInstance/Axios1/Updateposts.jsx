import React,{useState,useEffect} from 'react'
import axiosInstance from './axiosinstance'
import {useParams,useNavigate} from "react-router-dom"

const Updateposts = () => {
    let[coursename,setCoursename]=useState("")
    let[trainername,setTrainername]=useState("")
    let {id}=useParams()
    let navigate = useNavigate()

    let updateposts=async(e)=>{
        e.preventDefault()
        let payload={coursename,trainername}
        await  axiosInstance.put(`/posts/${id}`,payload)
        navigate('/viewposts')
    }

    useEffect(()=>{
        let fetchData=async()=>{
            let {data}=await axiosInstance.get(`/posts/${id}`)
            setCoursename(data.coursename)
            setTrainername(data.trainername)
        }
        fetchData();
    },[])

  return (
    <div>
          <form action="" onSubmit={updateposts}>
              <fieldset>
                <legend>UPDATE POSTS</legend>

                <input type="text" id="" onChange={(e)=>{
                    setCoursename(e.target.value)
                }} />
             <br/>
                <input type="text" onChange={(e)=>{
                    setTrainername(e.target.value)
                }} />
                <button>SUBMIT</button>
              </fieldset>
          </form>
    </div>
  )
}

export default Updateposts