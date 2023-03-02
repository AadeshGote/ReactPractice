import React,{Component,createRef} from "react";

class Form extends Component
{
    constructor()
    {
        super()
        this.userRef=createRef()
        this.passRef=createRef()
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        let username=this.userRef.current.value
        let password=this.passRef.current.value
        console.log({username,password});
    }

    render()
    {
        return(
            <div>
                <form action="">
                    <label htmlFor="username">USERNAME:</label>
                    <input type="text" name="" id="username" ref={this.userRef}/>

                    <label htmlFor="password">PASSWORD:</label>
                    <input type="password" name="" id="password" ref={this.passRef} />

                    <button onClick={this.handleSubmit}>SUBMIT</button>
                </form>
            </div>
        )
    }
}
export default Form