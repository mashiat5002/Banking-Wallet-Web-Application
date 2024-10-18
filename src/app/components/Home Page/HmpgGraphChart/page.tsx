"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const data = {
  labels: ["Jan", "Fab", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Annual Profits",
      data: [65, 59, 80, 81, 56, 55, 40],
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
  return (
    <div className="h-full w-full bg-logo-surrounding rounded-2xl ">
      <div className="h-1/6 w-full flex items-center pl-8 text-sm text-custom-white">
        <h1>Activity Summary</h1>
      </div>
      <div className="h-5/6 w-full flex items-center justify-center ">
        <div className="bg-logo-surrounding h-full w-10/12 flex items-center justify-center ">
          <Bar  data={data} options={options} />
        </div>
      </div>
    </div>
  );
}
