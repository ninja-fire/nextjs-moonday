import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./ui/globals.css";
import { fontclash } from "./ui/font";
import SideNav from './ui/sidenav';
import Footer from './ui/footer';
import Image from 'next/image';
import gradient from '../public/gradient.png';

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
      <body className= {`${fontclash.className} antialiased`}>
      <main className="flex min-h-screen">
        <nav className="min-w-fit h-screen sticky top-0 group flex flex-col overflow-y-b-clip justify-between items-center hover:items-start px-1 md:px-4 py-6 gap-4 transition-all">
        <Image priority={false} src={gradient} alt="" width={1080} height={1080} className="flex absolute h-screen align-right blur-2xl -z-1"/>
        <SideNav />
      </nav>
      <div className="noise shadow-xl flex flex-col grow justify-center items-center px-3 md:px-16 2xl:px-40 pb-4 sm:pb-16 pt-40 gap-40 overflow-hidden z-10 rounded-l-[32px] bg-bodybg border border-label/[.08] md:overflow-y-auto">{children}</div>
      </main>
      <footer className="flex flex-col justify-center items-start gap-8 bg-background py-20 px-20 md:px-40">
        <Footer />
      </footer>
    </body>
    </html>
  );
}