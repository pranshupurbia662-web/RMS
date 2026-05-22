import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

// REGISTER

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BargraphReport = () => {

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
    ],

    datasets: [
      {
        label: "Revenue",

        data: [
          12000,
          19000,
          15000,
          22000,
          18000,
          25000,
        ],

        backgroundColor: "#B68B1F",

        borderRadius: 8,

        barThickness: 30,
      },
    ],
  };

  const options = {
    responsive: true,

    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "bottom",
      },
    },

    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (

    <div className="bg-white rounded-3xl shadow-lg p-6 w-full h-[420px]">

      <h2 className="text-2xl font-bold text-[#7B5A11] mb-6">
        Monthly Revenue
      </h2>

      <div className="w-full h-[320px]">

        <Bar
          data={data}
          options={options}
        />

      </div>

    </div>
  );
};

export default BargraphReport;