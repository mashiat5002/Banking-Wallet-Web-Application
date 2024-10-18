import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdBarChart } from "react-icons/md";
export default function HomePage_Balance_Card() {
  return (
  <div className='h-1/3 w-full md:h-full  md:w-full  pl-3 md:pl-0'>
      <div className='w-11/12 h-5/6 bg-logo-surrounding text-custom-white rounded-2xl '>
        <div className='h-1/3 w-full  flex '>
            <div className='w-2/12 h-full  flex items-center justify-center'>
                <div className='md:w-3/5 w-2/6 aspect-square bg-custom-black  rounded-full text-custom-purple flex items-center justify-center'>
                    <MdBarChart size={"20px"} fill='#8759EC'/>
                </div>

            </div>
            <div className='w-8/12 h-full  flex items-center text-sm font-medium md:text-custom-size lg:text-xs'>
                <h1 className='pl-3'>Total Balance</h1>
            </div>
            <div className='w-2/12 h-full  flex items-center justify-center'>
                <BsThreeDotsVertical size={"30px"} fill='white'/>
            </div>

        </div>



        <div className='h-1/3 w-full  flex items-center pl-7'>
            <h1 className='font-extrabold text-2xl md:text-custom-size2 lg:text-xs'>$5000</h1>

        </div>


        <div className='h-1/3 w-full  flex'>
            <div className='w-4/6 h-full  flex items-center pl-5'>
            <h1 className='font-medium text-sm text-custom-grey md:text-custom-size lg:text-xs'>From the last month</h1>
            </div>
            <div className='w-2/6 h-full flex items-center justify-center'>
                <div className='h-2/6 w-4/6 bg-custom-green-light text-custom-green-lighter rounded-xl flex items-center justify-center md:text-custom-size lg:text-xs'>
                    <h1>+50%</h1>
                </div>
            </div>
            

        </div>
      
    </div>

  </div>
  )
}
