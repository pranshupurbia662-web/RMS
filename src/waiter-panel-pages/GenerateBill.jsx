import Header from "../waiter-components/Header"

import {
  Receipt,
  CreditCard,
} from "lucide-react"



function GenerateBill() {

  return (

    <div className="min-h-screen bg-[#F8FAFC] pb-10">

      <Header step={6} />



      <div className="max-w-5xl mx-auto px-6 mt-10">

        <div

          className="

          bg-white

          rounded-[32px]

          border
          border-gray-200

          shadow-sm
          overflow-hidden

          "

        >


          <div

            className="

            bg-[#D4A017]

            px-8
            py-8

            "

          >

            <div className="flex items-center justify-between">

              <div>

                <h1 className="text-4xl font-bold text-white">

                  Generate Bill

                </h1>

                <p className="text-yellow-100 mt-2 text-lg">

                  Final customer invoice

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

            <div

              className="

              bg-[#fffaf0]
              border
              border-gray-200
              rounded-3xl
              p-6
              mb-8"
              >
                <h2 className="text-3xl font-bold text-gray-800">
                  Table 1
                  </h2>

              <p className="text-gray-500 mt-2">

                Customer order invoice details

              </p>

            </div>

            <div

              className="

              bg-white

              border
              border-gray-200

              rounded-3xl

              overflow-hidden

              "

            >
 <div className="grid grid-cols-3 bg-gray-100 px-6 py-4">

                <h3 className="font-bold text-gray-700 text-lg">

                  Item

                </h3>

                <h3 className="font-bold text-gray-700 text-lg text-center">

                  Qty

                </h3>

                <h3 className="font-bold text-gray-700 text-lg text-right">

                  Price

                </h3>

              </div>

              <div className="grid grid-cols-3 px-6 py-5 border-b border-gray-100">

                <p className="text-gray-800 font-medium">

                  Butter Chicken

                </p>

                <p className="text-center text-gray-600">

                  1

                </p>

                <p className="text-right font-semibold text-[#D4A017]">

                  ₹980

                </p>

              </div>

              <div className="grid grid-cols-3 px-6 py-5 border-b border-gray-100">

                <p className="text-gray-800 font-medium">

                  Paneer Tikka

                </p>

                <p className="text-center text-gray-600">

                  2

                </p>

                <p className="text-right font-semibold text-[#D4A017]">

                  ₹1240

                </p>

              </div>

              <div className="grid grid-cols-3 px-6 py-5">

                <p className="text-gray-800 font-medium">

                  Chocolate Lava Cake

                </p>

                <p className="text-center text-gray-600">

                  1

                </p>

                <p className="text-right font-semibold text-[#D4A017]">

                  ₹690

                </p>

              </div>

            </div>

            <div

              className="

              mt-8

              bg-[#fffaf0]

              border
              border-gray-200

              rounded-3xl

              p-8

              "

            >

              <div className="space-y-5">

                <div className="flex items-center justify-between">

                  <p className="text-gray-600 text-lg">

                    Subtotal

                  </p>

                  <p className="font-semibold text-xl">

                    ₹2910

                  </p>

                </div>



                <div className="flex items-center justify-between">

                  <p className="text-gray-600 text-lg">

                    GST (18%)

                  </p>

                  <p className="font-semibold text-xl">

                    ₹523

                  </p>

                </div>



                <div className="border-t border-gray-300 pt-5 flex items-center justify-between">

                  <h2 className="text-3xl font-bold text-gray-800">

                    Grand Total

                  </h2>

                  <h2 className="text-4xl font-bold text-[#D4A017]">

                    ₹3433

                  </h2>

                </div>

              </div>

              <div className="flex justify-center mt-10">

                <button

                  className="

                  bg-[#D4A017]
                  hover:bg-yellow-700

                  text-white

                  px-16
                  py-4

                  rounded-2xl

                  text-lg
                  font-semibold

                  transition-all
                  duration-300

                  hover:scale-105

                  flex
                  items-center
                  gap-3

                  "

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

  )

}

export default GenerateBill