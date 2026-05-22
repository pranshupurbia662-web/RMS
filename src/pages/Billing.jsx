import React from 'react'
import { Download } from 'lucide-react'

const invoiceData = [
  {
    invoiceNo: "INV-1001",
    tableNo: "T-01",
    amount: "₹1,250",
    payment: "UPI",
    paymentDate: "18 May 2026",
  },

  {
    invoiceNo: "INV-1002",
    tableNo: "T-05",
    amount: "₹2,100",
    payment: "Cash",
    paymentDate: "18 May 2026",
  },

  {
    invoiceNo: "INV-1003",
    tableNo: "T-03",
    amount: "₹980",
    payment: "Card",
    paymentDate: "17 May 2026",
  },

  {
    invoiceNo: "INV-1004",
    tableNo: "T-07",
    amount: "₹3,450",
    payment: "UPI",
    paymentDate: "17 May 2026",
  },

  {
    invoiceNo: "INV-1005",
    tableNo: "T-02",
    amount: "₹1,780",
    payment: "Cash",
    paymentDate: "16 May 2026",
  },

  {
    invoiceNo: "INV-1006",
    tableNo: "T-10",
    amount: "₹2,650",
    payment: "Card",
    paymentDate: "16 May 2026",
  },
]

const Billing = () => {

  return (

    <main className="w-full min-h-screen bg-[#fffdf9] p-4 md:p-8 overflow-x-hidden">

      {/* HEADING */}

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-2xl md:text-4xl font-semibold text-[#7b5a11cf]">
          Invoice
        </h1>

      </div>

      {/* TABLE */}

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full min-w-[850px] border-collapse">

            {/* TABLE HEAD */}

            <thead>

              <tr className="bg-[#f8edd5ce]">

                <th className="px-6 py-5 text-left text-[#7b5a11cf] font-semibold whitespace-nowrap">
                  Invoice No.
                </th>

                <th className="px-6 py-5 text-center text-[#7b5a11cf] font-semibold whitespace-nowrap">
                  Table
                </th>

                <th className="px-6 py-5 text-center text-[#7b5a11cf] font-semibold whitespace-nowrap">
                  Amount
                </th>

                <th className="px-6 py-5 text-center text-[#7b5a11cf] font-semibold whitespace-nowrap">
                  Payment
                </th>

                <th className="px-6 py-5 text-center text-[#7b5a11cf] font-semibold whitespace-nowrap">
                  Date
                </th>

                <th className="px-6 py-5 text-center text-[#7b5a11cf] font-semibold whitespace-nowrap">
                  Action
                </th>

              </tr>

            </thead>

            {/* TABLE BODY */}

            <tbody>

              {invoiceData.map((invoice, index) => (

                <tr
                  key={index}
                  className="border-b border-[#f3ead7] hover:bg-[#fff9ef] transition"
                >

                  <td className="px-6 py-6 text-left font-medium text-gray-800 whitespace-nowrap">
                    {invoice.invoiceNo}
                  </td>

                  <td className="px-6 py-6 text-center whitespace-nowrap">
                    {invoice.tableNo}
                  </td>

                  <td className="px-6 py-6 text-center whitespace-nowrap">
                    {invoice.amount}
                  </td>

                  <td className="px-6 py-6 text-center whitespace-nowrap">
                    {invoice.payment}
                  </td>

                  <td className="px-6 py-6 text-center whitespace-nowrap">
                    {invoice.paymentDate}
                  </td>

                  <td className="px-6 py-6 text-center whitespace-nowrap">

                    <button className="flex justify-center items-center w-full text-[#d89216] hover:text-[#b77709] transition">

                      <Download size={20} />

                    </button>

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

export default Billing