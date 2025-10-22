# 🔍 Guide SEO - Corriger les Résultats Google

**Date:** 21 octobre 2025
**Problème:** Google affiche des liens vers l'ancien site au lieu du nouveau
**Objectif:** Nettoyer les résultats de recherche et améliorer l'indexation

---

## 📊 Problème Identifié

Quand on recherche "maitrise cathedrale sion" sur Google, les résultats affichent:
- ❌ Des liens vers l'ancien site (structure obsolète)
- ❌ Des sections qui n'existent plus ("Les animations liturgiques", "Le cycle des concerts", etc.)
- ❌ URLs incorrectes (sans www ou anciennes)

**Cause:** Incohérence des URLs entre l'ancien site et le nouveau + Google n'a pas encore réindexé le nouveau site.

---

## ✅ Corrections Techniques Effectuées (Côté Code)

### 1. URLs de Production Corrigées

Tous les fichiers utilisent maintenant l'URL de production correcte:
```
https://www.maitrise-cathedrale.ch
```

**Fichiers mis à jour:**
- ✅ `src/app/layout.tsx` - metadataBase, openGraph, alternates
- ✅ `src/components/StructuredData.tsx` - URLs Schema.org
- ✅ `src/app/sitemap.ts` - baseUrl sitemap
- ✅ `src/app/robots.ts` - URL sitemap dans robots.txt

### 2. Sitemap.xml Optimisé

Le sitemap inclut maintenant **toutes les pages** du site:

**Pages principales:**
- Accueil (priority 1.0)
- Maîtrise (priority 0.9)
- Festival d'Art Sacré (priority 0.9)
- Agenda & Billetterie (priority 0.9)

**Pages secondaires:**
- Média + sous-pages (Cantates Bach, Presse)
- Soutenir + sous-pages (Contact, Amis Maîtrise, Partenaires)

**Pages artistes FAS:**
- Stile Antico
- Chœur Novantiqua
- Ensemble Vocal Impressio
- École Maîtrisienne Regensburg
- Ensemble Ad Astra

**Accessible à:** https://www.maitrise-cathedrale.ch/sitemap.xml

### 3. Robots.txt Configuré

Le fichier robots.txt permet l'indexation complète:
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /_next/

Sitemap: https://www.maitrise-cathedrale.ch/sitemap.xml
```

**Accessible à:** https://www.maitrise-cathedrale.ch/robots.txt

### 4. Structured Data (Schema.org)

Le site inclut déjà du Schema.org pour:
- ✅ EducationalOrganization (Fondation)
- ✅ MusicGroup (Maîtrise)
- ✅ PostalAddress (Sion, Valais)
- ✅ ContactPoint (téléphone, email)

Cela aide Google à comprendre la structure du site.

---

## 🚀 Actions À Faire (Hors Code)

### ÉTAPE 1: Déployer les Corrections

1. **Build local pour vérifier:**
   ```bash
   cd /Users/camilorivera/WORKSPACE-OSOM/CLIENTS-ACTIFS/MAITRISE-CATHEDRALE/maitrise-cathedrale
   npm run build
   ```

2. **Si le build réussit, déployer:**
   ```bash
   git add .
   git commit -m "🔍 SEO: Correction URLs production + sitemap complet"
   git push origin main
   ```

3. **Vérifier le déploiement Vercel:**
   - Vercel va déployer automatiquement
   - Attendre 2-3 minutes
   - Vérifier: https://www.maitrise-cathedrale.ch/sitemap.xml
   - Vérifier: https://www.maitrise-cathedrale.ch/robots.txt

---

### ÉTAPE 2: Google Search Console (PRIORITAIRE)

**Objectif:** Demander à Google de réindexer le nouveau site

#### A. Connexion / Création Compte

1. **Aller sur:** https://search.google.com/search-console
2. **Se connecter** avec le compte Google de la Maîtrise
3. **Si le site n'est pas encore ajouté:**
   - Cliquer "Ajouter une propriété"
   - Choisir "Préfixe d'URL"
   - Entrer: `https://www.maitrise-cathedrale.ch`
   - Cliquer "Continuer"

