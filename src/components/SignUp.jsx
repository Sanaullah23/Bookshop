import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import axios from 'axios'
const SignUp = () => {
  const [name, setName]= useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const handleSubmit= async(e)=>{
    e.preventDefault();
    const userInfo={
      fullname:name,
      email:email,
      password:password
     }
     await axios.post('http://localhost:5000/api/v1/user/signup', userInfo)
     .then((res)=>{
      if (res.data) {
        alert('Registered Successfully')

      }
     })
     .catch((error)=>{
      if (error.response) {
        alert(error.response.data.message)
      }
     })
     setName('')
     setEmail('')
     setPassword('')
     
    //  setTimeout(()=>{
    //   navigate('/')
    //  }, 5000)

  }

  return (
    <>
    <div className='min-h-screen '>

    < div  className=" mt-28 text-left flex justify-center items-center ">
       <div className="modal-box text-gray-800 ">
           <form method="dialog" onSubmit={handleSubmit}>
               {/* hdhhddhhd */}
               <Link to='/' className="btn   btn-sm btn-circle btn-ghost absolute right-2 top-2 ">
                   X
               </Link>
           
           <h3 className='font-bold text-lg '>Sign Up</h3>
          <div className='py-4'>
          <div className='mt-4 space-y-2'>
           <label >Full Name</label> <br />
           <input type="text" placeholder='Enter full-name' name='fullname' value={name} className='px-2 py-1' 
            onChange={(e)=>setName(e.target.value)}/>
           </div>
            <div className='mt-4 space-y-2'>
           <label>Email</label> <br />
           <input type="email" placeholder='Enter email'  name='email' value={email} className='px-2 py-1'
            onChange={(e)=>setEmail(e.target.value)} />
           </div>
            <div className='mt-4 space-y-2'>
           <label >Password</label> <br />
           <input type="password" placeholder='Enter password' name='password' value={password} className='px-2 py-1'
            onChange={(e)=>setPassword(e.target.value)}
           />
           </div>
           <button type='submit' className='px-4 py-2 bg-pink-500 text-white 
           rounded-md text-center  mt-4'>Sign Up</button>
          </div>
          </form>
          <div className='flex justify-between items-center'>
           
          
           <span>already registered ? <button id='login'
           className='bg-gray-800 px-2 py-1 text-white rounded-lg text-center'
           onClick={()=>document.getElementById('my_modal_3').showModal()}
           >Login</button>  </span>
            <Login/>
          </div>
         

           
       </div>

    </div>
    </div>
   </>
  )
}

export default SignUp