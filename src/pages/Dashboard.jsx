import React from 'react'
import AdminCardTop from '../components/AdminCardTop'
import OrderTable from '../components/OrderTable'

const Dashboard = () => {
  return (
    <div>
      <AdminCardTop/>
      <div className='p-6'>
        <OrderTable/>
      </div>
      
 
  </div>
  )
}

export default Dashboard
