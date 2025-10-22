# 🎼 Site Maîtrise de la Cathédrale de Sion

**Dernière mise à jour:** 21 octobre 2025
**Statut:** ✅ **SITE V1 EN PRODUCTION - 100% RESPONSIVE**

---

## 🚨 PROCHAINE SESSION PRIORITAIRE

### ⏳ À FAIRE: Configuration Resend (15-20 min)

**OBJECTIF:** Activer l'envoi d'emails pour les 3 formulaires du site

**CE QUI EST PRÊT:**
- ✅ Code API routes 100% fonctionnel (Newsletter, Contact, Amis Maîtrise)
- ✅ Templates HTML professionnels avec branding
- ✅ Integration Resend complète dans le code
- ✅ Guide complet créé: `FORMULAIRES-EMAIL-SETUP.md`

**CE QU'IL FAUT FAIRE (étapes détaillées dans le guide):**
1. ⏳ Créer compte Resend (https://resend.com - gratuit 3000 emails/mois)
2. ⏳ Vérifier domaine `maitrise-cathedrale.ch` (ajouter DNS chez hébergeur)
3. ⏳ Copier clé API Resend
4. ⏳ Ajouter `RESEND_API_KEY` dans Vercel → Environment Variables
5. ⏳ Tester les 3 formulaires

**GUIDE COMPLET:** Ouvrir `FORMULAIRES-EMAIL-SETUP.md` (toutes les étapes détaillées avec screenshots)

**RÉSULTAT FINAL:** Tous les formulaires enverront des emails à `info@maitrise-cathedrale.ch` ✅

---

## 📌 INFOS CRITIQUES (À LIRE EN PREMIER)

### 🚀 URLs & Déploiement
- **Production:** https://www.maitrise-cathedrale.ch (LIVE)
- **Staging:** https://maitrise-cathedrale.vercel.app
- **GitHub:** https://github.com/camilohimself/maitrise-cathedrale.git
- **Déploiement:** Automatique via Vercel (push → main → deploy)

### 📊 État Actuel
- **Build:** ✅ Stable - 30 pages - 0 erreur TypeScript/ESLint
- **Performance:** ✅ Images WebP optimisées (98.6% compression)
- **Responsive:** ✅ 100% mobile optimisé (320px → 1920px+)
- **SEO:** ✅ Google Search Console configuré + Sitemap soumis
- **Analytics:** ✅ GA4 installé + 13 CTA trackés (billetterie, formulaires, social)
- **Formulaires:** ⏳ Code prêt - Configuration Resend à faire (15 min)
- **Contenu:** ✅ 95% intégré (Maîtrise, FAS, Agenda 2025-2026)

### 🎯 Progression V1
- ✅ Pages créées: 16/16 (Architecture stable)
- ✅ Photos: 100% optimisées WebP (3 formats: Hero/Card/Thumb)
- ✅ Menu mobile iOS: Corrigé (100dvh/100svh)
- ✅ Grids responsive: 100% safe (minmax pattern)
- ✅ Calendrier: 55 événements Oct 2025 → Juin 2026
- ✅ Cookie Banner LPD: Conforme loi suisse

---

## 🏗️ CHOIX STRATÉGIQUES & STACK TECHNIQUE

### 🎯 Pourquoi Next.js 15 (au lieu de WordPress)

**Décision:** Next.js 15.5.2 + React 19.1.0 + TypeScript 5

**Raisons techniques:**
1. **Performance supérieure** - SSR/SSG natif, build optimisé
2. **Contrôle total** - Code custom, pas de limitations plugins
3. **Multilingue natif** - i18n Next.js (FR/EN/DE prêt)
4. **Déploiement moderne** - Vercel auto-deploy, CI/CD intégré
5. **Évolutivité** - Architecture modulaire, composants réutilisables

**Justification client:**
- Plus-value technique non facturée vs WordPress
- Architecture évolutive (multilingue, analytics, backend)
- Maintenance simplifiée (pas de mise à jour plugins)

### 🎨 Pourquoi CSS-in-JS inline (au lieu de Tailwind)

**Décision:** CSS-in-JS inline avec `<style jsx>` pour media queries

**Raisons:**
1. **Fiabilité maximale** - Pas de classes conflictuelles
2. **Typage complet** - TypeScript sur tous les styles
3. **Scoped par défaut** - Pas de pollution globale
4. **Mobile-first** - Media queries locales au composant
5. **Performance** - Styles critiques inline (0 FOUC)

**Pattern validé:**
```typescript
<div style={{ color: 'var(--color-navy)' }}>
  Content
</div>
<style jsx>{`
  @media (max-width: 768px) {
    div { font-size: 1rem; }
  }
`}</style>
```

### 📸 Politique Photos WebP (OBLIGATOIRE)

**Standard qualité OSOM:**
- ✅ **Format:** WebP exclusif (JPEG interdit sauf secours)
- ✅ **3 formats systématiques:** Hero (1920px), Card (600px), Thumb (300px)
- ✅ **Qualité:** 85% (hero/card), 75% (thumb)
- ✅ **Gain moyen:** 90-98% compression vs JPEG
- ✅ **Commande:** `cwebp -q 85 source.jpg -o output.webp`

**Répertoires:**
```
/public/images/
  ├── artistes/[nom]/       # Photos artistes (3 formats)
  ├── complementary/        # Rorate + Vespérales
  └── partenaires/          # Logos sponsors
```

### 🎨 Charte Graphique (STRICTE)

**Palette officielle:**
- **Navy:** `#1a1340` (couleur principale)
- **Or:** `#D4A574` (accents, CTAs)
- **Rouge:** `#E33241` (détails, badges)
- **Crème:** `#FAFAF9` (backgrounds clairs)

**Règles:**
- ❌ Jamais de couleurs hors charte
- ❌ Pas d'emojis sauf demande explicite client
- ✅ CSS variables: `var(--color-navy)`, `var(--color-gold)`, etc.
- ✅ Typographie: Spectral (titres), Outfit (texte)

### 📱 Mobile-First iOS (Critères qualité)

**Standards obligatoires:**
1. **Viewport units iOS-safe:**
   ```css
   height: 100dvh;           /* Dynamic Viewport Height */
   min-height: 100svh;       /* Small Viewport fallback */
   ```

2. **Grids responsive safe:**
   ```typescript
   gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))'
   ```

3. **Boutons tactiles:**
   - Min height: 44px (Apple HIG)
   - Min width: 44px
   - Gap entre boutons: 8px minimum

4. **Typographie:**
   - Min font-size: 16px (évite zoom iOS)
   - Line-height: 1.5 minimum (lisibilité)
   - `clamp()` pour fluidité: `clamp(1rem, 2.5vw, 1.2rem)`

### 👥 Cible Utilisateur (60+ ans)

**Optimisations accessibilité:**
- ✅ Tailles texte augmentées (1.2rem minimum)
- ✅ Contrastes renforcés (Navy/Or sur fond clair)
- ✅ Navigation simplifiée (max 2 niveaux)
- ✅ CTAs explicites ("Réserver maintenant" vs "En savoir plus")
- ✅ Pas de jargon technique

---

## ✅ CE QUI EST FAIT (V1 PRODUCTION)

### 🎨 Design & Interface
- ✅ 16 pages fonctionnelles (Accueil, Maîtrise, FAS, Agenda, Média, Soutenir, etc.)
- ✅ Hero cinématique FAS (optimisé seniors)
- ✅ Footer XXL avec logo 500x500px
- ✅ Menu hamburger iOS-safe (100dvh/100svh)
- ✅ Cookie Banner LPD Suisse (design custom)

### 📸 Photos & Assets
- ✅ 48 photos optimisées WebP (EVI, Ad Astra, École, Stile Antico, Rorate, Vespérales)
- ✅ Gain compression: 98.6% moyen (ex: 14.5MB → 201KB)
- ✅ 27 logos partenaires (3 formats chacun)
- ✅ Images par défaut messes (ecole-1-card.webp)

### 🎼 Contenu Intégré
- ✅ Festival d'Art Sacré: 5 concerts + billetterie booking-corner.com
- ✅ Événements complémentaires: Rorate (3 dates) + Vespérales (3 dates)
- ✅ Calendrier 2025-2026: 55 événements (CSV officiel)
- ✅ SoundCloud: 10 tracks (8 Bach + 2 Schütz)
- ✅ Biographies: Catherine Gremaud-Babel, organistes, artistes FAS

### 📱 Optimisations Mobile
- ✅ 16/16 pages 100% responsive (320px → 1920px+)
- ✅ Menu mobile iOS corrigé (tous items visibles)
- ✅ 4 grids critiques corrigées (FASHighlight, MaitriseAbout, Support, Newsletter)
- ✅ 645 lignes CSS responsive ajoutées
- ✅ 0 overflow horizontal tous breakpoints

### 🔧 Technique & Performance
- ✅ Build stable: 30 pages, 0 erreur TypeScript/ESLint
- ✅ SEO: Métadonnées complètes (title + description) toutes pages
- ✅ Signature OSOM footer ("Orchestré avec soin par OSOM")
- ✅ Git workflow: Commits détaillés avec emojis conventionnels

### 📅 Derniers Commits (21 Oct 2025)
- `0f9d9e5` - 📱 AUDIT MOBILE: Corrections 4 problèmes critiques responsive
- `0387735` - 🐛 FIX MENU MOBILE iOS + RESPONSIVE FAS: Corrections complètes
- `76a457f` - ✨ ÉVÉNEMENTS COMPLÉMENTAIRES FAS: Rorate + Vespérales avec photos optimisées

---

## 📋 ROADMAP & PROCHAINES ÉTAPES

### Phase POST-V1 (À planifier)
- [ ] **Formulaires backend** - Newsletter/Contact/Amis-Maîtrise fonctionnels (API Resend configurée)
- [ ] **YouTube contenus** - Remplacer placeholders par vidéos réelles
- [ ] **SEO avancé** - OpenGraph images, Twitter Cards
- [ ] **Performance** - Lazy loading images, optimisation poussée
- [ ] **Analytics** - Google Analytics ou Plausible intégration

### 🌍 Multilingue FR/EN/DE (100% faisable)

**Architecture prête:**
- ✅ Contenu centralisé dans `/src/data/` (structure idéale)
- ✅ Composants modulaires (reçoivent contenu via props)
- ✅ Next.js 15 i18n routing natif (/fr, /en, /de)

**Plan implémentation:**
1. Configuration Next.js i18n (next.config.js) - 2h
2. Restructuration data (/src/data/fr/, /en/, /de/) - 4h
3. Hooks & composants (useLocale + Language switcher) - 3h
4. Traductions complètes - 2-3 jours

**Estimation:** 4-5 jours maximum
**Timing optimal:** Post-stabilisation contenu FR

### 💡 Idées Futures
- [ ] Effet brillance CTA (golden shine scanner) - Template prêt
- [ ] Footer V2 cinématique (fond sombre + glow) - Variante disponible
- [ ] Templates OSOM réutilisables (Cookie Banner, Hero, etc.)

---

## 🔧 COMMANDES & WORKFLOW

### NPM Scripts
```bash
npm run dev         # Développement local (port 3003)
npm run build       # Build production (test avant push)
npm run lint        # Vérification code (ESLint)
```

### Git Workflow
```bash
git status          # Vérifier fichiers modifiés
git add .           # Ajouter tous fichiers
git commit -m "✨ MESSAGE: Description"  # Commit avec emoji conventionnel
git push origin main  # Push vers production (→ Vercel deploy auto)
```

**Emojis commits conventionnels:**
- ✨ `:sparkles:` - Nouvelle feature
- 🐛 `:bug:` - Bug fix
- 📱 `:iphone:` - Responsive/mobile
- 🎨 `:art:` - Design/CSS
- 🔧 `:wrench:` - Config/settings
- 📸 `:camera:` - Images/assets
- 🚀 `:rocket:` - Déploiement

### Optimisation Images (OBLIGATOIRE avant intégration)
```bash
# WebP (recommandé)
cwebp -q 85 source.jpg -o hero.webp      # Hero 1920px
cwebp -q 85 -resize 600 0 source.jpg -o card.webp   # Card 600px
cwebp -q 75 -resize 300 0 source.jpg -o thumb.webp  # Thumb 300px

# JPEG secours (si WebP impossible)
sips -Z 1920 --setProperty formatOptions 85 "source.jpg" --out "hero.jpg"
sips -Z 600 --setProperty formatOptions 85 "source.jpg" --out "card.jpg"
sips -Z 300 --setProperty formatOptions 75 "source.jpg" --out "thumb.jpg"
```

### Patterns Code Réutilisables

**1. Grid responsive safe:**
```typescript
gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))'
```

**2. Typographie fluide:**
```typescript
fontSize: 'clamp(1rem, 2.5vw, 1.5rem)'
padding: 'clamp(20px, 4vw, 40px)'
```

**3. Media queries JSX:**
```typescript
<style jsx>{`
  @media (max-width: 768px) {
    .container { padding: 1rem !important; }
  }
`}</style>
```

**4. Viewport iOS-safe:**
```typescript
height: '100dvh',
minHeight: '100svh',
paddingBottom: 'env(safe-area-inset-bottom)'
```

---

## 📂 STRUCTURE PROJET

```
/MAITRISE-CATHEDRALE/
├── maitrise-cathedrale/      # 🎯 PROJET (toujours travailler ici)
│   ├── src/
│   │   ├── app/              # Pages Next.js
│   │   │   ├── page.tsx                       # Accueil
│   │   │   ├── maitrise/page.tsx             # Page unique 8 sections
│   │   │   ├── media/page.tsx                # SoundCloud + playlists
│   │   │   ├── fas/page.tsx                  # Festival d'Art Sacré
│   │   │   ├── agenda-billetterie/page.tsx   # Calendrier
│   │   │   └── soutenir/                     # Dons + formulaires
│   │   │
│   │   ├── components/       # Composants réutilisables
│   │   │   ├── Header.tsx    # Menu + hamburger iOS-safe
│   │   │   ├── Footer.tsx    # Footer XXL logo
│   │   │   ├── maitrise/     # 8 sections modulaires
│   │   │   ├── fas/          # Composants Festival
│   │   │   └── cookies/      # Cookie Banner LPD
│   │   │
│   │   ├── data/             # Contenu JSON (centralisé)
│   │   │   ├── maitriseContent.js
│   │   │   ├── fasEvents.json
│   │   │   ├── maitriseEvents.js
│   │   │   └── complementaryEvents.json  # Rorate + Vespérales
│   │   │
│   │   ├── hooks/            # React hooks
│   │   │   ├── useCookieConsent.ts   # Gestion Cookie Banner LPD
│   │   │   └── useGATracking.ts      # Tracking GA4 événements
│   │   │
│   │   └── styles/           # CSS globaux
│   │       ├── global-responsive.css
│   │       ├── maitrise-responsive.css
│   │       └── fas-responsive.css
│   │
│   └── public/
│       └── images/           # Assets optimisés WebP
│           ├── artistes/[nom]/        # Photos artistes (3 formats)
│           ├── complementary/         # Rorate + Vespérales
│           └── partenaires/           # Logos sponsors
│
├── Charte graphique MC/      # Assets source client
├── FAS - docs/               # Documents festival
├── photos-MC/                # Photos brutes (à optimiser)
└── FIGMA/                    # Maquettes design
```

**⚠️ Important:**
- `/maitrise` = Page unique avec 8 sections (PAS de sous-pages)
- Toujours travailler dans `/maitrise-cathedrale/` (pas parent)
- Photos brutes dans `/photos-MC/` → optimisées dans `/public/images/`

---

## 📚 TEMPLATES RÉUTILISABLES OSOM

### 🍪 Cookie Banner LPD Suisse

**Fichiers:**
- `/src/hooks/useCookieConsent.ts` - Hook gestion consentements
- `/src/components/cookies/CookieBanner.tsx` - Composant banner

**Avantages:**
- ✅ Conforme LPD Suisse (granularité, révocabilité)
- ✅ Design sur mesure (adapté charte client)
- ✅ 0 dépendance externe (localStorage pur)
- ✅ Léger (~3KB total)

**Déploiement 1-click:**
1. Copier les 2 fichiers
2. Adapter couleurs + textes (variables en tête fichier)
3. Importer dans `layout.tsx` : `<CookieBanner />`
4. Build & push → Déployé ! ✅

**Personnalisations possibles:**
- Emoji thématique (🎼 musique, 🍪 cookies, etc.)
- Popup créatif (recette cookies, notes musicales, etc.)
- Couleurs charte client

### ✨ Effet Brillance CTA (Golden Shine)

**Cas d'usage:** Attirer attention CTA premium (billetterie, offre spéciale)

**Timing optimisé:**
- Délai initial: 2s (digestion page)
- Répétitions: 2x (mémorable sans irriter)
- Durée: 1.5s par passage

**Résultats attendus:**
- +15-30% CTR sur boutons premium
- Mémorisation sans irritation

**Template validé:** Bouton Festival d'Art Sacré (Header.tsx)

---

## 🐛 BUGS RÉSOLUS & LEÇONS

### ❌ Erreur WebP → JPEG (Sept 2024)

**Contexte:** Conversion photos FAS artistes, changé `.webp` → `.jpg` pensant que WebP = placeholder

**Réalité WebP supérieur:**
- Gain poids: 88% réduction (4.8MB → 596KB)
- Qualité préservée (même rendu visuel q85%)
- Support navigateur: 96%+

**Leçon:** Toujours vérifier avantages techniques avant "corriger" format moderne

### ✅ Menu Mobile iOS Tronqué (Oct 2025)

**Problème:** Menu hamburger n'affichait que 2 premières pages (bug classique iOS)

**Cause:** `100vh` ne tient pas compte barre d'adresse Safari dynamique

**Solution:**
```css
height: 100dvh;              /* Dynamic Viewport Height */
min-height: 100svh;          /* Small Viewport fallback */
overscroll-behavior: contain; /* Pas de bounce */
padding-bottom: env(safe-area-inset-bottom); /* Encoches iPhone */
```

**Résultat:** Tous items menu visibles, scroll fluide, pas d'overflow

### ✅ Grids Responsive Cassées (Oct 2025)

**Problème:** Grids `minmax(400px, 1fr)` créaient overflow sur <400px

**Solution pattern safe:**
```typescript
gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))'
```

**Fichiers corrigés:**
- FASHighlightSection.tsx
- MaitriseAboutSection.tsx
- SupportSection_V2_Museum.tsx
- Newsletter.tsx

**Résultat:** 0 overflow horizontal, grids fluides tous breakpoints

---

## 📅 HISTORIQUE SESSIONS (Condensé)

### Session 1 (7 Oct 2025) - Finalisation V1
- Calendrier CSV officiel (55 événements)
- Photos artistes optimisées (36 fichiers WebP)
- Billetterie FAS (5 URLs booking-corner)
- SEO complet (12 pages metadata)
- Footer OSOM signature

### Session 2 (7 Oct 2025 PM) - Harmonisation
- Typographie cohérente (21 fichiers)
- Images messes par défaut (41 événements)
- UX améliorations (CTAs, navigation)
- Données officielles (IBAN, fondation)

### Session 3 (9 Oct 2025) - Mobile Responsive
- Fix jours semaine agenda (calcul dynamique)
- Optimisation CTAs FAS (billetterie fonctionnelle)
- Responsive complet 16 pages (645 lignes CSS)
- Footer Logo XXL redesign

### Session 4 (9 Oct 2025 Soir) - UX Interactivité
- Cards concerts cliquables (mapping artistes)
- Cards FAS cliquables (navigation fluide)
- Fix TypeScript build Vercel

### Session 5 (21 Oct 2025) - Événements Complémentaires
- Section Rorate + Vespérales (6 événements)
- Photos optimisées (14.5MB → 201KB = 98.6%)
- Page /fas réorganisée (Artistes en dernier)
- Suppression doublons (-204 lignes)

### Session 6 (21 Oct 2025 PM) - Audit Mobile Complet
- Fix menu iOS (100dvh/100svh)
- Audit 16 pages (85% → 100% responsive)
- Corrections 4 grids critiques
- Build stable 30 pages

### Session 7 (21 Oct 2025 Soir) - SEO + Analytics + Formulaires
- **SEO & Google Search Console:**
  - URLs unifiées → www.maitrise-cathedrale.ch (7 fichiers)
  - Sitemap.xml enrichi (20+ pages)
  - Robots.txt optimisé
  - Propriété GSC vérifiée + sitemap soumis
  - Guide complet: SEO-GOOGLE-GUIDE.md

- **Google Analytics 4:**
  - GA4 installé (ID: G-K5QG81C5Y1)
  - Hook useGATracking.ts (156 lignes)
  - 13 CTA trackés: 5 billetterie FAS, 3 formulaires, 5 liens sociaux
  - Respect Cookie Banner LPD
  - Guide complet: GA4-TRACKING-GUIDE.md (500+ lignes)

- **Formulaires Emails (Code prêt):**
  - 3 API routes Resend: Newsletter, Contact, Amis Maîtrise
  - Templates HTML professionnels branded
  - Guide configuration: FORMULAIRES-EMAIL-SETUP.md
  - ⏳ Configuration Resend à faire prochaine session (15 min)

---

## 📞 CONTACTS PROJET

**Client:** Maîtrise de la Cathédrale de Sion
**Contact principal:** Jean-David Waeber
**Agence:** OSOM
**GitHub:** https://github.com/camilohimself/maitrise-cathedrale.git

---

## 🎯 PROCHAINE SESSION (À PLANIFIER)

**PRIORITÉ 1: Configuration Resend (15-20 min)**
- ⏳ Activer l'envoi d'emails pour les 3 formulaires
- ⏳ Suivre le guide `FORMULAIRES-EMAIL-SETUP.md` étape par étape
- ⏳ Tester Newsletter, Contact, Amis Maîtrise

**Priorités suivantes:**
1. YouTube contenus (remplacer placeholders vidéos)
2. Multilingue FR/EN/DE (si client confirme besoin)
3. Optimisations GA4 avancées (scroll tracking, etc.)

**Idées OSOM à explorer:**
- Template Next.js starter kit (hook useGATracking réutilisable)
- Spécialisation verticale (institutions culturelles Suisse)
- Offre multilingue systématique (différenciation)

---

**🤖 Ce fichier est mis à jour à chaque session. Dernière révision : 21 octobre 2025**
