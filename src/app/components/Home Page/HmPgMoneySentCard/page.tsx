import React from "react";


import MoneySentList from "./MoneySentList/page";
export default function MoneySentCard() {
  return (
    <div className="h-11/12 w-5/6 md:w-full md:mr-2 bg-logo-surrounding rounded-2xl  ">



      <div className="h-1/6 w-full  flex">

        <div className="h-full w-7/12 md:w-4/12 lg:w-7/12  flex items-center pl-5 text-custom-white text-xl  font-semibold md:text-custom-size0 lg:text-xs ">
          <h1>Recent Bank Transactions</h1>
        </div>


       


       


      </div>






      <div className="h-1/6 w-full bg-logo-surrounding flex items-center justify-center">
        <div className="h-3/6 w-11/12 bg-custom-grey-white rounded-3xl text-xs text-custom-grey flex justify-between md:text-custom-size lg:text-xs">
          <h1 >Sent From</h1>
          <h1 >Sent To</h1>
          <h1 >Date</h1>
          <h1 >Amount</h1>
          <h1 >Status</h1>

        </div>

      </div>

      
      <MoneySentList/>
     


      
    </div>
  );
}
