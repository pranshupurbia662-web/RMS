import React, { useEffect, useState } from "react";
import axios from "axios";

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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BargraphReport = () => {
  const [monthlyRevenue, setMonthlyRevenue] = useState(
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  );

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/invoices"
      );

      const revenue = new Array(12).fill(0);

      response.data.forEach((invoice) => {
        const month = new Date(
          invoice.createdAt
        ).getMonth();

        revenue[month] += invoice.grandTotal;
      });

      setMonthlyRevenue(revenue);
    } catch (error) {
      console.log(error);
    }
  };

  const data = {
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
        label: "Revenue",
        data: monthlyRevenue,
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
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BargraphReport;