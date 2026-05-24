function OrderCard(props) {

  return (

    <div
      className="w-full bg-[#fffaf3] rounded-2xl 
      p-3 sm:p-4 md:p-5
      shadow-md border border-[#f1d79c]
      transition-all duration-300 ease-in-out 
      hover:-translate-y-1 md:hover:-translate-y-2
      hover:shadow-2xl hover:border-[#d4a017] 
      hover:bg-[#fff7e8] md:hover:scale-[1.02] 
      cursor-pointer"
    >

      <div className="flex justify-between items-start gap-3">

        <div>

          <h2 className="font-bold text-gray-800 text-base sm:text-lg">
            #{props.orderNumber}
          </h2>

          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            {props.items} Items
          </p>

        </div>

        <div className="flex items-center gap-2 sm:gap-3">

          <p className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
            Table {props.table}
          </p>

          <button className="text-gray-400 text-lg sm:text-xl hover:text-[#d4a017] transition duration-300">
            ⋮
          </button>

        </div>

      </div>

      <p className="text-xs sm:text-sm text-gray-500 mt-4">
        {props.time}
      </p>

    </div>
  )
}

export default OrderCard