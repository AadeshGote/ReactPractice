import React from "react";
import {Link} from "react-router-dom"

const Nav=()=>{
    return(
           <div>
            <div>Logo</div>
            <div>
                <ul style={{display:"flex", justifyContent:"space-around",width:"300px"}}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Login">Login</Link>
                    </li>
                    <li>
                        <Link to="/Signup">Signup</Link>
                    </li>
                    <li>
                        <Link to="/Menu">Menu</Link>
                    </li>
                </ul>
            </div>
           </div>
    )
}
export default Nav