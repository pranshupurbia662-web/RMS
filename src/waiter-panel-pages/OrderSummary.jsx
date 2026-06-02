import { useState } from "react";
import axios from "axios";
import Header from "../waiter-components/Header";
import { Receipt } from "lucide-react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

function OrderSummary() {
  const { tableId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [cartItems, setCartItems] = useState(
    location.state?.cart || []
  );

  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item._id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems(
      cartItems
        .map((item) =>
          item._id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const placeOrder = async () => {
    try {
      await axios.post("http://localhost:5000/api/orders", {
        tableNumber: tableId,
        items: cartItems,
        totalAmount,
        status: "Received",
      });

      navigate(`/waiter-panel/order-placed/${tableId}`);
    } catch (error) {
      console.log(error);
      alert("Failed To Place Order");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-10">
      <Header step={3} />

      <div className="max-w-6xl mx-auto px-6 mt-10">
        <div className="bg-white rounded-[32px] border border-gray-200 shadow-sm overflow-hidden">

          {/* Header */}
          <div className="bg-[#D4A017] px-8 py-7">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold text-white">
                  Order Summary
                </h1>
                <p className="text-yellow-100 mt-2 text-lg">
                  Order details for Table {tableId}
                </p>
              </div>
              <div className="bg-white/20 p-4 rounded-2xl">
                <Receipt size={38} className="text-white" />
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-8">

            {/* Items List */}
            <div className="bg-[#fffaf0] rounded-3xl border border-gray-200 overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800">
                  Ordered Items
                </h2>
              </div>

              <div className="p-6 space-y-6">
                {cartItems.length === 0 ? (
                  <p className="text-center text-gray-500">
                    No items added yet
                  </p>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={item._id}
                      className="flex items-center justify-between border-b border-gray-100 pb-5"
                    >
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-4 mt-3">
                          <button
                            onClick={() => decreaseQty(item._id)}
                            className="bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded-full font-bold"
                          >
                            -
                          </button>
                          <span className="font-bold text-lg">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => increaseQty(item._id)}
                            className="bg-green-500 hover:bg-green-600 text-white w-8 h-8 rounded-full font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <p className="text-xl font-bold text-[#D4A017]">
                        ₹{item.price * item.quantity}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Total */}
            <div className="mt-6 bg-[#fffaf0] rounded-3xl border border-gray-200 p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">
                  Total Amount
                </h2>
                <h2 className="text-3xl font-bold text-[#D4A017]">
                  ₹{totalAmount}
                </h2>
              </div>
            </div>

            {/* Place Order Button */}
            <div className="flex justify-center mt-10">
              <button
                onClick={placeOrder}
                className="bg-[#D4A017] hover:bg-yellow-700 text-white px-14 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-md"
              >
                Place Order
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;