# Guide : Ajouter des photos d'œuvres aux cartes d'artistes

## Vue d'ensemble

Les cartes d'artistes affichent actuellement des avatars colorés avec initiales. Ce guide explique comment remplacer ces avatars par des photos d'œuvres.

## Préparation des images

### Format recommandé
- **Format** : JPG ou PNG
- **Dimensions** : Minimum 400x400 pixels (carré ou paysage)
- **Poids** : Maximum 200 Ko par image (optimisé pour le web)
- **Nom de fichier** : Utiliser le format `nom-prenom.jpg` (exemple : `jung-daniel.jpg`)

### Organisation
Créez un dossier `artistes/` à la racine du projet :
```
mittelart-2026/
├── artistes/
│   ├── jung-daniel.jpg
│   ├── helwig-jean-jacques.jpg
│   ├── guerrier-eve.jpg
│   └── ...
├── index.html
├── styles.css
└── ...
```

## Ajout d'une photo à une carte d'artiste

### Étape 1 : Localiser la carte dans index.html

Recherchez la carte de l'artiste dans `index.html`. Exemple pour Daniel Jung :

```html
<div class="artiste-avatar" data-initials="DJ"></div>
```

### Étape 2 : Ajouter la balise image

Ajoutez une balise `<img>` à l'intérieur de l'avatar :

```html
<div class="artiste-avatar" data-initials="DJ">
    <img src="artistes/jung-daniel.jpg" alt="Œuvre de Daniel Jung" loading="lazy">
</div>
```

### Paramètres importants
- `src` : Chemin vers l'image
- `alt` : Description de l'œuvre (bon pour SEO et accessibilité)
- `loading="lazy"` : Charge l'image uniquement quand elle devient visible (optimisation)

## Exemple complet

### Avant (avec initiales)
```html
<div class="artiste-item" data-specialty="mixed">
    <div class="artiste-card-inner">
        <div class="artiste-card-front">
            <svg class="specialty-icon">...</svg>
            <div class="artiste-avatar" data-initials="DJ"></div>
            <div class="artiste-info">
                <h4>Daniel Jung</h4>
                <div class="artiste-specialty">Peintures & Sculptures</div>
            </div>
        </div>
        ...
    </div>
</div>
```

### Après (avec photo)
```html
<div class="artiste-item" data-specialty="mixed">
    <div class="artiste-card-inner">
        <div class="artiste-card-front">
            <svg class="specialty-icon">...</svg>
            <div class="artiste-avatar" data-initials="DJ">
                <img src="artistes/jung-daniel.jpg" alt="Œuvre de Daniel Jung" loading="lazy">
            </div>
            <div class="artiste-info">
                <h4>Daniel Jung</h4>
                <div class="artiste-specialty">Peintures & Sculptures</div>
            </div>
        </div>
        ...
    </div>
</div>
```

## Comportement automatique

Le système CSS gère automatiquement :
- ✅ Si une image est présente → elle s'affiche à la place des initiales
- ✅ Si pas d'image → les initiales colorées restent visibles
- ✅ Transition fluide sans modification du code CSS
- ✅ Responsive : l'image s'adapte sur tous les écrans

## Optimisation des images

### Avec un outil en ligne (gratuit)
1. Allez sur https://tinypng.com/
2. Uploadez vos images
3. Téléchargez les versions optimisées

### Avec Photoshop / GIMP
1. Recadrer en carré ou format paysage
2. Redimensionner à 400x400 ou 600x400 pixels
3. Exporter pour le web : qualité 80%

## Astuces

### Mixer photos et initiales
Vous n'êtes pas obligé d'ajouter des photos pour tous les artistes d'un coup. Le site gérera automatiquement :
- Cartes avec photos : l'œuvre s'affiche
- Cartes sans photos : les initiales colorées s'affichent

### Tester localement
1. Ajoutez une image test
2. Ouvrez `index.html` dans votre navigateur
3. Vérifiez que l'image s'affiche correctement
4. Ajustez si nécessaire

### Mise en production
Une fois toutes les images ajoutées :
1. Committez les changements : `git add .`
2. `git commit -m "Ajout photos des œuvres d'artistes"`
3. `git push`

## Résolution de problèmes

### L'image ne s'affiche pas
- Vérifiez le chemin du fichier (respectez les majuscules/minuscules)
- Vérifiez que le fichier existe dans le dossier `artistes/`
- Ouvrez la console du navigateur (F12) pour voir les erreurs

### L'image est déformée
- Assurez-vous que l'image fait au moins 400x400 pixels
- Le CSS utilise `object-fit: cover` qui recadre automatiquement

### L'image est trop lourde (site lent)
- Utilisez TinyPNG pour optimiser
- Visez 50-200 Ko par image

## Contact

Pour toute question, contactez Henri Husser ou consultez la documentation complète dans README.md.
