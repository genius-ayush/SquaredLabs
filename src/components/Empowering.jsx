import React from 'react';
import Card2 from './Card2';

function Empowering() {
  return (
    <div className='sm:h-full lg:h-screen flex flex-col justify-center items-center'>
      <div className='text-center text-2xl md:text-4xl lg:w-[440px]'>
        EMPOWERING <span className='text-[#00B2FF]'>TRADERS</span> IN THE DEFI ERA
      </div>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-5 md:gap-10 mt-20 mb-10 px-5 md:px-10'>
        <Card2
          image={"assets/empowering1.svg"}
          heading={"Harness Leverage"}
          para={"Unleash the power of leverage without the fear of liquidation"}
        />
        <Card2
          image={"assets/empowering1.svg"}
          heading={"Hedge Portfolio"}
          para={"Protect your portfolio or/and amplify your gains with positive convexity"}
        />
        <Card2
          image={"assets/empowering1.svg"}
          heading={"Custom Derivatives"}
          para={"Create custom derivatives tailored to your unique strategy"}
        />
      </div>
    </div>
  );
}

export default Empowering;
