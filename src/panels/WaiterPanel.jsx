import {
  Routes,
  Route,
} from "react-router-dom"

import TableSelection from '../waiter-panel-pages/TableSelection'
import AddOrder from '../waiter-panel-pages/AddOrder'
import OrderSummary from '../waiter-panel-pages/OrderSummary'



function WaiterPanel() {

  return (

   <Routes>

          <Route
            path="/"
            element={<TableSelection />}
          />

          <Route
            path="add-order/:tableId"
            element={<AddOrder />}
          />

          <Route
            path="order-summary/:tableId"
            element={<OrderSummary />}
          />

    </Routes>

  )

}

export default WaiterPanel