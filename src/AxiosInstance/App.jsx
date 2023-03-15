import React from "react";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Createposts from "./Createposts";

const App=()=>{
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Createposts/>}/>
                    <Route path="/viewposts" element={<Viewposts/>}/>
                </Routes>
            </Router>
        </div>
    )
}