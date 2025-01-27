"use client"


import { useRouter } from 'next/navigation';
import React from 'react'
import { useState } from 'react';
import myfun from '@/app/(utils)/bank_transfers_proper_all/route';
import { call_card_transfer_all } from '@/app/(utils)/call_card_transfer_all/route';
import Dialog_UI_login from '../Dialog_UI_login/page';
import { call_update_savings_time } from '@/app/(utils)/call_update_savings_time/route';
import { call_get_last_update_time_savings_balance } from '@/app/(utils)/call_get_last_update_time_savings_balance/route';
import { call_get_bank_balance } from '@/app/(utils)/call_get_bank_balance/route';
import { call_update_bank_balance_time } from '@/app/(utils)/call_update_bank_balance_time/route';
import { call_get_last_update_time_bank_balance } from '@/app/(utils)/call_get_last_update_time_bank_balance/route';
import { call_logout_eliminate_session } from '@/app/(utils)/call_logout_eliminate_session/route';
import { call_find_customer_id_with_funding_src_id } from '@/app/(utils)/call_find_customer_id_with_funding_src_id/route';
import { call_check_if_own_savings_acc } from '@/app/(utils)/call_check_if_own_savings_acc/route';

export default function Login() {
    const router = useRouter();
    const [LoginStat, setLoginStat]=useState("");
    const [loading, setloading]=useState(false);

    const handledemo = async () => {
        const cid= await call_find_customer_id_with_funding_src_id("1a1017f9-214f-4c13-9acb-3d76549dee70");
              const origin= await call_check_if_own_savings_acc(cid);
              console.log(origin)
              if(origin==false){
                console.log("false")
                return;
              }
              else{
                console.log("true")
              }
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
