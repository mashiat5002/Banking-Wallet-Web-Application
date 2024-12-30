import React from 'react'
import { NavLogo } from '../NavLogoLeft/NavLogo'
import { LuWallet } from "react-icons/lu";
import { MdOutlinePayments } from "react-icons/md";
import { TiHomeOutline } from "react-icons/ti";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import PlaidButton from '@/app/components/PlaidButton/Button';

export default function Navbar_Elements() {
  return (
    <div className=' h-20 md:h-full  w-screen md:w-8/12  bg-home-pg-bg  p-1 flex justify-center items-center'>

        <div className="w-11/12 h-full md:h-2/3 bg-logo-surrounding rounded-3xl  text-gray-100 md:flex md:items-center md:justify-center md:w-full" >
        <div className='h-1/2 w-full flex justify-center items-center'>
        {/* <NavLogo Logo={TiHomeOutline} Title="Connect Banks" FS='text-sm' LS='20px' FST='font-light' LogoFill='white' Address=''/> */}
        

       
        <NavLogo Logo={MdOutlinePayments} Title="Payment" FS='text-sm' LS='20px' FST='font-light' LogoFill='white' Address='/homepage/payment-form'/>
        <TiHomeOutline size={"20px"}/>
        <PlaidButton/>
        <NavLogo Logo={LuWallet} Title="Connect Cards" FS='text-sm' LS='15px' FST='font-semibold' LogoFill='Black' Address='http://localhost:3000/homepage/connecting-cards'/>
        </div>



        
        <div className='h-1/2 w-full flex justify-center items-center'>

        
        
        <NavLogo Logo={GrTransaction} Title="Transactions" FS='text-sm' LS='20px' FST='font-light' LogoFill='White' Address=''/>
        <NavLogo Logo={FaFileInvoiceDollar} Title="Invoice" FS='text-sm' LS='20px' FST='font-light' LogoFill='White' Address=''/>
        <NavLogo Logo={IoSettingsOutline} Title="Setting" FS='text-sm' LS='20px' FST='font-light' LogoFill='White' Address=''/>
       
        </div>

        </div>
      
    </div>
  )
}
