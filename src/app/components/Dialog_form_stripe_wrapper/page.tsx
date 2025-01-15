"use client"
import React, { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


import { TbCardsFilled } from "react-icons/tb";

import Stripe_Wrapper from "../Stripe_wrapper/page";
export default function Dialog_form_stripe_wrapper() {
 
  return (
    <Dialog >
      <DialogTrigger asChild>
        <p className="text-sm font-light pl-1 cursor-pointer text-nowrap">
          Connect Cards
        </p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px] flex items-center justify-center">
        <Card className="w-[450px]">
          <div className=" w-full  flex items-center justify-center ">
            <TbCardsFilled className="h-10 w-10 mt-2 text-white " fill="black" size={"100px"}/>
            
          </div>
          <CardHeader>
            <CardTitle className="text-center">Connect Your Cards</CardTitle>
           
          </CardHeader>
          <CardContent>
            
            <Stripe_Wrapper/>
            
           
          </CardContent>
       
        </Card>
      </DialogContent>
    </Dialog>
  );
}
