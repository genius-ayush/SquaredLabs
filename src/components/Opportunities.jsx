import React from 'react'
import Card3 from './Card3'
import{ useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
function Opportunities() {

  useEffect(()=>{
    Aos.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 200,
    }); 
  } , [])
  return (

    <div className='mb-32 lg:h-3/4' data-aos = "fade-right">
      <div className='flex justify-center'>
        <div className='text-center text-4xl w-[450px] lg:mb-10'> A <span className='text-[#00B2FF]'> NEW WORLD</span> OF DEFI OPPORTUNITIES</div>
      </div>
      <div className='flex flex-col lg:flex-row justify-center mt-20 gap-4 '>
      <Card3 image={"assets/diamond1.svg"} heading={"Potentia Protocol"} para={"Create permissionless power perpetual pools for any asset with power customization from 2 to 16."} button={"Sign Up For Potentia Protocol"}/>
      <Card3 image={"assets/diamond.png"} heading={"Genie"} para={"Structured products on Potentia for retail user onboarding in a no-liquidation derivatives ecosystem."} button={"Learn More"}/>
      </div>
    </div>
  )
}

export default Opportunities