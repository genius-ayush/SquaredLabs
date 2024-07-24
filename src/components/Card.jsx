import React from 'react';

const Card = () => {
  return (
    <div className="bg-[#171717]   text-white p-6 rounded-lg relative w-96 h-[550px] border-[0.01px] border-gray-600">
      <div className="absolute top-0 left-0 text-white px-6 py-7 rounded-bl-lg">
        Founded By
      </div>
      <div className="">
        <img src="assets/trustedLogo.svg" alt="Diamond" className="mt-32 pl-2 pr-2 ml-5" />
      </div>
      
    </div>
  );
}

export default Card;
