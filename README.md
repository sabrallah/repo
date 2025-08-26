# Site Web Professionnel pour Cabinet Comptable

Ce projet est un site web professionnel pour un cabinet comptable, conçu pour présenter les services, l'expertise et les informations de contact de l'entreprise de manière moderne et responsive.

## Fonctionnalités

- **Design moderne et professionnel** adapté au secteur comptable
- **Site entièrement responsive** pour une expérience optimale sur tous les appareils
- **Pages principales** :
  - Page d'accueil avec présentation des services principaux
  - Section "À propos" détaillant l'expertise du cabinet
  - Page "Services" listant les offres (comptabilité, audit, conseil fiscal, etc.)
  - Formulaire de contact sécurisé
- **Éléments de crédibilité** : témoignages clients et indicateurs de performance
- **Fonctionnalités interactives** : menu mobile, slider de témoignages, FAQ accordéon
- **Validation de formulaire** pour une meilleure expérience utilisateur

## Structure du Projet

```
.
├── index.html          # Page d'accueil
├── about.html          # Page À propos
├── services.html       # Page Services
├── contact.html        # Page Contact
├── css/
│   └── style.css       # Styles CSS
├── js/
│   └── main.js         # Scripts JavaScript
└── README.md           # Documentation du projet
```

## Technologies Utilisées

- HTML5
- CSS3 (avec variables CSS pour une cohérence visuelle)
- JavaScript (vanilla JS)
- Design responsive (sans framework)
- Font Awesome pour les icônes
- Google Fonts pour la typographie

## Installation et Utilisation

1. Clonez ce dépôt sur votre machine locale :
   ```
   git clone [URL_DU_REPO]
   ```

2. Ouvrez le fichier `index.html` dans votre navigateur pour visualiser le site.

3. Pour le développement, vous pouvez utiliser un serveur local comme Live Server (extension VS Code) ou tout autre serveur HTTP simple.

## Personnalisation

### Couleurs

Les couleurs principales du site sont définies comme variables CSS dans le fichier `css/style.css` :

```css
:root {
    --primary-color: #1a3c6e;     /* Bleu foncé */
    --secondary-color: #e8b829;    /* Jaune/Or */
    --accent-color: #3498db;       /* Bleu clair */
    /* ... autres variables ... */
}
```

Modifiez ces variables pour adapter le thème de couleurs à votre identité visuelle.

### Images

Remplacez les images placeholder par vos propres images :

1. Images d'arrière-plan dans les sections hero, CTA et page headers
2. Photos de l'équipe dans la section équipe
3. Logo du cabinet

### Contenu

Personnalisez le contenu textuel pour refléter les services spécifiques, l'expertise et les valeurs de votre cabinet comptable.

## Fonctionnalités à Implémenter

- Intégration avec un backend pour le traitement du formulaire de contact
- Galerie de projets ou études de cas
- Blog pour partager des actualités et conseils fiscaux
- Système de prise de rendez-vous en ligne

## Licence

Ce projet est sous licence [MIT](https://opensource.org/licenses/MIT).

## Contact

Pour toute question ou suggestion concernant ce projet, veuillez contacter :

- Email : contact@example.com
- Site web : www.example.com