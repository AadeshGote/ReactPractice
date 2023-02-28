import React from "react";
import Parent from "./Parent"
import "./global.css";

const Grandparent=(props)=>{
    return(
        <div className="grand">
            <strong>Grandparent</strong>
            <Parent data={props.data}/>

             {/* <>
             props.children is used to directly 
             access the data passed from parent.
            <h1>{props.children}</h1>
             </> */}
        </div>
    )
}
export default Grandparent