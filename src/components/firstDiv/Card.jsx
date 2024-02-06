import React from 'react'
import Cardbot from '../Cardbot/Cardbot'
import Cardmid from '../Cardmid/Cardmid'
import './Card.css'


export default function Card() {
  return (
    <div className="w-full h-full rounded-lg">
      <div className="lebg bg-[#14273e] w-full h-3/5 rounded-t-xl flex justify-center items-center">
        <div className="lebgTrue w-[88%] h-[90%] rounded-xl">

        </div>
      
      </div>
      
      <Cardbot>
      </Cardbot>  
      
    </div>    
  )
}
