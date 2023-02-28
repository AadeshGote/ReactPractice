import React from "react";
import Logo from "./Logo.jsx";
import Menu from "./Menu.jsx";

let Nav=()=>{
    return(
        <div className="navbar">
            <Logo/>
            <Menu />
        </div>
    )
}
export default Nav