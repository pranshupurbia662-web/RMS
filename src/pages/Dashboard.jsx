import React, { useEffect, useState } from "react";
import axios from "axios";

import AdminCardTop from "../components/AdminCardTop";
import OrderTable from "../components/OrderTable";

const Dashboard = () => {

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

      <AdminCardTop orders={orders} />

      <div className="p-6">

        <OrderTable
          orders={orders}
          showAll={false}
        />

      </div>

    </div>

  );
};

export default Dashboard;