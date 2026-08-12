import { Urbanist } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-Urbanist",
});

export const metadata = {
  title: "CampaignSquad",
  description: "Modern Digital Agency Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${urbanist.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col bg-[#02050A] text-white font-sans selection:bg-[#02050A] selection:text-black"
        style={{ fontFamily: "var(--font-Urbanist), sans-serif" }}
      >
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
        
      </body>
    </html>
  );
}