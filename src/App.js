import React from 'react'
import Home from './pages/Home'
import {Route , Routes} from 'react-router-dom'
import Courses from './pages/Courses'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SignUp from './components/SignUp'

function App() {
  return (
    <div>
       <Navbar/>
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App