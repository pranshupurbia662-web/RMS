import {
  Routes,
  Route,
} from "react-router-dom";

import TableSelection from "../waiter-panel-pages/TableSelection";
import AddOrder from "../waiter-panel-pages/AddOrder";
import OrderSummary from "../waiter-panel-pages/OrderSummary";
import OrderPlaced from "../waiter-panel-pages/OrderPlaced";
import Notifications from "../waiter-panel-pages/Notification";
import GenerateBill from "../waiter-panel-pages/GenerateBill";

function WaiterPanel() {
  return (
    <Routes>
      <Route
        index
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

      <Route
        path="order-placed/:tableId"
        element={<OrderPlaced />}
      />

      {/* UPDATED ROUTE */}
      <Route
        path="notifications/:tableId"
        element={<Notifications />}
      />

      <Route
        path="generate-bill/:tableId"
        element={<GenerateBill />}
      />
    </Routes>
  );
}

export default WaiterPanel;