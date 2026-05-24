import Header from "../waiter-components/Header"
import { useNavigate } from "react-router-dom"

function TableSelection() {

  const navigate = useNavigate()

  const tables = [

    { id: 1, status: "available" },
    { id: 2, status: "occupied" },
    { id: 3, status: "available" },
    { id: 4, status: "available" },

    { id: 5, status: "available" },
    { id: 6, status: "occupied" },
    { id: 7, status: "reserved" },
    { id: 8, status: "available" },

    { id: 9, status: "available" },
    { id: 10, status: "occupied" },
    { id: 11, status: "available" },
    { id: 12, status: "available" }

  ]

  const getTableStyle = (status) => {

    if (status === "available") {

      return `
      bg-green-50
      border-green-200
      text-green-900
      hover:bg-green-100
      `
    }

    if (status === "occupied") {

      return `
      bg-red-50
      border-red-200
      text-red-800
      hover:bg-red-100
      `
    }

    return `
    bg-yellow-50
    border-yellow-200
    text-yellow-800
    hover:bg-yellow-100
    `
  }

  return (

    <div className="min-h-screen bg-[#F8FAFC]">

      <Header step={1} />

      <div className="max-w-6xl mx-auto mt-10">

        <div className="bg-white rounded-[28px] border border-gray-200 shadow-sm overflow-hidden">

          <div className="bg-[#D4A017] px-8 py-6">

            <h1 className="text-white text-3xl font-bold">

              Table Selection

            </h1>

            <p className="text-yellow-100 mt-1">

              Choose an available table to begin

            </p>

          </div>


          <div className="p-8">

            <div className="grid grid-cols-4 gap-5">

              {tables.map((table) => (

                <button

                  key={table.id}

                  onClick={() =>
                    navigate(
                      `/waiter-panel/add-order/${table.id}`
                    )
                  }

                  className={`

                  h-20
                  rounded-2xl
                  border-2

                  font-semibold
                  text-xl

                  transition-all
                  duration-300

                  hover:scale-[1.03]

                  ${getTableStyle(table.status)}

                  `}
                >

                  Table {table.id}

                </button>

              ))}

            </div>


            <div className="flex gap-8 mt-10">

              <div className="flex items-center gap-2">

                <div
                  className="
                  w-4
                  h-4
                  rounded-full
                  bg-green-500
                  "
                />

                <p className="text-gray-600">

                  Available

                </p>

              </div>

              <div className="flex items-center gap-2">

                <div
                  className="
                  w-4
                  h-4
                  rounded-full
                  bg-red-500
                  "
                />

                <p className="text-gray-600">

                  Occupied

                </p>

              </div>

              <div className="flex items-center gap-2">

                <div
                  className="
                  w-4
                  h-4
                  rounded-full
                  bg-yellow-500
                  "
                />

                <p className="text-gray-600">

                  Reserved

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  )

}

export default TableSelection