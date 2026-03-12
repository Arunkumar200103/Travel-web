"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full py-6 px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="h-8 w-30" >
         <img src="/logo.png" alt="Jadoo Logo"  />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-12 font-family-sans">
          <Link href="#" className="text-[#212832] hover:text-[#F1A501] transition-colors text-sm font-medium">
            Destinations
          </Link>
          <Link href="#" className="text-[#212832] hover:text-[#F1A501] transition-colors text-sm font-medium">
            Hotels
          </Link>
          <Link href="#" className="text-[#212832] hover:text-[#F1A501] transition-colors text-sm font-medium">
            Flights
          </Link>
          <Link href="#" className="text-[#212832] hover:text-[#F1A501] transition-colors text-sm font-medium">
            Bookings
          </Link>
          <Link href="#" className="text-[#212832] hover:text-[#F1A501] transition-colors text-sm font-medium">
            Login
          </Link>
          <button className="border border-[#212832] rounded-md px-5 py-2 text-sm font-medium text-[#212832] hover:bg-[#212832] hover:text-white transition-colors">
            Sign up
          </button>
          <button className="flex items-center gap-1 text-sm font-medium text-[#212832]">
            EN
            <ChevronDown className="w-4 h-4" />
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-gray-100 pt-4">
          <Link href="#" className="text-[#212832] hover:text-[#F1A501] transition-colors text-sm font-medium px-4">
            Destinations
          </Link>
          <Link href="#" className="text-[#212832] hover:text-[#F1A501] transition-colors text-sm font-medium px-4">
            Hotels
          </Link>
          <Link href="#" className="text-[#212832] hover:text-[#F1A501] transition-colors text-sm font-medium px-4">
            Flights
          </Link>
          <Link href="#" className="text-[#212832] hover:text-[#F1A501] transition-colors text-sm font-medium px-4">
            Bookings
          </Link>
          <Link href="#" className="text-[#212832] hover:text-[#F1A501] transition-colors text-sm font-medium px-4">
            Login
          </Link>
          <div className="px-4 flex items-center gap-4">
            <button className="border border-[#212832] rounded-md px-5 py-2 text-sm font-medium text-[#212832]">
              Sign up
            </button>
            <button className="flex items-center gap-1 text-sm font-medium text-[#212832]">
              EN
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </nav>
      )}
    </header>
  )
}
