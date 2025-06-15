import { OrderDetails } from '@/constants';
import React from 'react';

const WaitList = ({ activeOrder }: {activeOrder: number }) => {
  return (
    <div>
      {OrderDetails.map((order) => {
          return (
            <div key={order.id}>
              {order && activeOrder === order.id && (
                <div>
                  <div className="flex justify-between">
                    <h1 className="font-bold text-lg">WaitList</h1>
                    <h4>
                      {order.title} <span>#{order.id}</span>
                    </h4>
                  </div>
                  <div>
                    {order.items.map((item) => (
                      <h1 key={item.id} className="font-bold text-xl">
                        {item.id}
                      </h1>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
}

export default WaitList;
