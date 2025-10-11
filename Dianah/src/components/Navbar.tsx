"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black rounded-xl px-6 py-4 shadow-md mx-4 mt-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold text-white">
          <span>The Canadian </span>
          <span className="text-red-500">Academy</span>
        </h1>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex gap-6 text-base font-medium">
          <li>
            <Link href="/" className="text-red-500 border-b-2 border-red-500 pb-1">Home</Link>
          </li>
          <li>
            <Link href="/courses" className="text-gray-300 hover:text-red-500">Courses</Link>
          </li>
          <li>
            <Link href="/courses/english-for-kids" className="text-gray-300 hover:text-red-500">English For Kids</Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-300 hover:text-red-500">About Us</Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-300 hover:text-red-500">Contact Us</Link>
          </li>
        </ul>
      </div>

      {/* Navigation Links (Mobile) */}
      {isOpen && (
        <ul className="flex flex-col gap-4 mt-4 text-base font-medium md:hidden">
          <li>
            <Link href="/" className="text-red-500 border-b-2 border-red-500 pb-1">Home</Link>
          </li>
          <li>
            <Link href="/courses" className="text-gray-300 hover:text-red-500">Courses</Link>
          </li>
          <li>
            <Link href="/courses/english-for-kids" className="text-gray-300 hover:text-red-500">English For Kids</Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-300 hover:text-red-500">About Us</Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-300 hover:text-red-500">Contact Us</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
