import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBarComponents from "@/components/NavBarComponents";
import MyFooter from "@/components/MyFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CSTAD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBarComponents/>
        {children}
        <MyFooter/>
        </body>
    </html>
  );
}
