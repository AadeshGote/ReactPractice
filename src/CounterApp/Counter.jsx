import React,{Component} from "react";

class Counter extends Component
{
    constructor()
    {
        super()
        this.state={count:0}
    }

    handleIncreament=()=>{
        this.setState({count:this.state.count+1})
    }
    handleDecreament=()=>{
        if(this.state.count>0){
            this.setState({count:this.state.count-1})
        }
        
    }
    
    handleReset=()=>{
        this.setState({count:0})
    }

    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleIncreament}>Increament</button>
                <button onClick={this.handleDecreament}>Decreament</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}
export default Counter