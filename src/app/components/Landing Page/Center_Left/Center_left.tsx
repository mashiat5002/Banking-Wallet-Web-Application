import React from 'react'
import { GiTakeMyMoney } from "react-icons/gi";

export default function Center_left() {
  return (
    <div className='h-full w-screen md:h-5/6 lg:w-1/2 flex flex-col mt-8   md:pl-0  justify-center '>
      <div className=' '>
      <h1 className='pl-12   text-3xl  md:text-5xl  md:pt-12'>Empowering <GiTakeMyMoney className='inline'/> Your Financial  Freedom.</h1>
      <h1 className='pl-12 pt-6  '>Take control of your finances with ease—secure, fast, <br/> and effortless banking at your fingertips!</h1>
      </div>

      
      
      <div className= ' w-screen lg:w-full flex  md:flex items-center md:ml-20 h-1/6 mt-10'>

      <div className='   w-1/2 h-12 md:w-1/3   md:rounded-2xl md:ring-2  ring-custom-green'>
      <input className=' bg-custom-light-green h-full w-full md:rounded-2xl text-xl pl-5' placeholder='enter email'/>
      </div>

      <button className='md:ml-6 text-nowrap  w-1/2 h-12 md:p-3 md:w-fit  bg-custom-green rounded-xl '>Create Free</button>
      </div>
    </div>
  )
}
