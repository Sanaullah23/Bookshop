import React from 'react'
import Home from './pages/Home'
import {Navigate, Route , Routes} from 'react-router-dom'
import Courses from './pages/Courses'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SignUp from './components/SignUp'
import { useAuth } from './context/AuthProvider'
import Login from './components/Login'

function App() {
  const [authUser, setAuthUser]= useAuth()


  return (
    <div>
       <Navbar/>
      <Routes>
        <Route  path='/' element={<Home/>} />
        <Route path='/courses' element={authUser ? <Courses/>: <Navigate to='/signup' />}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App