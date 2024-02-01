"use client";
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
Chartjs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// <Bar
//   options={...}
//   data={...}
//   {...props}
// />

export default function BarChat() {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          data: [0, 5.0, 10.0, 20.0, 30.0, 40.0, 50.0],
          borderColor: "",
          backgroundColor: "hsla(165, 59%, 50%, 1), hsla(165, 59%, 50%, 0)",
          borderRadius: {
            topLeft: 10,
            topRight: 10,
            bottomLeft: 0,
            bottomRight: 0,
          },
          barPercentage: 0.5,
        //   barThickness: 6,
          //   maxBarThickness: 8,
          //   minBarLength: 2,
        },
      ],
    });
  }, []);
  useEffect(() => {
    setChartOptions({
      plugins: {
        // legend: {
        //   position: 'top' as const,
        // },
        // title: {
        //   display: true,
        //   text: 'Chart.js Bar Chart',
        // },
      },
      scales: {
        x: {
          barPercentage: 0.5, // Adjust this value to control the width of the bars
          categoryPercentage: 0.9, // Adjust this value to control the gap between bars
        },
        y: {
          beginAtZero: true,
        },
      },
    });
  }, []);

  return (
    <>
      <div className="w-[43.5rem] bg-white h-[18rem] flex justify-between items-end">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
}
