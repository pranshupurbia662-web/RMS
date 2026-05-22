function TableCard(props) {
  return (
    <div className="bg-[#fffdf9] h-40 rounded-3xl border border-[#f1e7d8] shadow-sm p-5 flex flex-col justify-between hover:shadow-md transition">

      <div>
        <h2 className="text-2xl font-bold text-[#3b1d0f] mb-2">
          Table {props.number}
        </h2>

        <p className="text-gray-500">
          4 Seats
        </p>
      </div>

      <button
        className={`
          px-4 py-2 rounded-2xl font-semibold text-sm w-fit
          ${props.status === "Available" && "bg-[#d9f2d9] text-green-700"}
          ${props.status === "Occupied" && "bg-[#ffd9d9] text-red-700"}
          ${props.status === "Reserved" && "bg-[#ffe7b8] text-yellow-700"}
        `}
      >
        {props.status}
      </button>

    </div>
  );
}

export default TableCard;