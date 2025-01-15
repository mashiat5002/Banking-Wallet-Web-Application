"use client"
import React, { useEffect } from 'react'
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
type props={
  action: (name: string, number: string, expiry: string, cvc: string, key_id:string) => void;
   number:string
   expiry:string
   key_id:string
  
   name:string
}
const CreditCards:  React.FC<props>= ({action,name,number,expiry,key_id}) =>{
  
 
  return (
    <div className='md:scale-75 lg:scale-90 '  onClick={()=>action( name, number, expiry,"123",key_id )}>
        <Cards 
        number={number}
        expiry={expiry}
        cvc={123}
        name={name}
        
      />
      
    </div>
  )
}
export default CreditCards