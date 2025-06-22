import { Medicines } from "@/constants";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const MedicineCard = () => {
  const [number, setNumber] = useState(1);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {Medicines.map((item) => (
        <div key={item.name} className="p-1 xl:p-5 bg-white rounded-2xl space-y-4">
          <div className="flex justify-evenly gap-5">
            <div className="bg-gray-200 flex justify-center items-center rounded-2xl">
              <Image
                src={"/assets/hero.png"}
                alt="Medicine Image"
                width={600}
                height={1000}
              />
            </div>
            <div className="space-y-6">
              <h4 className="font-bold text-18">{item.name}</h4>
              <p className="font-normal text-16 text-gray-600">
                {item.description}
              </p>

              <div className="flex justify-between">
                <div>
                  <h4 className="font-semibold text-16 text-gray-400">Netto</h4>
                  <p className="font-extrabold">{item.size}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-16 text-gray-400">Stock</h4>
                  <p className="font-extrabold">{item.stock} Available</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="-mr-12 w-full">
              <p className="font-bold text-20">
                <span className="align-super text-md text-green-600">$ </span>
                {item.price}{" "}
                <span className="align-sub text-md text-gray-400">
                  / Bottle
                </span>
              </p>
            </div>

            <div className="w-full">
              <div className="flex justify-between">
                <div
                  className="w-10 h-10 rounded-full bg-gray-200 flex-center cursor-pointer hover:bg-green-600 hover:text-white"
                  onClick={() => setNumber(number - 1)}
                >
                  <Minus />
                </div>

                <div className="w-10 h-10 rounded-full flex-center cursor-pointer">
                  <p className="font-bold text-20">{number}</p>
                </div>

                <div
                  className="w-10 h-10 rounded-full bg-gray-200 flex-center cursor-pointer hover:bg-green-600 hover:text-white"
                  onClick={() => setNumber(number + 1)}
                >
                  <Plus />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MedicineCard;
