"use client"
import React from 'react'
import { useState } from 'react';

export default function Login() {
    const [LoginStat, setLoginStat]=useState("");
    const [LoginStatColor, setLoginStatColor]=useState("white");
    const handleSubmission=async (e:React.FormEvent<HTMLFormElement>)=>{
        setLoginStat("Processing Request...");
        setLoginStatColor("orange");
        e.preventDefault();
        const formdata= new FormData(e.currentTarget);
        
        const res=await fetch("/api/login_cookie_auth",{
            method:"POST",
            body:JSON.stringify({
                email:formdata.get("email"),
                password:formdata.get("password")
            })

        })
        const data = await res.json();
        console.log(data)
        if(data.status=="Login Successful"){
            setLoginStat(data.status);
            setLoginStatColor("lightgreen");
            
        }
        else{
            setLoginStat(data.status);
            setLoginStatColor("red");

        }

    }


  return (
    <form onSubmit={handleSubmission} >
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
                        <input required name='email' className='h-full w-full font-normal pl-3 text-black' type='email'   placeholder='Email'/>
                    </div>

                </div>

            </div>
            <div className='h-1/5 w-full  flex items-center justify-center'>
                <div className='h-full w-4/5 '>
                    <div className='h-1/3 w-full '>
                    <h1>Enter Password</h1>
                    </div>
                    <div className='h-2/3 w-full '>
                        <input required name='password' className='h-full w-full font-normal pl-3 text-black' type='password'  placeholder='Password'/>
                    </div>

                </div>

            </div>
            
            <div className='h-2/5 w-full   flex items-center justify-center'>
                <div className='h-full w-4/5   flex items-center justify-center '>
                <div className='h-4/5 w-full  '>

                    <h1 className='text-sm font-normal ' style={{color:LoginStatColor}}>{LoginStat}</h1>
                    <button className='h-2/5 w-full bg-white text-black mt-5'>Login</button>
                </div>

                </div>

            </div>

        </div>
      
    </div>
    </form>
  )
}
