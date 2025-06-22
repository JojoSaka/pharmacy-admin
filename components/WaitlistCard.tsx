import Image from "next/image";
import React from "react";

const WaitlistCard = () => {
  return (
    <div className="flex gap-5">
      <div className="bg-gray-200 flex justify-center items-center rounded-2xl">
        <Image
          src={"/assets/hero.png"}
          alt="Medicine Image"
          width={180}
          height={1000}
        />
      </div>

      <div>
        <div className="space-y-4">
            <h4 className="font-bold text-18">H1 - D 5000 Vitamin</h4>
            <p className="text-14 text-gray-600">dosage 1 time(s) a day</p>
        </div>
      </div>
    </div>
  );
};

export default WaitlistCard;
