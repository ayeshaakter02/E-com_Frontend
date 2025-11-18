"use client";
import { useState } from "react";
import Link from "next/link";
import { FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="font-logo text-3xl font-bold text-red-700">
          Benimle hazırlan
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5 xl:gap-8">

          {/* Categories Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCategoriesOpen(!categoriesOpen)}
              className="font-paragraph text-2xl font-semibold hover:text-red-600"
            >
              Categories ▾
            </button>

            {categoriesOpen && (
              <div className="font-roboto absolute top-10 left-0 bg-white shadow-lg border rounded-lg w-40 py-2">
                <Link href="/category/men" className="block px-4 py-2 hover:bg-gray-100">Men</Link>
                <Link href="/category/women" className="block px-4 py-2 hover:bg-gray-100">Women</Link>
                <Link href="/category/electronics" className="block px-4 py-2 hover:bg-gray-100">Electronics</Link>
                <Link href="/category/shoes" className="block px-4 py-2 hover:bg-gray-100">Shoes</Link>
              </div>
            )}
          </div>

          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search for products..."
            className="border border-gray-300 rounded-full px-4 py-2 w-64 focus:outline-none focus:ring focus:ring-red-200"
          />

          {/* User Login */}
          <Link href="/login" className="font-paragraph flex text-xl font-semibold items-center gap-1 text-red-700 hover:text-red-500">
            <FiUser className="text-xl" /> Login
          </Link>

          {/* Cart */}
          <Link href="/cart" className="relative text-gray-700 hover:text-red-600">
            <FiShoppingCart className="text-2xl" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex justify-center items-center rounded-full">
              0
            </span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t py-4 space-y=4 px-4">

          {/* Categories */}
          <button
            onClick={() => setCategoriesOpen(!categoriesOpen)}
            className="font-paragraph text-xl font-semibold hover:text-red-600 block w-full text-left text-red-800 py-2"
          >
            Categories ▾
          </button>

          {categoriesOpen && (
            <div className="bg-gray-50 rounded-lg py-2 mb-3">
              <Link href="/category/men" className="block px-4 py-2 hover:bg-gray-100">Men</Link>
              <Link href="/category/women" className="block px-4 py-2 hover:bg-gray-100">Women</Link>
              <Link href="/category/electronics" className="block px-4 py-2 hover:bg-gray-100">Electronics</Link>
              <Link href="/category/shoes" className="block px-4 py-2 hover:bg-gray-100">Shoes</Link>
            </div>
          )}

          {/* Search */}
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
          />

          {/* Login */}
          <Link href="/login" className="font-paragraph text-xl font-semibold block py-2 text-red-700">Login</Link>

          {/* Cart */}
          <Link href="/cart" className="flex items-center gap-2 py-2 text-gray-700">
            <FiShoppingCart className="text-xl" /> Cart
          </Link>

        </div>
      )}
    </header>
  );
}
