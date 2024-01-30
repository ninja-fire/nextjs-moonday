import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./ui/globals.css";
import { fontclash } from "./ui/font"
import SideNav from './ui/sidenav';

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
      <main className="flex min-h-screen flex-col p-6">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </main>
    </body>
    </html>
  );
}