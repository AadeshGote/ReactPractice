
//json server CLI command compulsory:--npx json-server --watch db.json  --port 4000
//Run this command along with npm start but in different terminal total 2 terminal.
import React,{useState,useEffect}from 'react'
import axiosInstance from './axiosinstance'
import {useParams , useNavigate} from "react-router-dom"


const UpdatePost = () => {
let[coursename , setCoursename] = useState("")
let[authorname , setAuthorname] = useState("")
let navigate = useNavigate()
let {id} = useParams()

let updatePosts = async(e)=>{
    e.preventDefault()
    let payload = {coursename , authorname}
            await axiosInstance.put(`/posts/${id}` , payload)
            navigate('/viewposts')
}

useEffect(()=>{
    let fetchData = async()=>{
        let {data} = await axiosInstance.get(`/posts/${id}`)
        setCoursename(data.coursename)
        setAuthorname(data.authorname)
    }
    fetchData()
},[])

return (
<div>
    <form action="" onSubmit={updatePosts}>
       <fieldset>
            <legend>UPDATE POST</legend>
            <label htmlFor="CourseName">CourseName</label>
        <input value={coursename}  type="text" id="CourseName" onChange={(e)=>{
            setCoursename(e.target.value)
        }}/> <br /> <br />
        <label htmlFor="AuthorName">AuthorName</label>
        <input value={authorname} type="text" id="AuthorName" onChange={(e)=>{
            setAuthorname(e.target.value)
        }} /> <br />
        <button>SUBMIT</button>

       </fieldset>
    </form>
</div>
)
}

export default UpdatePost
