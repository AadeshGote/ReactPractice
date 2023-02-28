import React from "react";

const Arr=(prop)=>{
    return(
        <ul>
            {prop.data.skills.map((x)=>{
                return <li>{x}</li>
            })}
        </ul>
    )
}
export default Arr