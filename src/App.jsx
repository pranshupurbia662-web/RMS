import React from 'react'
import Sidebar from './components/Sidebar'
import Staff from './pages/Staff'
import Dashboard from './pages/Dashboard'
import TablesPage from './pages/TablesPage'
import Report from './pages/Report'
import Billing from './pages/Billing'
import Order from './pages/Order'
import Login from './pages/Login2'
import MenuManagement from './pages/MenuManagement'
import CustomerMenu from './pages/CustomerMenu'
import ChefPanel from './panels/ChefPanel'
import WaiterPanel from './panels/WaiterPanel'

import { Routes, Route, useLocation } from 'react-router-dom'

const App = () => {

  const location = useLocation()

  const hideSidebar =
  location.pathname === "/" ||
  location.pathname === "/login" ||
  location.pathname.startsWith("/chef-panel") ||
  location.pathname.startsWith("/waiter-panel")

  return (

    <div className="flex min-h-screen">

      {!hideSidebar && <Sidebar />}

      <main className={`${!hideSidebar ? "ml-20 sm:ml-24 md:ml-64" : ""} min-h-screen  w-full`}>

        <Routes>

          <Route path="/" element={<Login />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/staff" element={<Staff />} />

          <Route path="/table" element={<TablesPage />} />

          <Route path="/report" element={<Report />} />

          <Route path="/billing" element={<Billing />} />

          <Route path="/menu/*" element={<MenuManagement />} />

          <Route path="/order" element={<Order />} />

          <Route path="/customer-menu/*" element={<CustomerMenu />} />

          <Route path="/chef-panel/*" element={<ChefPanel />} />
          
          <Route path="/waiter-panel/*" element={<WaiterPanel />} />

        </Routes>

      </main>

    </div>
  )
}

export default App