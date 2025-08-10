'use client'

import { Award, Users, Clock, Target } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MagicCard } from '@/components/magicui/magic-card'
import { useTheme } from '@/hooks/use-theme'

export default function About() {
  const { theme } = useTheme()
  
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
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-0 shadow-none border-none">
                <MagicCard
                  gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                  className="p-0 h-full"
                >
                  <CardHeader className="p-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-900 mb-3">
                      {value.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-sm">
                      {value.description}
                    </CardDescription>
                  </CardHeader>
                </MagicCard>
              </Card>
            ))}
          </div>
        </div>

        <Card className="mt-16 p-0 shadow-none border-none">
          <MagicCard
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            className="p-0"
          >
            <CardContent className="p-8 text-center">
              <CardTitle className="text-2xl font-bold text-gray-900 mb-4">
                Votre succès est notre priorité
              </CardTitle>
              <CardDescription className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
                Que vous soyez entrepreneur individuel, PME ou grande entreprise, 
                nous adaptons nos services à vos besoins spécifiques pour vous accompagner 
                dans toutes les étapes de votre développement.
              </CardDescription>
              <Button size="lg">
                Découvrir nos références
              </Button>
            </CardContent>
          </MagicCard>
        </Card>
      </div>
    </section>
  )
}
