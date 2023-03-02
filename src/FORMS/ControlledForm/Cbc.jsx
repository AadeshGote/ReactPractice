import React,{Component} from "react";

export default class Form extends Component
{
    constructor()
    {
        super()
        this.state={
            username:"",
            password:""
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        let username=this.state.username
        let password=this.state.password
        console.log({username,password});
    }

    render()
    {
        return(
            <div>
                <form action="">
                    <label htmlFor="username">USERNAME:</label>
                    <input type="text" name="" id="username" onChange={(e)=>{
                        this.setState({username:e.target.value})
                    }} />

                    <label htmlFor="password">PASSWORD:</label>
                    <input type="password" name="" id="password" onChange={(e)=>{
                        this.setState({password:e.target.value})
                        }} />

                    <button onClick={this.handleSubmit}>SUBMIT</button>
                </form>
            </div>
        )
    }
}