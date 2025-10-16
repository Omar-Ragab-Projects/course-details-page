import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/global/header/Header";
import { League_Spartan } from "next/font/google";

const league_Spartan = League_Spartan({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Course Details",
  description: "ByOmarRagab😃",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${league_Spartan.className} antialiased`}>
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
