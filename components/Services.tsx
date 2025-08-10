'use client'

import { Calculator, FileText, TrendingUp, Users, Shield, Briefcase } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MagicCard } from '@/components/magicui/magic-card'
import { useTheme } from '@/hooks/use-theme'

export default function Services() {
  const { theme } = useTheme()
  
  const services = [
    {
      icon: Calculator,
      title: "Comptabilité & Fiscalité",
      description: "Tenue complète de votre comptabilité, déclarations fiscales et optimisation fiscale personnalisée.",
      features: ["Tenue de comptabilité", "Déclarations TVA", "Bilan annuel", "Optimisation fiscale"]
    },
    {
      icon: Users,
      title: "Gestion Sociale & Paie",
      description: "Gestion complète de vos salariés, bulletins de paie et déclarations sociales.",
      features: ["Bulletins de paie", "Déclarations sociales", "Contrats de travail", "Formation RH"]
    },
    {
      icon: TrendingUp,
      title: "Conseil & Stratégie",
      description: "Accompagnement stratégique pour développer votre entreprise et optimiser sa performance.",
      features: ["Business plan", "Analyse financière", "Conseil en gestion", "Stratégie de croissance"]
    },
    {
      icon: Briefcase,
      title: "Création d'Entreprise",
      description: "Accompagnement complet dans la création de votre entreprise, du choix du statut aux premières démarches.",
      features: ["Choix du statut", "Formalités de création", "Aide aux financements", "Accompagnement initial"]
    },
    {
      icon: Shield,
      title: "Audit & Contrôle",
      description: "Audit de vos comptes et contrôles de gestion pour sécuriser votre activité.",
      features: ["Audit comptable", "Contrôle de gestion", "Diagnostic financier", "Procédures internes"]
    },
    {
      icon: FileText,
      title: "Juridique & Droit",
      description: "Conseil juridique et accompagnement dans vos démarches légales et contractuelles.",
      features: ["Conseil juridique", "Rédaction contrats", "Droit des sociétés", "Résolution litiges"]
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une gamme complète de services pour accompagner votre entreprise à chaque étape de son développement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-0 shadow-none border-none">
              <MagicCard
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                className="p-0 h-full"
              >
                <CardHeader className="border-b border-border p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">
                    En savoir plus
                  </Button>
                </CardContent>
              </MagicCard>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
