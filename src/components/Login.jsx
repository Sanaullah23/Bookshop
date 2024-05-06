import axios from 'axios';
import React, { useState } from 'react'
import {Link,  useNavigate} from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const handleSubmit= async(e)=>{
    e.preventDefault();
    const userInfo={
      email:email,
      password:password
     }
     await axios.post('http://localhost:5000/api/v1/user/login', userInfo)
     .then((res)=>{
      if (res.data) {
        alert('Login Successfully')
        localStorage.setItem('Users', JSON.stringify(res.data.user));
        navigate('/')
        window.location.reload()
      }
     
     })
     .catch((error)=>{
      if (error.response) {
        alert(error.response.data.message)
      }
     })
     setEmail('')
     setPassword('')
  }
  return (
    <>
     <dialog id="my_modal_3" className="modal text-left">
        <div className="modal-box text-gray-800 ">
            <form method="dialog" onSubmit={handleSubmit} >
                {/* hdhhddhhd */}
                <Link to='/' className="btn   btn-sm btn-circle btn-ghost absolute right-2 top-2 " onClick={()=>document.getElementById('my_modal_3').hideModal()}>
                    X
                </Link>
          
            <h3 className='font-bold text-lg '> Login</h3>
           <div className='py-4'>
             <div className='mt-4 space-y-2'>
            <label >Email</label> <br />
            <input type="email" placeholder='Enter email' value={email} name='email' className='px-2 py-1' 
            onChange={(e)=>setEmail(e.target.value)}/>
            </div>
             <div className='mt-4 space-y-2'>
            <label >Password</label> <br />
            <input type="text" placeholder='Enter password' value={password} name='password' className='px-2 py-1'
            onChange={(e)=>setPassword(e.target.value)}/>

            </div>
           </div>
           <div className='flex justify-between items-center'>
             <button type='submit' className='px-4 py-2 bg-pink-500 text-white 
            rounded-md text-center  mt-4'>Login</button>
            <span>Don't have an account ? <Link to='/signup' className='bg-gray-800 px-2 py-1 text-white rounded-lg text-center' onClick={
              ()=>document.getElementById('my_modal_3').hideModal()}>SignUp</Link> </span>
           </div>
              </form>
        </div>

     </dialog>
    </>
  )
}

export default Login