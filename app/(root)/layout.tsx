import MobileNav from "@/components/MobileNav";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main className="bg-[#f8f8ff]">
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="min-h-screen flex">
          <div className="hidden md:flex">
            <Sidebar />
          </div>

          {/* Main content area */}
          <div className="flex-1 flex flex-col w-full">
            <div className="hidden lg:block">
              <Navbar />
            </div>
            <main className="flex-1">{children}</main>
          </div>
        </div>
      </main>
  );
}
