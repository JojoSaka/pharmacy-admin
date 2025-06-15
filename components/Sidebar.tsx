import { SidebarLinksGeneral, SidebarLinksMainMenu } from "@/constants";
import { LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <section className="sidebar relative">
      <div className="flex gap-5 items-center mb-10 px-5">
        <Image
          src={"/icons/firstaid.svg"}
          alt="first aid"
          width={30}
          height={30}
          className="object-contain"
        />
        <span className="font-semibold text-xl hidden lg:block">MedKitPOS</span>
      </div>
      <div className="mb-5">
        <p className="sidebar-title hidden lg:block">Main menu</p>
        {SidebarLinksMainMenu.map((link) => (
          <div key={link.title} className="sidebar-link">
            <div>{link.icon}</div>

            <span className="hidden lg:block">{link.title}</span>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <p className="sidebar-title hidden lg:block">General</p>
        {SidebarLinksGeneral.map((link) => (
          <div key={link.title} className="sidebar-link">
            <div>{link.icon}</div>

            <span className="hidden lg:block">{link.title}</span>
          </div>
        ))}
      </div>

      <div className="absolute bottom-10">
        <Link href={"/"} className="flex gap-5">
            <LogOut />
            <p className="hidden lg:block">Log out</p>
        </Link>
      </div>
    </section>
  );
};

export default Sidebar;
