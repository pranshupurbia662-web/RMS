import Header from "../waiter-components/Header"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

function TableSelection() {
  const navigate = useNavigate()

  const [tables, setTables] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTables()
  }, [])

  const fetchTables = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/tables")
      setTables(data)
    } catch (error) {
      console.error("Error fetching tables:", error)
      alert("Failed to fetch tables")
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (id, status) => {
    try {
      await axios.patch(`http://localhost:5000/api/tables/${id}/status`, {
        status,
      })

      fetchTables()
    } catch (error) {
      console.error("Error updating status:", error)
      alert("Failed to update table status")
    }
  }

  const getTableStyle = (status) => {
    if (status === "Available") {
      return "bg-green-50 border-green-300 text-green-900"
    }

    if (status === "Occupied") {
      return "bg-red-50 border-red-300 text-red-800"
    }

    return "bg-yellow-50 border-yellow-300 text-yellow-800"
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      <Header step={1} />

      <div className="max-w-6xl mx-auto mt-10 px-4">

        <div className="bg-white rounded-[28px] border border-gray-200 shadow-sm overflow-hidden">

          <div className="bg-[#D4A017] px-8 py-6">

            <h1 className="text-white text-3xl font-bold">
              Table Selection
            </h1>

            <p className="text-yellow-100 mt-1">
              Select a table and update its status
            </p>

          </div>

          <div className="p-6 md:p-8">

            {loading ? (
              <p className="text-center text-gray-500">
                Loading tables...
              </p>
            ) : (

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">

                {tables.map((table) => (

                  <div
                    key={table._id}
                    className={`rounded-2xl border-2 p-5 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 ${getTableStyle(table.status)}`}
                  >

                    <h2 className="font-bold text-xl mb-1">
                      Table {table.tableNo}
                    </h2>

                    <p className="text-sm mb-4">
                      {table.seats} Seats
                    </p>

                    <select
                      value={table.status}
                      onChange={(e) => updateStatus(table._id, e.target.value)}
                      className={`w-full px-3 py-2 rounded-lg text-sm font-semibold border mb-4
                        ${table.status === "Available" ? "bg-[#e0f5df] text-green-700 border-green-500" : ""}
                        ${table.status === "Occupied" ? "bg-[#ffe1e1] text-red-700 border-red-500" : ""}
                        ${table.status === "Reserved" ? "bg-[#fff0c9] text-yellow-700 border-yellow-500" : ""}
                      `}
                    >
                      <option value="Available">Available</option>
                      <option value="Occupied">Occupied</option>
                      <option value="Reserved">Reserved</option>
                    </select>

                    <button
                      onClick={() =>
                        navigate(`/waiter-panel/add-order/${table.tableNo}`)
                      }
                      disabled={table.status === "Reserved"}
                      className={`w-full py-2 rounded-xl font-semibold transition-all duration-300
                        ${
                          table.status === "Reserved"
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "bg-[#D4A017] text-white hover:bg-yellow-700"
                        }
                      `}
                    >
                      Select Table
                    </button>

                  </div>

                ))}

              </div>

            )}

            <div className="flex flex-wrap gap-6 mt-10">

              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-green-500" />
                <p className="text-gray-600">Available</p>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-red-500" />
                <p className="text-gray-600">Occupied</p>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-yellow-500" />
                <p className="text-gray-600">Reserved</p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default TableSelection