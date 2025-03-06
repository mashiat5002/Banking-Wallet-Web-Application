"use client"

import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import Opt_input_field from '../Opt_input_field/page'
import { Input } from '@/components/ui/input'
import { call_update_varification_key_db } from '@/app/(utils)/call_update_varification_key_db/route'
import { call_update_password } from '@/app/(utils)/call_update_password/route'
type props={
  emailInput:string
}

const Dialog_form_forgot_pass:React.FC<props>=({emailInput})=> {

    const [isVerified,setisVerified]=useState(false)
    const [isdisabled,setisdisabled]=useState(false)
    const [passInput,setpassInput]=useState("")
    const [passValidation,setPassValidation]=useState("")

      const handlePass=(e:any)=>{
        setpassInput(e.currentTarget.value)
        if(e.currentTarget.value.length<9 && e.currentTarget.value.length>0){
          setPassValidation("Password Must be minimum 8 characters")
        }
        
       



        const hasUppercase = /[A-Z]/.test(e.currentTarget.value);
        if(!hasUppercase && e.currentTarget.value.length>0){
          setPassValidation("Password Must have minimum 1 UpperCase characters")
        }
       
     

        const hasSpecialChar = /[!@#$%^&*(),.?`":{}|<>]/.test(e.currentTarget.value);
       
        if(!hasSpecialChar && e.currentTarget.value.length>0){
          setPassValidation("Password Must have minimum 1 Special characters")
        }
       
      
          if(e.currentTarget.value.length>0 && hasSpecialChar && hasUppercase && e.currentTarget.value.length>=8){
            setPassValidation("")
          }

    }




    const handleSubumission=async()=>{
 
      setisdisabled(true)
      if(passValidation!="" && passValidation != "New OTP Sent"  ){
        setPassValidation("Cannot Submit!!!")
      }
      else if(Otp.length!=4){
        setPassValidation("Otp must be 4 digits !!!")
      }
      else{
        const res= await call_update_password(emailInput,passInput,Otp)
       console.log(res)
        if(res=="Password Updated"){
          setPassValidation(res)
          setisVerified(true)
        }else{
          setisVerified(false)
          setisdisabled(false)
          setTimeout(() => {setPassValidation("New OTP Sent")}, 2000);
          setTimeout(() => {setPassValidation("")}, 3000);
          setPassValidation(res)
        }
       
      }
    }






  const handleOTP=()=>{
    settoggle(!toggle)
    setOtpBtnTxt("")
    call_update_varification_key_db(emailInput)
  }
  
   const [toggle,settoggle]= useState(true)
   const [Otp,setOtp]= useState("")
   const [OtpBtnTxt,setOtpBtnTxt]= useState("Send OTP")
  return (
    <Dialog>
      <DialogTrigger asChild>
        
        <u className='text-custom-white cursor-pointer mt-2 text-xs'>Forgot Password</u>
      </DialogTrigger>
      <DialogContent className="md:h-[300px] md:w-[350px] h-[300px] w-[350px] flex items-center justify-center bg-custom-green text-white font-semibold">
        {toggle ? (
          <Button onClick={handleOTP}>{OtpBtnTxt}</Button>
        ) : (
          <div className="h-5/6 w-3/5 ">
            <div className="h-1/4 w-full flex items-center justify-center">
              <Input
              onChange={handlePass}
                className="m-2 w-full"
                type="password"
                placeholder="New Password"
              />
              
            </div>


            <div className="h-1/6 w-full flex items-center justify-center text-xs ">
            {!isVerified?<h1  className=' text-red-600'>{passValidation}</h1>:<h1 className=' text-green-500'>{passValidation}</h1>}
            </div>


            <div className="h-1/4 w-full flex items-center justify-center">
              <Opt_input_field setOtp={setOtp} Otp={Otp} isreadonly={true} />
            </div>


            <div className="h-1/4 w-full flex items-center justify-center">
              <Button disabled={isdisabled} onClick={handleSubumission}>Confirm</Button>
              
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
export default Dialog_form_forgot_pass;