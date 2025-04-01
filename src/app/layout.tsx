// src/app/layout.tsx
import "./globals.css";
import Navbar from "./components/Navbar";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark:bg-gray-900">
      <body className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white">
        <Navbar />
        <div className="flex flex-col md:flex-row pt-16">
          <aside className="hidden md:block w-64 min-h-screen bg-white dark:bg-gray-800 p-4 shadow-md">
            <h2 className="text-xl font-bold">Navigation</h2>
            <ul className="mt-4 space-y-2">
              <li><Link href="/" className="text-blue-500">Home</Link></li>
              <li><Link href="/posts" className="text-blue-500">Blog Posts</Link></li>
            </ul>
          </aside>
          <main className="flex-grow p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
