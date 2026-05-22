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
];

const ReportTopCard = () => {
  return (
    <div className="w-full  p-4">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {top.map((item) => (
          
          <div
            key={item.id}
            className="bg-white rounded-3xl border border-[#7b5a11cf] p-5 shadow-[0_6px_20px_#D39A2350] hover:scale-105 transition-all duration-300"
          >
            
            <h2 className="text-gray-500 text-sm font-semibold mb-2">
              {item.title}
            </h2>

            <h3 className="text-3xl font-bold text-[#7b5a11]">
              {item.value}
            </h3>

          </div>

        ))}
        
      </div>

    </div>
  );
}

export default ReportTopCard;