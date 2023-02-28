import React from "react";
import "./global.css";

const Child1=(props)=>{
    return(
        <div className="c1">
        <strong>CHILD1</strong>
        <h4>{props.data}</h4>
        </div>
    )
}
export default Child1