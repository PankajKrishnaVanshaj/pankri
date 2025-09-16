"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="w-full bg-white rounded-2xl shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <Image
            src="/pankri.png"
            alt="PanKri Logo"
            width={32}
            height={32}
            className="rounded-md"
          />
          <h1 className="text-2xl font-bold text-gray-900 tracking-wide">
            PanKri
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-white px-6 py-4 space-y-4 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
