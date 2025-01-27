"use client"
import React, { useContext, useEffect } from "react";
import MyContext from "../../MyContext/route";
type SelectorProps = {
  onSelectionChange: (value: string) => void;
  system_id: string;
  system_type:string
};



const Selector : React.FC<SelectorProps>= ({onSelectionChange,system_id,system_type} ) => {

  const {isQuickTrans,setIsQuickTrans}= useContext(MyContext)
  useEffect(()=>{

  },[isQuickTrans])

  return (system_type=="card" && !isQuickTrans)? 
  (
    <div className=" w-full mx-auto flex justify-between ">
      <label className="block text-xs text-nowrap md:text-sm font-medium text-custom-blue2 mb-2 w-1/2">
        Recipient Type:
      </label>
      <select
        id="dropdown"
        className="block ml-5 md:ml-0 w-2/3 px-4 py-2  text-xs text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        onChange={(e) => onSelectionChange(e.target.value)}
      >
        <option value="1" selected>
          Internal Recipient
        </option>
        <option value="2">External Recipient</option>
      </select>
    </div>
  ) : (
    <div className="h-3"></div>
  );
};

export default Selector;
