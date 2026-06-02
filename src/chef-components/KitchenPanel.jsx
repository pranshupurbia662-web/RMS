import { useEffect, useState } from "react";
import axios from "axios";

import Column from "./Column";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

function KitchenPanel() {

  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/orders"
      );

      setOrders(response.data);

    } catch (error) {

      console.log("Order Fetch Error:", error);

    }

  };

  const updateStatus = async (id, status) => {

    try {

      await axios.put(
        `http://localhost:5000/api/orders/${id}`,
        { status }
      );

      fetchOrders();

    } catch (error) {

      console.log("Status Update Error:", error);

    }

  };

  return (

    <div className="min-h-screen bg-[#f5efe6]">

      <div className="fixed top-0 left-0 w-full z-50 bg-[#f7f3ef] border-b border-[#eadfcb] shadow-sm">

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-full bg-[#f8edd5ce] border border-[#d4a017] flex items-center justify-center text-[#9a6b00] font-bold">
              C
            </div>

            <div>

              <h2 className="text-lg font-semibold text-[#3b260c]">
                Chef Panel
              </h2>

              <p className="text-sm text-gray-500">
                Chef
              </p>

            </div>

          </div>

          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-red-500 hover:bg-red-50 px-4 py-2 rounded-xl"
          >
            <LogOut size={20} />
            Logout
          </button>

        </div>

      </div>

      <div className="pt-28 px-4 pb-6">

        <div className="max-w-7xl mx-auto bg-[#f8f1e7] p-8 rounded-3xl shadow-lg">

          <h1 className="text-center text-2xl font-bold text-[#b8860b] mb-8">
            KITCHEN PANEL
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            <Column
              title="RECEIVED"
              color="bg-[#fde68a]"
              orders={
                Array.isArray(orders)
                  ? orders.filter(
                      (order) => order.status === "Received"
                    )
                  : []
              }
              updateStatus={updateStatus}
            />

            <Column
              title="PREPARING"
              color="bg-[#fde68a]"
              orders={
                Array.isArray(orders)
                  ? orders.filter(
                      (order) => order.status === "Preparing"
                    )
                  : []
              }
              updateStatus={updateStatus}
            />

            <Column
              title="READY"
              color="bg-[#fde68a]"
              orders={
                Array.isArray(orders)
                  ? orders.filter(
                      (order) => order.status === "Ready"
                    )
                  : []
              }
              updateStatus={updateStatus}
            />

          </div>

        </div>

      </div>

    </div>

  );

}

export default KitchenPanel;