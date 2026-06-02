function OrderCard({ order, updateStatus }) {

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
            Table {order.tableNumber}
          </h2>

          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            {order.items?.length || 0} Items
          </p>

        </div>

        <div>

          <p className="text-xs sm:text-sm font-medium text-gray-700 whitespace-nowrap">
            ₹{order.totalAmount}
          </p>

        </div>

      </div>

      <div className="mt-4 space-y-1">

        {order.items?.map((item, index) => (

          <p
            key={index}
            className="text-xs sm:text-sm text-gray-600"
          >
            {item.name} × {item.quantity}
          </p>

        ))}

      </div>

      <p className="text-xs sm:text-sm text-gray-500 mt-4">
        {new Date(order.createdAt).toLocaleTimeString()}
      </p>

      <div className="mt-4 flex gap-2">

        {order.status === "Received" && (

          <button
            onClick={() =>
              updateStatus(order._id, "Preparing")
            }
            className="
              bg-blue-500
              hover:bg-blue-600
              text-white
              px-3
              py-2
              rounded-lg
              text-sm
            "
          >
            Start Preparing
          </button>

        )}

        {order.status === "Preparing" && (

          <button
            onClick={() =>
              updateStatus(order._id, "Ready")
            }
            className="
              bg-green-500
              hover:bg-green-600
              text-white
              px-3
              py-2
              rounded-lg
              text-sm
            "
          >
            Mark Ready
          </button>

        )}

      </div>

    </div>

  );

}

export default OrderCard;