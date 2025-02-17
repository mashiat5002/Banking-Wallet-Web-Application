"use client"

import React from 'react'
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
  import { Minus, Plus } from "lucide-react"

import { Button } from '@/components/ui/button'


type props={
  Component:  JSX.Element | null,
  max: number
  min: number
  heading: string
  description: string
  sector:any
  stts:any
  drawerVisibility:boolean
  setdrawerVisibility:React.Dispatch<React.SetStateAction<boolean>>
  btnVisibility:boolean
  setStatus: React.Dispatch<React.SetStateAction<string>>
  action:(data: number, sector:string) => void
}
const Drawer_Shedcn_move_savings_target: React.FC<props>=({Component,max,min,action ,setdrawerVisibility,setStatus,stts,heading, description, sector,btnVisibility,drawerVisibility})=> {
  const [goal, setGoal] = React.useState(1000)
  
  
  function onClick(adjustment: number) {
    setGoal( goal + adjustment)
    stts=="Success"?setStatus("Submit"):null
  }
  return (
    <div className='h-full w-full'>
    <Drawer  open={drawerVisibility} onOpenChange={(isOpen) => {setdrawerVisibility(isOpen), setStatus("Submit")}}>
    <DrawerTrigger asChild className='bg-red-800'>
      <Button onClick={()=>setdrawerVisibility(true)}   className={`h-full w-full text-black flex items-center justify-center text-xs pt-0 bg-slate-600 ${btnVisibility ? "block" : "hidden"}`} variant="outline"><h1>Move Target</h1></Button>
    </DrawerTrigger>
    <DrawerContent >
      <div className="mx-auto w-full max-w-sm">
        <DrawerHeader>
          <DrawerTitle>{heading}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        <div className="p-4 pb-0">
          <div className="flex items-center justify-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 shrink-0 rounded-full"
              onClick={() => onClick(-100)}
              disabled={goal <= min}
            >
              <Minus />
              <span className="sr-only">Decrease</span>
            </Button>
            <div className="flex-1 text-center">
              <div className="text-7xl font-bold tracking-tighter">
                ${goal}
              </div>
              <div className="text-[0.70rem] uppercase text-muted-foreground">
                Target In Dollars
              </div>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 shrink-0 rounded-full"
              onClick={() => onClick(100)}
              disabled={goal >= max}
            >
              <Plus />
              <span className="sr-only">Increase</span>
            </Button>
          </div>
          <div className="mt-3 h-[120px]">
            {Component}
          </div>
        </div>
        <DrawerFooter>
          <Button disabled={stts=="Please Wait.."}  onClick={()=> action(goal, sector)}>{stts}</Button>
          <DrawerClose asChild>
            <Button onClick={()=>setdrawerVisibility(false)} variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </div>
    </DrawerContent>
  </Drawer>
  </div>

  )
}
export default Drawer_Shedcn_move_savings_target;