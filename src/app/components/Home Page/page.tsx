import React from 'react'

import HomePageNav from './HmPg Nav/page'
import CardStack from './CardStack/page'
import QuickSend from './QuickSend/page'
import Savings from './HmPgSavings/page'
import HomePage_Balance_Card from './HmPgBalanceCard/page'
import Graph from './HmpgGraphChart/page'
import RecentTrans from './HmPgRecentTransaction/page'
import PolarChart from './HmpgPolarChart/page'
import MoneySentCard from './HmPgMoneySentCard/page'

export default function Homepage() {
  return (
    
    <div className='md:h-full w-full bg-black'>
       {/* *******************Navbar************* */}
      <div className='  md:h-1/12 w-full  '>
          <HomePageNav />
      </div>


      <div className=' h-56 md:h-11/12 w-full  md:flex  '>


   {/* *******************Left Side************* */} 
           <div className='h-650px md:h-full md:w-1/3 bg-black'>
          
              <div className='h-2/5 w-full  flex items-center justify-center overflow-hidden ' >

                    <div className='h-5/6 w-11/12 '>
                        <CardStack/>
                    </div>

              </div>

              <div className='h-1/5 w-full  flex items-center justify-center'>
                  <QuickSend/>
              </div>

              <div className='h-2/5 w-full flex items-center justify-center '>
                <Savings/>

              </div>
            

          </div>




      {/* *******************Right Side************* */}

          <div className='h-custompx w-full md:h-full md:w-2/3 bg-black'>


              <div className='h-1/3 md:h-1/5 w-full  md:flex md:items-center  md:space-x-5 flex-col md:flex-row items-center justify-center '>
                <HomePage_Balance_Card/>
                <HomePage_Balance_Card/>
                <HomePage_Balance_Card/>
           

              </div>
              <div className='h-1/3 md:h-2/5 w-full  flex  items-center justify-center '>
                  <div className='h-5/6 md:h-11/12 w-1/2  flex items-center justify-center md:w-1/2 lg:w-2/3 '>
                     
                     <Graph/>
                  </div>
                  <div className='h-5/6 md:h-11/12 w-1/2  flex items-center justify-center md:w-1/2 lg:w-1/3'>
                      <PolarChart/>

                  </div>

              </div>

              <div className='h-1/3 md:h-2/5 w-full  md:flex '>
                  <div className='h-1/2 w-full md:h-full md:w-1/3 flex items-center justify-center '>
                    <RecentTrans/>

                  </div>
                  <div className='h-1/2 w-full md:h-full md:w-2/3  flex items-center justify-center '>
                    <MoneySentCard/>

                  </div>

              </div>




          </div>

      </div>
    </div>
  )
}
