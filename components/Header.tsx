'use client'

import { useState } from 'react'
import { Menu, X, Calculator, FileText, Users } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Calculator className="h-8 w-8 text-primary-600 mr-2" />
            <span className="text-2xl font-bold text-gray-900">
              Cabinet Fiduciaire
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#accueil" className="text-gray-700 hover:text-primary-600 transition-colors">
              Accueil
            </a>
            <a href="#services" className="text-gray-700 hover:text-primary-600 transition-colors">
              Services
            </a>
            <a href="#apropos" className="text-gray-700 hover:text-primary-600 transition-colors">
              À propos
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex">
            <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
              Consultation gratuite
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#accueil" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                Accueil
              </a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                Services
              </a>
              <a href="#apropos" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                À propos
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-primary-600">
                Contact
              </a>
              <button className="w-full text-left bg-primary-600 text-white px-3 py-2 rounded-lg hover:bg-primary-700 transition-colors mt-2">
                Consultation gratuite
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
