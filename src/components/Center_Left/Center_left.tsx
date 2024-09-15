import React from 'react'
import { GiTakeMyMoney } from "react-icons/gi";

export default function Center_left() {
  return (
    <div className='h-96 w-screen md:h-5/6 lg:w-2/3 flex flex-col mt-8   md:pl-0 '>
      <h1 className='pl-12   text-3xl  md:text-5xl lg:pl-56 pt-12'>Empowering <GiTakeMyMoney className='inline'/> Your Financial  Freedom.</h1>
      <h1 className='pl-12 pt-6  lg:pl-56'>Take control of your finances with ease—secure, fast, <br/> and effortless banking at your fingertips!</h1>
      
      
      <div className= ' w-screen lg:w-full h-full flex  md:flex   '>

      <div className=' md:ml-20 lg:ml-60 w-1/2 h-12 md:w-1/3 mt-10  md:rounded-2xl md:ring-2 ring-custom-green'>
      <input className=' bg-custom-light-green h-full w-full md:rounded-2xl text-xl pl-5' placeholder='enter email'/>
      </div>

      <button className='md:ml-6 text-nowrap  w-1/2 h-12 md:p-3 md:w-fit mt-10 bg-custom-green rounded-xl '>Create Free</button>
      </div>
    </div>
  )
}
