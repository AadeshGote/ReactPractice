import React,{Component,createRef} from "react";

class Refs extends Component
{
    constructor()
    {
        super()
        this.state={company:"Qspiders"}

        this.divRef=createRef()
        this.btnRef=createRef()
    }

    changeCompany=()=>{
        this.setState({company:"Jspiders"})
        this.divRef.current.style.color="red"
        this.divRef.current.style.padding="10px"
        this.btnRef.current.style.color="blue"
    }

    render()
    {
        return(
            <div>
                <div ref={this.divRef}>{this.state.company}</div>
                <button onClick={this.changeCompany} ref={this.btnRef}>CHANGE</button>
            </div>
        )
    }
}
export default Refs