import Header from "../waiter-components/Header";

import {
  CheckCircle2,
} from "lucide-react";

import {
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";

function OrderPlaced() {
  const navigate = useNavigate();

  const { tableId } = useParams();

  const location = useLocation();

  const orderId = location.state?.orderId;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Header step={4} />

      <div className="max-w-3xl mx-auto px-6 mt-16">
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
            py-12
            px-8
            text-center
            "
          >
            <div
              className="
              w-24
              h-24
              rounded-full
              bg-white/20
              flex
              items-center
              justify-center
              mx-auto
              mb-6
              "
            >
              <CheckCircle2
                size={56}
                className="text-white"
              />
            </div>

            <h1 className="text-5xl font-bold text-white">
              Order Placed
            </h1>

            <p className="text-yellow-100 text-lg mt-4">
              Table {tableId} order placed successfully
            </p>
          </div>

          <div className="p-10 text-center">
            <div
              className="
              bg-[#fffaf0]
              border
              border-gray-200
              rounded-3xl
              p-8
              "
            >
              <h2 className="text-3xl font-bold text-gray-800">
                Order Confirmed
              </h2>

              <p className="text-gray-500 mt-4 leading-relaxed">
                The order has been sent to the kitchen.
                Food preparation will begin shortly.
              </p>

              <div className="mt-8">
                <p className="text-gray-500">
                  Estimated Time
                </p>

                <h3 className="text-4xl font-bold text-[#D4A017] mt-2">
                  20 - 25 Min
                </h3>
              </div>
            </div>

            <button
              onClick={() =>
                navigate(`/waiter-panel/notifications/${tableId}`, {
                  state: {
                    orderId,
                  },
                })
              }
              className="
              mt-10
              bg-[#D4A017]
              hover:bg-yellow-700
              text-white
              px-20
              py-4
              rounded-2xl
              text-lg
              font-semibold
              transition-all
              duration-300
              hover:scale-105
              "
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderPlaced;