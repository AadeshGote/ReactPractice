import React from "react";
import games from "./games.json";
import Games from "./Games.jsx"

const App=()=>{
    return(
        <div>
            <Games data={games}/>
        </div>
    )
}
export default App;