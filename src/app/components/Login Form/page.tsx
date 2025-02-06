"use client"


import { useRouter } from 'next/navigation';
import React from 'react'
import { useState } from 'react';

import Dialog_UI_login from '../Dialog_UI_login/page';

import { call_nodemailer } from '@/app/(utils)/call_nodemailer/route';
import { call_update_varification_key_db } from '@/app/(utils)/call_update_varification_key_db/route';
import { call_check_user_active_status } from '@/app/(utils)/call_check_user_active_status/route';

export default function Login() {
    const router = useRouter();
    const [LoginStat, setLoginStat]=useState("");
    const [emailInput, setemailInput]=useState("");
    const [loading, setloading]=useState(false);

    const handledemo = async () => {
        const cid=await call_check_user_active_status("mashiat342@gmail.com")
        console.log(cid)
    };
    const handleSubmission=async (e:React.FormEvent<HTMLFormElement>)=>{
        setloading(true)
        setLoginStat("Processing Request...");
       
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
           
            
            router.push('/homepage')
          

            
        }
        else{
            setLoginStat(data.status);
           

        }

    }


  return (
    <form onSubmit={handleSubmission} >
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
                        <input onChange={(e)=>{setemailInput(e.currentTarget.value)}} required name='email' className='h-full w-full font-normal pl-3 text-black' type='email'   placeholder='Email'/>
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

                    <h1 className='text-sm font-normal ' ></h1>
                    <button className='h-2/5 w-full bg-white text-black mt-5'>Login</button>
                </div>

                </div>

            </div>

        </div>
      {loading?<Dialog_UI_login  status={{"emailInput":emailInput,"setLoading":setloading,"header":"Logging In","description":LoginStat,"action":()=>handleSubmission}}/>:null}
    </form>
  )
}
