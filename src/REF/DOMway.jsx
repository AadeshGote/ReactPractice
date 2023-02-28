import React,{Component} from "react";

class Refs extends Component
{
    componentDidMount()
    {
        let h1=document.querySelector('h1')
        console.log(h1,"DOM WAY");
    }
    render()
    {
        return(
            <div>
                <h1>HELLO</h1>
            </div>
        )
    }
}
export default Refs