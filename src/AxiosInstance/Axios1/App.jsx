
//json server CLI command compulsory:--npx json-server --watch db.json  --port 4000
//Run this command along with npm start but in different terminal total 2 terminal.
import React from "react";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Createposts from "./Createposts";
import Viewposts from "./Viewposts"
import Updateposts from "./Updateposts";

const App=()=>{
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Createposts/>}/>
                    <Route path="/viewposts" element={<Viewposts/>}/>
                    <Route path="/updateposts/:id" element={<Updateposts/>}/>
                </Routes>
            </Router>
        </div>
    )
}
export default App