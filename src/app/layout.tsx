import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ReduxWrapper from "../redux/ReduxWrapper";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import RightSide from "./components/RightSide/RightSide";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxWrapper>
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
        <body className="bg-[#EFF2F5]" suppressHydrationWarning>
          <div className="flex  flex-col">
            <Navbar />
            <main className=" md:px-[60px] px-6 ">{children}</main>
            {/* <Toaster /> */}
            <Footer />
            <div className=" xl:hidden flex p-[16px] border border-red-700 items-center  justify-center w-full ">
              <RightSide />
            </div>
          </div>
        </body>
      </html>
    </ReduxWrapper>
  );
}
