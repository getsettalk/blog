// src/app/components/Navbar.tsx
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Sun, Moon, Menu } from "react-feather";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md p-4 flex justify-between items-center fixed w-full top-0 z-50">
      <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
        My Blog
      </Link>
      <div className="flex items-center space-x-4">
        {/* <button onClick={toggleTheme} className="p-2 rounded-md text-gray-900 dark:text-white">
          {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button> */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-gray-900 dark:text-white">
          <Menu size={24} />
        </button>
      </div>
      <div
        className={`absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col p-4 space-y-2">
          <li><Link href="/" className="block text-gray-900 dark:text-white">Home</Link></li>
          <li><Link href="/posts" className="block text-gray-900 dark:text-white">Blog Posts</Link></li>
        </ul>
      </div>
    </nav>
  );
}
