import {
  IceCreamBowl,
  Plus,
} from "lucide-react"



/* IMAGES */

import gulabJamunCheesecake from "../../waiter-assets/food/desserts/gulabjamun.jpeg"
import rasmalaiTresLeches from "../../waiter-assets/food/desserts/rasmalai.jpeg"
import brownieBelgianIceCream from "../../waiter-assets/food/desserts/brownie.jpeg"
import chocolateLavaCake from "../../waiter-assets/food/desserts/lavacake.jpeg"
import newYorkCheesecake from "../../waiter-assets/food/desserts/newchessecake.jpeg"
import classicTiramisu from "../../waiter-assets/food/desserts/tiramisu.jpeg"
import kulfiFaloodaRoyale from "../../waiter-assets/food/desserts/faluda.jpeg"
import belgianWaffleSupreme from "../../waiter-assets/food/desserts/waffle.jpeg"
import royalIceCreamSundae from "../../waiter-assets/food/desserts/royalsundae.jpeg"
import rabdiDryFruits from "../../waiter-assets/food/desserts/rabdi.jpeg"

function Desserts() {

  const desserts = [

    {
      name: "Gulab Jamun Cheesecake",
      price: "₹420",
      image: gulabJamunCheesecake,
    },

    {
      name: "Rasmalai Tres Leches",
      price: "₹520",
      image: rasmalaiTresLeches,
    },

    {
      name: "Brownie with Belgian Ice Cream",
      price: "₹640",
      image: brownieBelgianIceCream,
    },

    {
      name: "Chocolate Lava Cake",
      price: "₹690",
      image: chocolateLavaCake,
    },

    {
      name: "New York Cheesecake",
      price: "₹760",
      image: newYorkCheesecake,
    },

    {
      name: "Classic Tiramisu",
      price: "₹820",
      image: classicTiramisu,
    },

    {
      name: "Kulfi Falooda Royale",
      price: "₹620",
      image: kulfiFaloodaRoyale,
    },

    {
      name: "Belgian Waffle Supreme",
      price: "₹880",
      image: belgianWaffleSupreme,
    },

    {
      name: "Royal Ice Cream Sundae",
      price: "₹740",
      image: royalIceCreamSundae,
    },

    {
      name: "Rabdi with Dry Fruits",
      price: "₹480",
      image: rabdiDryFruits,
    },

  ]



  return (

    <div className="bg-white p-6 rounded-3xl border border-gray-200 mt-10">

      {/* HEADING */}

      <div className="flex items-center gap-3 mb-8">

        <IceCreamBowl
          className="text-[#D4A017]"
          size={34}
        />

        <h2 className="text-3xl font-bold text-gray-800">

          Signature Desserts

        </h2>

      </div>



      {/* GRID */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {desserts.map((item, index) => (

          <div
            key={index}

            className="

            bg-[#fffaf0]
            rounded-3xl
            overflow-hidden
            border
            border-gray-200

            hover:shadow-2xl
            transition-all
            duration-300

            "

          >

            {/* IMAGE */}

            <img
              src={item.image}
              alt={item.name}

              className="
              h-52
              w-full
              object-cover
              "
            />



            {/* CONTENT */}

            <div className="p-5">

              <h3 className="text-xl font-bold text-gray-800 mb-2">

                {item.name}

              </h3>



              <div className="flex items-center justify-between">

                <p className="text-[#D4A017] text-lg font-bold">

                  {item.price}

                </p>



                <button

                  className="

                  bg-[#D4A017]
                  hover:bg-yellow-700

                  text-white

                  p-3
                  rounded-full

                  transition-all

                  "

                >

                  <Plus size={18} />

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  )

}

export default Desserts