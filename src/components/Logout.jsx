import React from 'react'
import { useAuth } from '../context/AuthProvider'

function Logout() {
    const [authUser, setAuthUser] = useAuth()
    const handleLogout=()=>{
      try {
        setAuthUser({
            ...authUser,
            user:null
        })
        localStorage.removeItem('Users');
        alert("Logout successfully ");
        window.location.reload()
      } catch (error) {
        alert(error.message)
      }
    }
  return (
    <div>
        <button className='bg-red-500 px-4 py-[6px]
         text-white font-medium rounded-md cursor-pointer '
         onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout