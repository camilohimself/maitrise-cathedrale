# REPRISE SESSION - REFONTE PAGE /fas

## CONTEXTE PROJET
- **Client**: Maitrise de la Cathedrale de Sion
- **Site**: maitrise-cathedrale (Next.js 15)
- **Cible**: Audience 60+ ans
- **Reference**: Style Opera de Paris

## CHARTE GRAPHIQUE
```
Navy:   #1a1340
Or:     #D4A574
Rouge:  #E33241
Creme:  #FAFAF9
Fonts:  Spectral (titres), Outfit (texte)
```

## TRAVAIL TERMINE (Session precedente)

### Homepage refaite - Style Opera
- [x] HeroFestivalCountdown - Mobile optimise, sans ligne doree
- [x] UpcomingEventsSectionOpera - Cards horizontales luxe
- [x] MaitriseAboutCondensed - Grid 2x2 stats desktop, CTA mobile
- [x] NewsletterSupportCombined - Layout 50/50

**Commit**: `a1f14eb` - "feat(homepage): Refonte complete style Opera de Paris"

---

## TRAVAIL A FAIRE - Page /fas

### Analyse NEO (Expert UX)

#### PROBLEMES IDENTIFIES
1. **Hero carousel trop complexe** - 5 slides, autoplay 7s, 3 controles
2. **Overlay violet 70-90% opacite** - Contraste problematique 60+
3. **FASEventSection redondante** - Doublonne avec ConcertsList
4. **Cards alternees** - Image gauche/droite fatiguant
5. **Violet vs Navy inconsistance** - Doit unifier vers Navy/Or
6. **Tailles polices limites** - Augmenter pour 60+

#### DECISION: Option B - Refonte complete

### TODO LIST

1. [ ] Creer FASHeroOpera.tsx - Hero statique style Opera (remplace carousel)
2. [ ] Modifier FASConcertsList - Cards uniformes (image toujours gauche)
3. [ ] Supprimer FASEventSection de page.tsx
4. [ ] Unifier couleurs violet → Navy/Or
5. [ ] Augmenter tailles polices
6. [ ] Tester mobile
7. [ ] Commit et push

---

## FICHIERS A MODIFIER

### 1. NOUVEAU COMPOSANT: FASHeroOpera.tsx
```
/src/components/FASHeroOpera.tsx
```
- Hero statique ou carousel simplifie
- Style Opera: Navy + Or
- Sans autoplay ou autoplay 12s+
- 1 seul controle (dots)
- Overlay navy 40-50% opacite

### 2. MODIFIER: FASConcertsList.tsx
```
/src/components/FASConcertsList.tsx
```
Changements:
- Ligne 386: `gridTemplateColumns: '300px 1fr'` (supprimer ternaire)
- Lignes 409-460: Supprimer logique order alternee
- Ligne 583: `fontSize: '1.25rem'` (augmenter)
- Remplacer `var(--color-purple)` par `#1a1340` ou `var(--color-navy)`

### 3. MODIFIER: page.tsx
```
/src/app/fas/page.tsx
```
- Remplacer FASHeroCinematic par FASHeroOpera
- Supprimer FASEventSection

### 4. OPTIONNEL: FASHeroCinematic.tsx
```
/src/components/FASHeroCinematic.tsx
```
Quick wins si on garde:
- Ligne 8: `useState(false)` (desactiver autoplay)
- Lignes 150-152: Reduire opacite overlay

---

## COMPOSANTS PAGE /fas ACTUELLE

```tsx
// /src/app/fas/page.tsx
<main>
  <FASHeroCinematic />        // A REMPLACER par FASHeroOpera
  <FASConcertsList />         // A MODIFIER (cards uniformes)
  <FASEventSection />         // A SUPPRIMER
  <FASLiturgicalEvents />     // GARDER
  <FASComplementaryEvents />  // GARDER
  <FASDownloadButton />       // GARDER
  <FASArtistesSection />      // GARDER
</main>
```

---

## STRUCTURE CIBLE

```tsx
// /src/app/fas/page.tsx (apres refonte)
<main>
  <FASHeroOpera />            // NOUVEAU - Style Opera
  <FASConcertsList />         // MODIFIE - Cards uniformes
  <FASLiturgicalEvents />
  <FASComplementaryEvents />
  <FASDownloadButton />
  <FASArtistesSection />
</main>
```

---

## REFERENCE DESIGN - Opera de Paris

### Caracteristiques
- Fond navy profond
- Accents or subtils
- Typographie serif elegante
- Espacement genereux
- Pas d'animations distrayantes
- Contraste eleve pour lisibilite

### Hero Style
- Image hero plein ecran
- Overlay navy semi-transparent (40-50%)
- Titre centre, grande taille
- CTA dore
- Navigation minimale (dots simples si carousel)

---

## COMMANDES UTILES

```bash
# Dev server
cd /Users/camilorivera/WORKSPACE-OSOM/CLIENTS-ACTIFS/MAITRISE-CATHEDRALE/maitrise-cathedrale
npm run dev

# URL locale
http://localhost:3000/fas

# Commit
git add -A && git commit -m "feat(fas): Refonte page FAS style Opera"
git push origin main
```

---

---

## NOUVELLE BANNIERE HERO

**IMPORTANT**: Une nouvelle banniere a ete ajoutee pour le hero FAS:
```
/public/images/fas-banner-2025.png
```

Cette image doit etre integree dans le nouveau composant FASHeroOpera.tsx.
- Format: PNG (optimise par Next.js)
- Contenu: Logo 20eme Festival d'Art Sacre + photos artistes + dates
- Utilisation: Hero principal de la page /fas

---

## PROMPT REPRISE APRES COMPACT

```
REPRISE SESSION MAITRISE CATHEDRALE - PAGE /fas

Contexte:
- Homepage terminee (commit a1f14eb)
- Page /fas a refaire style Opera
- Cible: 60+ ans
- NOUVELLE BANNIERE: /public/images/fas-banner-2025.png (a integrer dans hero)

Lire le fichier:
/Users/camilorivera/WORKSPACE-OSOM/CLIENTS-ACTIFS/MAITRISE-CATHEDRALE/maitrise-cathedrale/REPRISE-FAS-REFONTE.md

Taches:
1. Creer FASHeroOpera.tsx avec la nouvelle banniere fas-banner-2025.png
2. Modifier FASConcertsList.tsx (cards uniformes, couleurs Navy/Or)
3. Mettre a jour page.tsx (supprimer FASEventSection)
4. Tester sur http://localhost:3000/fas
5. Commit et push

Charte: Navy #1a1340, Or #D4A574, Creme #FAFAF9
Fonts: Spectral (titres), Outfit (texte)
```
