import type { Metadata } from "next";
import { Poppins, Inter, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shree Rama Tiles & Pavers Manufacturers | Concrete Pavers, Parking Tiles & Drainage Slabs Bengaluru",
  description: "Leading manufacturer of concrete pavers, parking tiles, drainage slabs, compound walls and precast concrete products in Bengaluru. Factory-direct pricing, premium quality and bulk supply.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${manrope.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
