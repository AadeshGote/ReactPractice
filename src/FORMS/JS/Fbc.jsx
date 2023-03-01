import React from "react";

const Form=()=>{

    let handleForm=()=>{
        let form=document.querySelector("form")
        form.addEventListener("submit",(e)=>{
            e.preventDefault()
            let username=document.querySelector("#username").value
            let password=document.querySelector("#password").value
            console.log({username,password});
        })
       
    }

    return(
        <div>
        <form action="">
            <label htmlFor="username">USERNAME:</label>
            <input type="text" name="" id="username" />

            <label htmlFor="password">PASSWORD:</label>
            <input type="password" name="" id="password" />

            <button onClick={handleForm}>SUBMIT</button>
        </form>
    </div>
    )
}
export default Form