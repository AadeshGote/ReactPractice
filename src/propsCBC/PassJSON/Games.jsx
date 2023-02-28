import React,{ Component } from "react";
import "./global.css"


class Games extends Component
{
    render()
    { let payLoadData=this.props.data;
        return(
            <div className="mainblock">

                <div>
                    <img src={payLoadData[0].photo} alt=""/>
                    <h2>Name:--{payLoadData[0].name}</h2>
                    <h2>Dev:--{payLoadData[0].dev}</h2>
                    <ul>
                        <h2>Characters:--{payLoadData[0].characters.map((x)=>{
                            return <li>{x}</li>
                        })}</h2>
                    </ul>
                </div>

                <div>
                <img src={payLoadData[1].photo} alt=""/>
                    <h2>Name:--{payLoadData[1].name}</h2>
                    <h2>Dev:--{payLoadData[1].dev}</h2>
                    <ul>
                        <h2>Characters:--{payLoadData[1].characters.map((x)=>{
                              return <li>{x}</li>
                        })}</h2>
                    </ul>
                </div>

                <div>
                <img src={payLoadData[2].photo} alt=""/>
                    <h2>Name:--{payLoadData[2].name}</h2>
                    <h2>Dev:--{payLoadData[2].dev}</h2>
                    <ul>
                       <h2>Characters:--
                        {payLoadData[2].characters.map((x)=>{
                                return <li>{x}</li>
                       })}</h2>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Games;