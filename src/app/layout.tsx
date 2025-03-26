import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./components/Sidebar";

export const metadata: Metadata = {
  title: "My Blog",
  description: "A simple blog using Next.js App Router",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"> 
      <body className="flex">
        <Sidebar />
        <main className="flex-grow p-6">{children}</main>
      </body>
    </html>
  );
}
