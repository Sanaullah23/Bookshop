import React from 'react'
import booksList from '../Json/list.json';
import Cards from './Cards';
const Freebook = () => {
    const freebooklist =booksList.filter((book)=> book.Category==="free");
  return (
    <>
    <div className='mt-10'>
      <h1 className='text-3xl font-semibold ml-5'>Free courses</h1>
      <p className='text-xl  ml-5'>get your free course now don't miss this opportunity</p>
    </div>
      <div className='flex  items-center py-2 pl-12 overflow-auto'>
      {
         freebooklist.map((freebook)=>{
          
         
            return(
              <div className=''>
                  <Cards  freebooks={freebook} key={freebook.id}/>
               </div>
            )
          
        
         })
       }
      </div>
    </>
  )
}

export default Freebook