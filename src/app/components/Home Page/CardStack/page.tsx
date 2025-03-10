"use client"
import React, { useContext, useEffect, useState } from 'react'
import "react-card-stack-carousel/styles/styles.css";
import { StackedCarousel } from "react-card-stack-carousel";
import CreditCards from '../CreditCard/page';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Drawer_Shedcn_remove_card from '../../Drawer_Shedcn_remove_card/page';
import { call_card_list_from_db } from '@/app/(utils)/call_card_list_from_db/route';
import { call_remove_card_from_db } from '@/app/(utils)/call_remove_card_from_db/route';
import MyContext from '../../MyContext/route';
import Loading_shed_cn_card from '../../loading_shedcn_card/page';
import No_data_skeleton from '../../No_data_skeleton/page';

export default function CardStack() {
  const {card_loading,setCard_loading}= useContext(MyContext)
  const [stts, setStatus] = React.useState("Remove")
   const [drawerVisibility, setdrawerVisibility] = React.useState(false)
   const [cardData, setcardData] = React.useState({name_:"", number:"", expiry:"",cvc:"",key_id:""})
   const [cardAllData, setAllcardData] = React.useState([{Card_holder:"",expiry_date:"",_id:"",card_ids:""}])
   const [loading,setloading]= useState(true);
   const [cardPlay,setcardPlay]= useState(false);

   useEffect(()=>{
    const myfun= async()=>{
      const cardData= await call_card_list_from_db();
      
      setAllcardData(cardData)
      setloading(false)
      setcardPlay(true)
    }
    myfun()
  },[card_loading])

  
    
   const handleSubmission= (key_id:string)=>{
          setStatus("Please Wait..")
          const myfun=async()=>{
            const res= await call_remove_card_from_db(key_id);
            console.log(res);
            if(res==1){
           setStatus("Removed Successfully")
           setCard_loading(!card_loading)
         }
         else
         setStatus("Something went wrong!!")
         }
         myfun()
      }

   

      const handleClick=(name_:string, number:string, expiry:string,cvc:string, key_id:string)=>{
       setdrawerVisibility(true)
        setcardData({name_:name_, number:number, expiry:expiry,cvc:cvc, key_id:key_id})
      }




  return (
    <div className='h-full w-full  bg-logo-surrounding text-custom-white text-sm rounded-2xl'>
      <div className='h-1/5 w-full flex'>
        <div className='h-full w-5/6 flex items-center pl-5'>
        <h1 >My Cards</h1>

        </div>

        <div className='h-full w-1/6  flex items-center justify-center'>
        {/* <BsThreeDotsVertical size={"25px"}/> */}
                  <Drawer_Shedcn_remove_card  cardData={cardData}  drawerVisibility={drawerVisibility} setdrawerVisibility={setdrawerVisibility} btnVisibility={false}  setStatus={setStatus} stts={stts}  action={handleSubmission} heading='Remove Card'  description='This action will only remove from the homepage view' />
        </div>
      </div>







     {loading? <div className='h-4/5 w-full  flex items-center justify-center '><Loading_shed_cn_card/> </div>  :
     (cardAllData.length==0)? <div className='w-full h-2/3 bg-custom-grey-white'><No_data_skeleton/></div> :
     <div className='h-4/5 w-full  flex items-center justify-center scale-75 md:scale-100'>
                   <StackedCarousel height={360}  autoplay={cardPlay}   >


                    {cardAllData.map((x,index)=><div key={index} className="cursor-pointer sample-card bg-color-1 mt-20 " >
                          <CreditCards name={x.Card_holder} number={x.card_ids} expiry={x.expiry_date} key_id={x._id}    action={handleClick}/>
                      </div>)}

                  </StackedCarousel>


      </div>}
        
        
    </div>
  )
}
