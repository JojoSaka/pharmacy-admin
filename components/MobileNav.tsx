import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SidebarLinksGeneral, SidebarLinksMainMenu } from "@/constants";
import Footer from "./Footer";

const MobileNav = () => {
  return (
    <section className="relative">
      <Sheet>
        <div className="flex justify-between p-5">
          <div className="flex gap-5 items-center">
            <Image
              src={"/icons/firstaid.svg"}
              alt="first aid"
              width={30}
              height={30}
              className="object-contain"
            />
            <span className="font-semibold text-xl">MedKitPOS</span>
          </div>
          <SheetTrigger>
            <Image
              src="/icons/hamburger.svg"
              width={30}
              height={30}
              alt="menu"
              className="cursor-pointer"
            />
          </SheetTrigger>
        </div>

        <SheetContent className="bg-white min-h-screen" side={"left"}>
          <SheetHeader>
            <SheetTitle>
              <div className="flex gap-5 items-center mb-10 px-5">
                <Image
                  src={"/icons/firstaid.svg"}
                  alt="first aid"
                  width={30}
                  height={30}
                  className="object-contain"
                />
                <span className="font-semibold text-xl">MedKitPOS</span>
              </div>
            </SheetTitle>
          </SheetHeader>
          <SheetClose>
            <div className="mb-5">
              <p className="sidebar-title_mobile">Main menu</p>
              {SidebarLinksMainMenu.map((link) => (
                <SheetClose asChild key={link.title}>
                  <div className="sidebar-link">
                    <div>{link.icon}</div>

                    <span className="">{link.title}</span>
                  </div>
                </SheetClose>
              ))}
            </div>
            <div className="mt-10">
              <p className="sidebar-title_mobile !text-gray-700">General</p>
              {SidebarLinksGeneral.map((link) => (
                <SheetClose asChild key={link.title}>
                  <div className="sidebar-link">
                    <div>{link.icon}</div>

                    <span className="">{link.title}</span>
                  </div>
                </SheetClose>
              ))}
            </div>
          </SheetClose>
          <div className="absolute bottom-3 left-2">
            <Footer />
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
