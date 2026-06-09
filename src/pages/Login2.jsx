import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login2 = () => {

  const navigate = useNavigate();

  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (role === "Admin") {
      if (!email.includes("@admin") || password !== "admin123") {
        setError("Invalid email or password for Admin.");
        return;
      }
      navigate("/dashboard");
    } else if (role === "Waiter") {
      if (!email.includes("@waiter") || password !== "waiter123") {
        setError("Invalid email or password for Waiter.");
        return;
      }
      navigate("/waiter-panel");
    } else if (role === "Chef") {
      if (!email.includes("@chef") || password !== "chef123") {
        setError("Invalid email or password for Chef.");
        return;
      }
      navigate("/chef-panel");
    } else {
      setError("Please select a role.");
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row overflow-hidden">

      {/* LEFT SECTION */}
      <div
        className="hidden md:flex md:w-1/2 h-screen bg-cover bg-center relative flex-col justify-between p-6"
        style={{ backgroundImage: "url('/back.png')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex flex-col h-full justify-between">

          <div>
            <img src="/RMSlogo.png" alt="LOGO" className="w-40 rounded-full shadow-2xl" />
            <p className="tracking-[8px] text-sm mt-4 text-gray-200 font-light">RESTAURANT</p>
            <p className="text-yellow-400 text-lg mt-4">✦ ✦ ✦ ✦ ✦</p>
          </div>

          <div className="mb-24">
            <h1 className="text-5xl font-semibold leading-[50px] text-white max-w-[500px]">
              Where every
              <br />
              service feels
              <span className="italic bg-gradient-to-r from-[#D4A017] to-[#F4D06F] bg-clip-text text-transparent">
                {" "}effortless
              </span>
            </h1>
            <p className="mt-6 text-gray-300 text-base leading-8 max-w-[500px]">
              Reservations, kitchen tickets, prep lists,
              and staff schedules — one quiet control room behind the scenes.
            </p>
          </div>

        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full md:w-1/2 bg-[#f7f3ef] flex justify-center items-center px-4 md:px-10 py-6">

        <div className="w-full max-w-[480px] bg-white rounded-[28px] shadow-xl border border-gray-200 p-6">

          <p className="uppercase tracking-[6px] text-[#D4A017] font-semibold text-center text-xl">
            Staff Portal
          </p>

          <h1 className="text-3xl leading-[45px] mt-4 text-center font-semibold text-[#111827]">
            Welcome back
            <br />
            to
            <span className="italic text-[#D4A017] font-medium"> Royal Spice.</span>
          </h1>

          <p className="mt-4 text-gray-500 text-sm leading-7 text-center">
            Sign in to open tonight's covers, prep board, and team roster.
          </p>

          {error && (
            <div className="mt-4 px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm text-center">
              {error}
            </div>
          )}

          <form className="mt-7" onSubmit={handleLogin}>

            {/* EMAIL */}
            <div className="mb-4">
              <label className="block mb-2 text-xs tracking-[4px] text-[#111827] font-semibold">
                WORK EMAIL
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="manager@royalspice.co"
                className="w-full p-3 rounded-xl border border-gray-300 outline-none text-sm bg-white focus:ring-4 focus:ring-yellow-200 focus:border-[#D4A017] transition"
              />
            </div>

            {/* PASSWORD */}
            <div className="mb-4">
              <label className="block mb-2 text-xs tracking-[4px] text-[#111827] font-semibold">
                PASSWORD
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full p-3 rounded-xl border border-gray-300 outline-none text-sm bg-white focus:ring-4 focus:ring-yellow-200 focus:border-[#D4A017] transition"
              />
            </div>

            {/* ROLE */}
            <div className="mb-4">
              <label className="block mb-2 text-xs tracking-[4px] text-[#111827] font-semibold">
                ROLE
              </label>
              <select
                required
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full p-3 rounded-xl border border-gray-300 outline-none text-sm bg-white focus:ring-4 focus:ring-yellow-200 focus:border-[#D4A017] transition"
              >
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Chef">Chef</option>
                <option value="Waiter">Waiter</option>
              </select>
            </div>

            {/* Remember + Forgot */}
            <div className="flex justify-between items-center mb-5">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 accent-[#D4A017]" />
                <p className="text-gray-700 text-sm">Remember me</p>
              </div>
              <a href="/forgot-password" className="text-[#8B0000] text-sm hover:underline">
                Forgot password?
              </a>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#D4A017] to-[#E8B923] text-white py-3 rounded-xl text-base font-semibold hover:scale-[1.02] transition duration-300 shadow-lg"
            >
              Enter the Portal →
            </button>

          </form>
        </div>
      </div>

    </div>
  );
};

export default Login2;