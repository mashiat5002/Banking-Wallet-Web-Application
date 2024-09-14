import React from 'react'
type Landing_Bottom_card={
    Icon: React.ElementType,
    Heading: string,
    Details: string

    
}
export const Mycomponent:React.FC<Landing_Bottom_card>= ({Icon, Heading, Details})=> {
    
  return (
    <div className='h-4/5 w-1/5 mr-12  bg-custom-light-green rounded-xl flex '>
        
        <div className='h-full w-1/3 flex items-center justify-center'>
        <Icon className="text-white text-5xl" /> {/* Use className for styling */}
        </div>

        <div className='h-full w-2/3 flex flex-col '>
        <h1 className='text-xl pt-3'>{Heading}</h1>
        <p className=' text-xs text-slate-400 pt-3 '>{Details}</p>

        </div>
      
    </div>
  )
}
