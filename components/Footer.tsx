import { LogOut } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-between mt-20 items-center" >
        <div className="flex gap-5 \">
          <div className="rounded-full w-[40px] h-[40px] flex-center bg-slate-200">
            J
          </div>
          <div>
            <h4>Jojo Saka</h4>
            <p>Pharmacist</p>
          </div>
        </div>

        <Link href={"/"} className="flex gap-3">
          <LogOut />
          <p className="font-bold">Log out</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
