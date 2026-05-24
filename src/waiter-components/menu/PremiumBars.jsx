import {
  Wine,
  Plus,
} from "lucide-react"


import classicMojito from "../../waiter-assets/food/premiumbars/classicmojito.jpeg"
import margarita from "../../waiter-assets/food/premiumbars/margrita.jpeg"
import cosmopolitan from "../../waiter-assets/food/premiumbars/cosmopolita.jpeg"
import whiskeySour from "../../waiter-assets/food/premiumbars/sourwhis.jpeg"
import oldFashioned from "../../waiter-assets/food/premiumbars/oldfashion.jpeg"
import longIslandIcedTea from "../../waiter-assets/food/premiumbars/long.jpeg"
import bloodyMary from "../../waiter-assets/food/premiumbars/blodymary.jpeg"
import martini from "../../waiter-assets/food/premiumbars/martini.jpeg"
import tequilaSunrise from "../../waiter-assets/food/premiumbars/tequila.jpeg"
import pinaColada from "../../waiter-assets/food/premiumbars/pinacaloda.jpeg"


function PremiumBars() {

  const premiumBars = [

    {
      name: "Classic Mojito",
      price: "₹780",
      image: classicMojito,
    },

    {
      name: "Margarita",
      price: "₹920",
      image: margarita,
    },

    {
      name: "Cosmopolitan",
      price: "₹980",
      image: cosmopolitan,
    },

    {
      name: "Whiskey Sour",
      price: "₹1050",
      image: whiskeySour,
    },

    {
      name: "Old Fashioned",
      price: "₹1180",
      image: oldFashioned,
    },

    {
      name: "Long Island Iced Tea",
      price: "₹1320",
      image: longIslandIcedTea,
    },

    {
      name: "Bloody Mary",
      price: "₹960",
      image: bloodyMary,
    },

    {
      name: "Martini",
      price: "₹1240",
      image: martini,
    },

    {
      name: "Pina Colada",
      price: "₹920",
      image: pinaColada,
    },

    {
      name: "Tequila Sunrise",
      price: "₹980",
      image: tequilaSunrise,
    },

  ]



  return (

    <div className="bg-white p-6 rounded-3xl border border-gray-200 mt-10">

      <div className="flex items-center gap-3 mb-8">

        <Wine
          className="text-[#D4A017]"
          size={34}
        />

        <h2 className="text-3xl font-bold text-gray-800">

          Premium Bar

        </h2>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {premiumBars.map((item, index) => (

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

            <img
              src={item.image}
              alt={item.name}

              className="
              h-52
              w-full
              object-cover
              "
            />


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

export default PremiumBars