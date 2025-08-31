import './globals.css'

export const metadata = {
  title: 'Cabinet Fiduciaire Moderne',
  description: 'Site web moderne pour votre cabinet fiduciaire',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-indigo-600 text-white px-4 py-2 rounded-md z-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Aller au contenu principal
        </a>
        {children}
      </body>
    </html>
  )
}
