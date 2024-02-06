import React from 'react'
import './cardFooter.css'
// import imgJules from '../public/images/image-avatar.png'


export default function Footer() {
  return (
  <div className="w-full h-full flex rounded-b-lg"> 
    <div className="julesPic social-container flex justify-around items-center flex-col bg-[#14273e] h-full w-1/5 rounded-full ">
      
    </div>

    <div className="social-container flex justify-start items-center bg-[#14273e] h-full w-4/5 px-4 rounded-br-xl">
      <p className="text-[15px] font-semibold text-gray-400">Creation of <span className="text-white hover:text-[#06fdf7]">&nbsp;Jules Voiturier</span></p>
      
    </div>

    
  </div>  

    

  )
}
