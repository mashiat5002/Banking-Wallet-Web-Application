import React from 'react'
import { GiTakeMyMoney } from "react-icons/gi";

export default function Center_left() {
  return (
    <div className='h-5/6 w-2/3 flex flex-col mt-8'>
      <h1 className='text-6xl pl-36 pt-12'>Empowering <GiTakeMyMoney className='inline'/> Your Financial  Freedom.</h1>
      <h1 className='pt-6 pl-36'>Take control of your finances with ease—secure, fast, <br/> and effortless banking at your fingertips!</h1>
      <div className=' h-full flex flex-row-reverse'>

      <button className='h-12 p-3 w-1/5 mr-60 mt-10 bg-custom-green rounded-xl '>Create Free</button>
      <div className=' h-12 w-1/3 mt-10 mr-6 rounded-2xl ring-2 ring-custom-green'>
      <input className=' bg-custom-light-green h-full w-full rounded-2xl text-xl pl-5' placeholder='enter email'/>
      </div>
      </div>
    </div>
  )
}
