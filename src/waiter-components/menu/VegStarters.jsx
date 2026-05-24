import {
  Leaf,
  Plus,
} from "lucide-react"



/* IMAGES */

import paneerTikka from "../../waiter-assets/food/veg-starters/pannertikka.jpeg"
import haraBharaKebab from "../../waiter-assets/food/veg-starters/harakabab.jpeg"
import crispyCorn from "../../waiter-assets/food/veg-starters/crispycorn.jpeg"
import vegSpringRolls from "../../waiter-assets/food/veg-starters/springroll.jpeg"
import chilliMushroom from "../../waiter-assets/food/veg-starters/mushroom.jpeg"
import cheeseBalls from "../../waiter-assets/food/veg-starters/cheeseballs.jpeg"
import tandooriBroccoli from "../../waiter-assets/food/veg-starters/brocoli.jpeg"
import honeyChilliPotato from "../../waiter-assets/food/veg-starters/honeypatato.jpeg"
import vegManchurianDry from "../../waiter-assets/food/veg-starters/manchurian.jpeg"
import stuffedGarlicBread from "../../waiter-assets/food/veg-starters/garlicbread.jpeg"


function VegStarters() {

  const vegStarters = [

    {
      name: "Paneer Tikka",
      price: "₹760",
      image: paneerTikka,
    },

    {
      name: "Hara Bhara Kebab",
      price: "₹680",
      image: haraBharaKebab,
    },

    {
      name: "Crispy Corn",
      price: "₹620",
      image: crispyCorn,
    },

    {
      name: "Veg Spring Rolls",
      price: "₹640",
      image: vegSpringRolls,
    },

    {
      name: "Chilli Mushroom",
      price: "₹720",
      image: chilliMushroom,
    },

    {
      name: "Cheese Balls",
      price: "₹760",
      image: cheeseBalls,
    },

    {
      name: "Tandoori Broccoli",
      price: "₹820",
      image: tandooriBroccoli,
    },

    {
      name: "Honey Chilli Potato",
      price: "₹660",
      image: honeyChilliPotato,
    },

    {
      name: "Veg Manchurian Dry",
      price: "₹720",
      image: vegManchurianDry,
    },

    {
      name: "Stuffed Garlic Bread",
      price: "₹580",
      image: stuffedGarlicBread,
    },

  ]



  return (

    <div className="bg-white p-6 rounded-3xl border border-gray-200 mt-10">

      {/* HEADING */}

      <div className="flex items-center gap-3 mb-8">

        <Leaf
          className="text-[#D4A017]"
          size={34}
        />

        <h2 className="text-3xl font-bold text-gray-800">

          Veg Starters

        </h2>

      </div>



      {/* GRID */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {vegStarters.map((item, index) => (

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

export default VegStarters