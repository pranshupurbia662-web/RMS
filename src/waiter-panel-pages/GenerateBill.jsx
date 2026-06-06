import { useEffect, useState } from "react";
import axios from "axios";

import Header from "../waiter-components/Header";

import {
  useParams,
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  Receipt,
  CreditCard,
} from "lucide-react";

function GenerateBill() {
  const { tableId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const orderId = location.state?.orderId;

  const [order, setOrder] = useState(null);
  const [paymentMode, setPaymentMode] = useState("Cash");

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/orders");

        const currentOrder = response.data.find(
          (item) => item._id === orderId
        );

        setOrder(currentOrder);
      } catch (error) {
        console.log("Bill Fetch Error:", error);
      }
    };

    fetchOrder();
  }, [orderId]);

  const cartItems = order?.items || [];
  const subtotal = order?.totalAmount || 0;

  const gst = Math.round(subtotal * 0.18);
  const grandTotal = subtotal + gst;

  const completeBill = async () => {
  try {

    // Invoice Create
    await axios.post(
      "http://localhost:5000/api/invoices",
      {
        tableNumber: Number(tableId),
        items: cartItems,
        subtotal,
        gst,
        grandTotal,
        paymentMode,
      }
    );

    // Order Complete Mark Karo
    await axios.put(
      `http://localhost:5000/api/orders/${orderId}`,
      {
        status: "Completed",
      }
    );

    // Table Available Karo
    const tableResponse = await axios.get(
      "http://localhost:5000/api/tables"
    );

    const currentTable = tableResponse.data.find(
      (table) =>
        table.tableNo === Number(tableId)
    );

    if (currentTable) {

      await axios.patch(
        `http://localhost:5000/api/tables/${currentTable._id}/status`,
        {
          status: "Available",
        }
      );

    }

    alert("Invoice generated successfully");

    navigate("/waiter-panel");

  } catch (error) {

    console.log("Invoice Error:", error);

    alert("Failed to generate invoice");

  }
};
  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-10">
      <Header step={6} />

      <div className="max-w-5xl mx-auto px-6 mt-10">
        <div className="bg-white rounded-[32px] border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-[#D4A017] px-8 py-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold text-white">
                  Generate Bill
                </h1>

                <p className="text-yellow-100 mt-2 text-lg">
                  Final customer invoice
                </p>
              </div>

              <div className="bg-white/20 p-4 rounded-2xl">
                <Receipt size={38} className="text-white" />
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="bg-[#fffaf0] border border-gray-200 rounded-3xl p-6 mb-8">
              <h2 className="text-3xl font-bold text-gray-800">
                Table {order?.tableNumber || tableId}
              </h2>

              <p className="text-gray-500 mt-2">
                Customer order invoice details
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden">
              <div className="grid grid-cols-3 bg-gray-100 px-6 py-4">
                <h3 className="font-bold text-gray-700 text-lg">Item</h3>

                <h3 className="font-bold text-gray-700 text-lg text-center">
                  Qty
                </h3>

                <h3 className="font-bold text-gray-700 text-lg text-right">
                  Price
                </h3>
              </div>

              {cartItems.length === 0 ? (
                <p className="text-center text-gray-500 py-6">
                  No items found
                </p>
              ) : (
                cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-3 px-6 py-5 border-b border-gray-100"
                  >
                    <p className="text-gray-800 font-medium">
                      {item.name}
                    </p>

                    <p className="text-center text-gray-600">
                      {item.quantity}
                    </p>

                    <p className="text-right font-semibold text-[#D4A017]">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>
                ))
              )}
            </div>

            <div className="mt-8 bg-[#fffaf0] border border-gray-200 rounded-3xl p-8">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <p className="text-gray-600 text-lg">Subtotal</p>

                  <p className="font-semibold text-xl">
                    ₹{subtotal}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-gray-600 text-lg">GST (18%)</p>

                  <p className="font-semibold text-xl">
                    ₹{gst}
                  </p>
                </div>

                <div className="border-t border-gray-300 pt-5 flex items-center justify-between">
                  <h2 className="text-3xl font-bold text-gray-800">
                    Grand Total
                  </h2>

                  <h2 className="text-4xl font-bold text-[#D4A017]">
                    ₹{grandTotal}
                  </h2>
                </div>
              </div>

              <div className="mt-8">
                <label className="block text-gray-700 font-semibold mb-3">
                  Select Payment Method
                </label>

                <select
                  value={paymentMode}
                  onChange={(e) => setPaymentMode(e.target.value)}
                  className="w-full border border-gray-300 rounded-2xl px-5 py-4 text-lg focus:outline-none focus:border-[#D4A017]"
                >
                  <option value="Cash">Cash</option>
                  <option value="UPI">UPI</option>
                  <option value="Card">Card</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="flex justify-center mt-10">
                <button
                  onClick={completeBill}
                  className="bg-[#D4A017] hover:bg-yellow-700 text-white px-16 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-3"
                >
                  <CreditCard size={22} />
                  Generate Invoice
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenerateBill;