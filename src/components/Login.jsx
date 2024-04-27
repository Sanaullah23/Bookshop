import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const handleSubmit=(e)=>{
    e.preventDefault();

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
            <label htmlFor="">Email</label> <br />
            <input type="email" placeholder='Enter email' value={email} name='email' className='px-2 py-1' 
            onChange={(e)=>setEmail(e.target.value)}/>
            </div>
             <div className='mt-4 space-y-2'>
            <label htmlFor="">Password</label> <br />
            <input type="text" placeholder='Enter password' value={password} name='password' className='px-2 py-1'
            onChange={(e)=>setPassword(e.target.value)}/>

            </div>
           </div>
           <div className='flex justify-between items-center'>
             <button type='submit' className='px-4 py-2 bg-pink-500 text-white 
            rounded-md text-center  mt-4'>Login</button>
            <span>Don't have an account ? <Link to='/signup' className='bg-gray-800 px-2 py-1 text-white rounded-lg text-center' onClick={
              ()=>document.getElementById('my_modal_3').hideModal()}>SignUp</Link>     </span>
           </div>
              </form>
        </div>

     </dialog>
    </>
  )
}

export default Login