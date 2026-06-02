import { useEffect, useState } from "react";
import axios from "axios";

import Header from "../waiter-components/Header";

import {
  Bell,
  ChefHat,
  Clock,
  CheckCircle2,
} from "lucide-react";

import {
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";

function Notifications() {
  const navigate = useNavigate();
  const { tableId } = useParams();
  const location = useLocation();

  const orderId = location.state?.orderId;

  const [order, setOrder] = useState(null);

  const fetchOrder = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/orders");

      const currentOrder = response.data.find(
        (item) => item._id === orderId
      );

      setOrder(currentOrder);
    } catch (error) {
      console.log("Order fetch error:", error);
    }
  };

  useEffect(() => {
    fetchOrder();

    const interval = setInterval(fetchOrder, 3000);

    return () => clearInterval(interval);
  }, [orderId]);

  const getTitle = () => {
    if (!order) return `Table ${tableId} Order Status`;

    if (order.status === "Received") {
      return `Table ${order.tableNumber} Order Received`;
    }

    if (order.status === "Preparing") {
      return `Table ${order.tableNumber} Food Is Preparing`;
    }

    if (order.status === "Ready") {
      return `Table ${order.tableNumber} is Ready To Serve`;
    }

    return `Table ${order.tableNumber} Order Status`;
  };

  const getDescription = () => {
    if (!order) return "Fetching latest order status...";

    if (order.status === "Received") {
      return "Kitchen has received the order. Preparation will start soon.";
    }

    if (order.status === "Preparing") {
      return "Chef is currently preparing the food.";
    }

    if (order.status === "Ready") {
      return "Kitchen has completed the order. You can add more items or generate the final bill.";
    }

    return "Waiting for latest kitchen update.";
  };

  const getIcon = () => {
    if (order?.status === "Ready") {
      return <CheckCircle2 size={40} className="text-green-600" />;
    }

    if (order?.status === "Preparing") {
      return <ChefHat size={40} className="text-yellow-600" />;
    }

    return <Clock size={40} className="text-blue-600" />;
  };

  const getIconBg = () => {
    if (order?.status === "Ready") return "bg-green-100";
    if (order?.status === "Preparing") return "bg-yellow-100";
    return "bg-blue-100";
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header step={5} />

      <div className="max-w-4xl mx-auto px-6 mt-14">
        <div className="bg-white rounded-[32px] border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-[#D4A017] px-8 py-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold text-white">
                  Notifications
                </h1>

                <p className="text-yellow-100 mt-2 text-lg">
                  Restaurant order updates
                </p>
              </div>

              <div className="bg-white/20 p-4 rounded-2xl">
                <Bell size={38} className="text-white" />
              </div>
            </div>
          </div>

          <div className="p-10">
            <div className="bg-[#fffaf0] border border-gray-200 rounded-3xl p-8 text-center">
              <div
                className={`w-20 h-20 rounded-full ${getIconBg()} flex items-center justify-center mx-auto mb-6`}
              >
                {getIcon()}
              </div>

              <h2 className="text-3xl font-bold text-gray-800">
                {getTitle()}
              </h2>

              <p className="text-gray-500 mt-4 text-lg">
                {getDescription()}
              </p>

              {order?.status === "Ready" ? (
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                  <button
                    onClick={() =>
                      navigate(`/waiter-panel/add-order/${tableId}`, {
                        state: {
                          orderId,
                          addMore: true,
                        },
                      })
                    }
                    className="bg-white border-2 border-[#D4A017] text-[#D4A017] hover:bg-[#fff4d6] px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Add More Order
                  </button>

                  <button
                    onClick={() =>
                      navigate(`/waiter-panel/generate-bill/${tableId}`, {
                        state: {
                          orderId,
                        },
                      })
                    }
                    className="bg-[#D4A017] hover:bg-yellow-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Generate Bill
                  </button>
                </div>
              ) : (
                <p className="mt-8 text-gray-500 font-medium">
                  Waiting for kitchen update...
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;