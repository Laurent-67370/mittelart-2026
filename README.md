# 🎨 Mittel'art 2026 — 14ème Édition

Site web officiel de l'exposition **Mittel'art 2026**, exposition de peintures et sculptures à Mittelhausbergen.

🔗 **Site en ligne** : [mittelart-2026.netlify.app](https://mittelart-2026.netlify.app)

---

## 📅 Informations pratiques

| | |
|---|---|
| **Dates** | 7 & 8 mars 2026 |
| **Lieu** | Espace Sportif et Culturel, Rue des Jardins, 67206 Mittelhausbergen |
| **Horaires** | Samedi 14h-19h / Dimanche 10h-19h |
| **Entrée** | Gratuite |
| **Organisateur** | Henri Husser avec l'ASCH |
| **Artistes** | 25 artistes peintres et sculpteurs |

---

## 🎨 Les 25 Artistes Exposants 2026

### Répartition par spécialité
- **16 Peintres**
- **4 Sculpteurs**
- **5 Multi-talents** (Peintures & Sculptures, Photoplasticien, Artiste Verrier)

### Liste complète des artistes
1. **Daniel Jung** — Peintures & Sculptures
2. **Jean-Jacques Helwig** — Photoplasticien
3. **Solange Kiessling** — Peintures & Sculptures
4. **Jocelyne Clerc** — Peintures
5. **Claude Mato** — Artiste Verrier
6. **Ève Guerrier** — Peintures
7. **Stefan Beiu** — Peintures
8. **Anne Lombardi** — Sculptures
9. **Victor Grusevan** — Peintures
10. **Henri Husser** — Peintures
11. **Brigitte Di Scala** — Peintures
12. **René Roth** — Peintures
13. **Éliane Karakaya** — Peintures
14. **Simone Burger** — Peintures
15. **Françoise Maillet** — Peintures et Arts Textile
16. **Paul Riethmuller** — Sculptures
17. **Peggy Nullans** — Peintures
18. **Patrick Chaboud** — Peintures
19. **Véronique Ball** — Peintures & Sculptures
20. **Nicole Kopp** — Sculptures
21. **Laurence Scheer** — Peintures
22. **Jordane Desjardins** — Peintures
23. **Roland Perret** — Peintures
24. **Suzanne Capdevielle** — Sculptures
25. **Sophie Gouvion** — Peintures

---

## ✨ Fonctionnalités du site

### Progressive Web App (PWA)
- 📲 **Installable** : Ajoutez l'application sur votre écran d'accueil
- 🔌 **Mode hors ligne** : Consultez le site même sans connexion
- ⚡ **Performances** : Chargement ultra-rapide avec mise en cache
- 🔄 **Mises à jour automatiques** : Toujours la dernière version
- 📱 **Expérience native** : Fonctionne comme une vraie application
- 🎯 **Raccourcis** : Accès direct aux sections (Artistes, Programme, Lieu)

### Design & Interface
- 📱 Design 100% responsive (mobile, tablette, desktop)
- 🎨 Palette de couleurs harmonisée avec l'identité visuelle
- 🍔 Menu hamburger mobile pour navigation tactile
- ✨ Animations fluides au scroll (Intersection Observer)
- 🔝 Bouton "Retour en haut" pour navigation rapide
- 🎭 Effet glassmorphism moderne

### Fonctionnalités Interactives
- ⏱️ Compte à rebours en temps réel avant l'événement
- 📅 Ajout au calendrier multi-plateformes :
  - Google Calendar
  - Apple Calendar
  - Outlook
  - Fichier .ics universel
- 📤 Partage réseaux sociaux optimisé :
  - Facebook
  - X (Twitter)
  - WhatsApp
  - Email
  - Copie de lien avec notification
- 🖼️ Galerie d'images avec lightbox
- 🗺️ Google Maps intégré pour localisation
- 🎨 Cartes artistes interactives :
  - Flip cards avec effet 3D (clic/tap pour retourner)
  - Recto : photo, nom, spécialité
  - Verso : coordonnées (site web, email, Facebook, Instagram)
  - Liens pleine largeur optimisés mobile et desktop
- 🔍 Recherche d'artistes en temps réel :
  - Barre de recherche par nom ou spécialité
  - Filtrage instantané des cartes
  - Design moderne avec icône de recherche
- 🏷️ Filtres par spécialité :
  - Tous les artistes
  - Peintures
  - Sculptures
  - Multi-talents
- 🔗 Lien "Découvrir les artistes" dans la section accueil
- 🌐 Réseaux sociaux :
  - Lien Facebook dans le footer avec icône circulaire
- 📖 **Livre d'or interactif** :
  - Formulaire de témoignages pour les visiteurs
  - Champs : nom (obligatoire), email (optionnel), ville (optionnel), message (obligatoire)
  - Intégration Netlify Forms pour collecte des messages
  - Page de remerciement après soumission (thank-you.html)
  - Design avec icônes et style cohérent avec le site
  - Navigation ajoutée dans le menu principal et le footer

### SEO & Performance
- 🔍 SEO optimisé avec métadonnées complètes
- 📊 Schema.org Event markup pour rich snippets
- 🖼️ Open Graph + Twitter Cards pour aperçus
- 🗺️ Sitemap.xml pour indexation
- 🤖 robots.txt configuré
- ⚡ Cache optimisé (netlify.toml)
- 📦 CSS et JS séparés pour meilleur cache
- 🎯 Lazy loading des images

### Accessibilité
- ♿ Navigation clavier complète
- 🏷️ Attributs alt sur toutes les images
- 🎨 Contrastes WCAG conformes
- 📱 Touch-friendly pour mobile
- 🔐 Sécurité : rel="noopener noreferrer" sur liens externes

---

## 📁 Structure des fichiers

```
mittelart-2026/
├── index.html              # Page principale HTML (104 KB)
├── thank-you.html          # Page de remerciement après soumission livre d'or
├── styles.css              # Styles CSS (48 KB)
├── script.js               # JavaScript (20 KB)
├── manifest.json           # PWA manifest (métadonnées app)
├── service-worker.js       # Service Worker (cache et offline)
├── sitemap.xml             # Sitemap pour SEO
├── robots.txt              # Directives robots
├── netlify.toml            # Configuration Netlify + cache
├── .gitignore              # Fichiers ignorés par Git
│
├── README.md               # Documentation principale
├── GUIDE_PHOTOS.md         # Guide pour les photos d'œuvres
├── IMAGE-OPTIMIZATION.md   # Guide optimisation images
│
├── Images (fichiers à la racine)
│   ├── poster-2026.png             # Affiche 2026 (647 KB)
│   ├── og-image.jpg                # Image Open Graph (248 KB)
│   ├── flyer.jpg                   # Affiche édition 2025 (345 KB)
│   ├── article-dna.jpg             # Article presse DNA (336 KB)
│   └── article-sculptures.jpg      # Article sculptures (358 KB)
│
├── artistes/               # Dossier pour photos des artistes
│   ├── .gitkeep            # Permet de garder le dossier vide dans Git
│   └── README.md           # Instructions pour les photos
│
└── logos/                  # Dossier logos partenaires
    ├── README.md                                   # Documentation logos
    ├── logo_ALSACE_Collectivite_europeenne.png    # Logo Alsace (11 KB)
    ├── logo_Credit_Mutuel.jpeg                     # Logo Crédit Mutuel (9.3 KB)
    ├── logo_Le_Geant_des_Beaux_Arts.png           # Logo Le Géant (8.2 KB)
    ├── logo_Groupe_Steinmetz.jpeg                  # Logo Steinmetz (84 KB)
    ├── logo_CG_Photogravure.png                    # Logo CG Photo (24 KB)
    └── logo_Mittelhausbergen.jpeg                  # Logo Ville (4.7 KB)
```

---

## 🛠️ Technologies utilisées

### Frontend
- **HTML5** : Structure sémantique
- **CSS3** : Design moderne avec variables CSS, Grid, Flexbox
- **JavaScript Vanilla** : Aucune dépendance, code pur ES6+

### Progressive Web App (PWA)
- **Web App Manifest** : Configuration de l'application installable
- **Service Worker** : Cache stratégique et mode hors ligne
- **Cache API** : Stockage local des ressources
- **Network First Strategy** : Toujours la version la plus récente
- **Offline Fallback** : Fonctionnement sans connexion

### APIs & Services
- **Google Fonts** : Playfair Display + Outfit
- **Google Maps** : Carte interactive intégrée
- **Netlify** : Hébergement et déploiement continu

### Optimisations
- **Zero dependencies** : Aucune librairie externe
- **Séparation des fichiers** : HTML, CSS, JS séparés
- **Cache headers** : 1 an pour assets statiques
- **Compression** : Minification automatique CSS/JS
- **Progressive Enhancement** : Fonctionne sans JavaScript
- **PWA Caching** : Mise en cache intelligente avec Service Worker

---

## 🚀 Hébergement & Déploiement

- **Hébergement** : [Netlify](https://www.netlify.com/)
- **URL** : https://mittelart-2026.netlify.app
- **Déploiement** : Automatique depuis GitHub
- **CDN Global** : Distribution mondiale pour vitesse optimale
- **HTTPS** : Certificat SSL automatique
- **Headers de sécurité** : X-Frame-Options, CSP, HSTS

### Configuration Cache (netlify.toml)
- HTML : `max-age=0` (toujours frais)
- CSS/JS : `max-age=31536000` (1 an)
- Images : `max-age=31536000` (1 an)
- Compression automatique activée

---

## 📲 Installation de l'application (PWA)

### Sur Mobile (Android)
1. Ouvrez le site dans **Chrome** ou **Edge**
2. Appuyez sur le menu ⋮ (trois points)
3. Sélectionnez **"Ajouter à l'écran d'accueil"** ou **"Installer l'application"**
4. Confirmez l'installation
5. L'icône Mittel'art apparaît sur votre écran d'accueil

### Sur Mobile (iOS)
1. Ouvrez le site dans **Safari**
2. Appuyez sur le bouton Partager 📤
3. Faites défiler et sélectionnez **"Sur l'écran d'accueil"**
4. Appuyez sur **"Ajouter"**
5. L'application est maintenant accessible depuis l'écran d'accueil

### Sur Desktop (Chrome, Edge)
1. Ouvrez le site dans votre navigateur
2. Cliquez sur l'icône **⊕ Installer** dans la barre d'adresse
3. Ou Menu → **"Installer Mittel'art..."**
4. Confirmez l'installation
5. L'application s'ouvre dans une fenêtre dédiée

### Avantages de l'installation
- ⚡ **Lancement rapide** : Accès direct depuis l'écran d'accueil
- 🔌 **Mode hors ligne** : Consultez le site sans connexion
- 📲 **Expérience native** : Interface comme une vraie application
- 🔔 **Mises à jour automatiques** : Toujours la dernière version
- 💾 **Moins de data** : Cache intelligent pour économiser la bande passante

---

## 📊 Performance

### Optimisations réalisées
- ✅ Séparation CSS/JS pour meilleur cache
- ✅ **Progressive Web App** : Cache intelligent et offline
- ✅ **Service Worker** : Chargement ultra-rapide après première visite
- ✅ Lazy loading des images
- ✅ Compression gzip/brotli activée
- ✅ Minification CSS/JS automatique
- ✅ Network First Strategy : Toujours la version la plus récente
- ✅ **Cartes artistes interactives** : Flip 3D optimisé CSS pure (sans JS)
- ✅ **Recherche en temps réel** : Filtrage performant avec JavaScript natif
- ✅ **Logos partenaires** : Format PNG/JPEG optimisé pour web
- ✅ Coordonnées complètes des artistes sur leurs cartes (15+ artistes)
- ✅ Navigation améliorée avec réorganisation logique des sections

### Prochaines optimisations recommandées
- 🔄 Conversion images PNG → WebP (-75% de poids)
- 🔄 Compression optimale des JPG (-40% de poids)
- 🔄 Images responsives avec srcset
- 📖 Voir `IMAGE-OPTIMIZATION.md` pour le guide complet

---

## 📜 Historique

| Année | Édition | Événement |
|-------|---------|-----------|
| **2012** | 1ère | Création de Mittel'art par Henri Husser |
| **2013-2024** | 2-13 | Éditions annuelles |
| **2025** | 13ème | ~1000 visiteurs, 25 artistes |
| **2026** | 14ème | 🎨 Cette édition (7 & 8 mars) |

---

## 🔧 Développement

### Prérequis
Aucun ! Site statique simple :
- Pas de build step
- Pas de node_modules
- Pas de dépendances

### Modifications locales
```bash
# Cloner le repo
git clone https://github.com/Laurent-67370/mittelart-2026.git
cd mittelart-2026

# Ouvrir index.html dans un navigateur
# Ou utiliser un serveur local simple :
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

### Structure du code
- **index.html** : Structure HTML propre et sémantique
- **styles.css** : CSS organisé par sections avec variables
- **script.js** : JavaScript modulaire avec commentaires

---

## 🎨 Design System

### Palette de couleurs
```css
--primary-blue: #1a4b8c
--primary-purple: #6b4799
--accent-magenta: #d64a7b
--accent-yellow: #f4c542
--accent-cyan: #4ecdc4
--accent-orange: #e85a3c
```

### Typographie
- **Headers** : Playfair Display (serif élégant)
- **Body** : Outfit (sans-serif moderne)
- **Hiérarchie** : 6 niveaux de titres définis

### Breakpoints responsive
- Mobile : < 480px
- Tablet : 768px
- Desktop : 1024px+

---

## 📱 Réseaux sociaux

### Intégrations
- **Facebook** : https://www.facebook.com/share/17kfsiR16o/
- **Email** : hehusser@estvideo.fr

### Design
- **Footer** : Icône Facebook circulaire (48px) avec effet glassmorphism
- **Couleurs** :
  - Facebook : #1877f2

---

## 📧 Contact

Pour toute question sur le site ou l'exposition :
- **Email** : hehusser@estvideo.fr
- **Organisateur** : Henri Husser
- **Association** : ASCH (Association Socioculturelle de Hausbergen)
- **Facebook** : https://www.facebook.com/share/17kfsiR16o/

---

## 📝 Licence

© 2026 Mittel'art — Tous droits réservés
Organisé par Henri Husser avec la participation de l'ASCH

---

## 🙏 Remerciements

- **Henri Husser** : Fondateur et organisateur
- **ASCH** : Association partenaire
- **Ville de Mittelhausbergen** : Soutien de la commune hôte
- **Collectivité Européenne d'Alsace** : Soutien institutionnel
- **Crédit Mutuel** : Partenaire financier
- **Le Géant des Beaux-Arts** : Partenaire matériel
- **Groupe Steinmetz** : Sponsor
- **CG Photogravure** : Partenaire impression
- **Tous les artistes participants** : Pour leur talent et engagement

---

## 🔄 Changelog

### Version 2.4 (Février 2026)
- ✅ **Livre d'or interactif**
  - 📖 Formulaire de témoignages pour les visiteurs
  - 📝 Champs : nom (obligatoire), email (optionnel), ville (optionnel), message (obligatoire)
  - 🔄 Intégration Netlify Forms pour collecte et stockage des messages
  - 🙏 Page de remerciement personnalisée après soumission (thank-you.html)
  - 🎨 Design avec icônes et style cohérent avec l'identité visuelle
  - 🔗 Navigation ajoutée dans le menu principal et le footer

### Version 2.3 (Janvier 2026)
- ✅ **Fonctionnalité de recherche d'artistes**
  - 🔍 Barre de recherche en temps réel par nom ou spécialité
  - ⚡ Filtrage instantané des cartes artistes
  - 🎨 Design moderne avec icône de recherche intégrée
- ✅ **Filtres par spécialité**
  - 🏷️ Boutons de filtrage : Tous / Peintures / Sculptures / Multi-talents
  - 🎯 Affichage dynamique selon la sélection
- ✅ **Amélioration des cartes artistes**
  - 🔄 Cartes flip 3D interactives (clic/tap pour retourner)
  - 📱 Optimisation affichage mobile et desktop
  - 🔗 Liens pleine largeur pour meilleure accessibilité
  - ✉️ Ajout coordonnées pour 15+ artistes (email, site web, réseaux sociaux)
  - 🎨 Amélioration lisibilité des liens sur fond bleu
  - 📏 Police agrandie pour meilleure lecture
- ✅ **Réorganisation de la navigation**
  - 📍 Repositionnement section "Artistes" après "À propos"
  - 📅 Repositionnement section "Édition 2025" après "Programme"
  - 🔗 Ajout lien "Découvrir les artistes" dans la section accueil
  - 📋 Mise à jour de l'ordre du menu et du footer
- ✅ **Amélioration logos partenaires**
  - 🖼️ Remplacement logos SVG par PNG/JPEG officiels
  - 📁 Réorganisation dans le dossier logos/ avec documentation
  - 🎨 Amélioration visuelle pour fidélité à l'affiche
  - 🏛️ Ajout logo Ville de Mittelhausbergen
  - ✏️ Corrections textes partenaires
- ✅ **Logo Groupe Steinmetz**
  - 🔄 Mise à jour avec nouveau logo officiel
  - 📐 Optimisation de l'affichage
- ✅ Correction spécialité Françoise Maillet : "Peinture et Arts Textile"
- ✅ Optimisation flip cards pour tous les écrans (PC/Mobile)
- ✅ Mise à jour documentation README complète

### Version 2.2 PWA (Janvier 2026)
- ✅ **Transformation en Progressive Web App (PWA)**
  - 📲 Application installable sur mobile et desktop
  - 🔌 Mode hors ligne complet avec Service Worker
  - ⚡ Mise en cache intelligente pour performances optimales
  - 🎯 Raccourcis d'application (Artistes, Programme, Lieu)
  - 📱 Icônes et configuration pour Android, iOS et Desktop
- ✅ Ajout du Web App Manifest (manifest.json)
- ✅ Implémentation du Service Worker avec stratégie Network First
- ✅ Coordonnées artistes sur cartes (Suzanne Capdevielle, Henri Husser)
- ✅ Ajout "Coteaux de Hausbergen" sous logo Crédit Mutuel
- ✅ Optimisation liens pleine largeur sur cartes artistes
- ✅ Mise à jour complète de la documentation

### Version 2.1 (Janvier 2026)
- ✅ Mise à jour complète de la liste des exposants
- ✅ Ajout d'Ève Guerrier (nouvel artiste)
- ✅ Réordonnancement de la liste des 25 artistes
- ✅ Corrections de noms d'artistes (Lombardi, Grusevan, Maillet, etc.)
- ✅ Mise à jour des spécialités (Claude Mato → Artiste Verrier, etc.)
- ✅ Mise à jour des statistiques : 16 Peintres, 4 Sculpteurs, 5 Multi-talents
- ✅ Amélioration visuelle des logos partenaires (fidélité à l'affiche)
- ✅ Ajout du logo de la Ville de Mittelhausbergen
- ✅ Corrections textes partenaires (Coteaux de Hausbergen, Eckbolsheim)
- ✅ Documentation complète dans README.md

### Version 2.0 (Janvier 2026)
- ✅ Séparation CSS/JS pour meilleure performance
- ✅ Ajout réseaux sociaux (Footer + Contact)
- ✅ Optimisation SEO (sitemap.xml, robots.txt)
- ✅ Configuration cache Netlify
- ✅ Amélioration accessibilité
- ✅ Réduction 60% taille HTML

### Version 1.0 (Décembre 2025)
- 🎉 Lancement initial du site
- ✨ Design responsive complet
- 📅 Intégrations calendrier
- 🗺️ Google Maps
- 🖼️ Galerie lightbox

---

*Site créé avec ❤️ pour promouvoir l'art régional en Alsace*
