import React from 'react'
import { AiFillFacebook, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

const Footer = () => {
    const menuItems = [
        { name: "Home", link: "#Home" },
        { name: "Courses", link: "#Courses" },
        { name: "Contact", link: "#Contact" },
        { name: "About", link: "#About" },
      ];
  return (
    <>
      <div className='mt-12'>
        <hr />
        <footer className='h-[200px] mt-6 flex flex-col  items-center  gap-8'>
            <nav >
                <ul className='flex  justify-center gap-[12px] '>
                    {
                        menuItems.map((item, index)=>{
                            return <li key={index}> {item.name}</li>
                        })
                    }
                </ul>
            </nav>
            <div className='flex justify-center gap-4 '>
               <AiFillFacebook/>
               <AiFillLinkedin/>
               <AiFillYoutube/>
            </div>
            <div >
                
                <h5>  All rights reserved @Bakhsh-Tech.com</h5>
            </div>
        </footer>
      </div>
    </>
  )
}

export default Footer