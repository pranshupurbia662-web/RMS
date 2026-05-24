import Column from "./Column"
import { LogOut } from "lucide-react"
import { useNavigate } from "react-router-dom"

function KitchenPanel() {

  const receivedOrders = [
    { id: 1023, items: 2, table: 4, time: "2:30 PM" },
    { id: 1026, items: 3, table: 7, time: "2:35 PM" }
  ]

  const preparingOrders = [
    { id: 1025, items: 4, table: 2, time: "2:15 PM" },
    { id: 1027, items: 2, table: 5, time: "2:20 PM" }
  ]

  const readyOrders = [
    { id: 1022, items: 2, table: 1, time: "1:45 PM" },
    { id: 1028, items: 1, table: 3, time: "1:50 PM" }
  ]

  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#f5efe6]">

      {/* NAVBAR */}
      <div className="fixed top-0 left-0 w-full z-50 bg-[#f7f3ef] border-b border-[#eadfcb] shadow-sm">

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">

          <div className="flex items-center gap-3 cursor-pointer">

            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#f8edd5ce] border border-[#d4a017] flex items-center justify-center text-[#9a6b00] font-bold">
              C
            </div>

            <div>
              <h2 className="text-base md:text-lg font-semibold text-[#3b260c]">
                Chef Panel
              </h2>

              <p className="text-xs md:text-sm text-gray-500">
                Chef
              </p>
            </div>

          </div>

          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-red-500 hover:bg-red-50 hover:text-red-600 px-3 md:px-4 py-2 rounded-xl transition-all duration-300 font-medium cursor-pointer"
          >
            <LogOut size={20} />

            <span className="hidden sm:inline">
              Logout
            </span>
          </button>

        </div>

      </div>

      {/* MAIN CONTENT */}
      <div className="pt-28 px-4 pb-6">

        <div className="max-w-7xl mx-auto bg-[#f8f1e7] p-4 md:p-8 rounded-3xl shadow-lg">

          <h1 className="text-center text-xl md:text-2xl font-bold text-[#b8860b] mb-8">
            KITCHEN PANEL
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            <Column
              title="RECEIVED"
              color="bg-[#fde68a]"
              orders={receivedOrders}
            />

            <Column
              title="PREPARING"
              color="bg-[#fde68a]"
              orders={preparingOrders}
            />

            <Column
              title="READY"
              color="bg-[#fde68a]"
              orders={readyOrders}
            />

          </div>

        </div>

      </div>

    </div>
  )
}

export default KitchenPanel