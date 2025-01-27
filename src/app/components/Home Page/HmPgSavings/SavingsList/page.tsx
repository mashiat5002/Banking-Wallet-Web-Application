"use client"
import React, { useEffect, useState } from 'react'
import { MdHealthAndSafety } from "react-icons/md";
import ProgressDemo from '@/app/components/Progressbar_shedcn/page';
import Recharts_Chart from '@/app/components/Recharts_chart/page';
import { call_change_savings_target } from '@/app/(utils)/call_change_savings_target/route';
import Drawer_Shedcn_move_savings_target from '@/app/components/Drawer_Shedcn_move_savings_target/page';
import Loading_shed_cn_card from '@/app/components/loading_shedcn_card/page';
import No_data_skeleton from '@/app/components/No_data_skeleton/page';

type propsType = {
    balance: string;
    target: string;
    sector: string;
    dept: string;
    percentage: string;
}
type SavingsListType = {
    data?: propsType
    reloading:React.Dispatch<React.SetStateAction<boolean>>
    loading:boolean
    Load: boolean
}
const SavingsList: React.FC<SavingsListType> = ({Load,data,reloading,loading}) => {
   

    const [stts, setStatus] = React.useState("Submit")
    const [drawerVisibility, setdrawerVisibility] = React.useState(false)
       const [Component, setComponent] = React. useState<JSX.Element | null>(<Recharts_Chart/>);
    
    
    const handleSubmission= (data:number, sector:string)=>{
        setStatus("Please Wait..")
       const myfun=async()=>{
        console.log(data,sector)
        const res=await call_change_savings_target(data,sector)
        if(res.affectedRows==1){
            setStatus("Success")
            reloading(!loading)
        }
        else setStatus("Failed")
       }
       myfun()
    }
  
  return (
    <div className="w-full h-2/5 flex items-center justify-center font-normal">
       {Load? <div className="h-11/12 w-11/12 bg-custom-grey-white rounded-lg"><Loading_shed_cn_card/></div> : (data?.sector=="Type_A_Savings" || data?.sector=="Type_B_Savings" )? <div className='w-full h-1/2 bg-custom-grey-white'><No_data_skeleton/></div> : <div className="h-11/12 w-11/12 bg-custom-grey-white rounded-lg">
         <div  className="h-1/2 w-full flex ">
                <div className="h-full w-1/6   flex items-center justify-center">
                    <div className="h-5/6 aspect-square rounded-full bg-red-600 flex items-center justify-center">
                        <MdHealthAndSafety />

                    </div>
                </div>
                <div className="h-full w-5/6 ">
                    <div className="h-1/2 w-full  flex justify-between items-center md:text-custom-size lg:text-xs ">
                        <h1>$ {data?.balance}</h1>
                        <div className='h-full  flex items-center justify-center'>
                            <Drawer_Shedcn_move_savings_target drawerVisibility={drawerVisibility} setdrawerVisibility={setdrawerVisibility} btnVisibility={true}  setStatus={setStatus} stts={stts} Component={Component} max={10000} min={1000} action={handleSubmission} heading='Move Target' sector= {data?.dept} description='Move Target to a new point' />
                        </div>
                    </div>
                    <div className="h-1/2 w-full flex items-center text-sm md:text-custom-size lg:text-xs">
                        <h1>{data?.sector}</h1>
                    </div>
                    

                </div>


            </div>


           <div className='h-1/2 w-full  '>
                <div className='h-1/2 w-full flex text-sm'>
                        <div className='h-full w-5/6 flex items-center pl-3 md:text-custom-size lg:text-xs'>
                            <h1>Target $ {data?.target}</h1>

                        </div>

                        <div className='h-full w-1/6 flex items-center justify-center md:text-custom-size lg:text-xs'>
                            {!isNaN(Number(data?.percentage))?<h1>{( Number(data?.percentage).toFixed(2))}%</h1>: <div></div> }

                        </div>
                    

                </div>





             


                <div className='h-1/2 w-full  flex items-center pl-3 '>
                    <div className='h-1/6  w-96 flex items-center '>
                <ProgressDemo  percent={Number(data?.percentage)}/>

                     </div>

                </div>

                
               

            </div>




        </div>}
</div>
  )
}
export default SavingsList;