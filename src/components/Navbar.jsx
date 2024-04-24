import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { name: "Home", link: "#Home" },
    { name: "Courses", link: "#Courses" },
    { name: "Contact", link: "#Contact" },
    { name: "About", link: "#About" },
  ];
  return (
    <>
      <div>
        <nav className="flex justify-between px-12 py-4 items-center">
          <h1 className="text-xl font-bold">Bookshop</h1>
          <div className="flex justify-between items-center gap-4">
            <div className="hidden md:block">
              <ul className="flex justify-between items-center gap-5">
                {menuItems.map((item, index) => {
                  return <li key={index} className="text-[16px]"> {item.name}</li>;
                })}
              </ul>
            </div>
            <div
              className={`${
                isOpen ? "text-black" : "right-[-100%]"
              } z-10 md:hidden`}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <span className="cursor-pointer ">=</span>
            </div>
            <input
              type="text"
              placeholder="search"
              className="hidden md:block lg:block  px-6 py-2 border-[1px] rounded-md focus:outline-none"
            />
            <button className="bg-black text-white px-4 py-[6px] rounded-md">login</button>
            
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
              return <li key={index}>{item.name}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
