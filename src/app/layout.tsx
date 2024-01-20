import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | AdiIfai",
  description: "Personal Website Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.className} pb-4 text-sm bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text`}
      >
        <Providers>
          <div className="headings hidden p-4 bg-light-bg dark:bg-dark-bg lg:block">
            Adi Muhammad Syifai Portfolio
          </div>
          <Image
            className="hidden w-full h-32 2xl:h-72 object-cover object-center lg:block"
            width={1920}
            height={1080}
            src={"/blue-wallpaper.png"}
            alt="Blue Wallpaper"
          />
          <div className="w-full max-w-5xl mx-auto px-4 lg:flex lg:gap-16 lg:mt-8">
            <div className="pt-4 bg-light-bg sticky top-0 z-50 lg:top-16 lg:h-full lg:max-w-[200px] lg:w-full lg:pt-0 dark:bg-dark-bg">
              <Navbar />
            </div>
            <div className="lg:-mt-32 w-full">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