#### B. Vérification de Propriété

Google propose plusieurs méthodes. **La plus simple:**

**Méthode 1: Balise HTML (Recommandée)**
1. Google vous donne un code comme: `<meta name="google-site-verification" content="VOTRE_CODE_ICI">`
2. Copier uniquement `VOTRE_CODE_ICI`
3. Éditer le fichier `src/app/layout.tsx` ligne 97:
   ```typescript
   verification: {
     google: 'VOTRE_CODE_ICI', // Remplacer 'your-google-verification-code'
   },
   ```
4. Déployer: `git add . && git commit -m "✅ Ajout code vérification Google" && git push`
5. Attendre 2 minutes (déploiement Vercel)
6. Retourner dans Google Search Console et cliquer "Vérifier"

**Méthode 2: Fichier HTML (Alternative)**
1. Google vous donne un fichier `googleXXXXXXXX.html`
2. Télécharger le fichier
3. Le placer dans `/public/googleXXXXXXXX.html`
4. Déployer et vérifier

#### C. Soumettre le Sitemap

**Une fois le site vérifié:**

1. Dans Google Search Console, aller dans le menu latéral
2. Cliquer sur "Sitemaps"
3. Dans "Ajouter un nouveau sitemap", entrer:
   ```
   sitemap.xml
   ```
4. Cliquer "Envoyer"
5. Google va commencer à explorer le sitemap

**Résultat attendu:** "Réussite" (peut prendre quelques heures)

#### D. Demander Réindexation des Pages Principales

**Pour accélérer l'indexation:**

1. Dans Google Search Console, cliquer "Inspection de l'URL" (barre du haut)
2. Entrer chaque URL importante une par une:
   ```
   https://www.maitrise-cathedrale.ch
   https://www.maitrise-cathedrale.ch/maitrise
   https://www.maitrise-cathedrale.ch/fas
   https://www.maitrise-cathedrale.ch/agenda-billetterie
   https://www.maitrise-cathedrale.ch/media
   https://www.maitrise-cathedrale.ch/soutenir
   ```
3. Pour chaque URL:
   - Cliquer "Tester l'URL en direct"
   - Attendre l'analyse (30-60 secondes)
   - Cliquer "Demander une indexation"
   - Confirmer

**Temps de traitement:** 1-7 jours par page

---

### ÉTAPE 3: Google Business Profile (Profil d'Entreprise)

**Objectif:** Mettre à jour le profil affiché dans les résultats Google

#### A. Connexion au Profil

1. **Aller sur:** https://business.google.com
2. **Se connecter** avec le compte Google de la Maîtrise
3. **Sélectionner** le profil "Maîtrise de la Cathédrale de Sion"

#### B. Mettre à Jour le Site Web

1. Dans le menu latéral, cliquer "Informations"
2. Chercher la section "Site web"
3. **Remplacer** l'ancienne URL par:
   ```
   https://www.maitrise-cathedrale.ch
   ```
4. Cliquer "Appliquer"

#### C. Mettre à Jour les Liens (Optionnel mais Recommandé)

Google Business Profile permet d'ajouter des liens personnalisés vers des sections du site:

**Suggestions de liens:**
- **Nom:** "Concerts & Billetterie"
  **URL:** `https://www.maitrise-cathedrale.ch/agenda-billetterie`

- **Nom:** "Festival d'Art Sacré"
  **URL:** `https://www.maitrise-cathedrale.ch/fas`

- **Nom:** "L'École de Chant"
  **URL:** `https://www.maitrise-cathedrale.ch/maitrise`

- **Nom:** "Soutenir la Maîtrise"
  **URL:** `https://www.maitrise-cathedrale.ch/soutenir`

**Comment ajouter:**
1. Dans le profil Google Business, aller dans "Informations"
2. Chercher la section "Liens" ou "Raccourcis"
3. Cliquer "Ajouter un lien"
4. Entrer le nom et l'URL
5. Enregistrer

