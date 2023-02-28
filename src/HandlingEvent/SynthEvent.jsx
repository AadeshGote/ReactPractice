import React,{Component} from "react";

class SynthEvent extends Component
{
    constructor()
    {
        super()
        this.state={user:"Aadesh"}
    }
    render()
    {
        return(
            <div>
                <h1>{this.state.user}</h1>
                <button onClick={()=>{
                    this.setState({user:"AADESHGOTE"})
                }}>CHANGE</button>
            </div>
        )
    }
}
export default SynthEvent