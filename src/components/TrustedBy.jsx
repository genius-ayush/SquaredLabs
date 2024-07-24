import React from "react";
import Card from "./Card";
import{ useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
function TrustedBy() {
  useEffect(()=>{
    Aos.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 200,
    }); 
  } , [])
  return (
  <div className="h-screen" data-aos = "fade-right" >
    <div className="flex justify-center">
      <div className="w-80 text-4xl text-center">TRUSTED BY <span className="text-[#00B2FF]">THE BEST </span>IN WEB3</div>
    </div>

    <div className="flex justify-center mt-20">
      <Card/>
    </div>

    </div>
  );
}

export default TrustedBy;
