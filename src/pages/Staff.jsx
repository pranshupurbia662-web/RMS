import React, { useEffect, useState } from "react";
import axios from "axios";

const Staff = () => {
  const [staffData, setStaffData] = useState([]);
  const [search, setSearch] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedStaffId, setSelectedStaffId] = useState("");

  const [editStaff, setEditStaff] = useState({
    _id: "",
    name: "",
    role: "",
    phone: "",
    shift: "",
    status: "",
  });

  const [newStaff, setNewStaff] = useState({
    name: "",
    role: "Waiter",
    phone: "",
    shift: "Morning",
    status: "Active",
  });

  useEffect(() => {
    fetchStaff();
  }, []);

  const fetchStaff = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/staff");
      setStaffData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const addStaff = async () => {
    try {
      await axios.post("http://localhost:5000/api/staff", newStaff);
      fetchStaff();
      setShowAddModal(false);
      setNewStaff({ name: "", role: "Waiter", phone: "", shift: "Morning", status: "Active" });
    } catch (error) {
      console.error(error);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.patch(`http://localhost:5000/api/staff/${id}`, { status });
      fetchStaff();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteStaff = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/staff/${selectedStaffId}`);
      fetchStaff();
      setSelectedStaffId("");
      setShowDeleteModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const updateStaff = async () => {
    try {
      await axios.patch(`http://localhost:5000/api/staff/${editStaff._id}`, {
        name: editStaff.name,
        role: editStaff.role,
        phone: editStaff.phone,
        shift: editStaff.shift,
        status: editStaff.status,
      });
      fetchStaff();
      setShowEditModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const activeCount = staffData.filter((s) => s.status === "Active").length;
  const inactiveCount = staffData.filter((s) => s.status === "Inactive").length;
  const leaveCount = staffData.filter((s) => s.status === "On Leave").length;

  const filteredStaff = staffData.filter((staff) =>
    staff.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="w-full min-h-screen bg-[#fffdf9] p-4 md:p-8 overflow-x-hidden">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl md:text-4xl font-semibold text-[#7b5a11cf]">
          Staff Members
        </h1>
        <div className="flex gap-3">
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-[#d89216] hover:bg-[#c98510] text-white px-4 py-3 rounded-xl font-semibold"
          >
            + Add Staff
          </button>
          <button
            onClick={() => setShowDeleteModal(true)}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-xl font-semibold"
          >
            Delete Staff
          </button>
        </div>
      </div>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <p className="text-gray-500 text-sm">Total Staff</p>
          <h2 className="text-3xl font-bold text-[#d89216]">{staffData.length}</h2>
        </div>
        <div className="bg-green-50 rounded-2xl p-4 shadow-sm">
          <p className="text-green-600 text-sm">Active</p>
          <h2 className="text-3xl font-bold text-green-700">{activeCount}</h2>
        </div>
        <div className="bg-red-50 rounded-2xl p-4 shadow-sm">
          <p className="text-red-600 text-sm">Inactive</p>
          <h2 className="text-3xl font-bold text-red-700">{inactiveCount}</h2>
        </div>
        <div className="bg-yellow-50 rounded-2xl p-4 shadow-sm">
          <p className="text-yellow-600 text-sm">On Leave</p>
          <h2 className="text-3xl font-bold text-yellow-700">{leaveCount}</h2>
        </div>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search staff..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-6 p-3 border rounded-xl bg-white"
      />

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse">
            <thead>
              <tr className="bg-[#f8edd5ce]">
                <th className="px-6 py-5 text-left">Name</th>
                <th className="px-6 py-5 text-center">Role</th>
                <th className="px-6 py-5 text-center">Phone</th>
                <th className="px-6 py-5 text-center">Shift</th>
                <th className="px-6 py-5 text-center">Status</th>
                <th className="px-6 py-5 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStaff.map((staff) => (
                <tr
                  key={staff._id}
                  className="border-b border-[#f3ead7] hover:bg-[#fff9ef]"
                >
                  <td className="px-6 py-6">{staff.name}</td>
                  <td className="px-6 py-6 text-center">{staff.role}</td>
                  <td className="px-6 py-6 text-center">{staff.phone}</td>
                  <td className="px-6 py-6 text-center">{staff.shift}</td>
                  <td className="px-6 py-6 text-center">
                    <select
                      value={staff.status}
                      onChange={(e) => updateStatus(staff._id, e.target.value)}
                      className="border rounded-lg px-3 py-2"
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                      <option value="On Leave">On Leave</option>
                    </select>
                  </td>
                  {/* ✅ Edit button correctly inside <tr> */}
                  <td className="px-6 py-6 text-center">
                    <button
                      onClick={() => {
                        setEditStaff(staff);
                        setShowEditModal(true);
                      }}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Staff Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl w-[420px]">
            <h2 className="text-2xl font-bold mb-4">Add Staff</h2>
            <input
              type="text"
              placeholder="Name"
              value={newStaff.name}
              onChange={(e) => setNewStaff({ ...newStaff, name: e.target.value })}
              className="w-full border p-3 rounded-lg mb-3"
            />
            <input
              type="text"
              placeholder="Phone"
              value={newStaff.phone}
              onChange={(e) => setNewStaff({ ...newStaff, phone: e.target.value })}
              className="w-full border p-3 rounded-lg mb-3"
            />
            <select
              value={newStaff.role}
              onChange={(e) => setNewStaff({ ...newStaff, role: e.target.value })}
              className="w-full border p-3 rounded-lg mb-3"
            >
              <option>Waiter</option>
              <option>Chef</option>
              <option>Manager</option>
              <option>Cashier</option>
            </select>
            <select
              value={newStaff.shift}
              onChange={(e) => setNewStaff({ ...newStaff, shift: e.target.value })}
              className="w-full border p-3 rounded-lg mb-4"
            >
              <option>Morning</option>
              <option>Evening</option>
              <option>Night</option>
            </select>
            <div className="flex gap-3">
              <button onClick={addStaff} className="bg-[#d89216] text-white px-4 py-2 rounded-lg">
                Save
              </button>
              <button onClick={() => setShowAddModal(false)} className="bg-gray-200 px-4 py-2 rounded-lg">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Staff Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl w-[420px]">
            <h2 className="text-2xl font-bold mb-4">Delete Staff</h2>
            <select
              value={selectedStaffId}
              onChange={(e) => setSelectedStaffId(e.target.value)}
              className="w-full border p-3 rounded-lg mb-4"
            >
              <option value="">Select Staff</option>
              {staffData.map((staff) => (
                <option key={staff._id} value={staff._id}>
                  {staff.name}
                </option>
              ))}
            </select>
            <div className="flex gap-3">
              <button onClick={deleteStaff} className="bg-red-500 text-white px-4 py-2 rounded-lg">
                Delete
              </button>
              <button onClick={() => setShowDeleteModal(false)} className="bg-gray-200 px-4 py-2 rounded-lg">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Staff Modal ✅ Now correctly at root level */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl w-[450px]">
            <h2 className="text-2xl font-bold mb-4">Edit Staff</h2>
            <input
              type="text"
              value={editStaff.name}
              onChange={(e) => setEditStaff({ ...editStaff, name: e.target.value })}
              className="w-full border p-3 rounded-lg mb-3"
              placeholder="Name"
            />
            <input
              type="text"
              value={editStaff.phone}
              onChange={(e) => setEditStaff({ ...editStaff, phone: e.target.value })}
              className="w-full border p-3 rounded-lg mb-3"
              placeholder="Phone"
            />
            <select
              value={editStaff.role}
              onChange={(e) => setEditStaff({ ...editStaff, role: e.target.value })}
              className="w-full border p-3 rounded-lg mb-3"
            >
              <option>Waiter</option>
              <option>Chef</option>
              <option>Manager</option>
              <option>Cashier</option>
            </select>
            <select
              value={editStaff.shift}
              onChange={(e) => setEditStaff({ ...editStaff, shift: e.target.value })}
              className="w-full border p-3 rounded-lg mb-3"
            >
              <option>Morning</option>
              <option>Evening</option>
              <option>Night</option>
            </select>
            <select
              value={editStaff.status}
              onChange={(e) => setEditStaff({ ...editStaff, status: e.target.value })}
              className="w-full border p-3 rounded-lg mb-4"
            >
              <option>Active</option>
              <option>Inactive</option>
              <option>On Leave</option>
            </select>
            <div className="flex gap-3">
              <button onClick={updateStaff} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                Update
              </button>
              <button onClick={() => setShowEditModal(false)} className="bg-gray-300 px-4 py-2 rounded-lg">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

    </main>
  );
};

export default Staff;