import React from "react";

const Boolean=(props)=>{
    if(props.course.course_available===true)
    {
     return(
        <>
        <h1>{props.course.name}</h1>
        <button>Available</button>
        </>
     )
    }
    else{
         return(
            <>
            <h1>{props.course.name}</h1>
            <button>NOT Available</button>
            </>
         )
    }
}
export default Boolean