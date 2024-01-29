import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./ui/globals.css";
import { fontclash } from "./ui/font"

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
      <body className={fontclash.className}>{children}</body>
    </html>
  );
}
