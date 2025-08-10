'use client'

import { Award, Users, Clock, Target } from 'lucide-react'

export default function About() {
  const stats = [
    { number: "20+", label: "Années d'expérience" },
    { number: "500+", label: "Clients satisfaits" },
    { number: "50+", label: "Experts comptables" },
    { number: "24/7", label: "Support disponible" }
  ]

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Nous nous engageons à fournir des services de la plus haute qualité à tous nos clients."
    },
    {
      icon: Users,
      title: "Proximité",
      description: "Une relation de confiance basée sur l'écoute et la compréhension de vos besoins spécifiques."
    },
    {
      icon: Clock,
      title: "Réactivité",
      description: "Des réponses rapides et des solutions efficaces pour accompagner votre développement."
    },
    {
      icon: Target,
      title: "Résultats",
      description: "Des conseils stratégiques orientés performance pour optimiser votre activité."
    }
  ]

  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              À propos de notre cabinet
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Depuis plus de 20 ans, notre cabinet accompagne les entrepreneurs et les entreprises 
              dans leur développement. Notre équipe d'experts comptables qualifiés met son savoir-faire 
              au service de votre réussite.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Nous privilégions une approche personnalisée et humaine, en nous adaptant aux spécificités 
              de chaque secteur d'activité. Notre objectif : vous libérer des contraintes administratives 
              pour vous permettre de vous concentrer sur votre cœur de métier.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
                  <value.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-primary-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Votre succès est notre priorité
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
              Que vous soyez entrepreneur individuel, PME ou grande entreprise, 
              nous adaptons nos services à vos besoins spécifiques pour vous accompagner 
              dans toutes les étapes de votre développement.
            </p>
            <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              Découvrir nos références
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
