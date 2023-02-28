import React,{Component} from "react";
import { faker } from '@faker-js/faker';

class Faker extends Component
{
    constructor()
    {
        super()
        this.state={
            photo:faker.image.avatar()
        }
    }

    handleChange=()=>{
        this.setState({photo:faker.image.avatar()})
    }
    render()
    {
        return(
            <div>
                <img src={this.state.photo} alt="" />
                <button onClick={this.handleChange}>CHANGE</button>
            </div>
        )
    }
}
export default Faker