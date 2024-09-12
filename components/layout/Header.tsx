'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-semibold">My Portfolio</div>
          <div className="hidden md:flex space-x-4">
            <Link href="#about" className="hover:text-blue-400">About</Link>
            <Link href="#skills" className="hover:text-blue-400">Skills</Link>
            <Link href="#services" className="hover:text-blue-400">Services</Link>
            <Link href="#experience" className="hover:text-blue-400">Experience</Link>
            <Link href="#contact" className="hover:text-blue-400">Contact</Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#about" className="block hover:text-blue-400 py-2">About</Link>
            <Link href="#skills" className="block hover:text-blue-400 py-2">Skills</Link>
            <Link href="#services" className="block hover:text-blue-400 py-2">Services</Link>
            <Link href="#experience" className="block hover:text-blue-400 py-2">Experience</Link>
            <Link href="#contact" className="block hover:text-blue-400 py-2">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  )
}