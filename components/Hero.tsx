'use client'

import { ArrowRight, TrendingUp, Shield, Clock } from 'lucide-react'

export default function Hero() {
  return (
    <section id="accueil" className="hero-gradient text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Votre partenaire de confiance en 
              <span className="text-yellow-300"> expertise comptable</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Accompagnement personnalisé pour entrepreneurs, PME et professions libérales. 
              Plus de 20 ans d'expérience au service de votre réussite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                Prendre rendez-vous
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors">
                Nos services
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <TrendingUp className="h-12 w-12 text-yellow-300 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Croissance assurée</h3>
              <p className="text-gray-200">Stratégies personnalisées pour développer votre activité</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <Shield className="h-12 w-12 text-yellow-300 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Conformité garantie</h3>
              <p className="text-gray-200">Respect total des obligations fiscales et sociales</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <Clock className="h-12 w-12 text-yellow-300 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Réactivité 24/7</h3>
              <p className="text-gray-200">Support disponible quand vous en avez besoin</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
              <ArrowRight className="h-12 w-12 text-yellow-300 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Innovation digitale</h3>
              <p className="text-gray-200">Outils modernes pour une gestion simplifiée</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
