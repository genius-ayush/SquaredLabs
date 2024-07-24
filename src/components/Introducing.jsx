import React from "react";
import{ useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

function Introducing() {
  useEffect(()=>{
    Aos.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 200,
    }); 
  } , [])
  return (
    <div data-aos = "fade-right">
      <div className="flex justify-center">
        <div className="text-center text-2xl sm:text-4xl w-72">
          INTRODUCING SQUARED<span className="text-[#00B2FF]">LABS</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 sm:pl-10 sm:pr-10 lg:pl-20 lg:pr-20 pb-10 sm:pb-20 lg:pb-32 pt-10 sm:pt-20 lg:pt-32">
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 sm:row-span-2 bg-[#171717] rounded-lg h-auto border-[0.01px] border-gray-600 p-4">
          <div className="text-2xl sm:text-4xl lg:text-5xl mt-8 sm:mt-16 lg:mt-64">
            LEVERAGE <span className="text-[#00B2FF]">WITHOUT</span> LIQUIDATION RISK
          </div>
          <div className="flex justify-between mt-16 sm:mt-32 lg:mt-96">
            <a onClick={() => window.open("https://squaredlabs-io.gitbook.io/squaredlabs.io/potentia-protocol/leverage-without-liquidation", '_blank', 'noopener,noreferrer')} className="mt-4 sm:mt-7 text-gray-500 underline font-bold">
              Read More
            </a>
            <img src="assets/halfLogo.svg" alt="" className="w-8 sm:w-12" />
          </div>
        </div>
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 bg-[#171717] rounded-lg border-[0.01px] border-gray-600 h-auto p-4">
          <div className="w-full text-2xl sm:text-3xl lg:text-4xl mt-8 sm:mt-16 lg:mt-20">
            POSITIVE CONVEXITY: AMPLIFIED GAINS, SOFTENED LOSSES
          </div>
          <div className="flex justify-between mt-8 sm:mt-16 lg:mt-32">
            <div onClick={() => window.open("https://squaredlabs-io.gitbook.io/squaredlabs.io/potentia-protocol/positive-convexity-amplified-gains-soften-losses", '_blank', 'noopener,noreferrer')} className="underline font-bold text-white mt-4 sm:mt-8">Read More</div>
            <img src="assets/whitelogo.svg" alt="" className="w-8 sm:w-12" />
          </div>
        </div>
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 bg-[#171717] rounded-lg border-[0.01px] border-gray-600 h-auto p-4">
          <div className="w-full text-2xl sm:text-3xl lg:text-4xl mt-8 sm:mt-16 lg:mt-20 text-yellow-300">
            CONSOLIDATING OPTIONS LIQUIDITY INTO A SINGLE, EFFICIENT INSTRUMENT
          </div>
          <div className="flex justify-between mt-8 sm:mt-16 lg:mt-12">
            <div onClick={() => window.open("https://squaredlabs-io.gitbook.io/squaredlabs.io/potentia-protocol/consolidation-options-liquidity-into-a-single-efficient-instrument", '_blank', 'noopener,noreferrer')} className="underline font-bold mt-4 sm:mt-7 text-yellow-300">Read More</div>
            <img src="assets/yellowlogo.svg" alt="" className="w-8 sm:w-12" />
          </div>
        </div>
        <div className="col-span-1 lg:col-span-4 bg-[#171717] rounded-lg h-auto border-[0.01px] border-gray-600 p-4">
          <div className="w-full text-2xl sm:text-3xl lg:text-5xl mt-8 sm:mt-16 lg:mt-20">
            PERMISSION LESS <span className="text-purple-500">POWER PERPETUAL POOLS</span> WITH POTENTIA PROTOCOL
          </div>
          <div className="flex justify-between mt-8 sm:mt-16 lg:mt-40">
            <div onClick={() => window.open("https://squaredlabs-io.gitbook.io/squaredlabs.io/potentia-protocol/permission-less-power-perpetual-pools-with-potentia-protocol", '_blank', 'noopener,noreferrer')} className="underline font-bold mt-4 sm:mt-7 text-purple-500">Read More</div>
            <img src="assets/purplelogo.svg" alt="" className="w-8 sm:w-12" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introducing;
