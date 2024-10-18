import React from 'react'
import Image from 'next/image'

export default function MoneySentList() {
  return (
    <div className="h-1/6 w-full bg-logo-surrounding flex ">



    <div className="h-full w-2/6 flex ">
      <div className="h-full w-1/3 flex items-center justify-center ">
         
          <Image className=""  height={25} width={25}   src='/assets/images/profileAvatar.png' alt=''/>
     
          
      </div>
      <div className="text-custom-white text-xs  font-semibold flex items-center md:pl-1 md:text-custom-size lg:text-xs ">
        <p >Mashiat Islam  </p>
      </div>


    </div>




    <div className="h-full w-4/6 flex text-custom-white text-xs">
      <div className="h-full w-1/4 flex items-center justify-center md:text-custom-size lg:text-xs"><h1>10/10/2014</h1></div>
      <div className="h-full w-1/4 flex items-center justify-center md:text-custom-size lg:text-xs"><h1>$400</h1></div>
      
      <div className="h-full w-1/4 flex items-center ">
        <div className="h-2/5 w-4/5 bg-custom-green-light rounded-2xl flex items-center justify-center">
          <h1 className="text-custom-green md:text-custom-size lg:text-xs ">Completed</h1>
        </div>
      </div>
      <div className="h-full w-1/4 flex items-center md:text-custom-size lg:text-xs">
        <h1>Employee</h1>
      </div>

    </div>

  </div>
  )
}
