import React from 'react'
import { NavLogo } from '../NavLogoLeft/NavLogo'
import { LuWallet } from "react-icons/lu";
import { MdOutlinePayments } from "react-icons/md";
import { TiHomeOutline } from "react-icons/ti";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import PlaidButton from '@/app/components/PlaidButton/Button';
import Dialog_box from '@/app/components/Savings_form/page';
import Savings_form from '@/app/components/Savings_form/page';
import Dialog_form_stripe_wrapper from '@/app/components/Dialog_form_stripe_wrapper/page';
import Dialog_form_payment_options from '@/app/components/Dialog_form_payment_options/page';

export default function Navbar_Elements() {
  return (
    <div className=' h-20 md:h-full  w-screen md:w-8/12  bg-home-pg-bg  p-1 flex justify-center items-center'>

        <div className="w-11/12 h-full md:h-2/3 bg-logo-surrounding rounded-3xl  text-gray-100 md:flex md:items-center md:justify-center md:w-full" >
        <div className='h-1/2 w-full flex justify-center items-center'>
        

       
        <div className="h-full w-2/5  flex justify-center items-center ">
      
              <Dialog_form_payment_options/>
        </div>
        
        
        <TiHomeOutline size={"20px"}/>
        <PlaidButton/>
        
        <div className="h-full w-2/5  flex justify-center items-center ">
        <LuWallet style={{ fontSize: 'text-sm', fill: 'Black' }} />
        <Dialog_form_stripe_wrapper/>
        </div>
        
        </div>



        
        <div className='h-1/2 w-full flex justify-center items-center'>

        
        
        <NavLogo Logo={GrTransaction} Title="Transactions" FS='text-sm' LS='20px' FST='font-light' LogoFill='White' Address=''/>
        <FaFileInvoiceDollar size={"20px"}/>
        <Savings_form />



        <NavLogo Logo={IoSettingsOutline} Title="Setting" FS='text-sm' LS='20px' FST='font-light' LogoFill='White' Address=''/>
       
        </div>

        </div>
      
    </div>
  )
}
