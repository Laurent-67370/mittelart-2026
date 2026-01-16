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
15. **Françoise Maillet** — Peintures
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
- 🌐 Réseaux sociaux :
  - Section dans le footer avec icônes circulaires
  - Section "Suivez-nous" dans Contact avec cartes interactives
  - Liens Facebook, Instagram et site web Henri Husser

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
├── index.html              # Page principale HTML (40 KB, optimisé)
├── styles.css              # Styles CSS séparés (43 KB)
├── script.js               # JavaScript séparé (15 KB)
├── sitemap.xml             # Sitemap pour SEO
├── robots.txt              # Directives robots
├── netlify.toml            # Configuration Netlify + cache
├── .gitignore              # Fichiers ignorés par Git
│
├── Images
│   ├── poster-2026.png             # Affiche 2026 (647 KB)
│   ├── og-image.jpg                # Image Open Graph (248 KB)
│   ├── flyer.jpg                   # Affiche édition 2025 (345 KB)
│   ├── article-dna.jpg             # Article presse DNA (336 KB)
│   └── article-sculptures.jpg      # Article sculptures (358 KB)
│
├── Documentation
│   ├── README.md                   # Ce fichier
│   └── IMAGE-OPTIMIZATION.md       # Guide optimisation images
│
└── Sauvegarde
    └── index.html.backup           # Ancienne version (98 KB)
```

---

## 🛠️ Technologies utilisées

### Frontend
- **HTML5** : Structure sémantique
- **CSS3** : Design moderne avec variables CSS, Grid, Flexbox
- **JavaScript Vanilla** : Aucune dépendance, code pur ES6+

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

## 📊 Performance

### Optimisations réalisées
- ✅ Réduction de 60% de la taille HTML (98 KB → 40 KB)
- ✅ Séparation CSS/JS pour meilleur cache
- ✅ Lazy loading des images
- ✅ Compression gzip/brotli activée
- ✅ Minification CSS/JS automatique

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
- **Facebook** : https://www.facebook.com/mittelart
- **Instagram** : https://www.instagram.com/mittelart
- **Site web** : https://lhusser.fr (Henri Husser)
- **Email** : contact@mittelart.fr

### Design
- **Footer** : Icônes circulaires (48px) avec effet glassmorphism
- **Contact** : Cartes interactives avec hover animé
- **Couleurs** :
  - Facebook : #1877f2
  - Instagram : Gradient multicolore officiel
  - Email : Cyan
  - Site web : Bleu primaire

---

## 📧 Contact

Pour toute question sur le site ou l'exposition :
- **Email** : contact@mittelart.fr
- **Organisateur** : Henri Husser
- **Association** : ASCH (Association Socioculturelle de Hausbergen)
- **Facebook** : https://www.facebook.com/mittelart
- **Instagram** : https://www.instagram.com/mittelart

---

## 📝 Licence

© 2026 Mittel'art — Tous droits réservés
Organisé par Henri Husser avec la participation de l'ASCH

---

## 🙏 Remerciements

- **Henri Husser** : Fondateur et organisateur
- **ASCH** : Association partenaire
- **Collectivité Européenne d'Alsace** : Soutien institutionnel
- **Crédit Mutuel** : Partenaire financier
- **Le Géant des Beaux-Arts** : Partenaire matériel
- **Groupe Steinmetz** : Sponsor
- **CG Photogravure** : Partenaire impression
- **Tous les artistes participants** : Pour leur talent et engagement

---

## 🔄 Changelog

### Version 2.1 (Janvier 2026)
- ✅ Mise à jour complète de la liste des exposants
- ✅ Ajout d'Ève Guerrier (nouvel artiste)
- ✅ Réordonnancement de la liste des 25 artistes
- ✅ Corrections de noms d'artistes (Lombardi, Grusevan, Maillet, etc.)
- ✅ Mise à jour des spécialités (Claude Mato → Artiste Verrier, etc.)
- ✅ Mise à jour des statistiques : 16 Peintres, 4 Sculpteurs, 5 Multi-talents
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
