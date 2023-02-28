import React from "react";
import Boolean from "./Boolean"

const App=()=>{
    return(
        <>
        <Boolean course={{
            course_available:true,
            name:"Java",
            duration:"3 mon"
        }}/>

        <Boolean course={{
            course_available:false,
            name:"MERN",
            duration:"4 mon"
        }}/>
        </>
    )
}
export default App