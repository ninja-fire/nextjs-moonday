import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./ui/globals.css";
import { fontclash } from "./ui/font";
import SideNav from './ui/sidenav';
import Footer from './ui/footer';
import Image from 'next/image';
import gradient from '../public/gradient.webp';

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
      <body className={`${fontclash.className} antialiased`}>
        <main className="flex min-h-screen">
          <nav className="group flex flex-col min-w-fit h-screen overflow-y-b-visible justify-between items-center px-1 md:px-4 py-6 gap-4 transition-all">
            <Image priority quality={50} src={gradient} alt="" width={1080} height={1080} className="flex absolute h-screen left-24 w-[64vw] md:left-40 blur-2xl z-[-10]" />
            <SideNav />
          </nav>
          <div className="noise flex flex-col grow items-center px-3 md:px-16 2xl:px-40 pb-4 sm:pb-16 pt-40 gap-40 bg-scroll h-screen z-10 rounded-l-[32px] bg-bodybg border border-label/[.08] overflow-y-auto overflow-x-hidden md:overflow-y-auto shadow-xl">{children}</div>
        </main>
        <footer className="relative flex flex-col justify-center items-start gap-8 py-20 px-20 md:px-40">
          <Footer />
        </footer>
      </body>
    </html>
  );
}