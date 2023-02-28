import React from "react";
import "./global.css";

const Child2=(props)=>{
    return(
        <div className="c2">
        <strong>CHILD2</strong>
        <h4>{props.data}</h4>
        </div>
    )
}
export default Child2