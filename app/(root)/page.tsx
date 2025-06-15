"use client";

import Categories from "@/components/Categories";
import MedicineCard from "@/components/MedicineCard";
import Orders from "@/components/Orders";
import WaitList from "@/components/WaitList";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState<string>("All");
  const [activeOrder, setActiveOrder] = useState<number>(0);
  // const [medicineData, setMedicineData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetchMedicines();
  //     setMedicineData(data.medicines);
  //     console.log(data.medicines);
  //   };

  //   fetchData();
  // }, []);

  return (
    <main className="grid grid-cols-1 md:grid-cols-3 px-7 py-5">
      <section className="col-span-2">
        <div>
          <h1 className="font-bold text-lg">Waiting list</h1>
          <Orders activeOrder={activeOrder} setActiveOrder={setActiveOrder} />
        </div>
        <div>
          <h1 className="font-bold text-lg">Medicines</h1>
          <Categories query={query} setQuery={setQuery} />
        </div>
        <div className="w-full h-[60vh] overflow-y-auto overflow-x-hidden">
          <MedicineCard />
        </div>
      </section>
      <section>
        <WaitList activeOrder={activeOrder} />
      </section>
    </main>
  );
}
