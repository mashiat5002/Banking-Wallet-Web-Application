"use client"
import React, { useState } from 'react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"

  import { IoMdArrowDropright } from "react-icons/io";
  import { IoMdArrowDropleft } from "react-icons/io";
  import { Bar, BarChart, ResponsiveContainer } from "recharts"
  import { RiCodeView } from "react-icons/ri";
  import { Button } from "@/components/ui/button"


type props={
  heading: string
  description: string
  setStatus: React.Dispatch<React.SetStateAction<string>>
  action:(dimension_type: string) => void
}
const Drawer_Shedcn_settings_banks_transactions: React.FC<props>=({action ,setStatus,heading, description})=> {
    const data = [
        {
          goal: 400,
        },
        {
          goal: 300,
        },
        {
          goal: 200,
        },
        {
          goal: 300,
        },
        {
          goal: 200,
        },
        {
          goal: 278,
        },
        {
          goal: 189,
        },
        {
          goal: 239,
        },
        {
          goal: 300,
        },
        {
          goal: 200,
        },
        {
          goal: 278,
        },
        {
          goal: 189,
        },
        {
          goal: 349,
        },
      ]
       
  
 const [index, setindex]=useState(0)
 
 const headlines= ["Last 6 Months", "Last 7 Days", "Last 7 weeks","Last 6 Active Months", "Last 7 Active Days", "Last 7 Active Weeks"]
 
  function onClick(adjustment: number) {
      
      if(index+adjustment<0 )
          adjustment=5
      if(index+adjustment>5 )
          adjustment=-5
    setindex(index+adjustment)
  }
  

  return (
    <div className='h-full cursor-pointer '>
     <Drawer>
      <DrawerTrigger asChild className='h-full  text-xs mr-7'>
        <RiCodeView  size={"20px"}/>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Change Data Dimension</DrawerTitle>
            <DrawerDescription>Set the statistics based on your prefered Dimension</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(-1)}
                
              >
                 <IoMdArrowDropleft size={"40px"}/>
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="flex-1 text-center">
                <div className="text-6xl font-bold tracking-tighter">
                  {headlines[index]}
                </div>
                <div className="text-[0.70rem]  mt-4 uppercase text-muted-foreground">
                  Data Pattern
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(1)}
               
              >
               <IoMdArrowDropright size={"40px"}/>
                <span className="sr-only">Increase</span>
              </Button>
            </div>
            
          </div>
          <DrawerFooter>
            <Button onClick={()=>action(headlines[index])}>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  </div>

  )
}
export default Drawer_Shedcn_settings_banks_transactions;