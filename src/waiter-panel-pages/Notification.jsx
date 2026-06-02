import Header from "../waiter-components/Header";


import {
  Bell,
  ChefHat,
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

const orderData = location.state;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      <Header step={5} />

      <div className="max-w-4xl mx-auto px-6 mt-14">

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
                  Notifications
                </h1>

                <p className="text-yellow-100 mt-2 text-lg">
                  Restaurant order updates
                </p>

              </div>

              <div
                className="
                bg-white/20
                p-4
                rounded-2xl
                "
              >

                <Bell
                  size={38}
                  className="text-white"
                />

              </div>

            </div>

          </div>

          <div className="p-10">

            <div
              className="
              bg-[#fffaf0]
              border
              border-gray-200
              rounded-3xl
              p-8
              text-center
              "
            >

              <div
                className="
                w-20
                h-20
                rounded-full
                bg-green-100
                flex
                items-center
                justify-center
                mx-auto
                mb-6
                "
              >

                <ChefHat
                  size={40}
                  className="text-green-600"
                />

              </div>

              <h2 className="text-3xl font-bold text-gray-800">
                Table {tableId} is Ready To Serve
              </h2>

              <p className="text-gray-500 mt-4 text-lg">
                Kitchen has completed the order.
                Please serve the customer.
              </p>

              <button
               onClick={() =>
                  navigate(`/waiter-panel/generate-bill/${tableId}`, {
                    state: orderData,
                  })
                }
                className="
                mt-8
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
                "
              >
                View Details
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Notifications;