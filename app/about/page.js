'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export default function About() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.onload = () => setImageLoaded(true)
    img.onerror = () => setImageError(true)
    img.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Nav currentPage="about" />

      {/* Hero Section */}
      <section
        className="relative text-white py-20 min-h-[400px] flex items-center"
        style={{
          background: imageError
            ? `linear-gradient(135deg, rgba(79, 70, 229, 0.9), rgba(37, 99, 235, 0.9), rgba(147, 51, 234, 0.1))`
            : `linear-gradient(rgba(79, 70, 229, 0.85), rgba(37, 99, 235, 0.8)), url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          opacity: imageLoaded || imageError ? 1 : 0.8,
          transition: 'opacity 0.3s ease-in-out'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 to-blue-600/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 border border-white/20 shadow-2xl">
            <h1 className="text-5xl font-extrabold mb-6 text-shadow-lg">À Propos de Nous</h1>
            <p className="text-xl max-w-3xl mx-auto text-shadow">
              Découvrez l'histoire, les valeurs et l'équipe qui font de notre cabinet fiduciaire
              un partenaire de confiance pour votre avenir financier.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Timeline */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Notre Histoire</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-indigo-600 h-full"></div>

              <div className="space-y-12">
                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-600">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">1998 - Fondation</h3>
                      <p className="text-gray-600">
                        Création du cabinet avec une vision innovante de la gestion patrimoniale.
                      </p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-indigo-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>

                <div className="flex items-center">
                  <div className="w-1/2 pr-8"></div>
                  <div className="w-8 h-8 bg-indigo-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2 pl-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-600">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">2005 - Expansion</h3>
                      <p className="text-gray-600">
                        Ouverture de nouveaux bureaux et développement de services spécialisés.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-600">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">2012 - Innovation</h3>
                      <p className="text-gray-600">
                        Adoption des technologies modernes pour optimiser nos services.
                      </p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-indigo-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>

                <div className="flex items-center">
                  <div className="w-1/2 pr-8"></div>
                  <div className="w-8 h-8 bg-indigo-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2 pl-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-600">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">2023 - Excellence</h3>
                      <p className="text-gray-600">
                        Certification et reconnaissance internationale pour nos standards de qualité.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Accompagner nos clients dans la réalisation de leurs objectifs financiers
                en leur offrant des solutions sur mesure, transparentes et performantes.
                Nous nous engageons à créer de la valeur durable pour chaque client.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Devenir le cabinet fiduciaire de référence en combinant expertise traditionnelle
                et innovation technologique. Nous aspirons à redéfinir les standards
                de l'excellence en gestion patrimoniale.
              </p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-indigo-600/10 to-blue-600/10 rounded-full blur-3xl"></div>

          {/* Values Grid */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Nos Valeurs Fondamentales</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group" role="article" aria-labelledby="trust-title">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                    alt="Contrat et signature symbolisant la transparence et l'honnêteté"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 id="trust-title" className="text-xl font-semibold text-gray-900 mb-3">Confiance</h4>
                <p className="text-gray-600">La base de toutes nos relations. Transparence, honnêteté et fiabilité sont nos maîtres-mots.</p>
              </div>
              <div className="text-center group" role="article" aria-labelledby="innovation-title">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                    alt="Intelligence artificielle et analyse de données financières"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 id="innovation-title" className="text-xl font-semibold text-gray-900 mb-3">Innovation</h4>
                <p className="text-gray-600">Nous intégrons les dernières technologies pour optimiser vos stratégies financières.</p>
              </div>
              <div className="text-center group" role="article" aria-labelledby="responsibility-title">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                    alt="Mains protectrices symbolisant l'engagement et la responsabilité"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 id="responsibility-title" className="text-xl font-semibold text-gray-900 mb-3">Responsabilité</h4>
                <p className="text-gray-600">Engagement envers nos clients, nos collaborateurs et la société dans son ensemble.</p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Notre Équipe d'Experts</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Une équipe pluridisciplinaire composée de professionnels certifiés,
                passionnés par leur métier et dédiés à votre réussite.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
                    alt="Marie Dubois - Directrice Générale"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Marie Dubois</h4>
                <p className="text-indigo-600 font-medium mb-2">Directrice Générale</p>
                <p className="text-gray-600 text-sm">25 ans d'expérience en gestion patrimoniale</p>
              </div>
              <div className="text-center group">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                    alt="Jean Martin - Directeur Financier"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Jean Martin</h4>
                <p className="text-green-600 font-medium mb-2">Directeur Financier</p>
                <p className="text-gray-600 text-sm">Expert en investissements et marchés financiers</p>
              </div>
              <div className="text-center group">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80"
                    alt="Sophie Laurent - Responsable Juridique"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Sophie Laurent</h4>
                <p className="text-purple-600 font-medium mb-2">Responsable Juridique</p>
                <p className="text-gray-600 text-sm">Spécialiste en droit fiscal et successoral</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Prêt à nous rejoindre ?</h3>
              <p className="text-xl mb-6 text-indigo-100">
                Découvrez comment nous pouvons transformer votre avenir financier
              </p>
              <Link
                href="/contact"
                className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg inline-block"
              >
                Contactez-Nous
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
