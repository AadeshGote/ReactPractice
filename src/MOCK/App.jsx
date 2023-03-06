import React from "react";
import JSON from "./mock.json"
import Nav from "./Nav"

const App=()=>{
    return(
        <Nav data={JSON}/>
    )
}
export default App

