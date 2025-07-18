import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import {Routes,Route} from 'react-router-dom'
import Dynamicrouting from './Dynamicrouting'
import Signup from './Signup'
import Login from './Login'
const App = () => {
  return (
    <div>
      
      <Routes>
             <Route path='/dashboard' element={<Home></Home>}></Route> 
             <Route path='/cart' element={<About></About>}></Route> 
             <Route path='dashboard/routing/:id' element={<Dynamicrouting></Dynamicrouting>}></Route>
             <Route path="/"element={<Login></Login>}></Route> 
             <Route path="/signup" element={<Signup></Signup>}></Route>

            </Routes>
     
    </div>
  )
}

export default App