#### D. Vérifier les Autres Informations

Profiter de l'occasion pour vérifier/mettre à jour:
- ✅ Adresse: Place de la Cathédrale, 1950 Sion
- ✅ Téléphone: +41 27 322 22 20
- ✅ Email: info@maitrise-cathedrale.ch
- ✅ Horaires (si applicable)
- ✅ Description courte (max 750 caractères)
- ✅ Photos récentes (concerts, chœur, etc.)

---

### ÉTAPE 4: Redirections 301 (Si Ancien Site Encore Actif)

**Question importante:** L'ancien site est-il encore accessible sur une autre URL?

**Vérifier:**
1. Ouvrir un navigateur en mode navigation privée
2. Aller sur: `https://maitrise-cathedrale.ch` (sans www)
3. Observer:
   - Est-ce que ça redirige automatiquement vers `www.maitrise-cathedrale.ch`?
   - Ou est-ce que ça affiche une ancienne version du site?

**Si l'ancien site est encore visible:**

Vous avez 2 options:

#### Option A: Configuration Vercel (Recommandée)

1. Se connecter à Vercel: https://vercel.com
2. Sélectionner le projet "maitrise-cathedrale"
3. Aller dans "Settings" → "Domains"
4. Vérifier que les 2 domaines sont bien configurés:
   - `www.maitrise-cathedrale.ch` (principal)
   - `maitrise-cathedrale.ch` (redirection → www)
5. Si `maitrise-cathedrale.ch` n'est pas listé:
   - Cliquer "Add"
   - Entrer `maitrise-cathedrale.ch`
   - Choisir "Redirect to www.maitrise-cathedrale.ch"
   - Cocher "Permanent (301)"

#### Option B: Configuration Hébergeur DNS

Si l'ancien site est hébergé ailleurs:

1. Contacter l'hébergeur actuel
2. Demander une redirection 301 permanente:
   ```
   maitrise-cathedrale.ch → www.maitrise-cathedrale.ch
   maitrise-cathedrale.ch/* → www.maitrise-cathedrale.ch/*
   ```
3. Une fois la redirection active, vérifier avec:
   ```bash
   curl -I https://maitrise-cathedrale.ch
   ```
   Vous devriez voir: `HTTP/1.1 301 Moved Permanently`

---

## 📈 Suivi & Résultats Attendus

### Timeline Réaliste

