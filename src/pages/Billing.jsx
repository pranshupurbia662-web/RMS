import React, { useEffect, useState } from "react";
import axios from "axios";
import { Download } from "lucide-react";

const Billing = () => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchInvoices = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/invoices");
      setInvoices(response.data);
    } catch (error) {
      console.log("Invoice fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInvoices();

    const interval = setInterval(fetchInvoices, 3000);

    return () => clearInterval(interval);
  }, []);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const groupedInvoices = invoices.reduce((groups, invoice) => {
    const date = formatDate(invoice.createdAt);

    if (!groups[date]) {
      groups[date] = [];
    }

    groups[date].push(invoice);

    return groups;
  }, {});

  return (
    <main className="w-full min-h-screen bg-[#fffdf9] p-4 md:p-8 overflow-x-hidden">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl md:text-4xl font-semibold text-[#7b5a11cf]">
          Invoice
        </h1>
      </div>

      {loading ? (
        <p className="text-center text-gray-500 mt-10">
          Loading invoices...
        </p>
      ) : invoices.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          No invoices generated yet
        </p>
      ) : (
        Object.keys(groupedInvoices).map((date) => (
          <div key={date} className="mb-10">
            <h2 className="text-xl font-bold text-[#7b5a11cf] mb-4">
              {date}
            </h2>

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[850px] border-collapse">
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

                  <tbody>
                    {groupedInvoices[date].map((invoice) => (
                      <tr
                        key={invoice._id}
                        className="border-b border-[#f3ead7] hover:bg-[#fff9ef] transition"
                      >
                        <td className="px-6 py-6 text-left font-medium text-gray-800 whitespace-nowrap">
                          {invoice.invoiceNo}
                        </td>

                        <td className="px-6 py-6 text-center whitespace-nowrap">
                          T-{String(invoice.tableNumber).padStart(2, "0")}
                        </td>

                        <td className="px-6 py-6 text-center whitespace-nowrap">
                          ₹{invoice.grandTotal}
                        </td>

                        <td className="px-6 py-6 text-center whitespace-nowrap">
                          {invoice.paymentMode}
                        </td>

                        <td className="px-6 py-6 text-center whitespace-nowrap">
                          {formatDate(invoice.createdAt)}
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
          </div>
        ))
      )}
    </main>
  );
};

export default Billing; 