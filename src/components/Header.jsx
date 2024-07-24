import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";
function Header() {

  let [open , setOpen] = useState(false) ; 

  function handleClick(){
    setOpen(!open) ; 
  }
  return (
    <div className='w-full  h-[84px] p-[16px] flex justify-between md:mt-5'>
        <img src="assets/logo.svg" className='w-[152.56px] h-[33.03] md:w-[208px] md:h-[45.03px] lg:ml-32' alt="" />
        <div className='hidden md:flex gap-10 mt-2'>
          <div>
            Whitepaper
          </div>
          <div>
            Docs
          </div>
        </div>

        <button type="button" className= "lg:mr-32  hidden md:flex text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Trading</button>
        <img src="assets/Hamburger.svg" alt="" className='w-[59.16] h-[59.16] md:hidden sm:w-[70px] sm:h-[70px]' onClick={handleClick}/>

        <div
        className={`fixed inset-0 bg-black transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-end item-center p-3">

          <div className="md:hidden absolute right-10 top-10">
            <RxCross1 color="#6b7280" size={28} onClick={handleClick} />
          </div>

        </div>

        <div className="flex flex-col items-center space-y-4 mt-20 text-#6b7280">
          <a href="#" className="font-medium font-sans  text-xl ">Docs</a>
          <a href="#" className="font-medium font-sans  text-xl ">Blog & Research</a>
          <a href="#" className="font-medium font-sans  text-xl ">Team</a>
          <button type="button" className= " text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Trading</button>
          
        </div>
      </div>
    </div>
  )
}

export default Header