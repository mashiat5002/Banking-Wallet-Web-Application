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
import Cards from 'react-credit-cards-2';

type props={
  
 
  heading: string
  description: string

  stts:any
  drawerVisibility:boolean
  setdrawerVisibility:React.Dispatch<React.SetStateAction<boolean>>
  btnVisibility:boolean
  setStatus: React.Dispatch<React.SetStateAction<string>>
  action:( key_id:string) => void
  cardData: propsCard
  
}
type propsCard= {
    name_: string;
    number: string;
    expiry: string;
    cvc: string;
    key_id: string;
    
}
const Drawer_Shedcn_remove_card: React.FC<props>=({cardData,action ,setStatus,setdrawerVisibility,stts,heading, description,btnVisibility,drawerVisibility})=> {
  
  
  return (
    <div className='h-full w-full'>
    <Drawer  open={drawerVisibility} onOpenChange={(isOpen) => {setdrawerVisibility(isOpen),setStatus("Remove Card") }}>
    <DrawerTrigger asChild >
      <Button onClick={()=>setdrawerVisibility(true)}   className={`h-full w-full text-black flex items-center justify-center text-xs pt-0 bg-slate-600 ${btnVisibility ? "block" : "hidden"}`} variant="outline"><h1>Remove Card</h1></Button>
    </DrawerTrigger>
    <DrawerContent >
      <div className="mx-auto w-full max-w-sm">
        <DrawerHeader>
          <DrawerTitle>{heading}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        <div className="p-4 pb-0">
          <div className="flex items-center justify-center space-x-2">
            
          </div>
          <div className=" h-[200px]">
          <Cards 
        number={cardData?.number}
        expiry={cardData?.expiry}
        cvc={cardData?.cvc}
        name={cardData?.name_}
        
      />
          </div>
        </div>
        <DrawerFooter>
          <Button disabled={stts=="Removed Successfully" || stts=="Please Wait.."}  onClick={()=> action(cardData.key_id)}>{stts}</Button>
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
export default Drawer_Shedcn_remove_card;