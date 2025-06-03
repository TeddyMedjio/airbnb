import type { Metadata } from "next";

import "./globals.css";
import { myLocalFont } from "./fonts";
import Navbar from "./components/navbar/navbar";

export const metadata: Metadata = {
  title: "Arbnb",
  description: "Arbnb Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${myLocalFont.className}  antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
