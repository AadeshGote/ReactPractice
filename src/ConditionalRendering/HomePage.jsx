import React,{useState} from "react";

const HomePage=()=>{

    let[authUser,setAuthUser]=useState(true)

    let AcceptedUser=()=>{
        return(
            <>
              <nav>
                <ol>
                    <li>logo</li>
                    <li>menu</li>
                    <li>Search</li>
                </ol>
              </nav>
            </>
        )
    }

    let NotAcceptedUser=()=>{
        return(
            <>
              <nav>
                <ol>
                    <li>login</li>
                    <li>Signup</li>
                </ol>
              </nav>
            </>
        )
    }

    return <>{authUser?<AcceptedUser/>:<NotAcceptedUser/>}</>
}
export default HomePage