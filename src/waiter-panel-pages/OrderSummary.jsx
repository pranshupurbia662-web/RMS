import Header from "../waiter-components/Header"
import { useParams } from "react-router-dom"

import {
  Receipt,
  CreditCard,
  CheckCircle2,
} from "lucide-react"



function OrderSummary() {

  const { tableId } = useParams()
    return (

    <div className="min-h-screen bg-[#F8FAFC] pb-10">

      <Header step={3} />

      <div className="max-w-7xl mx-auto px-6 mt-10">

        <div className="bg-white rounded-[32px] border border-gray-200 shadow-sm overflow-hidden">

          <div className="bg-[#D4A017] px-8 py-7">

            <div className="flex items-center justify-between">

              <div>

                <h1 className="text-4xl font-bold text-white">

                  Order Summary

                </h1>

                <p className="text-yellow-100 mt-2 text-lg">

                  Final Billing for Table {tableId}

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

          <div className="grid grid-cols-12 gap-8 p-8">

            {/* LEFT SIDE */}

            <div className="col-span-12 lg:col-span-8">

              <div className="bg-[#fffaf0] rounded-3xl border border-gray-200 overflow-hidden">

                {/* TOP */}

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

            </div>



            {/* RIGHT SIDE */}

            <div className="col-span-12 lg:col-span-4">

              <div className="sticky top-6 space-y-6">

                <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">

                  <div className="bg-gray-900 px-6 py-5">

                    <div className="flex items-center gap-3">

                      <CreditCard
                        className="text-white"
                        size={28}
                      />

                      <h2 className="text-2xl font-bold text-white">

                        Bill Details

                      </h2>

                    </div>

                  </div>



                  {/* BODY */}

                  <div className="p-6 space-y-5">

                    <div className="flex items-center justify-between">

                      <p className="text-gray-600">

                        Subtotal

                      </p>

                      <p className="font-semibold text-lg">

                        ₹3,600

                      </p>

                    </div>



                    <div className="flex items-center justify-between">

                      <p className="text-gray-600">

                        GST (18%)

                      </p>

                      <p className="font-semibold text-lg">

                        ₹648

                      </p>

                    </div>



                    <div className="flex items-center justify-between">

                      <p className="text-gray-600">

                        Service Charge

                      </p>

                      <p className="font-semibold text-lg">

                        ₹250

                      </p>

                    </div>
                    
                     <div className="border-t border-gray-200 pt-5 flex items-center justify-between">

                      <h3 className="text-2xl font-bold text-gray-900">

                        Grand Total

                      </h3>

                      <h3 className="text-3xl font-bold text-[#D4A017]">

                        ₹4,498

                      </h3>

                    </div>

                    <button

                      className="

                      w-full
                      mt-4

                      bg-[#D4A017]
                      hover:bg-yellow-700

                      text-white

                      py-4
                      rounded-2xl

                      font-semibold
                      text-lg

                      transition-all
                      duration-300

                      hover:scale-[1.02]

                      "

                    >

                      Generate Final Bill

                    </button>

                  </div>

                </div>



                {/*PAYMENT*/ }

                <div className="bg-[#fffaf0] border border-gray-200 rounded-3xl p-6">

                  <div className="flex items-start gap-4">

                    <div
                      className="

                      bg-green-100
                      p-3
                      rounded-2xl

                      "
                    >

                      <CheckCircle2
                        className="text-green-600"
                        size={28}
                      />

                    </div>



                    <div>

                      <h3 className="text-xl font-bold text-gray-800">

                        Ready For Payment

                      </h3>

                      <p className="text-gray-500 mt-2 leading-relaxed">

                        Review order details and generate
                        customer invoice for payment processing.

                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  )

}

export default OrderSummary