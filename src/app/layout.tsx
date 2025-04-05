import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naveen's Bapu Ki Kutia - Premium Vegetarian Restaurant",
  description: "Naveen's Bapu Ki Kutia is a pure vegetarian restaurant serving delicious food cooked with freshest ingredients.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Suspense>
          <Header />
        </Suspense>
        <main>{children}</main>
        <Suspense>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
