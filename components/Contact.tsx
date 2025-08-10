'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { MagicCard } from '@/components/magicui/magic-card'
import { useTheme } from '@/hooks/use-theme'

export default function Contact() {
  const { theme } = useTheme()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Logique de soumission du formulaire
    console.log('Formulaire soumis:', formData)
    alert('Merci pour votre message ! Nous vous recontacterons rapidement.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prenez contact avec nos experts pour discuter de vos besoins. 
            Consultation gratuite et sans engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Informations de contact
            </h3>
            
            <div className="space-y-6">
              <Card className="p-0 shadow-none border-none">
                <MagicCard
                  gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                  className="p-0"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Adresse</h4>
                        <p className="text-gray-600">
                          123 Avenue de la République<br />
                          75011 Paris, France
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </MagicCard>
              </Card>

              <Card className="p-0 shadow-none border-none">
                <MagicCard
                  gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                  className="p-0"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Téléphone</h4>
                        <p className="text-gray-600">+33 1 23 45 67 89</p>
                      </div>
                    </div>
                  </CardContent>
                </MagicCard>
              </Card>

              <Card className="p-0 shadow-none border-none">
                <MagicCard
                  gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                  className="p-0"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Email</h4>
                        <p className="text-gray-600">contact@cabinet-fiduciaire.fr</p>
                      </div>
                    </div>
                  </CardContent>
                </MagicCard>
              </Card>

              <Card className="p-0 shadow-none border-none">
                <MagicCard
                  gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                  className="p-0"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Horaires</h4>
                        <p className="text-gray-600">
                          Lundi - Vendredi: 9h00 - 18h00<br />
                          Samedi: 9h00 - 12h00
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </MagicCard>
              </Card>
            </div>

            <Card className="mt-8 p-0 shadow-none border-none">
              <MagicCard
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                className="p-0"
              >
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Consultation gratuite
                  </h4>
                  <p className="text-gray-600">
                    Profitez d'un premier rendez-vous gratuit pour analyser vos besoins 
                    et vous présenter nos solutions.
                  </p>
                </CardContent>
              </MagicCard>
            </Card>
          </div>

          <Card className="p-0 shadow-none border-none">
            <MagicCard
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
              className="p-0"
            >
              <CardHeader className="border-b border-border p-6">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Envoyez-nous un message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Entreprise</Label>
                      <Input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Sujet *</Label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="comptabilite">Comptabilité</option>
                      <option value="fiscalite">Fiscalité</option>
                      <option value="paie">Gestion de paie</option>
                      <option value="conseil">Conseil</option>
                      <option value="creation">Création d'entreprise</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre projet ou vos besoins..."
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="h-5 w-5 mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </MagicCard>
          </Card>
        </div>
      </div>
    </section>
  )
}
