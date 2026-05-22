import React from 'react'

const staffData = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Waiter",
    phone: "9876543210",
    shift: "Morning",
    status: "Active",
  },
  {
    id: 2,
    name: "Aman Verma",
    role: "Chef",
    phone: "9123456780",
    shift: "Evening",
    status: "Active",
  },
  {
    id: 3,
    name: "Priya Singh",
    role: "Manager",
    phone: "9988776655",
    shift: "Morning",
    status: "On Leave",
  },
  {
    id: 4,
    name: "Rohit Jain",
    role: "Cashier",
    phone: "9871204567",
    shift: "Night",
    status: "Active",
  },
  {
    id: 5,
    name: "Neha Joshi",
    role: "Waiter",
    phone: "9011223344",
    shift: "Evening",
    status: "Inactive",
  },
];

const Staff = () => {

  return (

    <main className="staff-main w-full min-h-screen bg-[#fffdf9] p-4 md:p-8 overflow-x-hidden">

      {/* TOP SECTION */}

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-2xl md:text-4xl font-semibold text-[#7b5a11cf]">
          Staff Members
        </h1>

        <button className="bg-[#d89216] hover:bg-[#c98510] text-white px-3 md:px-5 py-2 md:py-3 rounded-xl text-xs md:text-base font-semibold transition whitespace-nowrap">
          + Add Staff
        </button>

      </div>

      {/* TABLE */}

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full min-w-[700px] border-collapse">

            {/* TABLE HEAD */}

            <thead>

              <tr className="bg-[#f8edd5ce]">

                <th className="px-6 py-5 text-left text-[#7b5a11cf] font-semibold">
                  Name
                </th>

                <th className="px-6 py-5 text-center text-[#7b5a11cf] font-semibold">
                  Role
                </th>

                <th className="px-6 py-5 text-center text-[#7b5a11cf] font-semibold">
                  Phone
                </th>

                <th className="px-6 py-5 text-center text-[#7b5a11cf] font-semibold">
                  Shift
                </th>

                <th className="px-6 py-5 text-center text-[#7b5a11cf] font-semibold">
                  Status
                </th>

              </tr>

            </thead>

            {/* TABLE BODY */}

            <tbody>

              {staffData.map((staff) => (

                <tr
                  key={staff.id}
                  className="border-b border-[#f3ead7] hover:bg-[#fff9ef] transition"
                >

                  <td className="px-6 py-6 text-left font-medium text-gray-800 whitespace-nowrap">
                    {staff.name}
                  </td>

                  <td className="px-6 py-6 text-center whitespace-nowrap">
                    {staff.role}
                  </td>

                  <td className="px-6 py-6 text-center whitespace-nowrap">
                    {staff.phone}
                  </td>

                  <td className="px-6 py-6 text-center whitespace-nowrap">
                    {staff.shift}
                  </td>

                  <td className="px-6 py-6 text-center whitespace-nowrap">

                    <span
                      className={`
                        px-4 py-2 rounded-full text-xs font-semibold inline-block
                        ${staff.status === "Active" ? "bg-green-100 text-green-700" : ""}
                        ${staff.status === "Inactive" ? "bg-red-100 text-red-700" : ""}
                        ${staff.status === "On Leave" ? "bg-yellow-100 text-yellow-700" : ""}
                      `}
                    >

                      {staff.status}

                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </main>
  )
}

export default Staff