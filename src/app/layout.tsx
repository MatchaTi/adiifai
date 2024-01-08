import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";

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
        className={`${quicksand.className} bg-neutral-200 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
