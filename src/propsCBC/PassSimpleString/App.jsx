import React from "react";
import Simple from "./Simple"

const App=()=>{
    return(
        <Simple data={()=>{console.log("HELLO")}}/>
    )
}
export default App