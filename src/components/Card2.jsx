import React from 'react'

function Card2({image , heading , para}) {
  return (
    <div className='w-[300px] h-[300px] p-10 bg-[#101010] rounded-xl '>
        <div className='flex gap-10 text-2xl mt-6'>
        <img src={image} alt="" className=''/>
        <div>{heading}</div>
        </div>
        <div className='mt-10 text-gray-500'>
            {para}
        </div>
    </div>
  )
}

export default Card2