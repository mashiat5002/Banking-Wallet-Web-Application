"use client"
import React from 'react'
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';

export default function CreditCards() {
  return (
    <div className='md:scale-75 lg:scale-90'>
        <Cards 
        number={"5555 5555 5555 4444"}
        expiry={"10/10/2014"}
        cvc={"1"}
        name={"Mashiat Islam"}
        
      />
      
    </div>
  )
}
