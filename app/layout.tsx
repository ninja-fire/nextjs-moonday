import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./ui/globals.css";
import { fontclash } from "./ui/font"
import SideNav from './ui/sidenav';
import Image from 'next/image';
import gradient from '../public/gradient.png'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moonday - Web3 Design Studio",
  description: "We are a web3 native design studio building strong brand identities and impactful Dapps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className= {`${fontclash.className} antialiased`} >
      <main className="flex min-h-screen ">
      <nav className="sticky top-0 group flex flex-col overflow-y-clip justify-between items-center px-4 py-6 gap-4 transition-all">
        <Image src={gradient} alt="" width={1080} height={1080} className="absolute h-full left-32 blur-3xl -z-1"/>
        <SideNav />
      </nav>
      <div className="flex flex-grow px-16 py-16 overflow-hidden z-10 rounded-l-[32px] bg-bodybg border border-label/[.08] md:overflow-y-auto md:p-12">{children}</div>
      </main>
    </body>
    </html>
  );
}