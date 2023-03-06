import React from "react";
import Nav from "./Nav"
import Home from "./Home"
import Login from "./Login"
import Menu from "./Menu"
import Signup from "./Signup"
import PNF from "./PageNotFound"
import {BrowserRouter as Router, Routes,Route}from "react-router-dom"

const App=()=>{
    return(
     <>
     <Router>
        <Nav/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Signup" element={<Signup/>}/>
            <Route path="/Menu" element={<Menu/>}/>
            <Route path="*" element={<PNF/>}/>
        </Routes>
     </Router>
     </>
    )
}
export default App