import React from 'react'
import { GiTakeMyMoney } from "react-icons/gi";
import Dialog_form_registration from '../../Dialog_form_registration/page';
type props ={
  setemailInput: React.Dispatch<React.SetStateAction<string>>
  emailInput: string
}
const Center_left:React.FC<props>=({setemailInput,emailInput})=> {
  const handleChange=(e:any)=>{
    setemailInput(e.currentTarget.value)
  }
  return (
    <div className='h-full w-screen md:h-5/6 lg:w-1/2 flex flex-col mt-8   md:pl-0  justify-center '>
      <div className=' '>
      <h1 className='pl-12   text-3xl  md:text-5xl  md:pt-12'>Empowering <GiTakeMyMoney className='inline'/> Your Financial  Freedom.</h1>
      <h1 className='pl-12 pt-6  '>Take control of your finances with ease—secure, fast, <br/> and effortless banking at your fingertips!</h1>
      </div>

      
      
      <div className= ' w-screen lg:w-full flex  md:flex items-center md:ml-20 h-1/6 mt-10'>

      <div className='   w-1/2 h-12 md:w-1/3   md:rounded-2xl md:ring-2  ring-custom-green'>
      <input onChange={handleChange} className=' bg-custom-light-green h-full w-full md:rounded-2xl text-base pl-5' placeholder='enter email'/>
      </div>

      <Dialog_form_registration emailInput={emailInput} setemailInput={setemailInput} title={"Create Free"}/>
      
      </div>
    </div>
  )
}
export default Center_left