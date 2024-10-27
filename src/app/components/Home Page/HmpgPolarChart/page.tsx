"use client"
import React from 'react'
import { PolarArea } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement, 
  Tooltip,

} from 'chart.js';

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

const data = {
  labels: [
    'Red',
    'Green',
    'Yellow',
    'Grey',
    'Blue'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [16, 16, 7, 3, 14],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(75, 192, 192)',
      'rgb(255, 205, 86)',
      'rgb(201, 203, 207)',
      'rgb(54, 162, 235)'
    ],
    hoverBackgroundColor:"black",
    circular:true,
    
  }],
};
export default function PolarChart() {
  return (
    <div className='h-full w-11/12  rounded-2xl bg-logo-surrounding'>
      <div className='h-1/6 w-full flex items-center pl-5 text-sm text-custom-white '>
        <h1>Annual Profit</h1>
      </div>
      <div className='h-5/6 w-full flex items-center justify-center '>
      <PolarArea data={data} options={options}/>

      </div>
      
    </div>
  )
}
