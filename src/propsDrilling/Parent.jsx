import React from "react";
import Child1 from "./Child1"
import Child2 from "./Child2"
import "./global.css";

const Parent =(props)=>{
    return(
        <div className="parent">
            <strong>Parent</strong>
              <Child1 data={props.data}/>
              <Child2 data={props.data}/>
        </div>
    )
}
export default Parent