import React from "react";
import bookimage from "../assets/images/book.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
const Course = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getbook = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/v1/books');
        console.log(res)
        if(res.status === 200){
          const books = res.data;
          setBook(books)
          // setBook(Array.isArray(books)?books:[])
          // console.log(books)
          
        
        }
      } catch (error) {
        console.log(error)
      }
    };
    getbook();
  }, []);
  
 console.log(book)
 
  return (
    <>
      {book.map((book) => {
        return (
        
         <div className="hover:scale-105 duration-300">
            <div>
            </div>
            <div className="px-4">
              <h1 className="text-xl font-semibold">{book.Name}</h1>
              <h3>Category: {book.Category}</h3>
              <p>{book.Description}</p>
            </div>
            <div className="px-4 flex justify-between">
              <span className="border border-gray-500 px-3 rounded-full">
                ${book.price}
              </span>
              <button
                className="border border-gray-500 px-3 rounded-full hover:bg-pink-500 hover:text-white
            duration-300"
              >
                Buy Now
              </button>
            </div>
          </div>
       
        );
      })}
    </>
  );
};

export default Course;
