import React from 'react'
import Mobile_hand from '../Mobile-hand/mobile-hand'
import Center_left from '../Center_Left/Center_left'
type props ={
  setemailInput: React.Dispatch<React.SetStateAction<string>>
  emailInput: string
}
const Center:React.FC<props>=({emailInput,setemailInput})=> {
  return (
    <div className=' h-96 w-screen  md:h-4/6 flex flex-row-reverse    text-slate-200 '> 
      <Mobile_hand />
      <Center_left emailInput={emailInput} setemailInput={setemailInput}/>
    </div>
  )
}
export default  Center