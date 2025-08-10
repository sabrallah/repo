'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { Calculator, ArrowUp, Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface FooterLinkProps {
  label?: string
  href?: string
  icon?: React.ReactNode
  title?: string
  onClick?: (event: React.MouseEvent) => void
  className?: string
}

interface FooterNavigationProps {
  children: React.ReactNode
  title?: string
  className?: string
}

interface FooterUtilitiesProps {
  children: React.ReactNode
  soMeLinks?: React.ReactNode[]
  className?: string
}

interface FooterBaseProps {
  children?: React.ReactNode
  copyrightHolder: string
  copyrightText: string
  backToTopLabel?: string
  logo?: React.ReactNode
  logoHref?: string
  onLogoClick?: (event: React.MouseEvent) => void
  className?: string
}

interface FooterProps {
  children: React.ReactNode
  title: string
  className?: string
}

const FooterLink = ({ 
  label, 
  href, 
  icon, 
  title, 
  onClick, 
  className 
}: FooterLinkProps) => {
  const content = (
    <span className="flex items-center gap-2">
      {icon}
      {label && <span>{label}</span>}
    </span>
  )

  const baseClasses = "text-gray-300 hover:text-white transition-colors duration-200 text-sm"

  if (href) {
    return (
      <a
        href={href}
        title={title}
        onClick={onClick}
        className={cn(baseClasses, className)}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      onClick={onClick}
      title={title}
      className={cn(baseClasses, "text-left", className)}
    >
      {content}
    </button>
  )
}

const FooterNavigation = ({ children, title, className }: FooterNavigationProps) => {
  return (
    <div className={cn("space-y-4", className)}>
      {title && (
        <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {children}
      </div>
    </div>
  )
}

const FooterUtilities = ({ children, soMeLinks = [], className }: FooterUtilitiesProps) => {
  return (
    <div className={cn("border-t border-gray-700 pt-8 mt-8", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Social Media Links */}
        {soMeLinks.length > 0 && (
          <div>
            <h4 className="text-white font-medium mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              {soMeLinks.map((link, index) => (
                <div key={index}>
                  {link}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Utility Links */}
        <div>
          <h4 className="text-white font-medium mb-4">Contact & Support</h4>
          <div className="space-y-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

const FooterBase = ({ 
  children, 
  copyrightHolder, 
  copyrightText, 
  backToTopLabel = "Retour en haut", 
  logo, 
  logoHref, 
  onLogoClick, 
  className 
}: FooterBaseProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={cn("border-t border-gray-700 pt-8 mt-8", className)}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* Logo and Links */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          {logo && (
            <div>
              {logoHref ? (
                <a href={logoHref} onClick={onLogoClick}>
                  {logo}
                </a>
              ) : (
                logo
              )}
            </div>
          )}
          
          {children && (
            <div className="flex flex-wrap gap-4">
              {children}
            </div>
          )}
        </div>

        {/* Back to top button */}
        <Button
          onClick={scrollToTop}
          variant="ghost"
          className="text-gray-300 hover:text-white hover:bg-gray-700"
        >
          <ArrowUp className="h-4 w-4 mr-2" />
          {backToTopLabel}
        </Button>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-8 text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} {copyrightHolder}. {copyrightText}
        </p>
      </div>
    </div>
  )
}

const Footer = ({ children, title, className }: FooterProps) => {
  return (
    <footer className={cn("bg-gray-900 text-gray-300", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {title && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white">{title}</h2>
          </div>
        )}
        {children}
      </div>
    </footer>
  )
}

Footer.Link = FooterLink
Footer.Navigation = FooterNavigation
Footer.Utilities = FooterUtilities
Footer.Base = FooterBase

export { Footer }
