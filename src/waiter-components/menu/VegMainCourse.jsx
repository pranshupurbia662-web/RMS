import {
  Salad,
  Plus,
} from "lucide-react"



/* IMAGES */

import paneerButterMasala from "../../waiter-assets/food/veg-maincourse/pannerbm.jpeg"
import kadaiPaneer from "../../waiter-assets/food/veg-maincourse/kadaipanner.jpeg"
import shahiPaneer from "../../waiter-assets/food/veg-maincourse/shahipaneer.jpeg"
import malaiKofta from "../../waiter-assets/food/veg-maincourse/malaikofte.jpeg"
import vegKolhapuri from "../../waiter-assets/food/veg-maincourse/kolhapuri.jpeg"
import mixVegCurry from "../../waiter-assets/food/veg-maincourse/mixveg.jpeg"
import dalMakhani from "../../waiter-assets/food/veg-maincourse/dalmakhni.jpeg"
import dalTadka from "../../waiter-assets/food/veg-maincourse/daltadka.jpeg"
import palakPaneer from "../../waiter-assets/food/veg-maincourse/palakpanner.jpeg"
import vegHandi from "../../waiter-assets/food/veg-maincourse/veghandi.jpeg"
import mushroomMasala from "../../waiter-assets/food/veg-maincourse/mushroom.jpeg"
import navratanKorma from "../../waiter-assets/food/veg-maincourse/korma.jpeg"
import hyderabadiVegBiryani from "../../waiter-assets/food/veg-maincourse/biryaniveg.jpeg"
import dumVegBiryani from "../../waiter-assets/food/veg-maincourse/dumbiryani.jpeg"



function VegMainCourse() {

  const vegMainCourse = [

    {
      name: "Paneer Butter Masala",
      price: "₹690",
      image: paneerButterMasala,
    },

    {
      name: "Kadai Paneer",
      price: "₹720",
      image: kadaiPaneer,
    },

    {
      name: "Shahi Paneer",
      price: "₹760",
      image: shahiPaneer,
    },

    {
      name: "Malai Kofta",
      price: "₹740",
      image: malaiKofta,
    },

    {
      name: "Veg Kolhapuri",
      price: "₹650",
      image: vegKolhapuri,
    },

    {
      name: "Mix Veg Curry",
      price: "₹620",
      image: mixVegCurry,
    },

    {
      name: "Dal Makhani",
      price: "₹590",
      image: dalMakhani,
    },

    {
      name: "Dal Tadka",
      price: "₹520",
      image: dalTadka,
    },

    {
      name: "Palak Paneer",
      price: "₹710",
      image: palakPaneer,
    },

    {
      name: "Veg Handi",
      price: "₹680",
      image: vegHandi,
    },

    {
      name: "Mushroom Masala",
      price: "₹760",
      image: mushroomMasala,
    },

    {
      name: "Navratan Korma",
      price: "₹820",
      image: navratanKorma,
    },

    {
      name: "Hyderabadi Veg Biryani",
      price: "₹720",
      image: hyderabadiVegBiryani,
    },

    {
      name: "Dum Veg Biryani",
      price: "₹760",
      image: dumVegBiryani,
    },

  ]



  return (

    <div className="bg-white p-6 rounded-3xl border border-gray-200 mt-10">

      {/* HEADING */}

      <div className="flex items-center gap-3 mb-8">

        <Salad
          className="text-[#D4A017]"
          size={34}
        />

        <h2 className="text-3xl font-bold text-gray-800">

          Veg Main Course

        </h2>

      </div>



      {/* GRID */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {vegMainCourse.map((item, index) => (

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

export default VegMainCourse