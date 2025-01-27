import React, { useContext, useEffect, useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import Avatar, { genConfig } from 'react-nice-avatar'
import { call_dwolla_id_for_frontEnd } from "@/app/(utils)/call_dwolla_id_for_frontEnd/route";
import { call_find_customer_with_customer_id } from "@/app/(utils)/call_find_customer_with_customer_id/route";
import Dialog_UI_logout from "@/app/components/Dialog_UI_logout/page";

export default function Notification_Profile() {
  const [loading,setloading]=useState(false)
  const [name,setname]= useState("")

  useEffect(()=>{
    const myfun=async()=>{

      const cid= await call_dwolla_id_for_frontEnd()
      const name= await call_find_customer_with_customer_id(cid)
      setname(name)
    }
    myfun()
  },[])
  return (
    <div className="h-20 md:h-full  w-screen md:w-1/12  bg-home-pg-bg  flex justify-center items-center ">
      <div className="md:h-5/6 md:w-5/6 bg-logo-surrounding  h-full w-full flex items-center justify-center rounded-2xl">

      <div className=" md:aspect-square w-1/6  h-full md:w-1/2  flex items-center justify-center ">
  
  <div className="bg-custom-grey-white rounded-full h-2/3 aspect-square flex items-center justify-center">
  <IoMdNotificationsOutline size={"30px"}/>
  </div>
</div>
<div onClick={()=>{setloading(true)}} className=" h-full w-1/6 md:w-1/2 ml-5 md:ml-0 cursor-pointer overflow-hidden flex items-center justify-center">
{/* <Image  onClick={()=>{setloading(true)}} className="cursor-pointer"  height={25} width={25}    alt=''/> */}
 <Avatar   className=" h-1/2 aspect-square"     {...genConfig(name)} />
</div>

      
      

      </div>
      { loading  ? <Dialog_UI_logout status={{name_:name, setLoading:setloading,loading:loading,header:"Confirm to Logout",description:``,action:()=>{}}} /> : null}

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