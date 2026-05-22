function TablesPage() {

  const tables = [
    { number: 1, status: "Available" },
    { number: 2, status: "Available" },
    { number: 3, status: "Occupied" },
    { number: 4, status: "Occupied" },
    { number: 5, status: "Available" },
    { number: 6, status: "Available" },
    { number: 7, status: "Occupied" },
    { number: 8, status: "Reserved" },
    { number: 9, status: "Available" },
    { number: 10, status: "Available" },
    { number: 11, status: "Available" },
    { number: 12, status: "Reserved" },
  ];

  return (

    <main className="min-h-screen bg-[#fffdf9] px-3 md:px-8 py-4 md:py-6">

      <div className="flex justify-between items-start md:items-center mb-6">

        <div>

          

          <h1 className=" text-[#c3871c] font-bold text-4xl ">
            Tables
          </h1>

        </div>


        <button className="bg-[#d89216] hover:bg-[#c98510] text-white px-3 md:px-5 py-2 md:py-3 rounded-xl text-xs md:text-sm font-semibold transition whitespace-nowrap">

          + Add Table

        </button>

      </div>

      <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5">

        {tables.map((table) => (

          <div
            key={table.number}
            className="bg-white border border-[#eadfce] rounded-2xl p-3 md:p-5 min-h-32 md:min-h-40 flex flex-col justify-between shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
          >

            {/* Table Info */}

            <div>

              <h2 className="text-lg md:text-2xl font-bold text-[#3b1d0f] mb-1">

                Table {table.number}

              </h2>

              <p className="text-xs md:text-sm text-gray-500">

                4 Seats

              </p>

            </div>

            <span
              className={`
                inline-flex items-center justify-center
                px-2.5 md:px-4 py-1.5 md:py-2
                rounded-lg md:rounded-xl
                text-[10px] md:text-sm font-semibold
                w-fit

                ${table.status === "Available"
                  ? "bg-[#e0f5df] text-green-700"
                  : ""}

                ${table.status === "Occupied"
                  ? "bg-[#ffe1e1] text-red-700"
                  : ""}

                ${table.status === "Reserved"
                  ? "bg-[#fff0c9] text-yellow-700"
                  : ""}
              `}
            >

              {table.status}

            </span>

          </div>

        ))}

      </section>

    </main>

  );
}

export default TablesPage;