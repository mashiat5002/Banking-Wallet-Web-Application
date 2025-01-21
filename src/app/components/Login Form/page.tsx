"use client"


import { useRouter } from 'next/navigation';
import React from 'react'
import { useState } from 'react';
import myfun from '@/app/(utils)/bank_transfers_proper_all/route';
import { call_card_transfer_all } from '@/app/(utils)/call_card_transfer_all/route';
import Dialog_UI_login from '../Dialog_UI_login/page';

export default function Login() {
    const router = useRouter();
    const [LoginStat, setLoginStat]=useState("");
    const [loading, setloading]=useState(false);

    const handledemo = async () => {
        const transections = await call_card_transfer_all()
              console.log(transections)
        //       console.log(transections.res[0])
        //     //   const data= transections.res.map((x)=> {"Sender":x.})
        await myfun()
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

                    <h1 className='text-sm font-normal ' ></h1>
                    <button className='h-2/5 w-full bg-white text-black mt-5'>Login</button>
                </div>

                </div>

            </div>

        </div>
      {loading?<Dialog_UI_login  status={{"header":"Logging In","description":LoginStat,"action":()=>handleSubmission}}/>:null}
    </form>
  )
}
