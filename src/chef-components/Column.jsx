import OrderCard from './OrderCard'

function Column(props) {

  return (
    <div className={`${props.color} p-4 rounded-2xl w-72`}>

      <h2 className="text-center font-bold text-gray-800 mb-5">
        {props.title}
      </h2>


      <div className="space-y-4">

        {
          props.orders.map((order) => {
            return (
              <OrderCard
                key={order.id}
                orderNumber={order.id}
                items={order.items}
                table={order.table}
                time={order.time}
              />
            )
          })
        }

      </div>

    </div>
  )
}

export default Column