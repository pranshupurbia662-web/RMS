import React, { useEffect, useState } from "react";
import axios from "axios";

const OrdertopCard = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    fetchOrders();

  }, []);

  const fetchOrders = async () => {

    try {

      const { data } = await axios.get(
        "http://localhost:5000/api/orders"
      );

      setOrders(data);

    } catch (error) {

      console.log(error);

    }

  };

  const totalRevenue = orders.reduce(
    (sum, order) => sum + order.totalAmount,
    0
  );

  const totalOrders = orders.length;

  const pendingOrders = orders.filter(
    (order) =>
      order.status === "Received" ||
      order.status === "Preparing"
  ).length;

  const completedOrders = orders.filter(
    (order) => order.status === "Ready"
  ).length;

  const avgOrderValue =
    totalOrders > 0
      ? Math.round(totalRevenue / totalOrders)
      : 0;

  const top = [
    {
      id: 1,
      title: "Total Revenue",
      value: `₹${totalRevenue}`,
    },
    {
      id: 2,
      title: "Total Orders",
      value: totalOrders,
    },
    {
      id: 3,
      title: "Avg Order Value",
      value: `₹${avgOrderValue}`,
    },
    {
      id: 4,
      title: "Pending Orders",
      value: pendingOrders,
    },
    {
      id: 5,
      title: "Completed Orders",
      value: completedOrders,
    },
  ];

  return (

    <div className="w-full py-4">

      <div className="grid grid-cols-2 xl:grid-cols-5 gap-3 md:gap-6">

        {top.map((item) => (

          <div
            key={item.id}
            className="bg-white rounded-2xl md:rounded-3xl border border-[#7b5a11cf] p-3 md:p-5 shadow-[0_6px_20px_#D39A2350] hover:-translate-y-1 hover:scale-105 transition-all duration-300"
          >

            <h2 className="text-gray-500 text-[11px] md:text-sm font-semibold mb-2">
              {item.title}
            </h2>

            <h3 className="text-xl md:text-3xl font-bold text-[#7b5a11]">
              {item.value}
            </h3>

          </div>

        ))}

      </div>

    </div>

  );

};

export default OrdertopCard;