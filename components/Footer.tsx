'use client'

import { Calculator, Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import { Footer } from '@/components/ui/footer'

export default function SiteFooter() {
  return (
    <Footer title="Cabinet Fiduciaire">
      <Footer.Navigation title="Nos Services">
        <Footer.Link label="Comptabilité & Fiscalité" href="#services" />
        <Footer.Link label="Gestion Sociale & Paie" href="#services" />
        <Footer.Link label="Conseil & Stratégie" href="#services" />
        <Footer.Link label="Création d'Entreprise" href="#services" />
        <Footer.Link label="Audit & Contrôle" href="#services" />
        <Footer.Link label="Juridique & Droit" href="#services" />
        <Footer.Link label="Formation" href="/formation" />
        <Footer.Link label="Expertise Sectorielle" href="/expertise" />
      </Footer.Navigation>

      <Footer.Utilities
        soMeLinks={[
          <Footer.Link 
            key="facebook"
            title="Page Facebook du Cabinet" 
            icon={<Facebook className="h-5 w-5" />} 
            href="https://facebook.com/cabinet-fiduciaire"
          />,
          <Footer.Link 
            key="twitter"
            title="Compte Twitter du Cabinet" 
            icon={<Twitter className="h-5 w-5" />} 
            href="https://twitter.com/cabinet-fiduciaire"
          />,
          <Footer.Link 
            key="linkedin"
            title="Page LinkedIn du Cabinet" 
            icon={<Linkedin className="h-5 w-5" />} 
            href="https://linkedin.com/company/cabinet-fiduciaire"
          />,
          <Footer.Link 
            key="instagram"
            title="Compte Instagram du Cabinet" 
            icon={<Instagram className="h-5 w-5" />} 
            href="https://instagram.com/cabinet-fiduciaire"
          />,
          <Footer.Link 
            key="youtube"
            title="Chaîne YouTube du Cabinet" 
            icon={<Youtube className="h-5 w-5" />} 
            href="https://youtube.com/cabinet-fiduciaire"
          />,
        ]}
      >
        <Footer.Link 
          label="Nous contacter" 
          href="#contact"
          icon={<Mail className="h-4 w-4" />}
        />
        <Footer.Link 
          label="Prendre rendez-vous" 
          href="/rendez-vous"
          icon={<Phone className="h-4 w-4" />}
        />
        <Footer.Link 
          label="Localiser nos bureaux" 
          href="/localisation"
          icon={<MapPin className="h-4 w-4" />}
        />
        <Footer.Link 
          label="Donner votre avis" 
          href="/feedback"
        />
      </Footer.Utilities>

      <Footer.Base
        copyrightHolder="Cabinet Fiduciaire"
        copyrightText="Tous droits réservés"
        backToTopLabel="Retour en haut"
        logo={
          <div className="flex items-center">
            <Calculator className="h-8 w-8 text-primary mr-2" />
            <span className="text-xl font-bold text-white">Cabinet Fiduciaire</span>
          </div>
        }
        logoHref="/"
        onLogoClick={(event) => {
          // Scroll to top smoothly instead of page reload
          event.preventDefault()
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
      >
        <Footer.Link label="Mentions légales" href="/mentions-legales" />
        <Footer.Link label="Politique de confidentialité" href="/confidentialite" />
        <Footer.Link label="CGU" href="/cgu" />
        <Footer.Link label="Plan du site" href="/sitemap" />
        <Footer.Link label="Accessibilité" href="/accessibilite" />
        <Footer.Link label="Cookies" href="/cookies" />
      </Footer.Base>
    </Footer>
  )
}
