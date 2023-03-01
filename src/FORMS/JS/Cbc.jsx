import React,{Component} from "react";

class Form extends Component
{
    componentDidMount()
    {
        let form=document.querySelector("form")
        form.addEventListener("submit",(e)=>{
            e.preventDefault()

               let username=document.getElementById("username").value
               let password=document.getElementById("password").value

               console.log({username,password});

            //    localStorage.setItem("username",usernsme)
            //    localStorage.setItem("password",password)
            //    localStorage.getItem("username",usernsme)
            //    localStorage.getItem("password",password)
        })
    }

    render()
    {
        return(
            <div>
                <form action="">
                    <label htmlFor="username">USERNAME:</label>
                    <input type="text" name="" id="username" />

                    <label htmlFor="password">PASSWORD:</label>
                    <input type="password" name="" id="password" />

                    <button>SUBMIT</button>
                </form>
            </div>
        )
    }
}
export default Form