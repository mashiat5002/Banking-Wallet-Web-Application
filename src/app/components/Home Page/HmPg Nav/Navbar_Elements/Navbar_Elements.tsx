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
import Card_transaction_list_all from '@/app/components/Card_transaction_list_all/page';
import Bank_transaction_list_all from '@/app/components/Bank_transaction_list_all/page';
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { TbTransferIn } from "react-icons/tb";


export default function Navbar_Elements() {
  return (
    <div className=" h-20 md:h-full  w-screen md:w-8/12  bg-home-pg-bg  p-1 flex justify-center items-center">
      <div className="w-11/12 h-full md:h-2/3 bg-logo-surrounding rounded-3xl  text-gray-100 md:flex md:items-center md:justify-center md:w-full">
        <div className="h-1/2 w-full flex justify-center items-center">
          <div className="h-full w-2/5  flex justify-center items-center ">
            <Dialog_form_payment_options />
          </div>

          <TiHomeOutline size={"20px"} />
          <PlaidButton />

          <div className="h-full w-2/5  flex justify-center items-center ">
            <LuWallet style={{ fontSize: "text-sm", fill: "Black" }} />
            <Dialog_form_stripe_wrapper />
          </div>
        </div>

        <div className="h-1/2 w-full flex justify-center items-center">
          



          <div className="h-full w-2/5  flex justify-center items-center cursor-pointer">
          <FaMoneyBillTransfer size={"20px"} className='mr-2'/>
          <Card_transaction_list_all/>
          </div>



          <FaFileInvoiceDollar size={"20px"} />
          <Savings_form />



          <div className="h-full w-2/5  flex justify-center items-center cursor-pointer">
          <TbTransferIn size={"20px"} className='mr-2'/>
          <Bank_transaction_list_all />
          </div>
        </div>
      </div>
    </div>
  );
}
