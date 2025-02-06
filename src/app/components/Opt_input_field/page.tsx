import React from "react"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
type props={
  setOtp: React.Dispatch<React.SetStateAction<string>>
  Otp:string
  isreadonly:boolean
}



const  Opt_input_field:React.FC<props>=({setOtp,Otp, isreadonly})=> {
  return (
    <InputOTP maxLength={6} value={Otp} onChange={setOtp} readOnly={!isreadonly}>
    <InputOTPGroup>
      <InputOTPSlot index={0} />
      <InputOTPSlot index={1} />
    </InputOTPGroup>
    <InputOTPSeparator />
    <InputOTPGroup>
      <InputOTPSlot index={2} />
      <InputOTPSlot index={3} />
    </InputOTPGroup>
    

  </InputOTP>
  )
}
export default Opt_input_field