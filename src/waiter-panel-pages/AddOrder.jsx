import { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

import Header from "../waiter-components/Header";

import Mocktails from "../waiter-components/menu/Mocktails";
import PremiumBars from "../waiter-components/menu/PremiumBars";
import VegStarters from "../waiter-components/menu/VegStarters";
import NonVegStarters from "../waiter-components/menu/NonVegStarters";
import VegMainCourse from "../waiter-components/menu/VegMainCourse";
import NonVegMainCourse from "../waiter-components/menu/NonVegMainCourse";
import Breads from "../waiter-components/menu/Breads";
import Desserts from "../waiter-components/menu/Desserts";

function AddOrder() {
  const { tableId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const orderId = location.state?.orderId;
  const addMore = location.state?.addMore;

  const [activeCategory, setActiveCategory] = useState("mocktails");
  const [cart, setCart] = useState([]);

  const getItemQty = (id) => {
    const item = cart.find((i) => i._id === id);
    return item ? item.quantity : 0;
  };

  const increaseQty = (item) => {
    const existingItem = cart.find((cartItem) => cartItem._id === item._id);

    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const decreaseQty = (item) => {
    const existingItem = cart.find((cartItem) => cartItem._id === item._id);

    if (!existingItem) return;

    if (existingItem.quantity === 1) {
      setCart(cart.filter((cartItem) => cartItem._id !== item._id));
    } else {
      setCart(
        cart.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const categories = [
    { name: "Mocktails", value: "mocktails" },
    { name: "Premium Bar", value: "premiumbar" },
    { name: "Veg Starters", value: "vegstarters" },
    { name: "Non Veg Starters", value: "nonvegstarters" },
    { name: "Veg Main Course", value: "vegmaincourse" },
    { name: "Non Veg Main Course", value: "nonvegmaincourse" },
    { name: "Breads", value: "breads" },
    { name: "Desserts", value: "desserts" },
  ];

  const goToSummary = () => {
    if (cart.length === 0) {
      alert("Please add at least one item");
      return;
    }

    navigate(`/waiter-panel/order-summary/${tableId}`, {
      state: { cart, orderId, addMore },
    });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-10">
      <Header step={2} />

      <div className="max-w-7xl mx-auto px-6 mt-10">
        <div className="bg-white rounded-[32px] border border-gray-200 shadow-sm overflow-hidden">

          {/* Page Header */}
          <div className="bg-[#D4A017] px-8 py-7">
            <h1 className="text-4xl font-bold text-white">
              {addMore ? "Add More Order" : "Add Order"}
            </h1>
            <p className="text-yellow-100 mt-2 text-lg">
              Taking order for Table {tableId}
            </p>
          </div>

          {/* Category Tabs */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category.value)}
                  className={`px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300 hover:scale-105
                    ${
                      activeCategory === category.value
                        ? "bg-[#D4A017] text-white shadow-lg"
                        : "bg-gray-50 text-gray-700 border border-gray-200 hover:bg-[#D4A017] hover:text-white hover:border-transparent"
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items */}
          <div className="p-6">
            {activeCategory === "mocktails" && (
              <Mocktails increaseQty={increaseQty} decreaseQty={decreaseQty} getItemQty={getItemQty} />
            )}
            {activeCategory === "premiumbar" && (
              <PremiumBars increaseQty={increaseQty} decreaseQty={decreaseQty} getItemQty={getItemQty} />
            )}
            {activeCategory === "vegstarters" && (
              <VegStarters increaseQty={increaseQty} decreaseQty={decreaseQty} getItemQty={getItemQty} />
            )}
            {activeCategory === "nonvegstarters" && (
              <NonVegStarters increaseQty={increaseQty} decreaseQty={decreaseQty} getItemQty={getItemQty} />
            )}
            {activeCategory === "vegmaincourse" && (
              <VegMainCourse increaseQty={increaseQty} decreaseQty={decreaseQty} getItemQty={getItemQty} />
            )}
            {activeCategory === "nonvegmaincourse" && (
              <NonVegMainCourse increaseQty={increaseQty} decreaseQty={decreaseQty} getItemQty={getItemQty} />
            )}
            {activeCategory === "breads" && (
              <Breads increaseQty={increaseQty} decreaseQty={decreaseQty} getItemQty={getItemQty} />
            )}
            {activeCategory === "desserts" && (
              <Desserts increaseQty={increaseQty} decreaseQty={decreaseQty} getItemQty={getItemQty} />
            )}
          </div>

          {/* Cart Button */}
          <div className="px-6 pb-8 flex justify-end">
            <button
              onClick={goToSummary}
              className="bg-[#D4A017] hover:bg-yellow-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
            >
              View Cart & Proceed ({cart.reduce((total, item) => total + item.quantity, 0)})
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AddOrder;