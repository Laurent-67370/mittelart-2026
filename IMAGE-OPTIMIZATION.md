# Guide d'optimisation des images - Mittel'art 2026

## État actuel des images

| Fichier | Taille actuelle | Format |
|---------|----------------|--------|
| poster-2026.png | 647 KB | PNG |
| flyer.jpg | 345 KB | JPG |
| article-sculptures.jpg | 358 KB | JPG |
| article-dna.jpg | 336 KB | JPG |
| og-image.jpg | 248 KB | JPG |

## Recommandations d'optimisation

### 1. Convertir poster-2026.png en WebP

Le fichier PNG de 647 KB peut être réduit de 60-80% en utilisant le format WebP moderne.

**Avec outil en ligne** (recommandé si pas d'outils locaux):
- Utilisez https://squoosh.app/
- Upload `poster-2026.png`
- Sélectionnez WebP
- Qualité: 85-90
- Télécharger comme `poster-2026.webp`

**Avec cwebp (ligne de commande)**:
```bash
cwebp -q 85 poster-2026.png -o poster-2026.webp
```

### 2. Optimiser les fichiers JPG

**Avec outil en ligne**:
- https://tinyjpg.com/ ou https://squoosh.app/
- Compression: 85-90%

**Avec jpegoptim**:
```bash
jpegoptim --max=85 *.jpg
```

**Avec ImageMagick**:
```bash
magick flyer.jpg -quality 85 -strip flyer-optimized.jpg
magick article-sculptures.jpg -quality 85 -strip article-sculptures-optimized.jpg
magick article-dna.jpg -quality 85 -strip article-dna-optimized.jpg
magick og-image.jpg -quality 85 -strip og-image-optimized.jpg
```

### 3. Créer des versions responsives

Pour améliorer les performances sur mobile, créer plusieurs tailles:

```bash
# Version mobile (max 768px)
magick poster-2026.png -resize 768x poster-2026-mobile.webp

# Version tablette (max 1024px)
magick poster-2026.png -resize 1024x poster-2026-tablet.webp

# Version desktop (original)
magick poster-2026.png poster-2026-desktop.webp
```

### 4. Mise à jour du HTML

Après optimisation, utiliser la balise `<picture>` pour les images responsives:

```html
<picture>
  <source
    media="(max-width: 768px)"
    srcset="poster-2026-mobile.webp"
    type="image/webp">
  <source
    media="(max-width: 1024px)"
    srcset="poster-2026-tablet.webp"
    type="image/webp">
  <source
    srcset="poster-2026-desktop.webp"
    type="image/webp">
  <img
    src="poster-2026.png"
    alt="Affiche Mittel'art 2026"
    loading="lazy">
</picture>
```

## Résultats attendus

- **poster-2026.png**: 647 KB → ~100-150 KB (WebP) = **-75%**
- **flyer.jpg**: 345 KB → ~200 KB = **-40%**
- **article-sculptures.jpg**: 358 KB → ~210 KB = **-40%**
- **article-dna.jpg**: 336 KB → ~200 KB = **-40%**
- **og-image.jpg**: 248 KB → ~150 KB = **-40%**

**Gain total estimé**: ~1.9 MB → ~0.9 MB = **économie de ~1 MB**

## Impact sur les performances

- ⚡ Temps de chargement réduit de 50%
- 📱 Meilleure expérience mobile
- 🌐 Consommation de bande passante réduite
- 🚀 Amélioration du score Google PageSpeed
- 💰 Économies sur la bande passante Netlify

## Prochaines étapes

1. Optimiser toutes les images selon ce guide
2. Remplacer les fichiers dans le dépôt
3. Mettre à jour les références dans `index.html`
4. Tester le chargement sur mobile et desktop
5. Vérifier les Core Web Vitals
