// src/app/components/Sidebar.tsx
import Link from "next/link";

export default function Sidebar() {
  return (
    <nav className="w-64 h-screen bg-gray-900 p-4">
      <h2 className="text-xl text-white font-bold">Navigation</h2>
      <ul className="mt-4 space-y-2">
        <li><Link href="/" className="text-blue-500">Home</Link></li>
        <li><Link href="/posts" className="text-blue-500">Blog Posts</Link></li>
      </ul>
    </nav>
  );
}
