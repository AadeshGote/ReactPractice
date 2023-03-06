import React from 'react'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'

const App = () => {
  return (
    <div>
      <ToastContainer/>
     <Router>
        <Routes>
            <Route path='/' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/Home' element={<Home/>}/>
        </Routes>
     </Router>
    </div>
  )
}

export default App