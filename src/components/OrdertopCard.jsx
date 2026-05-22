import React from 'react';

const top = [
  {
    id: 1,
    title: "Total Revenue",
    value: "₹18,800",
  },
  {
    id: 2,
    title: "Total Orders",
    value: "128",
  },
  {
    id: 3,
    title: "Avg Order Value",
    value: "₹300",
  },
  {
    id: 4,
    title: "New Customers",
    value: "50",
  },
  {
    id: 5,
    title: "Pending Orders",
    value: "16",
  },
  {
    id: 6,
    title: "Completed Orders",
    value: "92",
  },
];

const OrdertopCard = () => {

  return (

    <div className="w-full py-4">

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 md:gap-6">

        {top.map((item) => (

          <div
            key={item.id}
            className="bg-white rounded-2xl md:rounded-3xl border border-[#7b5a11cf] p-3 md:p-5 shadow-[0_6px_20px_#D39A2350] hover:-translate-y-1 hover:scale-105 transition-all duration-300"
          >

            <h2 className="text-gray-500 text-[11px] md:text-sm font-semibold mb-2">
              {item.title}
            </h2>

            <h3 className="text-xl md:text-3xl font-bold text-[#7b5a11]">
              {item.value}
            </h3>

          </div>

        ))}

      </div>

    </div>

  );
}

export default OrdertopCard;