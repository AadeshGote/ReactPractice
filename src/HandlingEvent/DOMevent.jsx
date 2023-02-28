import React,{Component} from "react";

class DOMevent extends Component
{
    constructor()
    {
        super()
        this.state={user:"Aadesh"}
    }

    componentDidMount()
    {
        let btn=document.querySelector("input")
        btn.addEventListener('keypress',(e)=>{
            this.setState({user:e.target.value})
        })
    }
    render()
    {
        return(
            <div>
                <h1>{this.state.user}</h1>
                <input type="text" placeholder="Enter Name"/>
            </div>
        )
    }
}
export default DOMevent