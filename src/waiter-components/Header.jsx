import logo from "../waiter-assets/logo.jpeg"
import { ArrowLeft, LogOut } from "lucide-react"
import { useNavigate } from "react-router-dom"  

function Header({ step }) {

  const navigate = useNavigate()

  return (
  <div className="w-full border-b bg-white px-4 md:px-10 py-4 flex items-center justify-between">

    {/* LEFT SECTION */}
    <div className="flex items-center gap-3 md:gap-4">

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="w-10 h-10 md:w-12 md:h-12 rounded-xl border border-gray-200 
        flex items-center justify-center shadow-sm hover:bg-gray-100 transition"
      >
        <ArrowLeft size={22} />
      </button>

      {/* LOGO */}
      <img
        src={logo}
        alt="logo"
        className="w-14 h-14 md:w-16 md:h-16 object-cover rounded-2xl"
      />

      {/* TITLE */}
      <div>
        <h1 className="text-xl md:text-3xl font-bold">
          Royal Spice
        </h1>

        <p className="text-sm md:text-base text-gray-500">
          Waiter Panel · Order Flow
        </p>
      </div>

    </div>

    {/* RIGHT SECTION */}
    <div className="flex items-center gap-4">

      {/* STEP INDICATOR */}
      <div className="hidden md:flex gap-2">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className={`w-10 h-2 rounded-full ${
              item <= step
                ? "bg-black"
                : "bg-gray-200"
            }`}
          ></div>
        ))}
      </div>

      {/* LOGOUT BUTTON */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 bg-red-50 text-red-500 
        hover:bg-red-100 px-4 py-2 rounded-xl font-medium transition-all"
      >
        <LogOut size={20} />
        <span className="hidden md:block">
          Logout
        </span>
      </button>

    </div>

  </div>
)
}

export default Header