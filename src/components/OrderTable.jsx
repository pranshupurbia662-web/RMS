import React from 'react'

const orderData = [
  {
    orderId: "#ORD-1001",
    table: "T-01",
    items: "2 Items",
    status: "Preparing",
    totalAmount: "₹1,250",
    time: "10:30 AM",
  },
  {
    orderId: "#ORD-1002",
    table: "T-05",
    items: "4 Items",
    status: "Ready",
    totalAmount: "₹2,100",
    time: "10:45 AM",
  },
  {
    orderId: "#ORD-1003",
    table: "T-03",
    items: "1 Item",
    status: "Received",
    totalAmount: "₹980",
    time: "11:00 AM",
  },
  {
    orderId: "#ORD-1004",
    table: "T-07",
    items: "5 Items",
    status: "Preparing",
    totalAmount: "₹3,450",
    time: "11:20 AM",
  },
  {
    orderId: "#ORD-1005",
    table: "T-02",
    items: "3 Items",
    status: "Ready",
    totalAmount: "₹1,780",
    time: "11:40 AM",
  },
  {
    orderId: "#ORD-1006",
    table: "T-10",
    items: "6 Items",
    status: "Received",
    totalAmount: "₹2,650",
    time: "12:10 PM",
  },
];

const OrderRow = ({ orderId, table, items, status, totalAmount, time }) => {
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
  )
}

const OrderTable = () => {
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
            {orderData.map((order, index) => (
              <OrderRow
                key={index}
                orderId={order.orderId}
                table={order.table}
                items={order.items}
                status={order.status}
                totalAmount={order.totalAmount}
                time={order.time}
              />
            ))}
          </tbody>

        </table>

      </div>

    </div>
  )
}

export default OrderTable