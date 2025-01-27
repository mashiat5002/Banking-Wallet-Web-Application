"use client";
import React, { useContext, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import Drawer_Shedcn_settings_banks_transactions from "../../Drawer_Shedcn_settings_banks_transactions/page";
import { call_get_dwolla_transaction_details } from "@/app/(utils)/call_get_dwolla_transaction_details/route";
import MyContext from "../../MyContext/route";
import Loading_shed_cn_card from "../../loading_shedcn_card/page";
import No_data_skeleton from "../../No_data_skeleton/page";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const data = {
  labels: ["Jan", "Fab", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Total Bank Transaction",
      data: [],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      hoverBackgroundColor: "black",
      borderWidth: 2,
    },
  ],
};

const options = {
  aspectRatio: 0.9,
  plugins: {
    legend: {
      labels: {
        font: {
          size: 8, // Change the font size for the legend labels
        },
      },
    },
    tooltip: {
      bodyFont: {
        size: 8, // Optional: Change the font size for the tooltip text
      },
    },
  },
};
export default function Graph() {
  const {saving_balance_loading}= useContext(MyContext)
  const [loading,setloading]= useState(true);
    const [isnodata,setisnodata]= useState([] as any);
  const {card_bank_reload,setcard_bank_reload}= useContext(MyContext)

    const [stts,setstts]= useState("");
    const [dimension,setDimension]= useState("This Week (Last 7 days)");
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
          const data= await call_get_dwolla_transaction_details();
          const data_arr= data.monthly.filter((x:any)=> x.sum!=0)
          setisnodata(data_arr)
          setloading(false)
         if(data.monthly){setDays_sum(data.daily.map((x:any)=>x.sum));
         setDays_name(data.daily.map((x:any)=>x.name));
         setWeeks_sum(data.weekly.map((x:any)=>x.sum));
         setWeeks_name(data.weekly.map((x:any)=>x.j.toString()));
         setMonths_sum(data.monthly.map((x:any)=>x.sum));
         setMonths_name(data.monthly.map((x:any)=>x.name));
    
         setactiveDays_sum((data.daily.filter((x:any)=>x.sum)).map((x:any)=>x.sum));
         setactiveDays_name((data.daily.filter((x:any)=>x.sum)).map((x:any)=>x.name));
         setactiveWeeks_sum((data.weekly.filter((x:any)=>x.sum)).map((x:any)=>x.sum));
         setactiveWeeks_name((data.weekly.filter((x:any)=>x.sum.toString())).map((x:any)=>x.j.toString()));
         setactiveMonths_sum((data.monthly.filter((x:any)=>x.sum)).map((x:any)=>x.sum));
         setactiveMonths_name((data.monthly.filter((x:any)=>x.sum)).map((x:any)=>x.name));}
           
    
        if(data.monthly){ setData({
          labels: data.daily.map((x:any)=>x.name).slice(0,7),
          datasets: [
            {
              label: "Total Bank Transaction",
              data: data.daily.map((x:any)=>x.sum).slice(0,7),
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 205, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(201, 203, 207, 0.2)",
              ],
              borderColor: [
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)",
                "rgb(153, 102, 255)",
                "rgb(201, 203, 207)",
              ],
              hoverBackgroundColor: "black",
              borderWidth: 2,
            },
          ],
        })
    
        setDimension("Last 7 Days")}
          
         
        }
        myfun();
    
        
      },[saving_balance_loading,card_bank_reload])

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
    

       setData({
        labels: names,
        datasets: [
          {
            label: "Total Bank Transaction",
            data: sums,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 205, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(201, 203, 207, 0.2)",
            ],
            borderColor: [
              "rgb(255, 99, 132)",
              "rgb(255, 159, 64)",
              "rgb(255, 205, 86)",
              "rgb(75, 192, 192)",
              "rgb(54, 162, 235)",
              "rgb(153, 102, 255)",
              "rgb(201, 203, 207)",
            ],
            hoverBackgroundColor: "black",
            borderWidth: 2,
          },
        ],
      })
    
    
    
    
      }
  return (
    <div className="h-full w-full bg-logo-surrounding rounded-2xl ">
      <div className="h-1/6 w-full flex items-center pl-8 text-sm text-custom-white">


      <div className='h-full  flex items-center justify-center text-nowrap text-xs'>
          <h1>Bank Transaction Amount {dimension}:</h1>
        </div>
        <div className="h-full w-2/3  flex flex-row-reverse">
        <Drawer_Shedcn_settings_banks_transactions
        action={handleClick}
        heading={"nothing"}
        description={"nothing"}
        setStatus={setstts}
      />
        </div>
      </div>
      <div className="h-5/6 w-full flex items-center justify-center ">
        {loading?<div className="bg-logo-surrounding h-full w-10/12 flex items-center justify-center "><Loading_shed_cn_card/></div>:
        (isnodata.length==0)? <div className='w-full h-full bg-custom-grey-white'><No_data_skeleton/></div> :
        <div className="bg-logo-surrounding h-full w-10/12 flex items-center justify-center ">
          <Bar  data={data_} options={options} />
        </div>}
      </div>
    </div>
  );
}
