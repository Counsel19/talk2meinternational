import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppProvider from "./components/AppProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Talk2Me International",
  description:
    "Talk2Me International is a non-profit organisation committed to mentoring teens, youths, and adults in embracing Godly and Bible-based relationships. We believe that healthy relationships are the foundation for a thriving society, and we are here to support individuals in their pursuit of such relationships.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <AppProvider>{children}</AppProvider>
        </body>
      </html>
    </>
  );
}
