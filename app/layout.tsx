import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cabinet Fiduciaire - Expertise Comptable & Conseil',
  description: 'Cabinet fiduciaire spécialisé en expertise comptable, conseil en gestion, fiscalité et accompagnement des entreprises.',
  keywords: 'cabinet fiduciaire, expertise comptable, conseil fiscal, gestion entreprise',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
