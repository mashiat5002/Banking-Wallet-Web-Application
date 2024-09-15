import React from 'react'

import { FaCreditCard } from "react-icons/fa6";
import { Mycomponent } from '../Landing_Bottom_card/Landing_Bottom_card';
import { TbBuildingBank } from "react-icons/tb";
import { PiHandDepositBold } from "react-icons/pi";

export default function Bottom() {
  return (
    <div className='  md:h-1/6 flex flex-col md:flex-row justify-center text-slate-200  '>
        <Mycomponent Icon={FaCreditCard} Heading="Debit Card" Details='Transfer from one account to other'/>
        <Mycomponent Icon={TbBuildingBank} Heading="Bank Link" Details='Connect to bank accounts to deposit and withdraw funds'/>
        <Mycomponent Icon={PiHandDepositBold} Heading="Micro Deposit" Details='Deposit to bank accounts to deposit and withdraw funds'/>
      
    </div>
  )
}
