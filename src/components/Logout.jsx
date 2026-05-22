import React from "react";

const Logout = () => {

  const handleLogout = () => {

    window.location.href = " http://localhost:5174/";
  };

  return (

    <div className="min-h-screen bg-gray-100">

      {/* NAVBAR */}
      <div className="flex justify-between items-center p-5 bg-white shadow">

        <h1 className="text-2xl font-bold">
          RMS Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-5 py-2 rounded-lg"
        >
          Logout
        </button>

      </div>

    </div>
  );
};

export default Logout;