# 🎨 DESIGN SYSTEM - Maîtrise Cathédrale de Sion

## 📐 STRUCTURE DU SITE

### Architecture des pages
```
├── Header (fixe)
│   ├── Logo "M"
│   └── Navigation principale
├── Hero Section
├── Section Événements
├── Section Écouter & Voir
├── Section Rejoignez l'aventure
├── Newsletter
└── Footer
```

## 🎨 PALETTE DE COULEURS

```css
/* Couleurs principales */
--color-primary: #D2AB5F;      /* Doré/Bronze */
--color-black: #000000;        /* Noir pur */
--color-white: #FFFFFF;        /* Blanc */
--color-dark-blue: #1e3a8a;   /* Bleu nuit (sections) */
--color-gray-light: #F5F5F5;  /* Gris clair (backgrounds) */
```

## 📝 TYPOGRAPHIE

```css
/* Font principale */
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

/* Hierarchy */
--font-family: 'Outfit', sans-serif;

/* Sizes */
--h1-size: 48px;        /* Titre principal Hero */
--h2-size: 36px;        /* Titres sections */
--h3-size: 24px;        /* Sous-titres */
--text-large: 20px;     /* Texte important */
--text-base: 16px;      /* Corps de texte */
--text-small: 14px;     /* Petits textes */

/* Weights */
--font-light: 300;
--font-regular: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

## 📏 ESPACEMENTS

```css
/* Padding sections */
--section-padding: 60px 0;
--container-padding: 0 20px;

/* Margins */
--margin-small: 8px;
--margin-base: 16px;
--margin-medium: 24px;
--margin-large: 32px;
--margin-xlarge: 48px;

/* Container */
--container-max: 1200px;
```

## 📱 BREAKPOINTS

```css
--mobile: 320px;
--tablet: 768px;
--desktop: 1024px;
--wide: 1440px;
```

## 🎯 COMPOSANTS

### Navigation Header
- **Position**: Fixed top
- **Background**: Blanc avec ombre légère
- **Height**: 80px
- **Logo**: "M" stylisé à gauche
- **Menu**: Liens centrés
- **CTA**: "Festival d'Art Sacré" (bouton doré)

### Hero Section
- **Height**: 100vh minimum
- **Background**: Image avec overlay gradient
- **Titre**: 48px, extrabold, blanc
- **Sous-titre**: 20px, regular, blanc/doré
- **CTA Buttons**: Transparent avec bordure

### Cards Événements
- **Background**: Blanc
- **Shadow**: Légère au hover
- **Image**: Ratio 16:9
- **Padding**: 24px
- **Date**: Badge doré

### Boutons
```css
/* Primary */
background: #D2AB5F;
color: white;
padding: 12px 32px;
border-radius: 4px;

/* Secondary */
background: transparent;
border: 2px solid #D2AB5F;
color: #D2AB5F;

/* Hover */
transform: translateY(-2px);
box-shadow: 0 4px 12px rgba(0,0,0,0.1);
```

## 🎭 ANIMATIONS

```css
/* Transitions standard */
transition: all 0.3s ease;

/* Hover cards */
transform: translateY(-4px);
box-shadow: 0 8px 24px rgba(0,0,0,0.12);

/* Fade in on scroll */
opacity: 0 -> 1;
transform: translateY(20px) -> translateY(0);
```

## 📄 CONTENU TEXTE

### Header Navigation
- Agenda & Billetterie
- La Maîtrise  
- Écouter & voir
- Nous soutenir

### Hero
**Titre**: "Voix d'exception au cœur de la Cathédrale"
**Sous-titre**: La Maîtrise de la Cathédrale de Sion
**Description**: "De jeunes chanteurs passionnés, formés dès le plus jeune âge, unissent leurs voix pour faire vibrer la cathédrale au rythme du chant sacré."

### Événements (Exemples)
1. **La Prochaine Cantate de Bach**
   - Jeudi 15 Août, 19h30
   
2. **Ensemble vocal et instrumental**
   - Dimanche 30 Novembre
   
3. **Festival d'Art Sacré**
   - Dimanche 30 Novembre

### Newsletter
**Titre**: "Recevez nos actualités et ne manquez aucun concert"
**Placeholder**: "Adresse email"
**Button**: "S'inscrire"

### Footer
- Contact | Presse | Mentions légales | Politiques de Confidentialités
- © 2025 par OSOM

---

## ✅ CHECKLIST D'IMPLÉMENTATION

- [ ] Import font Outfit
- [ ] Variables CSS globales
- [ ] Header responsive
- [ ] Hero avec overlay
- [ ] Section Événements (grid 3 colonnes)
- [ ] Section Écouter (player audio)
- [ ] Newsletter form
- [ ] Footer complet
- [ ] Animations au scroll
- [ ] Responsive mobile/tablet