**Semaine 1 (Immédiat → 7 jours):**
- ✅ Corrections code déployées (fait aujourd'hui)
- ✅ Google Search Console configuré (1h)
- ✅ Sitemap soumis (5 min)
- ⏳ Indexation commence (1-3 jours)

**Semaine 2-3 (7 → 21 jours):**
- ⏳ Pages principales indexées (7-14 jours)
- ⏳ Profil Google Business mis à jour (visible 3-7 jours)
- ⏳ Début remplacement anciens résultats

**Mois 1-2 (30 → 60 jours):**
- ⏳ Majorité pages indexées
- ⏳ Résultats de recherche majoritairement corrects
- ⏳ Amélioration positionnement SEO

**Mois 3+ (90+ jours):**
- ✅ Site complètement réindexé
- ✅ Anciens résultats disparus
- ✅ Positionnement SEO stabilisé/amélioré

### KPIs à Surveiller (Google Search Console)

**Chaque semaine, vérifier:**

1. **Couverture:**
   - Nombre de pages indexées (objectif: ~20 pages)
   - Erreurs d'indexation (objectif: 0)

2. **Performances:**
   - Impressions (combien de fois le site apparaît dans Google)
   - Clics (combien de visiteurs viennent de Google)
   - CTR (taux de clics)
   - Position moyenne (objectif: position 1-3 pour "maitrise cathedrale sion")

3. **Expérience:**
   - Core Web Vitals (performances techniques)
   - Problèmes d'ergonomie mobile

---

## 🛠️ Optimisations Futures (Optionnelles)

### Court Terme (Prochain Mois)

1. **Images OpenGraph Personnalisées**
   - Créer des images 1200x630px pour chaque page
   - Ajouter dans les métadonnées de chaque page

2. **Meta Descriptions Enrichies**
   - Réviser les descriptions de chaque page
   - Inclure mots-clés stratégiques

3. **Schema.org Events**
   - Ajouter Schema.org pour chaque concert du calendrier
   - Permet affichage enrichi dans Google (dates, billets, lieu)

### Moyen Terme (2-3 Mois)

1. **Backlinks de Qualité**
   - Obtenir des liens depuis:
     - Site de la Ville de Sion
     - Canton du Valais
     - Partenaires culturels
     - Médias locaux

2. **Contenu SEO**
   - Blog/Actualités avec articles optimisés
   - Transcriptions des cantates de Bach (contenu riche)

3. **Performance Technique**
   - Lazy loading images
   - Compression avancée
   - Audit Lighthouse (objectif: 90+/100)

---

## 📞 Questions Fréquentes

### Q: Combien de temps avant de voir les résultats?

**R:** Les premières pages devraient être indexées en 3-7 jours. Pour un remplacement complet des anciens résultats, compter 1-2 mois.

### Q: Pourquoi Google affiche encore l'ancien site?

**R:** Google met du temps à mettre à jour son index. C'est normal. Avec le sitemap soumis et les demandes d'indexation, le processus est accéléré mais reste progressif.

### Q: Peut-on forcer Google à tout réindexer immédiatement?

**R:** Non. Google indexe à son propre rythme. On peut seulement "demander" une indexation via Search Console, mais Google décide du timing final.

### Q: Le site www.maitrise-cathedrale.ch est-il différent de maitrise-cathedrale.ch?

**R:** Techniquement oui, ce sont 2 URLs différentes. C'est pourquoi il est crucial de:
1. Choisir UNE version principale (avec www)
2. Rediriger l'autre version vers la principale (redirection 301)
3. Utiliser cette URL partout (code, Google, réseaux sociaux)

### Q: Faut-il supprimer l'ancien site?

**R:** Oui, si possible. Ou au minimum mettre en place une redirection 301 permanente vers le nouveau site. Avoir 2 sites avec le même contenu nuit au SEO (duplicate content).

---

## ✅ Checklist Récapitulative

**Actions Techniques (Déjà faites):**
- [x] URLs corrigées vers www.maitrise-cathedrale.ch
- [x] Sitemap.xml optimisé avec toutes les pages
- [x] Robots.txt configuré correctement
- [x] Structured Data (Schema.org) en place

**Actions À Faire (Client/OSOM):**
- [ ] Build + déploiement des corrections
- [ ] Google Search Console: Ajouter propriété
- [ ] Google Search Console: Vérification propriété
- [ ] Google Search Console: Soumettre sitemap
- [ ] Google Search Console: Demander indexation pages principales
- [ ] Google Business Profile: Mettre à jour URL
- [ ] Google Business Profile: Ajouter liens personnalisés
- [ ] Vérifier redirection maitrise-cathedrale.ch → www
- [ ] Configurer redirection 301 si nécessaire

**Suivi Continu:**
- [ ] Semaine 1: Vérifier indexation dans Search Console
- [ ] Semaine 2: Vérifier apparition nouvelles pages Google
- [ ] Semaine 4: Audit complet résultats de recherche
- [ ] Mois 2: Analyse performances SEO (impressions, clics, position)

---

## 📚 Ressources Utiles

- **Google Search Console:** https://search.google.com/search-console
- **Google Business Profile:** https://business.google.com
- **Test Rich Results (Schema.org):** https://search.google.com/test/rich-results
- **Test compatibilité mobile:** https://search.google.com/test/mobile-friendly
- **PageSpeed Insights:** https://pagespeed.web.dev
- **Documentation Next.js SEO:** https://nextjs.org/learn/seo/introduction-to-seo

---

**Document créé le:** 21 octobre 2025
**Dernière mise à jour:** 21 octobre 2025
**Auteur:** OSOM - Claude Code
**Contact:** info@maitrise-cathedrale.ch
