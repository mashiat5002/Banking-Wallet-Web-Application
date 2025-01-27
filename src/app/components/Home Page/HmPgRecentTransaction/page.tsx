import React from 'react'

import { BsThreeDotsVertical } from "react-icons/bs";
import TransactionList from './transactionList/page';



export default function RecentTrans() {
  
  return (
    <div className='w-5/6 md:w-11/12 h-11/12 bg-logo-surrounding rounded-2xl  lg:scale-100 '>
        <div className='h-1/5 w-full flex text-custom-white  font-semibold'>
            <div className='h-full w-10/12 flex items-center pl-5 md:text-custom-size lg:text-xs'>
                <h1 >Recent Card Transactions</h1>

            </div>
            <div className='h-full w-2/12 flex items-center justify-center'>
                <BsThreeDotsVertical size={"20px"}/>
            </div>
        
        </div>
    
       <TransactionList />
       
        
      
    </div>
  )
}
