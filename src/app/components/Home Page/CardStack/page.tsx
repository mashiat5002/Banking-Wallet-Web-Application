"use client"
import React from 'react'
import "react-card-stack-carousel/styles/styles.css";
import { StackedCarousel } from "react-card-stack-carousel";
import CreditCards from '../CreditCard/page';
import { BsThreeDotsVertical } from 'react-icons/bs';

export default function CardStack() {
  return (
    <div className='h-full w-full  bg-logo-surrounding text-custom-white text-sm rounded-2xl'>
      <div className='h-1/5 w-full flex'>
        <div className='h-full w-5/6 flex items-center pl-5'>
        <h1 >My Cards</h1>

        </div>

        <div className='h-full w-1/6  flex items-center justify-center'>
        <BsThreeDotsVertical size={"25px"}/>
        </div>
      </div>







      <div className='h-4/5 w-full  flex items-center justify-center'>
                   <StackedCarousel height={360} autoplay= {true} scaleFactor={0.9} >
                      <div className="sample-card bg-color-1 mt-20">
                          <CreditCards />
                      </div>
                      <div className="sample-card bg-color-1 mt-20">
                          <CreditCards />
                          
                          
                      </div>
                      <div className="sample-card bg-color-1 mt-20">
                          <CreditCards />
                          
                        
                      </div>
                      
                  </StackedCarousel>
            

      </div>
        
        
    </div>
  )
}
