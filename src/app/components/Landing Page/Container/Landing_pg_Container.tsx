"use client"
import React, { useState } from 'react'
import Nevbar from '../Navbar/nev'
import Center from '../Center/center'
import Bottom from '../Bottom/Bottom'


export default function Landing_pg_Container() {
  const [emailInput,setemailInput]= useState("")

  return (
    <div className="md:h-screen h-fit bg-[url('/assets/images/landing-bg.jpg')]">
    <Nevbar emailInput={emailInput} setemailInput={setemailInput}/>
    <Center  emailInput={emailInput} setemailInput={setemailInput}/>
    <Bottom />
 
  </div>
  )
}
