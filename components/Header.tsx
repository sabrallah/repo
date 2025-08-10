'use client'

import { useState } from 'react'
import { Calculator, Plus, Bell } from 'lucide-react'
import { AppNav } from '@/components/ui/app-nav'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function Header() {
  const [visibleItemsCount, setVisibleItemsCount] = useState(5)

  const handleUpdate = ({ visibleItemsCount }: { visibleItemsCount: number }) => {
    setVisibleItemsCount(visibleItemsCount)
  }

  return (
    <header className="sticky top-0 z-50">
      <AppNav
        visibleItemsCount={visibleItemsCount >= 2 ? visibleItemsCount : 0}
        onUpdate={handleUpdate}
        renderBeforeItems={
          <AppNav.Item
            label=""
            href="/"
          >
            <div className="flex items-center">
              <Calculator className="h-8 w-8 text-primary mr-2" />
              <span className="text-xl font-bold text-gray-900 hidden sm:block">
                Cabinet Fiduciaire
              </span>
            </div>
          </AppNav.Item>
        }
        renderAfterItems={
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="relative"
            >
              <Bell className="h-5 w-5" />
              <Badge 
                variant="notification" 
                className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-xs"
              >
                3
              </Badge>
            </Button>
            <Button
              onClick={() => console.log('Consultation gratuite')}
              className="bg-primary text-white hover:bg-primary/90"
            >
              <Plus className="h-4 w-4 mr-2" />
              Consultation gratuite
            </Button>
          </div>
        }
        renderTruncateLabel={(hiddenCount) => {
          if (visibleItemsCount >= 2) {
            return `${hiddenCount} Plus`
          } else {
            return (
              <span className="flex items-center">
                <Calculator className="h-4 w-4" />
                <span className="sr-only">{hiddenCount} Plus</span>
              </span>
            )
          }
        }}
      >
        <AppNav.Item
          label="Accueil"
          href="#accueil"
        />
        
        <AppNav.Item
          label="Services"
          href="#services"
          badge={
            <Badge variant="success" size="sm">
              6 services
            </Badge>
          }
        />
        
        <AppNav.Item
          label="À propos"
          href="#apropos"
          isSelected={false}
        />
        
        <AppNav.Item
          label="Actualités"
          href="/actualites"
          badge={
            <Badge variant="notification" size="sm">
              Nouveau
            </Badge>
          }
        />
        
        <AppNav.Item
          label="Contact"
          href="#contact"
        />
        
        <AppNav.Item
          label="Mon Espace Client"
          href="/mon-compte"
          badge={
            <Badge variant="default" size="sm">
              Pro
            </Badge>
          }
        />
      </AppNav>
    </header>
  )
}
