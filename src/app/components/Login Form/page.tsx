"use client"


import { call_check_bank_acc_type } from '@/app/(utils)/call_check_bank_acc_type/route';
import { call_create_saving_acc_in_db } from '@/app/(utils)/call_create_saving_acc_in_db/route';
import { call_get_saving_acc_balance } from '@/app/(utils)/call_get_saving_acc_balance/route';
import { call_update_saving_bank_balance } from '@/app/(utils)/call_update_saving_bank_balance/route copy';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useState } from 'react';

export default function Login() {
    const router = useRouter();
    const [LoginStat, setLoginStat]=useState("");
    const [LoginStatColor, setLoginStatColor]=useState("white");

    const handledemo=async()=>{
        
        console.log(await call_create_saving_acc_in_db("1a10"))
    }
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
        
        if(data.status=="Login Successful"){

            setLoginStat(data.status);
            setLoginStatColor("lightgreen");
            
            setTimeout(() =>{
                router.back()
                setTimeout(() =>router.push('homepage'),10);
            },395);
          

            
        }
        else{
            setLoginStat(data.status);
            setLoginStatColor("red");

        }

    }


  return (
    <form onSubmit={handleSubmission} >
    <div onClick={()=>router.back()} className='h-screen w-screen absolute flex items-center justify-center backdrop-blur  font-bold text-custom-white '>
        <div onClick={(e)=>e.stopPropagation()} className='h-500px w-96 bg-custom-green space-y-3 rounded-2xl'>
            <div className='h-1/5 w-full  flex items-center justify-center'>
                <h1 onClick={handledemo} className='text-3xl  opacity-100'>Login Here</h1>
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
