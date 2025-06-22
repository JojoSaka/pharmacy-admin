import { OrderDetails } from '@/constants';
import React from 'react';
import WaitlistCard from './WaitlistCard';

const WaitList = ({ activeOrder }: {activeOrder: number }) => {
  return (
    <div className='bg-white p-5'>
      {OrderDetails.map((order) => {
          return (
            <div key={order.id}>
              {order && activeOrder === order.id && (
                <div className='space-y-2'>
                  <div className="flex justify-between">
                    <h1 className="font-bold text-lg">WaitList</h1>
                    <h4>
                      {order.title} <span>#{order.id}</span>
                    </h4>
                  </div>
                  <div>
                    {order.items.map((item) => (
                      <h1 key={item.id} className="font-semibold text-xl">
                        Details Prescription <span className='text-green-600'>{order.no_of_items}</span>
                      </h1>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}

        <div className='max-h-[150px] overflow-y-auto mt-10 p-5 bg-[#f8f8ff] space-y-5'>
          <div className='flex justify-between'>
            <h4>Name</h4>
            <h4>Amount</h4>
          </div>
          <div className='flex justify-between'>
            <h4>H1 D 5000 Vitamin</h4>
            <h4>x1</h4>
          </div>
          <div className='flex justify-between'>
            <h4>Sanmol Tablets</h4>
            <h4>x1</h4>
          </div>
          <div className='flex justify-between'>
            <h4>Paracetamol Tablets</h4>
            <h4>x1</h4>
          </div>
        </div>

        <div className='max-h-[400px] overflow-y-auto space-y-5 mt-5'>
          <h1 className="font-bold text-lg">WaitList</h1>

          <div className='space-y-2'>
            <WaitlistCard />
            <WaitlistCard />
            <WaitlistCard />
          </div>

          <div className='flex justify-between'>
            <p>Subtotal</p>
            <p>$ 12.35</p>
          </div>
          <div className='flex justify-between'>
            <p>Platform fee</p>
            <p>$ 0.35</p>
          </div>
        </div>

        <div className='mt-5'>
          <div className='flex justify-between'>
            <h1 className="font-bold text-lg">Total</h1>
            <p>$ 12.70</p>
          </div>
        </div>
    </div>
  );
}

export default WaitList;
