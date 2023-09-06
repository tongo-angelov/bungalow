import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import CookiesConsent from "@/components/CookiesConsent/CookiesConsent";
import { metadata as meta } from "@/data";

import "./globals.css";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = meta;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <NavBar />
        {children}
        <Footer />
        <CookiesConsent />
      </body>
    </html>
  );
}
