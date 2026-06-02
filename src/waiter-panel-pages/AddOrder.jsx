import { useState } from "react"


import {
  useParams,
  useNavigate,
} from "react-router-dom"

import Header from "../waiter-components/Header"



/* MENU/waiter-components */

import Mocktails from "../waiter-components/menu/Mocktails"
import PremiumBars from "../waiter-components/menu/PremiumBars"
import VegStarters from "../waiter-components/menu/VegStarters"
import NonVegStarters from "../waiter-components/menu/NonVegStarters"
import VegMainCourse from "../waiter-components/menu/VegMainCourse"
import NonVegMainCourse from "../waiter-components/menu/NonVegMainCourse"
import Breads from "../waiter-components/menu/Breads"
import Desserts from "../waiter-components/menu/Desserts"



function AddOrder() {

  const { tableId } = useParams()

  const navigate = useNavigate()



  const [activeCategory, setActiveCategory] = useState("mocktails")



  const categories = [

    {
      name: "Mocktails",
      value: "mocktails",
    },

    {
      name: "Premium Bar",
      value: "premiumbar",
    },

    {
      name: "Veg Starters",
      value: "vegstarters",
    },

    {
      name: "Non Veg Starters",
      value: "nonvegstarters",
    },

    {
      name: "Veg Main Course",
      value: "vegmaincourse",
    },

    {
      name: "Non Veg Main Course",
      value: "nonvegmaincourse",
    },

    {
      name: "Breads",
      value: "breads",
    },

    {
      name: "Desserts",
      value: "desserts",
    },

  ]

  const [cart, setCart] = useState([]);

const addToCart = (item) => {

  const existingItem = cart.find(
    (cartItem) => cartItem._id === item._id
  );

  if (existingItem) {

    setCart(
      cart.map((cartItem) =>
        cartItem._id === item._id
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            }
          : cartItem
      )
    );

  } else {

    setCart([
      ...cart,
      {
        ...item,
        quantity: 1,
      },
    ]);

  }

};



  return (

    <div className="min-h-screen bg-[#F8FAFC] pb-10">

      {/* HEADER */}

      <Header step={2} />



      {/* MAIN CONTAINER */}

      <div className="max-w-7xl mx-auto px-6 mt-10">

        {/* MAIN CARD */}

        <div className="bg-white rounded-[32px] border border-gray-200 shadow-sm overflow-hidden">

          {/* TOP GOLD SECTION */}

          <div className="bg-[#D4A017] px-8 py-7">

            <h1 className="text-4xl font-bold text-white">

              Add Order

            </h1>

            <p className="text-yellow-100 mt-2 text-lg">

              Taking order for Table {tableId}

            </p>

          </div>



          {/* CATEGORY NAVBAR */}

          <div className="p-6 border-b border-gray-200">

            <div className="flex flex-wrap gap-4">

              {categories.map((category, index) => (

                <button

                  key={index}

                  onClick={() =>
                    setActiveCategory(category.value)
                  }

                  className={`

                  px-6
                  py-3

                  rounded-2xl

                  text-sm
                  font-semibold

                  transition-all
                  duration-300

                  hover:scale-105

                  ${

                    activeCategory === category.value

                    ?

                    `

                    bg-[#D4A017]
                    text-white
                    shadow-lg

                    `

                    :

                    `

                    bg-gray-50
                    text-gray-700
                    border
                    border-gray-200

                    hover:bg-[#D4A017]
                    hover:text-white
                    hover:border-transparent

                    `

                  }

                  `}
                >

                  {category.name}

                </button>

              ))}

            </div>

          </div>



          {/* MENU SECTION */}

          <div className="p-6">

            {activeCategory === "mocktails" &&
  <Mocktails addToCart={addToCart} />
}

{activeCategory === "premiumbar" &&
  <PremiumBars addToCart={addToCart} />
}

{activeCategory === "vegstarters" &&
  <VegStarters addToCart={addToCart} />
}

{activeCategory === "nonvegstarters" &&
  <NonVegStarters addToCart={addToCart} />
}

{activeCategory === "vegmaincourse" &&
  <VegMainCourse addToCart={addToCart} />
}

{activeCategory === "nonvegmaincourse" &&
  <NonVegMainCourse addToCart={addToCart} />
}

{activeCategory === "breads" &&
  <Breads addToCart={addToCart} />
}

{activeCategory === "desserts" &&
  <Desserts addToCart={addToCart} />
}

          </div>



          {/* BOTTOM BUTTON */}

          <div className="px-6 pb-8 flex justify-end">

            <button

  onClick={() =>
    navigate(
      `/waiter-panel/order-summary/${tableId}`,
      {
        state: {
          cart,
        },
      }
    )
  }

  className="

    bg-[#D4A017]
    hover:bg-yellow-700

    text-white

    px-8
    py-4

    rounded-2xl

    text-lg
    font-semibold

    shadow-lg

    transition-all
    duration-300

    hover:scale-105

  "

>

  View Cart & Proceed (
    {cart.reduce(
      (total, item) => total + item.quantity,
      0
    )}
  )

</button>

          </div>

        </div>

      </div>

    </div>

  )

}

export default AddOrder