# Cabinet Fiduciaire - Site Web

Site web professionnel pour cabinet fiduciaire développé avec Next.js, TypeScript et Tailwind CSS.

## Fonctionnalités

- **Design responsive** : Compatible mobile, tablette et desktop
- **Interface moderne** : Design professionnel avec animations fluides
- **Performance optimisée** : Développé avec Next.js 14
- **TypeScript** : Code typé pour une meilleure maintenabilité
- **Tailwind CSS** : Styling moderne et responsive

## Sections du site

1. **Header** : Navigation principale avec menu responsive
2. **Hero** : Section d'accueil avec présentation des services
3. **Services** : Présentation détaillée des services proposés
4. **À propos** : Présentation du cabinet et de ses valeurs
5. **Contact** : Formulaire de contact et informations pratiques
6. **Footer** : Liens utiles et informations de contact

## Services présentés

- ✅ Comptabilité & Fiscalité
- ✅ Gestion Sociale & Paie
- ✅ Conseil & Stratégie
- ✅ Création d'Entreprise
- ✅ Audit & Contrôle
- ✅ Juridique & Droit

## Installation

1. Installer les dépendances :
```bash
npm install
```

2. Lancer le serveur de développement :
```bash
npm run dev
```

3. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Scripts disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Compile l'application pour la production
- `npm run start` : Lance l'application en mode production
- `npm run lint` : Lance le linter

## Structure du projet

```
├── app/                 # Pages de l'application
│   ├── globals.css     # Styles globaux
│   ├── layout.tsx      # Layout principal
│   └── page.tsx        # Page d'accueil
├── components/         # Composants réutilisables
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/             # Fichiers statiques
└── package.json        # Configuration du projet
```

## Technologies utilisées

- **Next.js 14** : Framework React avec App Router
- **TypeScript** : Typage statique
- **Tailwind CSS** : Framework CSS utilitaire
- **Lucide React** : Icônes modernes
- **Framer Motion** : Animations (optionnel)

## Personnalisation

### Couleurs
Les couleurs principales peuvent être modifiées dans le fichier `tailwind.config.js` :
- `primary` : Couleur principale du site
- `secondary` : Couleur secondaire

### Contenu
- Modifiez les textes dans les composants
- Remplacez les informations de contact
- Ajustez les services selon votre activité

### Images
Ajoutez vos propres images dans le dossier `public/` et mettez à jour les références.

## Déploiement

Le site peut être déployé sur :
- **Vercel** (recommandé pour Next.js)
- **Netlify**
- **AWS**
- **OVH**
- Tout hébergeur supportant Node.js

## Support

Pour toute question ou demande de personnalisation, contactez votre développeur.

---

**Cabinet Fiduciaire** - Site web professionnel pour experts-comptables
