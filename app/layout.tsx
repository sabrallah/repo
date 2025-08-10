import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

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
    <html lang="fr" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
