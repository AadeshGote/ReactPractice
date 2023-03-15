import React, { Component } from 'react'

 class App extends Component {

    constructor()
    {
        super()
        this.state={name:"aadesh"}
    }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    )
  }
}
export default App
