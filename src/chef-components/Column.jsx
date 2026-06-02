import OrderCard from "./OrderCard";

function Column(props) {

  return (

    <div className={`${props.color} p-4 rounded-2xl w-72`}>

      <h2 className="text-center font-bold text-gray-800 mb-5">
        {props.title}
      </h2>

      <div className="space-y-4">

        {props.orders.map((order) => (

          <OrderCard
            key={order._id}
            order={order}
            updateStatus={props.updateStatus}
          />

        ))}

      </div>

    </div>

  );

}

export default Column;