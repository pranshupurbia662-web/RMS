import { useEffect, useState } from "react";
import axios from "axios";

function TablesPage() {
  const [tables, setTables] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedTableId, setSelectedTableId] = useState("");
  const [filter, setFilter] = useState("All");
  const [newTable, setNewTable] = useState({
    tableNo: "",
    seats: 4,
    status: "Available",
  });

  useEffect(() => {
    fetchTables();
  }, []);

  const fetchTables = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/tables");
      setTables(data);
    } catch (error) {
      console.error("Error fetching tables:", error);
    }
  };

  const addTable = async () => {
    try {
      await axios.post("http://localhost:5000/api/tables", newTable);
      fetchTables();
      setShowModal(false);
      setNewTable({ tableNo: "", seats: 4, status: "Available" });
    } catch (error) {
      console.error(error);
      alert("Failed to add table");
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.patch(`http://localhost:5000/api/tables/${id}/status`, { status });
      fetchTables();
    } catch (error) {
      console.error(error);
      alert("Failed to update status");
    }
  };

  const handleDeleteTable = async () => {
    if (!selectedTableId) {
      alert("Please select a table");
      return;
    }
    try {
      await axios.delete(`http://localhost:5000/api/tables/${selectedTableId}`);
      fetchTables();
      setShowDeleteModal(false);
      setSelectedTableId("");
    } catch (error) {
      console.error(error);
      alert("Failed to delete table");
    }
  };

  const availableCount = tables.filter((t) => t.status === "Available").length;
  const occupiedCount = tables.filter((t) => t.status === "Occupied").length;
  const reservedCount = tables.filter((t) => t.status === "Reserved").length;

  const filteredTables =
    filter === "All" ? tables : tables.filter((t) => t.status === filter);

  return (
    <main className="min-h-screen bg-[#fffdf9] px-3 md:px-8 py-4 md:py-6">

      {/* Header */}
      <div className="flex justify-between items-start md:items-center mb-6">
        <h1 className="text-[#c3871c] font-bold text-4xl">Tables</h1>
        <div className="flex gap-3">
          <button
            onClick={() => setShowModal(true)}
            className="bg-[#d89216] hover:bg-[#c98510] text-white px-4 py-3 rounded-xl text-sm font-semibold"
          >
            + Add Table
          </button>
          <button
            onClick={() => setShowDeleteModal(true)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-xl text-sm font-semibold"
          >
            Delete Table
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total", count: tables.length, color: "text-[#3b1d0f]" },
          { label: "Available", count: availableCount, color: "text-green-600" },
          { label: "Occupied", count: occupiedCount, color: "text-red-600" },
          { label: "Reserved", count: reservedCount, color: "text-yellow-600" },
        ].map(({ label, count, color }) => (
          <div key={label} className="bg-white border border-[#eadfce] rounded-2xl p-4 shadow-sm text-center">
            <p className="text-gray-500 text-sm">{label}</p>
            <p className={`text-3xl font-bold ${color}`}>{count}</p>
          </div>
        ))}
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-3 mb-6">
        {["All", "Available", "Occupied", "Reserved"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${
              filter === f
                ? "bg-[#d89216] text-white border-[#d89216]"
                : "bg-white text-gray-600 border-[#eadfce] hover:border-[#d89216]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Tables Grid — uses filteredTables, not tables */}
      <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5">
        {filteredTables.map((table) => (
          <div
            key={table._id}
            className="bg-white border border-[#eadfce] rounded-2xl p-3 md:p-5 min-h-40 flex flex-col justify-between shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
          >
            <div>
              <h2 className="text-lg md:text-2xl font-bold text-[#3b1d0f] mb-1">
                Table {table.tableNo}
              </h2>
              <p className="text-xs md:text-sm text-gray-500">{table.seats} Seats</p>
            </div>
            <div className="mt-4">
              <select
                value={table.status}
                onChange={(e) => updateStatus(table._id, e.target.value)}
                className={`w-full px-3 py-2 rounded-lg text-sm font-semibold border
                  ${table.status === "Available" ? "bg-[#e0f5df] text-green-700 border-green-500" : ""}
                  ${table.status === "Occupied" ? "bg-[#ffe1e1] text-red-700 border-red-500" : ""}
                  ${table.status === "Reserved" ? "bg-[#fff0c9] text-yellow-700 border-yellow-500" : ""}
                `}
              >
                <option value="Available">Available</option>
                <option value="Occupied">Occupied</option>
                <option value="Reserved">Reserved</option>
              </select>
            </div>
          </div>
        ))}
      </section>

      {/* Add Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl w-[400px] shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Add Table</h2>
            <input
              type="number"
              placeholder="Table Number"
              value={newTable.tableNo}
              onChange={(e) => setNewTable({ ...newTable, tableNo: Number(e.target.value) })}
              className="w-full border p-3 rounded-lg mb-3"
            />
            <input
              type="number"
              placeholder="Seats"
              value={newTable.seats}
              onChange={(e) => setNewTable({ ...newTable, seats: Number(e.target.value) })}
              className="w-full border p-3 rounded-lg mb-3"
            />
            <select
              value={newTable.status}
              onChange={(e) => setNewTable({ ...newTable, status: e.target.value })}
              className="w-full border p-3 rounded-lg mb-4"
            >
              <option value="Available">Available</option>
              <option value="Occupied">Occupied</option>
              <option value="Reserved">Reserved</option>
            </select>
            <div className="flex justify-end gap-3">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 border rounded-lg">
                Cancel
              </button>
              <button onClick={addTable} className="bg-[#d89216] hover:bg-[#c98510] text-white px-4 py-2 rounded-lg">
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl w-[400px] shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Delete Table</h2>
            <select
              value={selectedTableId}
              onChange={(e) => setSelectedTableId(e.target.value)}
              className="w-full border p-3 rounded-lg mb-4"
            >
              <option value="">Select Table</option>
              {tables.map((table) => (
                <option key={table._id} value={table._id}>
                  Table {table.tableNo}
                </option>
              ))}
            </select>
            <div className="flex justify-end gap-3">
              <button onClick={() => setShowDeleteModal(false)} className="px-4 py-2 border rounded-lg">
                Cancel
              </button>
              <button onClick={handleDeleteTable} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default TablesPage;