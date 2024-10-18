import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import SavingsList from "./SavingsList/page";

export default function Savings() {
  return (
    <div className="h-5/6 w-11/12 bg-logo-surrounding text-custom-white rounded-2xl ">
      <div className="w-full h-1/5   flex">
            <div className="h-full w-5/6 flex items-center pl-5 md:text-custom-size lg:text-xs">
            <h1>Savings</h1>
            </div>
            <div className="h-full w-1/6 flex items-center justify-center ">
            <BsThreeDotsVertical size={"20px"} fill="white" />
            </div>
      </div>

        <SavingsList/>
        <SavingsList/>

    
    </div>
  );
}
