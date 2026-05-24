import {
  Drumstick,
  Plus,
} from "lucide-react"



/* IMAGES */

import chickenTikka from "../../waiter-assets/food/nonveg-starters/chickentikka.jpeg"
import tangdiKebab from "../../waiter-assets/food/nonveg-starters/tangedikebab.jpeg"
import chickenLollipop from "../../waiter-assets/food/nonveg-starters/lolipop.jpeg"
import fishFingers from "../../waiter-assets/food/nonveg-starters/fishfinger.jpeg"
import prawnsTempura from "../../waiter-assets/food/nonveg-starters/prawnstempura.jpeg"
import muttonSeekhKebab from "../../waiter-assets/food/nonveg-starters/mutton.jpeg"
import butterGarlicPrawns from "../../waiter-assets/food/nonveg-starters/butterprown.jpeg"
import tandooriChicken from "../../waiter-assets/food/nonveg-starters/tandoorichicken.jpeg"
import crispyChickenWings from "../../waiter-assets/food/nonveg-starters/chickenwings.jpeg"
import chilliChicken from "../../waiter-assets/food/nonveg-starters/chickenchilli.jpeg"



function NonVegStarters() {

  const nonVegStarters = [

    {
      name: "Chicken Tikka",
      price: "₹980",
      image: chickenTikka,
    },

    {
      name: "Tangdi Kebab",
      price: "₹1,120",
      image: tangdiKebab,
    },

    {
      name: "Chicken Lollipop",
      price: "₹920",
      image: chickenLollipop,
    },

    {
      name: "Fish Fingers",
      price: "₹1,280",
      image: fishFingers,
    },

    {
      name: "Prawns Tempura",
      price: "₹1,680",
      image: prawnsTempura,
    },

    {
      name: "Mutton Seekh Kebab",
      price: "₹1,420",
      image: muttonSeekhKebab,
    },

    {
      name: "Butter Garlic Prawns",
      price: "₹1,820",
      image: butterGarlicPrawns,
    },

    {
      name: "Tandoori Chicken",
      price: "₹1,180",
      image: tandooriChicken,
    },

    {
      name: "Crispy Chicken Wings",
      price: "₹960",
      image: crispyChickenWings,
    },

    {
      name: "Chilli Chicken",
      price: "₹980",
      image: chilliChicken,
    },

  ]



  return (

    <div className="bg-white p-6 rounded-3xl border border-gray-200 mt-10">

      {/* HEADING */}

      <div className="flex items-center gap-3 mb-8">

        <Drumstick
          className="text-[#D4A017]"
          size={34}
        />

        <h2 className="text-3xl font-bold text-gray-800">

          Non Veg Starters

        </h2>

      </div>



      {/* GRID */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {nonVegStarters.map((item, index) => (

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

export default NonVegStarters