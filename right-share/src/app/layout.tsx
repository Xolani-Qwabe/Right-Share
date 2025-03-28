import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/ui/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Right Share",
  description: "Funding artists through NFTs, automating royalties, and connecting creators with fans through exclusive experiences, merchandise, and data-driven insights",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  min-h-screen bg-slate-100 text-slate-900 font-sans`}
      >
        <header className="text-white p-4 text-center"> 
          <Navigation/>
        </header>
        {children}
        {/* <footer className="bg-slate-900 text-white p-4 text-center">
          <p>&copy; 2025 Right Share</p>
        </footer> */}
      </body>
    </html>
  );
}
