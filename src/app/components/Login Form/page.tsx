"use client"


import { useRouter } from 'next/navigation';
import React from 'react'
import { useState } from 'react';

import Dialog_UI_login from '../Dialog_UI_login/page';
import Dialog_form_forgot_pass from '../Dialog_form_forgot_pass/page';


export default function Login() {
    const router = useRouter();
    const [LoginStat, setLoginStat]=useState("");
    const [emailInput, setemailInput]=useState("");
    const [loading, setloading]=useState(false);
    const [forgot, setforgot]=useState(false);

    
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
        <div onClick={(e)=>e.stopPropagation()} className='h-500px w-96 bg-custom-light-green to-black border border-gray-50 space-y-3 rounded-2xl'>
            <div className='h-1/5 w-full  flex items-center justify-center'>
                <h1  className='text-3xl  opacity-100'>Login Here</h1>
            </div>

            <div className='h-1/5 w-full  flex items-center justify-center '>
                <div className='h-full w-4/5 '>
                    <div className='h-1/3 w-full '>
                    <h1>Enter Email</h1>
                    </div>
                    <div className='h-2/3 w-full '>
                        <input onChange={(e)=>{setemailInput(e.currentTarget.value)}} required name='email' className='h-full w-full border-zinc-50 border-2 bg-transparent font-normal pl-3 text-white' type='email'   placeholder='Email'/>
                    </div>

                </div>

            </div>
            <div className='h-1/5 w-full  flex items-center justify-center'>
                <div className='h-full w-4/5 '>
                    <div className='h-1/3 w-full '>
                    <h1>Enter Password</h1>
                    </div>
                    <div className='h-2/3 w-full '>
                        <input required name='password' className='h-full w-full bg-transparent border-zinc-50 border-2 font-normal pl-3 text-white' type='password'  placeholder='Password'/>
                    </div>

                </div>

            </div>
            
            <div className='h-2/5 w-full   flex items-center justify-center'>
                <div className='h-full w-4/5   flex items-center justify-center '>
                <div className='h-4/5 w-full  '>

                <Dialog_form_forgot_pass emailInput={emailInput}/>
                    <button className='h-2/5 w-full bg-white text-black mt-5'>Login</button>
                </div>

                </div>

            </div>

        </div>
       
      {loading?<Dialog_UI_login  status={{"emailInput":emailInput,"setLoading":setloading,"header":"Logging In","description":LoginStat,"action":()=>handleSubmission}}/>:null}
    </form>
  )
}
