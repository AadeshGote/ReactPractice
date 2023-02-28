import React,{Component} from "react";
import JSON from "./Emp.json"
import Emp from "./Emp"

class App extends Component
{
    constructor()
    {
        super()
        this.state={empDetails:{JSON}}
    }

    render()
    {
        return(
            <div>
                <Emp empDetails1={this.state.empDetails}/>
            </div>
        )
    }
}
export default App
