'use client'

import { GithubIcon, Linkedin, Mail, Facebook, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <a href="https://www.facebook.com/profile.php?id=100009059781228" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <Facebook size={24} />
            </a>
            <a href="https://instagram.com/t1coder" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <Instagram size={24} />
            </a>
            <a href="https://github.com/PhucNguyen0001" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <GithubIcon size={24} />
            </a>
            <a href="https://linkedin.com/in/phucng228" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <Linkedin size={24} />
            </a>
            <a href="mailto:phucng228@gmail.com" className="hover:text-gray-400">
              <Mail size={24} />
            </a>
          </div>
          <div className="mt-4 text-center">
            <p>&copy; {new Date().getFullYear()} Phuc Nguyen. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}