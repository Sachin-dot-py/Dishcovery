'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header>
      <nav className="navbar navbar-expand-lg float-panel">
        <div className="container-fluid px-4 py-2 flex justify-between items-center">
          <Link href="/" className="navbar-brand">
            <div className="flex items-center gap-2">
              <Image
                src="https://ext.same-assets.com/1218719127/4168290584.jpeg"
                alt="Naveen's Bapu Ki Kutia"
                width={35}
                height={35}
                className="rounded-sm"
              />
              <div className="flex flex-col">
                <span className="text-xs text-nbk-brown">Naveen's</span>
                <span className="text-lg font-semibold text-nbk-maroon">Bapu Ki Kutia</span>
              </div>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="navbar-toggler md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaTimes className="text-nbk-maroon text-xl" />
            ) : (
              <FaBars className="text-nbk-maroon text-xl" />
            )}
          </button>

          {/* Desktop Menu */}
          <div className={`md:flex items-center justify-between ${isMenuOpen ? 'block absolute top-16 left-0 right-0 bg-nbk-cream z-50 py-4 shadow-md' : 'hidden md:flex'}`}>
            <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 px-4 md:px-0">
              <li>
                <Link href="/" className="text-nbk-brown hover:text-nbk-maroon transition-colors">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/our-legacy" className="text-nbk-brown hover:text-nbk-maroon transition-colors">
                  OUR LEGACY
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-nbk-brown hover:text-nbk-maroon transition-colors">
                  SERVICES
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-nbk-brown hover:text-nbk-maroon transition-colors">
                  MENU
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-nbk-brown hover:text-nbk-maroon transition-colors">
                  CONTACT
                </Link>
              </li>
              <li className="md:ml-4">
                <Link href="#" className="btn-medium">
                  ORDER ONLINE
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
