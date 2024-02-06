import React from 'react'
import Footer from '../cardFooter/cardFooter'
import './Cardbot.css'

export default function Cardbot() {
  return (
    <div className="mainContainer h-2/5 w-full bg-[#14273e] rounded-b-xl">
      <div className="lineMargin w-full h-2/3 bg-white-500  border-5 flex justify-center items-start flex-col gap-3 ">
        <h2 className="text-[22px] font-semibold px-5 text-white hover:text-[#06fdf7]">Equilibrium #3469</h2>
        
        <h3 className="text-gray-300 px-5">Our Equilibrium collection promotes balance and calm.</h3>
        <div className="nftData flex justify-between w-full px-5">
          <div className="eth flex">
            <div className="iconEth w-[30px] h-[30px]"></div>
            <p className="text-[#06fdf7] pt-1">Eth 0.041</p>
            
          </div>
          <div className="clockicon flex">
            <div className="iconClock w-[30px] h-[30px] ml-4"></div>
            <p className="text-white">3 Days Left</p>
          </div>
          
        
        </div>  
          
          

      </div>
      <div className="h-1/3 w-full">
        <Footer></Footer>

      </div>
      
      
    </div>
  )
}
