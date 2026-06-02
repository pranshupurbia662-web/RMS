import React, { useEffect, useState } from "react";
import axios from "axios";

const ReportTopCard = () => {
  const [stats, setStats] = useState({
    revenue: 0,
    orders: 0,
    avgOrder: 0,
  });

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/invoices"
      );

      const invoices = response.data;

      const revenue = invoices.reduce(
        (sum, invoice) => sum + invoice.grandTotal,
        0
      );

      const orders = invoices.length;

      const avgOrder =
        orders > 0
          ? Math.round(revenue / orders)
          : 0;

      setStats({
        revenue,
        orders,
        avgOrder,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const top = [
    {
      id: 1,
      title: "Total Revenue",
      value: `₹${stats.revenue}`,
    },
    {
      id: 2,
      title: "Total Orders",
      value: stats.orders,
    },
    {
      id: 3,
      title: "Avg Order Value",
      value: `₹${stats.avgOrder}`,
    },
    {
      id: 4,
      title: "Invoices",
      value: stats.orders,
    },
  ];

  return (
    <div className="w-full p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {top.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl border border-[#7b5a11cf] p-5 shadow-[0_6px_20px_#D39A2350]"
          >
            <h2 className="text-gray-500 text-sm font-semibold mb-2">
              {item.title}
            </h2>

            <h3 className="text-3xl font-bold text-[#7b5a11]">
              {item.value}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportTopCard;