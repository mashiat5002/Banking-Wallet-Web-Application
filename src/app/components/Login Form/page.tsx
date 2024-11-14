"use client"
import React from 'react'
import { useState } from 'react';
import {handleSubmit} from './login_button'
export default function Login() {
    const [LoginStat, setLoginStat]=useState("nothing");

    const handleSubmission=()=>{

    }


  return (
    <form action={handleSubmit} >
    <div className='h-screen w-screen absolute flex items-center justify-center backdrop-blur  font-bold text-custom-white '>
        <div className='h-500px w-96 bg-custom-green space-y-3 rounded-2xl'>
            <div className='h-1/5 w-full  flex items-center justify-center'>
                <h1 className='text-3xl  opacity-100'>Login Here</h1>
            </div>

            <div className='h-1/5 w-full  flex items-center justify-center '>
                <div className='h-full w-4/5 '>
                    <div className='h-1/3 w-full '>
                    <h1>Enter Email</h1>
                    </div>
                    <div className='h-2/3 w-full '>
                        <input name='email' className='h-full w-full font-normal pl-3 text-black' type='email'   placeholder='Email'/>
                    </div>

                </div>

            </div>
            <div className='h-1/5 w-full  flex items-center justify-center'>
                <div className='h-full w-4/5 '>
                    <div className='h-1/3 w-full '>
                    <h1>Enter Password</h1>
                    </div>
                    <div className='h-2/3 w-full '>
                        <input name='password' className='h-full w-full font-normal pl-3 text-black' type='password'  placeholder='Password'/>
                    </div>

                </div>

            </div>
            {/* <div className='h-2/5 w-5 bg-red-500'></div> */}
            <div className='h-2/5 w-full   flex items-center justify-center'>
                <div className='h-full w-4/5   flex items-center justify-center '>
                <div className='h-4/5 w-full  '>

                    <h1 className='text-sm font-normal'>{LoginStat}</h1>
                    <button className='h-2/5 w-full bg-white text-black mt-5'>Login</button>
                </div>

                </div>

            </div>

        </div>
      
    </div>
    </form>
  )
}
