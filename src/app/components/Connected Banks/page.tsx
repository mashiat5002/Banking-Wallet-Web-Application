import React from 'react'
import Bank_List from '../Bank_list/page'
import { BsBank2 } from 'react-icons/bs'
import Back_btn from '../Back Button/page'

export default async function Connected_Banks() {
    

  return (
    <div  className='z-50000 h-screen w-screen  flex items-center justify-center backdrop-blur'  >
    <div  className='h-3/5 w-4/5 bg-slate-100 ring-1  md:w-1/3 rounded-2xl' style={{backgroundColor:"#1170B3",color:"white"}}>
        <div className='h-14 w-full flex '>
            <div className='h-full w-9/12  flex items-center  rounded-2xl'>
              <h1 className='text-xl ml-7  font-semibold text-custom-black'>Connected Banks</h1>
            </div>
            <div className='h-full w-3/12 flex items-center justify-center '>
              <Back_btn/>
            </div>
        </div>
        <div className='h-4/5 w-full  flex  justify-center ' >
            <div className='h-11/12 w-11/12  ring-1 ring-slate-400 rounded-2xl flex items-center justify-center ' >
               <div className='h-11/12 w-10/12 '>
                    <div className='h-20 w-full flex items-center justify-center'>
                        <div className='ring-1 ring-slate-400 rounded-full h-10 aspect-square flex items-center justify-center'>
                            <BsBank2 size={'20px'} fill='black' />
                        </div>
                    </div>
                  <Bank_List/>
                    

                </div>
            </div>

        </div>

    </div>
  
</div>
  )
}
