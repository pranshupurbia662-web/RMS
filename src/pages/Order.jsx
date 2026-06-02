import React, { useEffect, useState } from "react";
import axios from "axios";

import OrdertopCard from "../components/OrdertopCard";
import OrderTable from "../components/OrderTable";

const Order = () => {

  const [orders, setOrders] = useState([]);
  const [showAll, setShowAll] = useState(false);

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

  return (

    <div>

      <div className="text-[#c3871c] font-bold text-3xl">

        <h1 className="p-4 text-4xl">
          Orders
        </h1>

      </div>

      <OrdertopCard orders={orders} />

      <OrderTable
        orders={orders}
        showAll={showAll}
      />

      {!showAll && (

        <div className="w-full flex justify-end p-10">

          <button
            onClick={() => setShowAll(true)}
            className="
              bg-[#D39A23]
              hover:bg-[#b8831d]
              text-white
              font-semibold
              px-6
              py-3
              rounded-lg
              shadow-md
              transition-all
              duration-300
              cursor-pointer
            "
          >
            View All Orders
          </button>

        </div>

      )}

    </div>

  );

};

export default Order;