import React from 'react'
import {
  Search,
  CalendarArrowUp,
  HandCoins,
  Table,
  SquareUserRound
} from 'lucide-react'

const AdminCardTop = () => {

  const cardStyle =
    "cursor-pointer min-h-28 md:min-h-40 p-3 md:p-4 border-2 border-[#7b5a11cf] rounded-xl md:rounded-2xl flex justify-between bg-white shadow-[0_6px_30px_#D39A2350] hover:-translate-y-1 hover:scale-105 hover:shadow-[0_10px_45px_#D39A2380] transition-all duration-300"

  return (

    <div className="w-full px-3 md:px-8 py-4 md:py-6">

      {/* Search Bar */}

      <div className="mb-6 md:mb-8">

        <div className="flex items-center bg-white rounded-xl border-2 border-[#7b5a11cf] px-3 md:px-4 shadow-[0_6px_20px_#D39A2350] focus-within:shadow-[0_8px_30px_#D39A2380] transition-all duration-300">

          <Search className="text-gray-500 w-5 h-5 md:w-6 md:h-6 shrink-0" />

          <input
            type="text"
            placeholder="Search Here"
            className="w-full p-3 md:p-4 outline-none bg-transparent text-sm md:text-base"
          />

        </div>

      </div>


      {/* Cards */}

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 md:gap-6">


        {/* Total Orders */}

        <div className={cardStyle}>

          <div>

            <h2 className="font-semibold text-sm md:text-2xl text-[#7b5a11cf]">
              Total Orders
            </h2>

            <p className="mt-4 md:mt-7 text-xl md:text-3xl font-semibold">
              128
            </p>

          </div>

          <div className="self-end text-[#d49b21f9]">

            <CalendarArrowUp className="w-7 h-7 md:w-10 md:h-10" />

          </div>

        </div>



        {/* Today's Revenue */}

        <div className={cardStyle}>

          <div>

            <h2 className="font-semibold text-sm md:text-2xl text-[#7b5a11cf]">
              Today's Revenue
            </h2>

            <p className="mt-4 md:mt-7 text-xl md:text-3xl font-semibold">
              ₹18,900
            </p>

          </div>

          <div className="self-end text-[#d49b21f9]">

            <HandCoins className="w-7 h-7 md:w-10 md:h-10" />

          </div>

        </div>



        {/* Active Tables */}

        <div className={cardStyle}>

          <div>

            <h2 className="font-semibold text-sm md:text-2xl text-[#7b5a11cf]">
              Active Tables
            </h2>

            <p className="mt-4 md:mt-7 text-xl md:text-3xl font-semibold">
              8/12
            </p>

          </div>

          <div className="self-end text-[#d49b21f9]">

            <Table className="w-7 h-7 md:w-10 md:h-10" />

          </div>

        </div>



        {/* Total Customers */}

        <div className={cardStyle}>

          <div>

            <h2 className="font-semibold text-sm md:text-2xl text-[#7b5a11cf]">
              Total Customers
            </h2>

            <p className="mt-4 md:mt-7 text-xl md:text-3xl font-semibold">
              200
            </p>

          </div>

          <div className="self-end text-[#d49b21f9]">

            <SquareUserRound className="w-7 h-7 md:w-10 md:h-10" />

          </div>

        </div>

      </div>

    </div>
  )
}

export default AdminCardTop