
import React from 'react'
import { BsBank2 } from "react-icons/bs";
import { RiBankCardFill } from "react-icons/ri";

import Link from 'next/link';
import Back_btn from '../Back Button/page';
export default function Payment_System() {
    
  
  return (
    <div  className='h-screen w-screen  flex items-center justify-center backdrop-blur'  >
        <div  className='h-3/5 w-4/5 bg-slate-100 ring-1  md:w-1/3 rounded-2xl' style={{backgroundColor:"#1170B3",color:"white"}}>
        <div className='h-14 w-full flex '>
            <div className='h-full w-9/12  flex items-center  rounded-2xl'>
              <h1 className='text-xl ml-7  font-semibold text-custom-black'>Payment Methods</h1>
            </div>
            <div className='h-full w-3/12 flex items-center justify-center '>
              <Back_btn/>
            </div>
        </div>

            <div className='h-4/5 w-full  flex  justify-center' >
                <div className='h-11/12 w-11/12  ring-1 ring-slate-400 rounded-2xl flex items-center justify-center ' style={{backgroundColor:"#1170B3"}}>
                    <div className='h-2/6 w-11/12  rounded-2xl ring-1 ring-slate-400 flex items-center justify-center '>
                    <div className='h-full w-11/12 justify-between '>
                        <div className='h-1/2 w-full ring-1 ring-slate-400 flex ' >
                            <div className='h-full w-2/12 flex items-center justify-center'> <BsBank2 size={'20px'} fill='black' /> </div>
                            <div className='h-full w-10/12 flex items-center'>
                            <Link href="http://localhost:3000/homepage/connected-banks"><h1 >Bank Transfer</h1></Link>
                            </div>
                        </div>
                        <div className='h-1/2 w-full ring-1 ring-slate-400 flex '>
                        <div className='h-full w-2/12 flex items-center justify-center'><RiBankCardFill size={'20px'} fill='black'/></div>
                        <div className='h-full w-10/12 flex items-center'>
                        <Link href="http://localhost:3000/homepage/connected-cards"><h1 >Card</h1></Link>
                        </div>
                        </div>
                    </div>
                        

                    </div>
                </div>

            </div>

        </div>
      
    </div>
  )
}
