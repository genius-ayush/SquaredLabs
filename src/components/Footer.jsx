import React from 'react'

function Footer() {
  return (
    <div className='border-t-gray-500 border-t-[0.01px] h-96'>
      <div className='md:flex justify-between md:p-10 md:pr-20 lg:mr-32 lg:ml-32 xl:mr-60 xl:ml-60 '>
      <div>
      <div className='flex justify-center mt-10'>
        <img src="assets/logo.svg" alt="" className='w-[210px]'/>
      </div>
      <div className='flex justify-center'>
      <p className='text-center w-60 text-gray-500 mt-6'>
      Unlock the full potential of your community with SquaredLabs!
      </p>
      </div>
      
      <div className='flex justify-center gap-5 mt-5'>
        <img src="assets/twitter.svg" alt=""  className='w-10'/>
        <img src="assets/discord.svg" alt="" className='w-10'/>
        <img src="assets/telegram.svg" alt="" className='w-10'/>
        <img src="assets/medium.svg" alt="" className='w-10'/>
      </div>

      </div>

      <div>

      <div className='mt-6 flex gap-10 justify-center'>
        <div>
          <div className='font-semibold text-lg'>Resources</div>
          <div className='text-gray-500 mt-2'>Documentation</div>
          <div className='text-gray-500 mt-1'>Media Kit</div>
          <div className='text-gray-500 mt-1'>FAQ</div>
        </div>

        <div>
          <div className='font-semibold text-lg'>Contact</div>
          <div className='text-gray-500 mt-2'>Email Us</div>
        </div>

        </div>

        </div>

        </div>
    </div>
  )
}

export default Footer