import React, { useState } from "react";
import Dialog_form_login from "../../Dialog_form_login/page";
import Dialog_form_registration from "../../Dialog_form_registration/page";
type props ={
  setemailInput: React.Dispatch<React.SetStateAction<string>>
  emailInput: string
}
const Nav_buttons:React.FC<props>=({emailInput,setemailInput})=> {
  return (
    <div className="h-1/3 md:h-full w-screen md:w-1/3 flex items-center  font-semibold ">
      <div className="w-1/2 h-full flex items-center justify-center text-nowrap md:w-1/6 md:ml-16 lg:ml-20 ">
        <Dialog_form_login />
      </div>

      <Dialog_form_registration emailInput={emailInput} setemailInput={setemailInput} title={"Register"}/>
    </div>
  );
}
export default  Nav_buttons