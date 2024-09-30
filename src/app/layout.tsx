import type { Metadata } from "next";
import { stylex, styles } from "./styles";
import "./globals.css";


export const metadata: Metadata = {
  title: "Profile",
  description: "Peder Frang profile page",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body>{children}</body>
    </html>
  );
}
