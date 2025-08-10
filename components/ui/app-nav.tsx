'use client'

import { useState, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Calculator, Menu, X, ChevronDown } from 'lucide-react'

interface AppNavItemProps {
  label: string
  href?: string
  isSelected?: boolean
  badge?: React.ReactNode
  onClick?: () => void
  children?: React.ReactNode
}

interface AppNavProps {
  children: React.ReactNode
  visibleItemsCount?: number
  onUpdate?: (params: { visibleItemsCount: number }) => void
  renderBeforeItems?: React.ReactNode
  renderAfterItems?: React.ReactNode
  renderTruncateLabel?: (hiddenCount: number) => React.ReactNode
  className?: string
}

const AppNavItem = ({ 
  label, 
  href, 
  isSelected = false, 
  badge, 
  onClick,
  children 
}: AppNavItemProps) => {
  const baseClasses = "relative flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-gray-100"
  const selectedClasses = isSelected 
    ? "bg-primary text-white hover:bg-primary/90" 
    : "text-gray-700 hover:text-primary"

  const content = (
    <span className="flex items-center gap-2">
      {label}
      {badge}
    </span>
  )

  if (href) {
    return (
      <a 
        href={href} 
        className={cn(baseClasses, selectedClasses)}
        onClick={onClick}
      >
        {content}
        {children}
      </a>
    )
  }

  return (
    <button 
      className={cn(baseClasses, selectedClasses)}
      onClick={onClick}
    >
      {content}
      {children}
    </button>
  )
}

const AppNav = ({ 
  children, 
  visibleItemsCount = 5,
  onUpdate,
  renderBeforeItems,
  renderAfterItems,
  renderTruncateLabel,
  className 
}: AppNavProps) => {
  const [isMobile, setIsMobile] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentVisibleCount, setCurrentVisibleCount] = useState(visibleItemsCount)
  const navRef = useRef<HTMLDivElement>(null)

  const childrenArray = Array.isArray(children) ? children : [children]
  const totalItems = childrenArray.length
  const visibleItems = childrenArray.slice(0, currentVisibleCount)
  const hiddenItems = childrenArray.slice(currentVisibleCount)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setIsMobile(width < 768)
      
      // Ajuster le nombre d'éléments visibles selon la taille d'écran
      if (width < 640) {
        setCurrentVisibleCount(0) // Tout dans le menu mobile
      } else if (width < 768) {
        setCurrentVisibleCount(2)
      } else if (width < 1024) {
        setCurrentVisibleCount(3)
      } else {
        setCurrentVisibleCount(visibleItemsCount)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [visibleItemsCount])

  useEffect(() => {
    onUpdate?.({ visibleItemsCount: currentVisibleCount })
  }, [currentVisibleCount, onUpdate])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={cn("bg-white border-b border-gray-200", className)} ref={navRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          {renderBeforeItems && (
            <div className="flex-shrink-0">
              {renderBeforeItems}
            </div>
          )}

          {/* Navigation Items - Desktop */}
          <div className="hidden md:flex items-center space-x-1 flex-1 justify-center">
            {visibleItems.map((item, index) => (
              <div key={index}>
                {item}
              </div>
            ))}
            
            {/* More Menu - Desktop */}
            {hiddenItems.length > 0 && currentVisibleCount > 0 && (
              <div className="relative group">
                <Button 
                  variant="ghost" 
                  className="flex items-center gap-1"
                >
                  {renderTruncateLabel ? 
                    renderTruncateLabel(hiddenItems.length) : 
                    `${hiddenItems.length} Plus`
                  }
                  <ChevronDown className="h-4 w-4" />
                </Button>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {hiddenItems.map((item, index) => (
                    <div key={index} className="px-2">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Actions */}
          {renderAfterItems && (
            <div className="hidden md:flex items-center">
              {renderAfterItems}
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            {renderAfterItems && (
              <div className="mr-2">
                {renderAfterItems}
              </div>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-gray-700"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-2">
              {childrenArray.map((item, index) => (
                <div key={index} className="px-2">
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

AppNav.Item = AppNavItem

export { AppNav, AppNavItem }
