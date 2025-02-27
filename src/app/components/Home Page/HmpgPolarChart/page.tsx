"use client"
import React, { useContext, useEffect, useState } from 'react'
import { PolarArea } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement, 
  Tooltip,

} from 'chart.js';
import { call_get_stripe_transaction_details } from '@/app/(utils)/call_get_stripe_transaction_details/route';
import Drawer_Shedcn_settings_cards_transactions from '../../Drawer_Shedcn_settings_cards_transactions/page';
import Loading_shed_cn_card from '../../loading_shedcn_card/page';
import No_data_skeleton from '../../No_data_skeleton/page';
import MyContext from "@/app/components/MyContext/route";
const options = {
  aspectRatio: 2,
  plugins: {
    legend: {
      display: true, // This removes the legend,
      position: 'right',
      labels: {
        font: {
          size: 10 // Change this to adjust legend text size
        }
      }
    }
  }
};
ChartJS.register(
  RadialLinearScale,
  ArcElement,   
  Tooltip,
  
);


export default function PolarChart() {
  const [loading,setloading]= useState(true);
  const [isnodata,setisnodata]= useState([] as any);
  const [description,setdescription]= useState("");
  const [stts,setstts]= useState("");
  const [dimension,setDimension]= useState("This Week (Last 7 days)");
  const {card_bank_reload,setcard_bank_reload}= useContext(MyContext)
  
  const data = {
    labels: [
      'Red',
      'Green',
      'Yellow',
      'Grey',
      'Blue',
      'Orange',
      'White',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)',
        'rgb(74, 162, 235)',
        'rgb(94, 162, 235)'
      ],
      hoverBackgroundColor:"black",
      circular:true,
      
    }],
  };
  const [data_,setData]=useState(data)

    
  var [days_sum,setDays_sum] = useState([] as any);
  var [days_name,setDays_name] = useState([] as any);
  var [weeks_sum,setWeeks_sum] = useState([] as any);
  var [weeks_name,setWeeks_name] = useState([] as any);
  var [months_sum,setMonths_sum] = useState([] as any);
  var [months_name,setMonths_name] = useState([] as any);
  var [activedays_sum,setactiveDays_sum] = useState([] as any);
  var [activedays_name,setactiveDays_name] = useState([] as any);
  var [activeweeks_sum,setactiveWeeks_sum] = useState([] as any);
  var [activeweeks_name,setactiveWeeks_name] = useState([] as any);
  var [activemonths_sum,setactiveMonths_sum] = useState([] as any);
  var [activemonths_name,setactiveMonths_name] = useState([] as any);

  useEffect(()=>{
    const myfun= async()=>{
      const data= await call_get_stripe_transaction_details();
      const data_arr= data.monthly.filter((x:any)=> (x.sum/100)!=0)
      setisnodata(data_arr)
      
      setloading(false)
      console.log(data_.datasets[0].data.length)
     
     if(data.monthly){setDays_sum(data.daily.map((x:any)=>(x.sum/100)));
     setDays_name(data.daily.map((x:any)=>x.name));
     setWeeks_sum(data.weekly.map((x:any)=>(x.sum/100)));
     setWeeks_name(data.weekly.map((x:any)=>x.j.toString()));
     setMonths_sum(data.monthly.map((x:any)=>(x.sum/100)));
     setMonths_name(data.monthly.map((x:any)=>x.name));

     setactiveDays_sum((data.daily.filter((x:any)=>(x.sum/100))).map((x:any)=>(x.sum/100)));
     setactiveDays_name((data.daily.filter((x:any)=>(x.sum/100))).map((x:any)=>x.name));
     setactiveWeeks_sum((data.weekly.filter((x:any)=>(x.sum/100))).map((x:any)=>(x.sum/100)));
     setactiveWeeks_name((data.weekly.filter((x:any)=>(x.sum/100).toString())).map((x:any)=>x.j.toString()));
     setactiveMonths_sum((data.monthly.filter((x:any)=>(x.sum/100))).map((x:any)=>(x.sum/100)));
     setactiveMonths_name((data.monthly.filter((x:any)=>(x.sum/100))).map((x:any)=>x.name));}
       



      if(data.daily){  setData({
          labels: data.daily.map((x:any)=>x.name).slice(0,7),
          datasets: [{
            label: 'Card Total Transactions',
            data: data.daily.map((x:any)=>(x.sum/100)).slice(0,7),
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(75, 192, 192)',
              'rgb(255, 205, 86)',
              'rgb(201, 203, 207)',
              'rgb(54, 162, 235)',
              'rgb(74, 162, 235)',
              'rgb(94, 162, 235)'
            ],
            hoverBackgroundColor:"black",
            circular:true,
            
          }],
        })
        setDimension("Last 7 Days")}
     
    }
    myfun();

    
  },[card_bank_reload])

  const handleClick=(dimension_type:string)=>{
   
    if(dimension_type=="Last 7 weeks"){

      setDimension("Last 7 weeks")
      var sums=weeks_sum.slice(0,7);
      var names= weeks_name.slice(0,7);
    }
    else if(dimension_type=="Last 7 Days"){
      
      setDimension("Last 7 Days")
      var sums=days_sum.slice(0,7);
      var names= days_name.slice(0,7);
    }
    else if(dimension_type=="Last 6 Months"){
      
      setDimension("Last 6 Months")
      var sums=months_sum.slice(0,7);
      var names= months_name.slice(0,7);
    }


    else if(dimension_type=="Last 7 Active Weeks"){

      setDimension("Last 7 Active Weeks")
      var sums=activeweeks_sum.slice(0,7);
      var names= activeweeks_name.slice(0,7);
    }
    else if(dimension_type=="Last 7 Active Days"){
      
      setDimension("Last 7 Active Days")
      var sums=activedays_sum.slice(0,7);
      var names= activedays_name.slice(0,7);
    }
    else if(dimension_type=="Last 6 Active Months"){
      
      setDimension("Last 6 Active Months")
      var sums=activemonths_sum.slice(0,7);
      var names= activemonths_name.slice(0,7);
    }

   console.log(sums,names)
    setData({
      labels: names,
      datasets: [{
        label: 'Card Total Transactions',
        data: sums,
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)',
          'rgb(74, 162, 235)',
          'rgb(94, 162, 235)'
        ],
        hoverBackgroundColor:"black",
        circular:true,
        
      }],
    })




  }
  return (
    <div className="h-full w-11/12   rounded-2xl bg-logo-surrounding">
      <div className="h-1/6 w-full flex justify-between items-center pl-5 text-sm text-custom-white ">
        <div className='h-full  flex items-center justify-center text-nowrap text-custom-size'>
          <h1>Cards Transaction Amount {dimension}:</h1>
        </div>
      <div className='h-full   w-1/3  flex flex-row-reverse'>
      <Drawer_Shedcn_settings_cards_transactions
        action={handleClick}
        heading={"nothing"}
        description={"nothing"}
        setStatus={setstts}
      />
      </div>
      </div>
      {loading?<div className="h-5/6 w-full flex items-center justify-center "><Loading_shed_cn_card/></div>:(isnodata.length==0)? 
      <div className='w-full h-8/12 bg-custom-grey-white'><No_data_skeleton/></div> 
      :<div className="h-5/6 w-full flex items-center justify-center ">
        <PolarArea data={data_} options={options} />
      </div>}
    </div>
  );
}
