"use client"

import { call_create_saving_acc_in_db } from '@/app/(utils)/call_create_saving_acc_in_db/route';
import React, { useState } from 'react'
import Dialog_UI_login from '../Dialog_UI_login/page';
import { Button } from '@/components/ui/button';
import Opt_input_field from '../Opt_input_field/page';
import { call_update_varification_key_db } from '@/app/(utils)/call_update_varification_key_db/route';
import { call_activate_user_db } from '@/app/(utils)/call_activate_user_db/route';
type props ={
  setemailInput: React.Dispatch<React.SetStateAction<string>>
  emailInput: string
}
const Registration_form:React.FC<props>=({setemailInput,emailInput})=> {
    
    
    const [isdisabled, setisdisabled]=useState(false);
    const [isreadonly, setisreadonly]=useState(false);
    const [otp_btn_txt, setotp_btn_txt]=useState("Send OTP");
    const [email_input, setemail_input]=useState("");
    const [Otp, setOtp]=useState("");
    const [loading, setloading]=useState(false);
    const [error_msg, setErrMsg]=useState("");
    const [error_msg_color, setErrMsg_color]=useState("grey");
    const [error_passClr_8char, seterror_passClr_8char]=useState("grey");
    const [error_passClr_onespchar, seterror_passClr_onespchar]=useState("grey");
    const [error_passClr_oneupchar, seterror_passClr_oneupchar]=useState("grey");


    const handlePass=(e:any)=>{
       
        if(e.currentTarget.value.length<9 && e.currentTarget.value.length>0){
            seterror_passClr_8char("red")
        }
        else if(e.currentTarget.value.length>=8){
            seterror_passClr_8char("green")
        }
        else seterror_passClr_8char("grey")



        const hasUppercase = /[A-Z]/.test(e.currentTarget.value);
        if(!hasUppercase && e.currentTarget.value.length>0){
            seterror_passClr_oneupchar("red")
        }
        else if(hasUppercase){
            seterror_passClr_oneupchar("green")
        }
        else seterror_passClr_oneupchar("grey")

        const hasSpecialChar = /[!@#$%^&*(),.?`":{}|<>]/.test(e.currentTarget.value);
       
        if(!hasSpecialChar && e.currentTarget.value.length>0){
            seterror_passClr_onespchar("red")
        }
        else if(hasSpecialChar){
            seterror_passClr_onespchar("green")
        }
        else seterror_passClr_onespchar("grey")
            

    }

    
    const handleOTP=async ()=>{
        console.log("opt handle")
      try{
      setisreadonly(true)
      if(otp_btn_txt=="Send OTP"){
        console.log("send otp")
          setotp_btn_txt("OTP Sent")
          setTimeout(() => {setotp_btn_txt("Enter OTP")}, 2000);
      
        await call_update_varification_key_db(email_input)
      }
      else{
       const response= await call_activate_user_db(email_input,Otp)
       console.log(response.res)
       if(response.res=="activated"){
        setotp_btn_txt("varified")
        setisdisabled(true)
       }else{
       
        setTimeout(() => {setotp_btn_txt("Enter OTP")}, 2000);
        setTimeout(() => {setotp_btn_txt("New OTP Sent")}, 1000);
        setotp_btn_txt(response.res)
        setisdisabled(false)
       }
      }}
      catch(err){
        console.log("error in handle otp")
      }


    }



    const HandleSubmit= async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const formdata= new FormData(e.currentTarget)
        
        setErrMsg("Processing Request...")
        setErrMsg_color("orange")
        
        
        //api dwolla calling
        const response= await fetch("/api/create_customer_dwolla",{
            method: "POST",
            body:JSON.stringify({
              "firstName":formdata.get("first_name"),
              "lastName":formdata.get("last_name"),
              "email":formdata.get("email"),
              "address1":formdata.get("address"),
              "city":formdata.get("city"),
              "state":formdata.get("state"),
              "postalCode":formdata.get("postal"),
              "dateOfBirth":formdata.get("dob"),
              "ssn": "1234",
              "type": "personal",
              "pass":formdata.get("password")
            })
          });
     
         try{
            const stat= await response.json();
         
         
            if(stat.status == "database not connected"){
                setErrMsg_color("red");
                setErrMsg("Database Error");
            }
            
            if(stat.code== "ExpiredAccessToken" || stat.code== "InvalidAccessToken"){
                setErrMsg_color("red");
                setErrMsg(stat.code);
            }
            if (!response.ok) {
                setErrMsg_color("red");
              setErrMsg(stat._embedded.errors[0].message);
              stat._embedded.errors[0].message=="DateOfBirth value not allowed." && setErrMsg("You are under Age")
            }

            if(stat.status==500){
                setErrMsg_color("red");
                setErrMsg(stat.msg);
            }

        }
        catch(error){
            console.log(error)
            
        }
         
        
          
          if(response.status==201){
            setErrMsg_color("lightgreen");
            setErrMsg("Successful");
            // await call_create_saving_acc_in_db(response.id) 
            const stripeResponse=  await fetch("/api/create_stripe_customer",{
                method:"POST",
                headers: {
                        "Content-Type": "application/json", 
                    },
                    body: JSON.stringify(Object.fromEntries(formdata)),
                })
                const stripe_res= await stripeResponse.json();
                
                await call_create_saving_acc_in_db(stripe_res.id)

                await fetch("/api/db_insertion",{
                    method:"POST",
                headers: {
                    "Content-Type": "application/json", 
                },
                body: JSON.stringify(Object.fromEntries(formdata)),
            })

            

        }
            
        
     
        
          
      
        


        
     
        
    }
    
    return (
        <>
        <form onSubmit={HandleSubmit} className='h-full md:h-650px w-full'>
  
        <div   className='  h-full w-full  flex items-center justify-center '>
            <div className='overflow-scroll scrollbar-hide h-full w-full  md:w-850px  md:flex items-center justify-center rounded-2xl  '>
                <div className=' h-1/2 md:h-full w-full md:w-1/2  rounded-s-2xl flex items-center justify-center'>
                    <div className=' md:h-11/12 w-5/6  text-slate-50 '>
                        <div className='h-12 w-full '>
                            <h1 className='text-xl text-slate-50 font-semibold'>General Information</h1>

                        </div>
                        <div className='h-12 w-full '>
                            <input readOnly={isreadonly} onChange={(e)=>setemail_input(e.currentTarget.value)} required defaultValue={emailInput} name='email' className='h-full w-full border-b-2 outline-none pl-3 bg-transparent' placeholder='Email'/>

                        </div>
                        <div className='h-12 w-full flex justify-between'>
                       

                           <Opt_input_field Otp={Otp} setOtp={setOtp} isreadonly={isreadonly}/>
                           <div className='h-full flex items-center justify-center ml-1'>

                           <Button disabled={isdisabled} onClick={handleOTP} type='button' className=' bg-white =ring-1  text-black hover:bg-transparent hover:text-custom-white' >{otp_btn_txt}</Button>
                           </div>
                       
                        </div>
                        <div className='h-12 w-full flex justify-between'>
                            <div  className='h-full w-2/5'> <input required name='first_name' className='h-full w-full border-b-2 outline-none pl-3 bg-transparent' placeholder='First Name'/></div>
                            <div className='h-full w-2/5'> <input required name='last_name' className='h-full w-full border-b-2 outline-none pl-3 bg-transparent' placeholder='Last Name'/></div>

                        </div>
                        <div className='h-12 w-full flex justify-between'>
                            <div className='h-full w-3/5'> <input required name='dob'  className='h-full w-full border-b-2 outline-none pl-3 bg-transparent' placeholder='Date of Birth YYYY-MM-DD' /></div>
                          

                        </div>

                    </div>

                </div>
                <div className='h-full w-full md:w-1/2  rounded-e-2xl flex items-center justify-center text-slate-50 '>
                    <div className='h-11/12 w-5/6 '>
                        <div className='h-12 w-full '>
                            <h1 className='text-xl text-slate-50 font-semibold'>Contact Details</h1>

                        </div>

                        <div className='h-12 w-full '>
                            <input required  name='address' className=' h-full w-full border-b-2 outline-none pl-3 bg-transparent ' placeholder='Address'/>

                        </div>
                        <div className='h-12 w-full '>
                            <input required name='city' className='h-full w-full border-b-2 outline-none pl-3 bg-transparent' placeholder='City'/>

                        </div>
                        <div className='h-12 w-full '>
                            <input required name='state' className='h-full w-full border-b-2 outline-none pl-3 bg-transparent' placeholder='State'/>

                        </div>
                        <div className='h-12 w-full '>
                            <input required  name='postal' className='h-full w-full border-b-2 outline-none pl-3 bg-transparent' placeholder='Postal Code'/>

                        </div>
                        <div className='h-12 w-full '>
                            <input required name='phone' type="tel" pattern="[0-9]*"  className=' h-full w-full border-b-2 outline-none pl-3 bg-transparent' placeholder='Phone Number'/>

                        </div>
                        <div className='h-12 w-full '>
                            <input required onChange={handlePass}  name='password' type='password' className=' h-full w-full border-b-2 outline-none pl-3 bg-transparent' placeholder='Password'/>

                        </div>
                        <div className='h-3/12 w-full text-gray-500 '>
                            <h1 style={{color:error_passClr_8char}} className='mt-3'> must contain 8 characters</h1>
                            <h1 style={{color:error_passClr_oneupchar}} > must contain one Uppercase character</h1>
                            <h1 style={{color:error_passClr_onespchar}} > must contain one special character</h1>
                            <h1 className='pt-3 '  style={{color:error_msg_color}}>
                                {error_msg}
                            </h1>

                        </div>
                        <div className='h-3/12 w-full '>
                                
                        
                                <button onClick={()=>{setloading(true)}}  className='h-12 w-full bg-custom-green-light flex rounded-3xl items-center justify-center cursor-pointer hover:text-slate-50 hover:bg-custom-green ring-white ring-1 text-slate-50-light'>
                                    <h1 className=' font-semibold '>Register</h1>
                                </button>

                        </div>
                        

                    </div>
                

                    

                </div>

            </div>

        </div>
      
    
    </form>
    {loading?<Dialog_UI_login  status={{setLoading:()=>{},emailInput:"","header":"Processing Registration Request","description":error_msg,"action":()=>{setloading(false)}}}/>:null}

    </>
  )
}
export default  Registration_form;