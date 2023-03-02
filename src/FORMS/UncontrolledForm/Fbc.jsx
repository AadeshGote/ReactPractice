import React,{useRef} from "react";

const Form=()=>{
    let userRef=useRef()
    let passRef=useRef()

    let handleSubmit=(e)=>{
        e.preventDefault()
        let username=userRef.current.value
        let password=passRef.current.value
        console.log({username,password});
    }
    return(
        <div>
        <form action="">
            <label htmlFor="username">USERNAME:</label>
            <input type="text" name="" id="username" ref={userRef}/>

            <label htmlFor="password">PASSWORD:</label>
            <input type="password" name="" id="password" ref={passRef}/>

            <button onClick={handleSubmit}>SUBMIT</button>
        </form>
    </div>
    )
}
export default Form