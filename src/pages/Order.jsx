import React, { useEffect, useState } from "react";
import axios from "axios";

import OrdertopCard from "../components/OrdertopCard";
import OrderTable from "../components/OrderTable";
import ViewOrder from "../components/ViewOrder";

const Order = () => {

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

  return (

    <div>

      <div className="text-[#c3871c] font-bold text-3xl">
        <h1 className="p-4 text-4xl">
          Orders
        </h1>
      </div>

      <OrdertopCard orders={orders} />

      <OrderTable orders={orders} />

      <ViewOrder />

    </div>

  );
};

export default Order;