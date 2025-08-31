/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration Next.js pour Vercel
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true // Désactiver l'optimisation d'images pour Vercel
  },
  // Assurer que les fichiers statiques sont servis correctement
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  trailingSlash: true
}

module.exports = nextConfig
