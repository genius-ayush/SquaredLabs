import React from 'react'

function Card3({image , heading , para , button}) {
  return (
    <div className='bg-[#101010] lg:w-[486px] :lg:h-[456px] border-[0.01px] border-gray-600 rounded-lg'>
        <img src={image} alt="" className=' h-[48px] w-[86.34px] mt-8 ml-3'/>
        <div className='text-[#00B1FF] ml-7 mt-10 text-3xl text-large'>{heading}</div>
        <div className='text-gray-500 ml-7 mt-5 mr-7 text-2xl'>{para}</div>
        <button type="button" className= "flex mt-8 ml-9 text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-20 py-5 text-center mr-8 h-18 mb-4 lg:w-[400px]">{button}</button>
    </div>
  )
}

export default Card3