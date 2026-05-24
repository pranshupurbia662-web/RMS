
import {
  GlassWater,
  Plus,
} from "lucide-react"


import virginMojito from "../../waiter-assets/food/mocktails/virginmoito.jpeg"
import strawberryMojito from "../../waiter-assets/food/mocktails/strawberry.jpeg"
import blueLagoon from "../../waiter-assets/food/mocktails/bluelagoon.jpeg"
import watermelonCooler from "../../waiter-assets/food/mocktails/watermeloncooler.jpeg"
import mintLemonade from "../../waiter-assets/food/mocktails/mintlemon.jpeg"
import pineapplePunch from "../../waiter-assets/food/mocktails/pineapplepunch.jpeg"
import kiwiBlast from "../../waiter-assets/food/mocktails/kiwiblast.jpeg"
import cranberrySparkler from "../../waiter-assets/food/mocktails/cranberry.jpeg"
import greenAppleSoda from "../../waiter-assets/food/mocktails/greenapple.jpeg"
import mangoMintFizz from "../../waiter-assets/food/mocktails/mangofizz.jpeg"
import icedPeachTea from "../../waiter-assets/food/mocktails/icedtea.jpeg"
import coldCoffeeFrappe from "../../waiter-assets/food/mocktails/coldcoffee.jpeg"
import oreoShake from "../../waiter-assets/food/mocktails/oreoshake.jpeg"
import vanillaCaramelFrappe from "../../waiter-assets/food/mocktails/vanila.jpeg"
import chocolateShakeSupreme from "../../waiter-assets/food/mocktails/chocolateshake.jpeg"

function Mocktails() {

  const mocktails = [

    {
      name: "Virgin Mojito",
      price: "₹420",
      image: virginMojito,
    },

    {
      name: "Strawberry Mojito",
      price: "₹480",
      image: strawberryMojito,
    },

    {
      name: "Blue Lagoon",
      price: "₹520",
      image: blueLagoon,
    },

    {
      name: "Watermelon Cooler",
      price: "₹460",
      image: watermelonCooler,
    },

    {
      name: "Mint Lemonade",
      price: "₹390",
      image: mintLemonade,
    },

    {
      name: "Pineapple Punch",
      price: "₹540",
      image: pineapplePunch,
    },

    {
      name: "Kiwi Blast",
      price: "₹580",
      image: kiwiBlast,
    },

    {
      name: "Cranberry Sparkler",
      price: "₹620",
      image: cranberrySparkler,
    },

    {
      name: "Green Apple Soda",
      price: "₹440",
      image: greenAppleSoda,
    },

    {
      name: "Mango Mint Fizz",
      price: "₹520",
      image: mangoMintFizz,
    },

    {
      name: "Iced Peach Tea",
      price: "₹480",
      image: icedPeachTea,
    },

    {
      name: "Cold Coffee Frappe",
      price: "₹520",
      image: coldCoffeeFrappe,
    },

    {
      name: "Oreo Shake",
      price: "₹560",
      image: oreoShake,
    },

    {
      name: "Vanilla Caramel Frappe",
      price: "₹620",
      image: vanillaCaramelFrappe,
    },

    {
      name: "Chocolate Shake Supreme",
      price: "₹640",
      image: chocolateShakeSupreme,
    },

  ]


return (

    <div className="bg-white p-6 rounded-3xl border border-gray-200">

      {/* HEADING */}
      <div className="flex items-center gap-3 mb-8">

        <GlassWater
          className="text-[#D4A017]"
          size={34}
        />

        <h2 className="text-3xl font-bold text-gray-800">
          Signature Mocktails
        </h2>

      </div>



      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {mocktails.map((item, index) => (

          <div
            key={index}
            className="bg-[#fffaf0] rounded-3xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300"
          >

            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.name}
              className="h-52 w-full object-cover"
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
                  className="bg-[#D4A017] hover:bg-yellow-700 text-white p-3 rounded-full transition-all"
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

export default Mocktails