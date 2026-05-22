import React from 'react';
import OrdertopCard from '../components/OrdertopCard';
import OrderTable from '../components/OrderTable';
import ViewOrder from '../components/ViewOrder';

const Order = () => {
  return (
    <div>
        <div className=' text-[#c3871c] font-bold text-3xl '>
          <h1 className='p-4 text-4xl'>Orders</h1>
        </div>
      <OrdertopCard/>
      <OrderTable/>
      <ViewOrder/>
    </div>
  );
}

export default Order;
