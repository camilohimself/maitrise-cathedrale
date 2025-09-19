# 🎼 Site Maîtrise de la Cathédrale de Sion

## 🎯 ÉTAT ACTUEL - DÉCEMBRE 2024

### ✅ **SITE PRODUCTION-READY**
- **URL Live:** https://maitrise-cathedrale.vercel.app
- **Architecture:** Modulaire, 27 pages fonctionnelles
- **Design:** Palette harmonisée (Navy #1a1340, Or #D4A574, Rouge #E33241)
- **Performance:** Images optimisées, CSS-in-JS inline
- **GitHub:** https://github.com/camilohimself/maitrise-cathedrale.git

### 📊 **PROGRESSION**
- Pages créées: 27/27 (100%)
- Contenu intégré: ~35% (Maîtrise complète, FAS partiel)
- Photos réelles: Remplacées (Hero MC + artistes optimisés)
- Build: Stable sans erreurs

---

## 🛠 STACK TECHNIQUE

- **Frontend:** Next.js 15.5.2, React 19.1.0, TypeScript 5
- **Style:** CSS-in-JS inline (fiabilité maximale)
- **Hébergement:** Vercel (déploiement auto)
- **Assets:** Images optimisées via sips (3 formats: Hero/Card/Thumb)

---

## 📋 PROCHAINES PRIORITÉS

### Phase HARMONISATION UX/UI (2h30 estimées)
- [ ] **Corrections palette couleurs**
  - Standardiser or #D4A574 partout
  - Unifier rouge #E33241 (usage subtil)
  - Supprimer couleurs non-conformes

- [ ] **Refonte EnsembleSection**
  - Corriger gradient rouge qui rompt alternance
  - Fond clair #FAFAF9 + accent rouge subtil

- [ ] **CSS Systémique**
  - Migrer inline vers classes centralisées
  - Créer .badge-gold, .tag-gold, .card-glass

### Phase MAQUETTE CONCERTS FAS (À REPRENDRE)
- [ ] **Choisir version définitive section concerts**
  - 3 versions OSOM créées et testées (/fas-test-all)
  - V1_Cinematic : Timeline + Hero rotatif (problème technique)
  - V2_Masonry : Grille Pinterest avec cartes flottantes
  - V3_Mobile_Cards : Carrousel 3D tactile optimisé mobile
  - **ACTION:** Sélectionner et intégrer la version préférée dans /fas
  - **PRIORITÉ:** Remplacer FASConcertsSection actuelle

### Phase CONTENU À COMPLÉTER
- [ ] **Agenda & Billetterie** - Événements avec vraies données
- [ ] **Média** - YouTube/SoundCloud embeds complets
- [ ] **Nous Soutenir** - Formulaires dons/partenaires
- [ ] **Newsletter** - Backend fonctionnel

### Phase OPTIMISATION FINALE
- [ ] **SEO** - Métadonnées OpenGraph complètes
- [ ] **Performance** - Lighthouse score > 95
- [ ] **Tests** - Responsive mobile/tablet

---

## 🔧 COMMANDES ESSENTIELLES

```bash
# Développement
npm run dev         # Port 3003
npm run build       # Build production
npm run lint        # Vérification code

# Git
git add .
git commit -m "message"
git push origin main

# Optimisation images (obligatoire)
sips -Z 1920 --setProperty formatOptions 85 "source.jpg" --out "hero.jpg"
sips -Z 600 --setProperty formatOptions 85 "source.jpg" --out "card.jpg"
sips -Z 300 --setProperty formatOptions 75 "source.jpg" --out "thumb.jpg"
```

---

## 📂 STRUCTURE PROJET

```
/MAITRISE-CATHEDRALE/
├── maitrise-cathedrale/    # 🎯 PROJET (toujours travailler ici)
│   ├── src/
│   │   ├── app/           # Pages Next.js
│   │   ├── components/    # Composants réutilisables
│   │   └── data/          # JSON content (maitriseContent.js, fasEvents.json)
│   └── public/
│       └── images/        # Photos optimisées
├── Charte graphique MC/   # Assets source
├── FAS - docs/           # Documents festival
└── FIGMA/                # Maquettes
```

---

## 📸 POLITIQUE PHOTOS

**OBLIGATOIRE:** Toute photo doit être optimisée en 3 formats avant intégration
- **Format:** WebP (format optimal depuis septembre 2024)
- **Hero:** 1920px, qualité 85%
- **Card:** 600px, qualité 85%
- **Thumb:** 300px, qualité 75%
- **Interdiction:** Jamais d'Unsplash ou sources externes
- **Répertoire:** `/public/images/artistes/[nom]/`

### 🔄 Conversion WebP (Commandes)
```bash
# Conversion via cwebp (Google WebP Converter)
cwebp -q 85 source.jpg -o hero.webp    # Hero format
cwebp -q 85 source.jpg -o card.webp    # Card format
cwebp -q 75 source.jpg -o thumb.webp   # Thumb format

# Alternative sips (macOS) - pour JPEG de secours
sips -Z 1920 --setProperty formatOptions 85 "source.jpg" --out "hero.jpg"
sips -Z 600 --setProperty formatOptions 85 "source.jpg" --out "card.jpg"
sips -Z 300 --setProperty formatOptions 75 "source.jpg" --out "thumb.jpg"
```

### ⚠️ ERREUR DE JUGEMENT DOCUMENTÉE (18 septembre 2024)
**Contexte:** Lors de la conversion FAS artistes, j'ai initialement changé les références `.webp` vers `.jpg`, pensant que les fichiers WebP étaient des placeholders.

**Réalité:** Le format WebP est supérieur au JPEG :
- **Gain de poids:** 88% de réduction (4.8MB → 596KB sur les hero images)
- **Qualité préservée:** Même rendu visuel à qualité 85%
- **Support navigateur:** 96%+ des navigateurs modernes
- **Performance web:** Chargement plus rapide, meilleur score Lighthouse

**Action corrective:**
- ✅ Conversion de toutes les photos artistes FAS en WebP (42 images)
- ✅ Mise à jour de toutes les références code vers `.webp`
- ✅ Documentation de l'erreur pour éviter répétition

**Leçon retenue:** Toujours vérifier les avantages techniques avant de "corriger" un format d'image moderne.

---

## ⚠️ NOTES IMPORTANTES

1. **CSS inline privilégié** pour fiabilité (éviter Tailwind bugs)
2. **Photos réelles uniquement** (pas de placeholders Unsplash)
3. **Sections modulaires** (/maitrise refactorisé en 7 composants)
4. **Palette stricte** Navy/Or/Rouge (éviter couleurs hors charte)
5. **Build stable** maintenir 0 erreur TypeScript/ESLint

## 🐛 BUGS CONNUS

### **Boutons React non-cliquables (septembre 2024)**
**Symptôme:** Boutons avec onClick ne réagissent pas aux clics dans certains composants

**Contexte:** Rencontré lors du développement de la page de test FAS (/fas-test)
- Les boutons semblent normaux visuellement
- Hover fonctionne, mais onClick ne se déclenche pas
- Console.log dans onClick ne s'affiche pas
- Problème persiste même avec zIndex élevé et pointerEvents: 'auto'

**Solutions tentées:**
- ✅ Augmenté zIndex: 9999/10001
- ✅ Ajouté pointerEvents: 'auto'
- ✅ Simplifié logique onClick
- ✅ Ajouté console.log pour debug
- ❌ Problème persiste

**Workaround appliqué:**
Créer page `/fas-test-all` avec toutes les versions affichées simultanément (sans boutons) pour éviter le problème.

**Note:** Bug spécifique à certains patterns React/Next.js - à investiguer plus tard si temps disponible.

---

---

## 📁 ARCHIVE PAGES SUPPRIMÉES

### Page /soutenir/partenaires (supprimée le 17/12/2024)
- **Raison:** Intégrée en section logos dans /soutenir
- **Contenu archivé:** Page basique avec placeholder
- **Logos partenaires:** 27 fichiers optimisés (3 formats) dans `/public/images/partenaires/`
- **Logos manuels requis:** 5 fichiers vectoriels (.ai/.eps): BCVS, CMYK, LoRo, Minkoff, Sion

---

### 📧 CORRECTIONS COMITÉ (18 septembre 2024)
**Suite au retour du membre du comité, corrections complètes appliquées :**

#### ✅ **Axes stratégiques redéfinis**
- **Avant:** Ensemble Vocal, École Maîtrisienne, Liturgie, Festival
- **Maintenant:** École de chant • Cantates de Bach • Chant grégorien • Liturgie à la cathédrale

#### ✅ **Typographie française appliquée**
- Suppression majuscules anglaises : "Festival d'art sacré", "ensemble vocal", etc.
- Règle : seule la première lettre en majuscule (norme française)

#### ✅ **Titres concerts FAS officiels** (du flyer)
- "Le baroque au féminin : Chiara Margarita Cozzolani"
- "Ex tenebris lux : Gesualdo, Bruckner, Poulenc"
- "Au ciel et sur la terre : les voix de la jeunesse"
- "Vivaldi ou Noël à Venise"
- "Palestrina, prince de la musique"

#### ✅ **Corrections de contenu**
- **Ensemble Vocal:** Supprimé "instruments d'époque" → "cantates Bach liturgie catholique"
- **Catherine Gremaud-Babel:** Bio corrigée (Conservatoire Genève, Sainte-Croix)
- **Vocabulaire liturgique:** "animation" → "chant liturgique"
- **Répertoire traditionnel:** Ajouté grégorien, polyphonie Renaissance, messes classiques

#### 🛠 **Fichiers modifiés**
- `src/data/maitriseContent.js` - Axes + bio Catherine
- `src/data/fondationContent.js` - Vocabulaire liturgique
- `src/data/fasContent.js` - Titres officiels
- `src/data/fasEvents.json` - Titres + typographie
- `src/components/MaitriseAboutSection.tsx` - Nouveaux axes
- `src/components/maitrise/EnsembleSection.tsx` - Cantates Bach
- `src/components/maitrise/DirectionSection.tsx` - Typographie

**Build final :** ✅ 25 pages sans erreur

---

**Dernière mise à jour:** 18 septembre 2024
**Session critique:** Corrections complètes suite retour comité - Axes stratégiques + typographie + contenu officiel