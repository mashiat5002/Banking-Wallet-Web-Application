"use client"
import React, { useContext, useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import SavingsList from "./SavingsList/page";
import { call_get_saving_acc_balance } from "@/app/(utils)/call_get_saving_acc_balance/route";
import Dialog_form_sectors_change from "../../Dialog_form_sectors_change/page";
import MyContext from "../../MyContext/route";

export default function Savings() {
      const [reload, setreload] = React.useState(true)
  const [balance, setBalance] = React.useState({balance1:"" as any,balance2:"" as any });
  const [target, setTarget] = React.useState({target1:"" as any,target2:"" as any});
  const [sectors, setSectors] = React.useState({sector1:"Sector 1",sector2:"Sector 2"});
  const [percentage, setPercentage]= React.useState({percentage_1:0, percentage_2:0})
  const {saving_balance_loading}= useContext(MyContext)
      const [Load,setLoad]= useState(true);
      const {reload_savings_card}= useContext(MyContext) 
      const {card_bank_reload,setcard_bank_reload}= useContext(MyContext)


  useEffect(() => {
    const getData= async () => {
      const data= await call_get_saving_acc_balance();
      console.log(data)
      setBalance({balance1:data.balance_1,balance2:data.balance_2});
      setTarget({target1:data.department_1_target,target2:data.department_2_target});
      setSectors({sector1:data.department_1, sector2:data.department_2});
      setPercentage({percentage_1: ((Number(data?.balance_1)/Number(data?.department_1_target))*100) , percentage_2:((Number(data?.balance_2)/Number(data?.department_2_target))*100)})
      setLoad(false)
    }

    getData()
  }, [reload,saving_balance_loading,card_bank_reload,reload_savings_card]);
  return (
    <div className="h-11/12 w-11/12  bg-logo-surrounding text-custom-white rounded-2xl ">
      <div className="w-full h-1/5   flex">
            <div className="h-full w-5/6 flex items-center pl-5 md:text-custom-size lg:text-xs">
            <h1>Savings</h1>
            </div>
            <div className="h-full w-1/6 flex items-center justify-center ">
            <Dialog_form_sectors_change reload={reload} reloading={setreload}/>
            </div>
      </div>

        
        <SavingsList Load={Load} loading={reload} reloading={setreload} data={{  balance:balance.balance1, target:target.target1 ,sector:sectors.sector1, dept: "department_1_target", percentage: percentage.percentage_1.toPrecision(2)}}/>
        <SavingsList Load={Load}  loading={reload} reloading={setreload}   data={{balance:balance.balance2, target:target.target2 ,sector:sectors.sector2, dept: "department_2_target", percentage: percentage.percentage_2.toPrecision(2)}}/>

    
    </div>
  );
}
