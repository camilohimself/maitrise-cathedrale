# Maîtrise de la Cathédrale de Sion - Site Web

Site web officiel de la Maîtrise de la Cathédrale de Sion développé par OSOM.

## 🎵 À propos

La Maîtrise de la Cathédrale de Sion est une institution musicale d'excellence qui perpétue la tradition du chant sacré au cœur du Valais. Ce site web présente les activités, concerts, formations et l'histoire de cette prestigieuse maîtrise.

## 🚀 Technologies

- **Next.js 15** - Framework React avec App Router
- **TypeScript** - Langage typé
- **Tailwind CSS 4** - Framework CSS utilitaire
- **Headless UI** - Composants accessibles
- **Heroicons** - Icônes
- **Police Outfit** - Typography moderne et élégante

## 📁 Structure du projet

```
src/
├── app/                    # Pages Next.js (App Router)
│   ├── agenda/            # Page agenda avec filtres
│   ├── la-maitrise/       # Pages de présentation
│   ├── media/             # Section multimédia
│   ├── festival-art-sacre/# Festival d'Art Sacré
│   └── nous-soutenir/     # Pages de contact et soutien
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Composants de sections
│   └── ui/                # Composants UI réutilisables
├── data/                  # Données statiques
└── types/                 # Types TypeScript
```

## 🎨 Design System

### Couleurs
- **Primary**: #D2AB5F (Doré cathédrale - inspiré du site WordPress existant)
- **Background**: #f8f9fa (Gris clair)

### Typographie
- **Toute la typographie**: Outfit (Google Fonts)
- Poids disponibles: 300, 400, 500, 600, 700, 800

## 🔧 Installation et développement

```bash
# Installation des dépendances
npm install

# Serveur de développement
npm run dev

# Build de production
npm run build

# Démarrage du serveur de production
npm start
```

## 📱 État du projet après nettoyage

### ✅ NETTOYAGE COMPLET EFFECTUÉ (7 septembre 2024)
- [x] **Cache Next.js** - Supprimé complètement (.next/)
- [x] **Framer Motion** - Supprimé du projet (optimisation performances)
- [x] **CSS** - Consolidé et unifié (police Outfit, couleurs cohérentes)
- [x] **Pages simplifiées** - Versions épurées sans animations complexes
- [x] **Build** - Compile sans erreurs
- [x] **Dev Server** - Un seul serveur sur localhost:3000

### ✅ Hero Section optimisée
- Style inspiré du site WordPress existant (maitrise.sandboxdelta.com)
- Police Outfit 800 pour les titres
- Couleur or #D2AB5F cohérente
- Overlay sombre sur image de fond
- Bouton CTA stylisé

### ✅ Pages fonctionnelles
1. **Accueil** (`/`) - Hero section + EventsSection
2. **Agenda** (`/agenda`) - Événements avec système de filtres
3. **La Maîtrise** (`/la-maitrise`) - Page de présentation simplifiée
4. **Média** (`/media`) - Page multimédia simplifiée
5. **Festival d'Art Sacré** (`/festival-art-sacre`) - Page festival simplifiée
6. **Contact** (`/nous-soutenir/contact`) - Formulaire de contact

## 🏃‍♂️ Instructions pour reprendre demain

### 1. Démarrage rapide
```bash
# Vérifier le serveur (doit déjà tourner)
npm run dev
# → Site accessible sur http://localhost:3000
```

### 2. Architecture propre et optimisée
- **Performances** : Pas de framer-motion = bundle plus léger
- **Styles** : CSS cohérent avec Outfit et couleur #D2AB5F
- **Structure** : Code simplifié et maintenable
- **Build** : Compilation sans erreurs ni warnings

### 3. Développement recommandé pour la suite
1. **Contenu** : Remplacer le Lorem Ipsum par du vrai contenu
2. **Images** : Ajouter les vraies images dans `/public/images/`
3. **Fonctionnalités** : 
   - Connexion formulaire de contact
   - Intégration YouTube/SoundCloud réelle
   - Système de billetterie
4. **SEO** : Meta descriptions, structured data
5. **Performance** : Optimisation des images

### 4. Tests à faire demain
- [x] Homepage Hero fonctionne ✅
- [x] Navigation fonctionne ✅  
- [x] Pages se chargent rapidement ✅
- [x] Design responsive ✅
- [ ] Contenu à finaliser
- [ ] Images à remplacer
- [ ] Intégrations externes

## 🔗 Références de style
- **Site WordPress existant** : maitrise.sandboxdelta.com
- **Couleur principale** : #D2AB5F (respectée dans tout le site)
- **Typography** : Outfit (moderne et lisible)

## 👥 Développé par

**OSOM** - Agence digitale
- Site web: [osom.ch](https://osom.ch)
- Email: contact@osom.ch

---

**ÉTAT ACTUEL : PROJET PROPRE ET PRÊT POUR LE DÉVELOPPEMENT** ✅

© 2025 Maîtrise de la Cathédrale de Sion. Tous droits réservés.