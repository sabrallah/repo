'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Nav({ currentPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav role="navigation" className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-300 rounded-md px-2 py-1">
              Cabinet Fiduciaire Moderne
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 relative group focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${currentPage === 'services' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}>
              Services
              {currentPage !== 'services' && <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>}
            </Link>
            <Link href="/about" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 relative group focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${currentPage === 'about' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}>
              À Propos
              {currentPage !== 'about' && <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>}
            </Link>
            <Link href="/contact" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 relative group focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${currentPage === 'contact' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-700 hover:text-indigo-600'}`}>
              Contact
              {currentPage !== 'contact' && <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>}
            </Link>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-indigo-700 focus:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transform hover:scale-105 focus:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl focus:shadow-xl">
              Rendez-vous
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
              className="text-gray-700 hover:text-indigo-600 focus:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-300 p-2 rounded-md"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                {isMenuOpen ? (
                  <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 0 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-16 left-0 w-full bg-white shadow-lg transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/services" className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${currentPage === 'services' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:text-indigo-600'}`}>
              Services
            </Link>
            <Link href="/about" className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${currentPage === 'about' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:text-indigo-600'}`}>
              À Propos
            </Link>
            <Link href="/contact" className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${currentPage === 'contact' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:text-indigo-600'}`}>
              Contact
            </Link>
            <button className="block w-full text-left bg-indigo-600 text-white px-3 py-2 rounded-md text-base font-semibold hover:bg-indigo-700 focus:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-300">
              Rendez-vous
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
