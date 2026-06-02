import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const DoughnutChart = () => {
  const [paymentData, setPaymentData] =
    useState([0, 0, 0, 0]);

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/invoices"
      );

      let upi = 0;
      let cash = 0;
      let card = 0;
      let other = 0;

      response.data.forEach((invoice) => {
        const payment =
          invoice.paymentMode?.toLowerCase();

        if (payment === "upi") upi++;
        else if (payment === "cash") cash++;
        else if (payment === "card") card++;
        else other++;
      });

      setPaymentData([
        upi,
        cash,
        card,
        other,
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  const data = {
    labels: [
      "UPI",
      "Cash",
      "Card",
      "Other",
    ],

    datasets: [
      {
        label: "Payments",
        data: paymentData,

        backgroundColor: [
          "#3B82F6",
          "#10B981",
          "#F59E0B",
          "#EF4444",
        ],

        borderWidth: 1,
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
  };

  return (
    <div className="w-full">
      <div className="bg-white p-6 rounded-3xl shadow-lg h-[420px] flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-[#7B5A11] mb-6 text-center">
          Payment Methods
        </h2>

        <div className="w-full h-[280px]">
          <Doughnut
            data={data}
            options={options}
          />
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;