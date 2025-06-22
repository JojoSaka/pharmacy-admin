"use client"

import { OrderDetails } from "@/constants";
import { ArrowRight, Dot, User } from "lucide-react";

type OrderProps = {
  activeOrder: number,
  setActiveOrder: React.Dispatch<React.SetStateAction<number>>;
}

const Orders = ({ activeOrder, setActiveOrder }: OrderProps) => {

  return (
    <div>
      <div className="overflow-x-auto overflow-y-hidden">
        <div className="flex gap-6 py-4 whitespace-nowrap">
          {OrderDetails.map((order) => {
            const isActive = activeOrder === order.id

            return (
              <div
                key={order.id}
                className="order-box min-w-[250px]"
                onClick={() => setActiveOrder(order.id)}
              >
                <div className={`order-box_title ${isActive ? "!text-green-600": ""}`}>
                  {order.title}
                </div>
                <div>
                  <div className="order-box_id">
                    <Dot size={20} color={isActive ? "#16a34a": "white"} />
                    <p className="text-sm text-white">#{order.id}</p>
                  </div>
                  <div className="px-2 py-1 flex items-center gap-5">
                    <User size={16}/>
                    <p className="font-bold text-14">{order.name}</p>
                  </div>
                  <div className="px-2 flex items-center gap-5">
                    <ArrowRight size={16}/>
                    <p className="font-normal text-14">{order.no_of_items} items</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Orders;
