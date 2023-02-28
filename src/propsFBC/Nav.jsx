import React from "react";

const Nav=(props)=>{
    return(
        <>
        <h1>{props.obj.user}</h1>
        <h1>{props.obj.password}</h1>
        <h2>{props.data}</h2>
         </>
    )
}
export default Nav