import React from "react";
import Image from 'next/image'
import { IoMdNotificationsOutline } from "react-icons/io";

export default function Notification_Profile() {
  return (
    <div className="h-20 md:h-full  w-screen md:w-1/12  bg-home-pg-bg  flex justify-center items-center ">
      <div className="md:h-5/6 md:w-5/6 bg-logo-surrounding  h-full w-full flex items-center justify-center rounded-2xl">

      <div className=" md:aspect-square w-1/6  h-full md:w-1/2  flex items-center justify-center ">
  
  <div className="bg-custom-grey-white rounded-full h-2/3 aspect-square flex items-center justify-center">
  <IoMdNotificationsOutline size={"30px"}/>
  </div>
</div>
<div className=" h-full w-1/6 md:w-1/2 ml-5 md:ml-0  overflow-hidden flex items-center justify-center">
<Image className=""  height={25} width={25}   src='/assets/images/profileAvatar.png' alt=''/>
</div>

      
      

      </div>

    </div>
  
  );
}


{/* <div className="h-20 md:h-full  w-screen md:w-1/12    flex justify-center items-center bg-red-800">
      
      
<div className=" md:aspect-square w-1/6  h-full md:w-1/2  flex items-center justify-center ">
  
  <div className="bg-custom-grey-white rounded-full h-2/3 aspect-square flex items-center justify-center">
  <IoMdNotificationsOutline size={"30px"}/>
  </div>
</div>
<div className=" h-full w-1/6 md:w-1/2 ml-5 md:ml-0  overflow-hidden flex items-center justify-center">
<Image className=""  height={25} width={25}   src='/assets/images/profileAvatar.png' alt=''/>
</div>


</div> */}