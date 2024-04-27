import React from "react";
import bookimage from '../assets/images/book.jpg'

const Cards = ({ freebooks }) => {
  return (
    <div className="w-96 px-2 py-2 ">
      <div>
        <img src={bookimage} alt="" />
        <h1 className="mt-4 mx-4">
          {freebooks.Name} <span className="bg-pink-500 px-4 text-white rounded-full">{freebooks.Category}</span>
        </h1>
        <p className="mt-4 mx-4">{freebooks.Description}</p>
      </div>
     <div className="flex justify-between px-4 mt-4">
        <span className="border-[1px] border-gray-500 px-4 rounded-full">${freebooks.price}</span>
        <button className="border-[1px] border-gray-500 px-4 rounded-full hover:bg-pink-500 hover:text-white duration-300">Buy Now</button>
     </div>
    </div>
  );
};

export default Cards;
