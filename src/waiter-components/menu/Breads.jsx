import {
  Wheat,
  Plus,
} from "lucide-react"



/* IMAGES */

import butterNaan from "../../waiter-assets/food/breads/butternaan.jpeg"
import garlicNaan from "../../waiter-assets/food/breads/garlicnaan.jpeg"
import cheeseNaan from "../../waiter-assets/food/breads/cheese.jpeg"
import tandooriRoti from "../../waiter-assets/food/breads/tandoori.jpeg"
import butterRoti from "../../waiter-assets/food/breads/butterroti.jpeg"
import lachhaParatha from "../../waiter-assets/food/breads/lacha.jpeg"
import stuffedKulcha from "../../waiter-assets/food/breads/stuffedkulcha.jpeg"
import missiRoti from "../../waiter-assets/food/breads/misi.jpeg"


function Breads() {

  const breads = [

    {
      name: "Butter Naan",
      price: "₹180",
      image: butterNaan,
    },

    {
      name: "Garlic Naan",
      price: "₹240",
      image: garlicNaan,
    },

    {
      name: "Cheese Naan",
      price: "₹320",
      image: cheeseNaan,
    },

    {
      name: "Tandoori Roti",
      price: "₹140",
      image: tandooriRoti,
    },

    {
      name: "Butter Roti",
      price: "₹160",
      image: butterRoti,
    },

    {
      name: "Lachha Paratha",
      price: "₹260",
      image: lachhaParatha,
    },

    {
      name: "Stuffed Kulcha",
      price: "₹340",
      image: stuffedKulcha,
    },

    {
      name: "Missi Roti",
      price: "₹220",
      image: missiRoti,
    },

  ]



  return (

    <div className="bg-white p-6 rounded-3xl border border-gray-200 mt-10">

      {/* HEADING */}

      <div className="flex items-center gap-3 mb-8">

        <Wheat
          className="text-[#D4A017]"
          size={34}
        />

        <h2 className="text-3xl font-bold text-gray-800">

          Artisan Breads

        </h2>

      </div>



      {/* GRID */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {breads.map((item, index) => (

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

export default Breads