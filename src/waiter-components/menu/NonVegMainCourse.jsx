import {
  UtensilsCrossed,
  Plus,
} from "lucide-react"



/* IMAGES */

import butterChicken from "../../waiter-assets/food/nonveg-maincourse/butterchicken.jpeg"
import chickenTikkaMasala from "../../waiter-assets/food/nonveg-maincourse/chickentikkamasala.jpeg"
import kadaiChicken from "../../waiter-assets/food/nonveg-maincourse/kadaichicken.jpeg"
import chickenCurry from "../../waiter-assets/food/nonveg-maincourse/chickencurry.jpeg"
import mughlaiChicken from "../../waiter-assets/food/nonveg-maincourse/muglaichicken.jpeg"
import muttonRoganJosh from "../../waiter-assets/food/nonveg-maincourse/muttonroganjosh.jpeg"
import muttonMasala from "../../waiter-assets/food/nonveg-maincourse/muttonmasala.jpeg"
import keemaCurry from "../../waiter-assets/food/nonveg-maincourse/keema.jpeg"
import fishCurry from "../../waiter-assets/food/nonveg-maincourse/fishcurry.jpeg"
import butterGarlicFish from "../../waiter-assets/food/nonveg-maincourse/fish.jpeg"
import prawnMasala from "../../waiter-assets/food/nonveg-maincourse/prawnmasala.jpeg"
import chickenBiryani from "../../waiter-assets/food/nonveg-maincourse/chickenbiryani.jpeg"
import hyderabadiMuttonBiryani from "../../waiter-assets/food/nonveg-maincourse/muttonbiryani.jpeg"
import prawnBiryani from "../../waiter-assets/food/nonveg-maincourse/prawnbiryani.jpeg"



function NonVegMainCourse() {

  const nonVegMainCourse = [

    {
      name: "Butter Chicken",
      price: "₹980",
      image: butterChicken,
    },

    {
      name: "Chicken Tikka Masala",
      price: "₹1,050",
      image: chickenTikkaMasala,
    },

    {
      name: "Kadai Chicken",
      price: "₹920",
      image: kadaiChicken,
    },

    {
      name: "Chicken Curry",
      price: "₹880",
      image: chickenCurry,
    },

    {
      name: "Mughlai Chicken",
      price: "₹1,120",
      image: mughlaiChicken,
    },

    {
      name: "Mutton Rogan Josh",
      price: "₹1,480",
      image: muttonRoganJosh,
    },

    {
      name: "Mutton Masala",
      price: "₹1,420",
      image: muttonMasala,
    },

    {
      name: "Keema Curry",
      price: "₹1,250",
      image: keemaCurry,
    },

    {
      name: "Fish Curry",
      price: "₹1,320",
      image: fishCurry,
    },

    {
      name: "Butter Garlic Fish",
      price: "₹1,480",
      image: butterGarlicFish,
    },

    {
      name: "Prawn Masala",
      price: "₹1,650",
      image: prawnMasala,
    },

    {
      name: "Chicken Biryani",
      price: "₹920",
      image: chickenBiryani,
    },

    {
      name: "Hyderabadi Mutton Biryani",
      price: "₹1,520",
      image: hyderabadiMuttonBiryani,
    },

    {
      name: "Prawn Biryani",
      price: "₹1,780",
      image: prawnBiryani,
    },

  ]



  return (

    <div className="bg-white p-6 rounded-3xl border border-gray-200 mt-10">

      {/* HEADING */}

      <div className="flex items-center gap-3 mb-8">

        <UtensilsCrossed
          className="text-[#D4A017]"
          size={34}
        />

        <h2 className="text-3xl font-bold text-gray-800">

          Non Veg Main Course

        </h2>

      </div>



      {/* GRID */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {nonVegMainCourse.map((item, index) => (

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

export default NonVegMainCourse