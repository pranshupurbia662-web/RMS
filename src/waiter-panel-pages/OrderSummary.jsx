import Header from "../waiter-components/Header"

import {
  Receipt,
} from "lucide-react"

import {
  useParams,
  useNavigate,
} from "react-router-dom"



function OrderSummary() {

  const { tableId } = useParams()

  const navigate = useNavigate()



  return (

    <div className="min-h-screen bg-[#F8FAFC] pb-10">

      <Header step={3} />

      <div className="max-w-6xl mx-auto px-6 mt-10">
          <div className="bg-white rounded-[32px] border border-gray-200 shadow-sm overflow-hidden">


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



              <div

                className="

                bg-white/20
                p-4
                rounded-2xl

                "

              >

                <Receipt
                  size={38}
                  className="text-white"
                />

              </div>

            </div>

          </div>

          <div className="p-8">

            <div className="bg-[#fffaf0] rounded-3xl border border-gray-200 overflow-hidden">

              <div className="px-6 py-5 border-b border-gray-200">

                <h2 className="text-2xl font-bold text-gray-800">

                  Ordered Items

                </h2>

              </div>

              <div className="p-6 space-y-6">

                <div className="flex items-center justify-between border-b border-gray-100 pb-5">

                  <div>

                    <h3 className="text-xl font-semibold text-gray-800">

                      Vanilla Caramel Frappe

                    </h3>

                    <p className="text-gray-500 mt-1">

                      Quantity : 2

                    </p>

                  </div>

                  <p className="text-xl font-bold text-[#D4A017]">

                    ₹620

                  </p>

                </div>

<div className="flex items-center justify-between border-b border-gray-100 pb-5">

                  <div>

                    <h3 className="text-xl font-semibold text-gray-800">

                      Paneer Tikka

                    </h3>

                    <p className="text-gray-500 mt-1">

                      Quantity : 1

                    </p>

                  </div>

                  <p className="text-xl font-bold text-[#D4A017]">

                    ₹620

                  </p>

                </div>

                <div className="flex items-center justify-between border-b border-gray-100 pb-5">

                  <div>

                    <h3 className="text-xl font-semibold text-gray-800">

                      Butter Chicken

                    </h3>

                    <p className="text-gray-500 mt-1">

                      Quantity : 1

                    </p>

                  </div>

                  <p className="text-xl font-bold text-[#D4A017]">

                    ₹980

                  </p>

                </div>

                <div className="flex items-center justify-between">

                  <div>

                    <h3 className="text-xl font-semibold text-gray-800">

                      Chocolate Lava Cake

                    </h3>

                    <p className="text-gray-500 mt-1">

                      Quantity : 2

                    </p>

                  </div>

                  <p className="text-xl font-bold text-[#D4A017]">

                    ₹1,380

                  </p>

                </div>

              </div>

            </div>

            <div className="flex justify-center mt-10">

              <button
                  onClick={() => {
                    console.log("Navigating...");
                    navigate(`/waiter-panel/order-placed/${tableId}`);
                  }}
                  className="
                    bg-[#D4A017]
                    hover:bg-yellow-700
                    text-white
                    px-14
                    py-4
                    rounded-2xl
                    text-lg
                    font-semibold
                    transition-all
                    duration-300
                    hover:scale-105
                    shadow-md
                  "
                >
                  Place Order
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  )

}

export default OrderSummary