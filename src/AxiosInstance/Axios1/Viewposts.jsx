import React,{useState,useEffect }from 'react'
import axiosInstance from './axiosinstance'
import {Link} from "react-router-dom"


const Viewposts = () => {
 let [data,setData]=useState()

 useEffect(()=>{
   let fetchData=async()=>{
      let {data}=axiosInstance.get("/posts",setData(data))
   }
   fetchData();
 },[]);

 let deleteData=async(id)=>{
      await axiosInstance.delete(`/posts/${id}`)
      window.location.assign("/viewposts")
 }

  return (
    <div>
         {data.map((x)=>{
          return(
            <div>
              <h1>{x.coursename}</h1>
              <h1>{x.trainename}</h1>
              <Link to={`/updateposts/${x.id}`}>UPDATE</Link>
              <button onClick={()=>{
                deleteData(x.id)
              }}>DELETE</button>
            </div>
          )
         })}
    </div>
  )
}

export default Viewposts