import React from 'react'

const NewsLetter = () => {
  return (
     <div className="bg-blue-400 w-full py-3 md:flex justify-evenly h-58">
      <div className=' text-white h-60 flex flex-col justify-center '>
        <h3 className='text-center font-bold text-3xl'>Wan't to learn latest I.T skills ?</h3>
        <h3>SignUp to our newsLetter and stay up to date</h3>
      </div>
      <div className=''>
        <div className='h-60 md:flex flex-col justify-center '>
          <div>
          <input type="text" placeholder="Enter E-mail" className='h-12 w-60 p-2 border rounded-xl mb-4' />
        <button className='bg-black text-white ml-2 border rounded-lg p-3'>Notify me</button>
          </div>
        
        <p className='text-white mb-2'>We care about protection of your data read more</p>
        <p className='text-black'>privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
