import React from "react";

function Hero() {
  return (
    <div className="h-screen md:mt-20">
      <div  className="flex justify-center justify-items-center items-center content-center">
        <div className="text-3xl md:text-6xl lg:text-7xl xl:text-8xl xl:w-[1000px] xl:mt-20 pl-8 pr-8 text-center  mt-10">Unleash The Power Of Leveraged Trading <span className="text-[#00B2FF]"> Without </span>Liquidation</div>
      </div>

      <div>
        <p className="text-center mt-3 p-4 text-xl text-[#6b7280] lg:mr-96 lg:ml-96">By combining leveraged exposure with non-liquidable positions, we aim to unlock new opportunities</p>
      </div>

      <div className="lg:flex items-center justify-center mt-8">

      <div className="flex justify-center justify-items-center items-center content-center">
      <button type="button" className= "flex text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-[100px] py-4 text-center me-2 mb-2 ">Start Trading</button>
      </div>

      <div className="flex justify-center justify-items-center items-center content-center mt-3 lg:mt-0 ">
      <button type="button" class="text-gray-900 hover:text-black border border-gray-800 hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-[110px] py-4 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-black dark:hover:black dark:focus:ring-gray-800">Read Docs</button>
      </div>

      </div>
    </div>
  );
}

export default Hero;
