import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My PharmD",
  description: "Online pharmacy platform for drugs purchases",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"relative"}
      >
        {children}
      </body>
    </html>
  );
}
