import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'

const Hero = () => {
  return (
    <>
      <div className='px-10 md:px-12 flex flex-col   md:flex-row'>
        <div className='md:w-1/2 mt-10 md:mt-28'>
            <div className='space-y-10'>
            <h1 className='text-4xl font-bold'>Hello, welcome here to learn something 
            <span className='pl-2 text-pink-500'>new everday !!!</span></h1>
            <p className=''>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, quia.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, quia.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, quia.
            </p>
            <div className='  px-3 py-2 flex gap-3 items-center border-[1px] border-gray-400 rounded-md'>
                <AiOutlineMail/>
            <input type="text" placeholder='Enter your email to login'  className='
             focus:outline-none '/>
            </div>
            </div>
            <button className='btn mt-6 btn-secondary'>Secondary</button>
           
            
        </div>
        <div className='md:w-1/2'>right</div>
      </div>
    </>
  )
}

export default Hero