import React,{Component} from "react";

class App extends Component
{
    constructor()
    {
        super()
        this.state={user:"Aadesh"}
    }

    // state={name:"AadeshGote"}

    render()
    {
        return(
            <>
             <h1>{this.state.user}</h1>
            {/* <h1>{this.state.name}</h1> */}
            </>
           
        )
    }
}
export default App