import React from 'react'
import laptop from '../assets/laptop.jpg' 

const Experts = () => {
  return (
     <div className='max-w[1240px] mx-[128px] my-4 h-[300px] md:grid 
     grid-cols-2'>
        <div className=' h-[300px]'>
            <img src={laptop} alt="" className='h-[300px] w-[423px]'/>
        </div>
        <div className=' h-[300px] col-span-1 w-[80%] md:flex  
        flex-col align-center justify-center'>
            <h1 className='font-bold text-green-400 my-3'>Learn with us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti iste quasi vero consectetur! Ipsum fugiat eos officiis explicabo nam omnis.</p>
            <button className='w-[30%] bg-black text-white my-3 p-2 rounded-xl'>Get Started</button>
        </div>

     </div>
    
  )
}

export default Experts
