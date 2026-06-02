import React from "react";

const OrderRow = ({
  orderId,
  table,
  items,
  status,
  totalAmount,
  time,
}) => {
  return (
    <tr className="border-b border-[#f1e6d6] hover:bg-[#fff8ec] transition">

      <td className="px-4 py-4 text-left text-sm whitespace-nowrap">
        {orderId}
      </td>

      <td className="px-4 py-4 text-left text-sm whitespace-nowrap">
        {table}
      </td>

      <td className="px-4 py-4 text-left text-sm whitespace-nowrap">
        {items}
      </td>

      <td className="px-4 py-4 text-left text-sm whitespace-nowrap">
        <span
          className={`
            px-3 py-1 rounded-full text-xs font-semibold
            ${status === "Ready" ? "bg-green-100 text-green-700" : ""}
            ${status === "Preparing" ? "bg-yellow-100 text-yellow-700" : ""}
            ${status === "Received" ? "bg-blue-100 text-blue-700" : ""}
          `}
        >
          {status}
        </span>
      </td>

      <td className="px-4 py-4 text-left text-sm whitespace-nowrap">
        {totalAmount}
      </td>

      <td className="px-4 py-4 text-left text-sm whitespace-nowrap">
        {time}
      </td>

    </tr>
  );
};

const OrderTable = ({ orders }) => {

  return (

    <div className="w-full mt-6">

      <div className="overflow-x-auto rounded-2xl border border-[#eadfce] bg-white shadow-sm">

        <table className="w-full min-w-[650px]">

          <thead>

            <tr className="bg-[#f8edd5ce]">

              <th className="px-4 py-4 text-left text-xs md:text-sm font-semibold text-[#7b5a11cf]">
                Order ID
              </th>

              <th className="px-4 py-4 text-left text-xs md:text-sm font-semibold text-[#7b5a11cf]">
                Table
              </th>

              <th className="px-4 py-4 text-left text-xs md:text-sm font-semibold text-[#7b5a11cf]">
                Items
              </th>

              <th className="px-4 py-4 text-left text-xs md:text-sm font-semibold text-[#7b5a11cf]">
                Status
              </th>

              <th className="px-4 py-4 text-left text-xs md:text-sm font-semibold text-[#7b5a11cf]">
                Amount
              </th>

              <th className="px-4 py-4 text-left text-xs md:text-sm font-semibold text-[#7b5a11cf]">
                Time
              </th>

            </tr>

          </thead>

          <tbody>

            {orders.map((order, index) => (

              <OrderRow
                key={order._id}
                orderId={`#ORD-${1001 + index}`}
                table={`T-${order.tableNumber}`}
                items={`${order.items.length} Items`}
                status={order.status}
                totalAmount={`₹${order.totalAmount}`}
                time={new Date(order.createdAt).toLocaleTimeString()}
              />

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );
};

export default OrderTable;