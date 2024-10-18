import React from 'react'
import { MdHealthAndSafety } from "react-icons/md";
import ProgressBar from '../ProgressBar/page';
export default function SavingsList() {
  return (
    <div className="w-full h-2/5 flex items-center justify-center">
        <div className="h-5/6 w-11/12 bg-custom-grey-white rounded-lg">
            <div className="h-1/2 w-full flex ">
                <div className="h-full w-1/6   flex items-center justify-center">
                    <div className="h-5/6 aspect-square rounded-full bg-red-600 flex items-center justify-center">
                        <MdHealthAndSafety />

                    </div>
                </div>
                <div className="h-full w-5/6 ">
                    <div className="h-1/2 w-full flex items-center md:text-custom-size lg:text-xs">
                        <h1>$5000</h1>
                    </div>
                    <div className="h-1/2 w-full flex items-center text-sm md:text-custom-size lg:text-xs">
                        <h1>Healthcare</h1>
                    </div>
                    

                </div>


            </div>


            <div className='h-1/2 w-full  '>
                <div className='h-1/2 w-full flex text-sm'>
                        <div className='h-full w-5/6 flex items-center pl-3 md:text-custom-size lg:text-xs'>
                            <h1>Target $50000</h1>

                        </div>

                        <div className='h-full w-1/6 flex items-center justify-center md:text-custom-size lg:text-xs'>
                            <h1>40%</h1>

                        </div>
                    

                </div>





                <ProgressBar/>




                
               

            </div>




        </div>
</div>
  )
}
