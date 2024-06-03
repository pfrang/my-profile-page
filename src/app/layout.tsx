import type { Metadata } from "next";
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
    <html lang="en" className="h-full">
      <body className={`px-4 bg-[#FAF0CA] h-full`}>{children}</body>
    </html>
  );
}
