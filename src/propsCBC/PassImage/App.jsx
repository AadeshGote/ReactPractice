import React,{Component} from "react";
import Nav from "./Nav"
import image from "./Ironman.jpg"

class App extends Component
{
  render()
  {
    return(
      <Nav photo={image}/>
    )
  }
}
export default App