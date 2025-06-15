import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Scan, Search, Ticket } from "lucide-react";

const Navbar = () => {
  return (
    <section className="flex justify-between items-center px-7 py-5 shadow-lg rounded-b-lg bg-white">
      <div>
        <h1 className="font-bold text-lg">Apotek Pelita Sehat</h1>
        <h4 className="font-normal text-sm text-gray-400">Tuesday, 13 June 2025</h4>
      </div>

      <div className="flex w-full max-w-sm items-center gap-2">
        <Input type="text" placeholder="" className="rounded-lg border-none bg-slate-100 shadow-sm"/>
        <Button type="submit" variant={"ghost"} className="rounded-lg border-none bg-slate-100 shadow-sm">
          <Search />
        </Button>
      </div>

      <div className="flex gap-3 rounded-xl shadow-lg px-4 py-2">
        <Ticket />
        <span className="font-semibold text-sm hidden xl:flex">Use Voucher</span>
      </div>

      <div className="flex gap-3 rounded-xl shadow-lg px-4 py-2">
        <Scan />
        <span className="font-semibold text-sm hidden xl:flex">Scan Prescription</span>
      </div>

      <div className="flex-center gap-5">
        <div className="rounded-full w-[40px] h-[40px] flex-center bg-slate-200">
            J
        </div>
        <div>
          <h4>Jojo Saka</h4>
          <p>Pharmacist</p>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
