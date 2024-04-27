import React, { useEffect, useState } from "react";
import { FcMenu } from "react-icons/fc";
import { Link } from "react-router-dom";
import Login from "./Login";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky]=useState(false)
  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Courses", link: "/Courses" },
    { name: "Contact", link: "Contact" },
    { name: "About", link: "/About" },
  ];
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scroll > 0? setSticky(true) :setSticky(false)
    })
  }, [])
  return (
    <>
      <div className={`fixed w-full top-0 left-0 z-50 ${
           sticky ? "md:bg-white/60" :"text-black"
        }`}>
        <nav className="flex justify-between px-12 py-2 items-center bg-zinc-50">
          <h1 className="text-xl font-bold">Bookshop</h1>
          <div className="flex justify-between items-center gap-4">
            <div className="hidden md:block">
              <ul className={`flex justify-between items-center gap-5 `}>
                {menuItems.map((item, index) => {
                  return <Link to={item.link}><li key={index} className="text-[16px]"> {item.name}</li></Link>
                })}
              </ul>
            </div>
            <div
              className={`${
                isOpen ? "text-black" : "right-[-100%]"
              } z-10 order-2 md:hidden`}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <FcMenu className="cursor-pointer text-[24px] text-gray-900"/>
            </div>
            <input
              type="text"
              placeholder="search"
              className="hidden md:block lg:block  px-6 py-2 border-[1px] rounded-md focus:outline-none"
            />
            <button className="bg-black text-white px-4 py-[6px] rounded-md order-1" onClick={()=>document.getElementById('my_modal_3').showModal()}>login
             <Login/>
            </button>
            
          </div>
        </nav>
        {/* creating Drawer */}
        <div
          className={`${
            isOpen ? "right-0" : "right-[-100%] w-0"
          }  pl-6 pt-6 top-14  fixed h-80 w-3/6 bg-zinc-50 duration-300 md:hidden`}
        >
          <ul>
            {menuItems.map((item, index) => {
                  return <Link to={item.link} key={index}><li  className="text-[16px]" onClick={()=>setIsOpen(false)}> {item.name}</li></Link>
                })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
