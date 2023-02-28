import React from "react";
import Grandparent from "./Grandparent";
import "./global.css";

const App=()=>{
    return(
          <div className="rootComponent">
            <strong>ROOT</strong>
            <Grandparent data="AADESH"/>

            {/* <Grandparent>123456</Grandparent> */}
          </div>
    )
}
export default App