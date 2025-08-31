'use client'

import { useState } from 'react'
import Link from 'next/link'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentService, setCurrentService] = useState(0)

  const services = [
    {
      icon: '💼',
      title: 'Conseil Financier',
      description: 'Optimisez vos investissements avec nos conseils experts et personnalisés.',
      details: 'Notre équipe d\'experts financiers vous accompagne dans l\'analyse de vos objectifs, l\'évaluation des risques et la construction d\'une stratégie d\'investissement sur mesure.',
      backgroundImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      icon: '📈',
      title: 'Gestion de Patrimoine',
      description: 'Protégez et faites fructifier votre patrimoine avec nos stratégies éprouvées.',
      details: 'Nous proposons une gestion patrimoniale complète incluant la diversification des actifs, la planification successorale et l\'optimisation fiscale.',
      backgroundImage: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      icon: '📊',
      title: 'Audit et Comptabilité',
      description: 'Services d\'audit et de comptabilité de qualité supérieure pour votre tranquillité.',
      details: 'Nos auditeurs certifiés assurent la conformité de vos états financiers et vous fournissent des rapports détaillés pour une transparence totale.',
      backgroundImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Nav currentPage="home" />

      <main id="main-content">
        {/* Hero Section */}
      <section
        className="relative text-white py-20 md:py-32 min-h-[400px] flex items-center overflow-hidden"
        style={{
          background: `linear-gradient(rgba(79, 70, 229, 0.8), rgba(37, 99, 235, 0.7)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 to-blue-600/30"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse animation-delay-600"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 shadow-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 animate-fade-in-up text-shadow-lg">
              Cabinet Fiduciaire Moderne
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200 text-shadow">
              Votre partenaire de confiance pour une gestion patrimoniale sécurisée et performante
            </p>
            <div className="animate-fade-in-up animation-delay-400">
              <Link
                href="/contact"
                className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 transform hover:scale-105 focus:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Nous Contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Nos Services</h2>
            <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">Découvrez notre expertise en gestion patrimoniale et services fiduciaires</p>
          </div>

          {/* Service Carousel */}
          <div className="relative animate-fade-in-up animation-delay-200">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentService * 100}%)` }}
              >
                {services.map((service, index) => (
                  <div key={index} className="w-full flex-shrink-0 relative">
                    <div
                      className="p-6 sm:p-12 min-h-[400px] lg:min-h-[500px] flex items-center relative"
                      style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('${service.backgroundImage}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80"></div>
                      <div className="relative max-w-4xl mx-auto text-center text-white z-10 px-4">
                        <div className="text-4xl sm:text-6xl mb-6 drop-shadow-lg">{service.icon}</div>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 drop-shadow-lg">{service.title}</h3>
                        <p className="text-lg sm:text-xl mb-6 drop-shadow-md">{service.description}</p>
                        <p className="text-base sm:text-lg leading-relaxed drop-shadow-md max-w-2xl mx-auto">{service.details}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentService(index)}
                  onMouseEnter={() => setCurrentService(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                    currentService === index
                      ? 'bg-indigo-600 scale-125'
                      : 'bg-gray-300 hover:bg-indigo-400'
                  }`}
                  aria-label={`Voir service ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentService((prev) => (prev > 0 ? prev - 1 : services.length - 1))}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              aria-label="Service précédent"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentService((prev) => (prev < services.length - 1 ? prev + 1 : 0))}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              aria-label="Service suivant"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      </main>

      <Footer />
    </div>
  )
}
