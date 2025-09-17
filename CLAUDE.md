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
- **Hero:** 1920px, qualité 85%
- **Card:** 600px, qualité 85%
- **Thumb:** 300px, qualité 75%
- **Interdiction:** Jamais d'Unsplash ou sources externes
- **Répertoire:** `/public/images/artistes/[nom]/`

---

## ⚠️ NOTES IMPORTANTES

1. **CSS inline privilégié** pour fiabilité (éviter Tailwind bugs)
2. **Photos réelles uniquement** (pas de placeholders Unsplash)
3. **Sections modulaires** (/maitrise refactorisé en 7 composants)
4. **Palette stricte** Navy/Or/Rouge (éviter couleurs hors charte)
5. **Build stable** maintenir 0 erreur TypeScript/ESLint

---

---

## 📁 ARCHIVE PAGES SUPPRIMÉES

### Page /soutenir/partenaires (supprimée le 17/12/2024)
- **Raison:** Intégrée en section logos dans /soutenir
- **Contenu archivé:** Page basique avec placeholder
- **Logos partenaires:** 27 fichiers optimisés (3 formats) dans `/public/images/partenaires/`
- **Logos manuels requis:** 5 fichiers vectoriels (.ai/.eps): BCVS, CMYK, LoRo, Minkoff, Sion

---

**Dernière mise à jour:** 17 décembre 2024
**Session critique:** Harmonisation UX/UI palette couleurs + Refonte pages soutenir