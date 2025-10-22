# 📊 Guide GA4 Tracking - Maîtrise Cathédrale Sion

**Date:** 21 octobre 2025
**Status:** ✅ **TRACKING ACTIF SUR TOUS LES CTA CRITIQUES**

---

## 🎯 Résumé Exécutif

Le site de la Maîtrise est maintenant équipé d'un tracking Google Analytics 4 complet qui mesure **toutes les interactions stratégiques** des visiteurs.

**Ce qui est tracké:**
- ✅ **5 boutons billetterie** FAS (intention d'achat concerts)
- ✅ **3 formulaires** (Newsletter, Contact, Amis de la Maîtrise)
- ✅ **5 liens externes** (Facebook, Instagram, YouTube, SoundCloud, OSOM)
- ✅ **Erreurs formulaires** (pour détecter problèmes techniques)

**Bénéfices:**
- 📈 Mesurer la **conversion billetterie** (combien de clics → achats)
- 🧭 Comprendre le **parcours utilisateur** (quelles pages/concerts intéressent le plus)
- 🐛 Détecter les **problèmes techniques** (formulaires qui échouent)
- 💰 Calculer le **ROI** du site et des campagnes marketing

---

## 📋 Table des Matières

1. [Événements Trackés](#événements-trackés)
2. [Comment Consulter les Données GA4](#comment-consulter-les-données-ga4)
3. [Rapports Personnalisés Recommandés](#rapports-personnalisés-recommandés)
4. [Dashboard Essentiel (Quick Wins)](#dashboard-essentiel-quick-wins)
5. [Respect de la Vie Privée (Cookie Banner)](#respect-de-la-vie-privée-cookie-banner)
6. [FAQ & Troubleshooting](#faq--troubleshooting)

---

## 📊 Événements Trackés

### 1️⃣ BILLETTERIE FAS (Priorité 1 - $$$ Impact Direct)

**Événement:** `ticket_click`

**Déclenché quand:** Un visiteur clique sur "Réserver →" pour un concert FAS

**Données capturées:**
| Paramètre | Description | Exemple |
|-----------|-------------|---------|
| `concert_name` | Nom du concert | "Stile Antico" |
| `concert_date` | Date du concert | "4 janvier 2026" |
| `concert_type` | Catégorie | "PRESTIGE" |
| `page_path` | Page où le clic a eu lieu | "/fas" |
| `page_title` | Titre de la page | "Festival d'Art Sacré" |

**Concerts trackés:**
1. ✅ Ensemble Vocal de la Maîtrise & Ensemble Barberine (30 nov 2025)
2. ✅ Chœur Novantiqua (7 déc 2025)
3. ✅ École Maîtrisienne & Chœur des collèges (21 déc 2025)
4. ✅ Ensemble Ad Astra & Collectif 7 Sed Unum (26 déc 2025)
5. ✅ Stile Antico (4 jan 2026) - Concert prestige

**Utilité Business:**
- Mesurer quel concert génère le plus d'**intention d'achat**
- Comparer la **performance** des concerts Prestige vs standards
- Calculer le **taux de conversion** Site → Booking Corner (avec tracking externe)
- Identifier le **moment optimal** pour communiquer (avant quel concert)

**Exemple insight:**
> "Le concert Stile Antico génère 3x plus de clics billetterie que la moyenne, mais seulement 40% de conversion → Peut-être prix trop élevé ou problème UX sur booking-corner"

---

### 2️⃣ FORMULAIRES (Priorité 2 - Engagement & Leads)

#### A. Newsletter

**Événements:**
- `form_submit` - Inscription réussie
- `form_error` - Échec technique

**Données capturées:**
| Paramètre | Valeur | Utilité |
|-----------|--------|---------|
| `form_name` | `"newsletter"` | Identifier le formulaire |
| `error_message` | `"API error"` ou `"Network error"` | Debugging |

**Utilité Business:**
- Mesurer la **croissance de la base email**
- Tester l'**efficacité des CTAs** newsletter sur différentes pages
- Détecter **bugs techniques** (si beaucoup d'erreurs)

#### B. Contact

**Événements:** `form_submit`, `form_error`

**Données:** Idem newsletter avec `form_name: "contact"`

**Utilité Business:**
- Mesurer le **volume de demandes** (corrélation avec campagnes marketing)
- Identifier les **pages sources** (d'où viennent les contacts)
- Détecter **problèmes techniques** bloquant les messages

#### C. Amis de la Maîtrise

**Événements:** `form_submit`, `form_error`

**Données capturées:**
| Paramètre | Valeur | Utilité |
|-----------|--------|---------|
| `form_name` | `"amis_maitrise"` | Identifier le formulaire |
| `concert_type` | `"individuelle"` ou `"couple"` | Type cotisation |
| `error_message` | Type d'erreur si échec | Debugging |

**Utilité Business:**
- Mesurer le **recrutement de membres**
- Comparer **cotisations individuelles vs couples**
- Évaluer l'**impact des campagnes** de sensibilisation

---

### 3️⃣ LIENS EXTERNES (Priorité 3 - Engagement Social)

**Événement:** `external_link_click`

**Déclenché quand:** Un visiteur clique sur un lien vers un site externe

**Liens trackés:**
1. ✅ **Facebook** (https://www.facebook.com/MaitriseSion/)
2. ✅ **Instagram** (https://www.instagram.com/maitrise_cathedrale/)
3. ✅ **YouTube** (https://www.youtube.com/@maitrisecathedralesion)
4. ✅ **SoundCloud** (https://soundcloud.com/maitrise-cathedrale-sion)
5. ✅ **OSOM** (https://www.osom.ch) - Lien footer

**Données capturées:**
| Paramètre | Description | Exemple |
|-----------|-------------|---------|
| `link_url` | URL complète | "https://www.facebook.com/MaitriseSion/" |
| `link_domain` | Domaine seul | "facebook.com" |
| `link_text` | Texte du lien | "Facebook" |
| `page_path` | Page source du clic | "/" |

**Utilité Business:**
- Identifier les **plateformes sociales préférées** des visiteurs
- Mesurer l'**intérêt pour les contenus audio** (SoundCloud)
- Évaluer le **trafic sortant** vs trafic gardé sur le site

**Exemple insight:**
> "70% des clics sociaux vont vers SoundCloud → Les visiteurs veulent écouter la musique → Créer plus de playlists & promouvoir les cantates Bach"

---

## 🔍 Comment Consulter les Données GA4

### Accès GA4

1. **Aller sur:** https://analytics.google.com
2. **Se connecter** avec le compte Google de la Maîtrise
3. **Sélectionner** la propriété "Maîtrise Cathédrale Sion" (ID: G-K5QG81C5Y1)

### Vue Rapide (Temps Réel)

**Pour voir les événements en direct:**

1. Menu latéral → **Temps réel**
2. Section "Événement par nom d'événement"
3. Tu verras apparaître:
   - `ticket_click` quand quelqu'un clique sur billetterie
   - `form_submit` quand quelqu'un envoie un formulaire
   - `external_link_click` quand quelqu'un clique sur un réseau social

**Temps de latence:** ~10 secondes entre l'action et l'affichage

### Rapports Détaillés (Historique)

#### Rapport 1: Tous les Événements

**Chemin:** Rapports → Engagement → Événements

**Ce que tu vois:**
- Liste de tous les événements (classés par volume)
- Nombre total par événement
- Utilisateurs uniques par événement
- Tendance sur la période

**Filtres utiles:**
- Période: Derniers 7 jours / 28 jours / 3 mois
- Comparaison avec période précédente

#### Rapport 2: Événement Spécifique (Ex: Billetterie FAS)

**Chemin:** Rapports → Engagement → Événements → Clic sur "ticket_click"

**Ce que tu vois:**
| Colonne | Signification | Exemple |
|---------|---------------|---------|
| `concert_name` | Quel concert | "Stile Antico" |
| Nb événements | Combien de clics | 45 |
| % du total | Part de ce concert | 35% |

**Tri recommandé:** Par nombre d'événements (desc) → Voir quel concert performe le mieux

#### Rapport 3: Parcours Utilisateur (Exploration)

**Chemin:** Explorer → Exploration de parcours

**Configuration:**
1. Point de départ: `page_view` (page = "/fas")
2. Étapes suivantes: Voir vers quoi vont les visiteurs
3. Filtrer sur: `ticket_click` → Voir combien convertissent

**Insight exemple:**
> "/fas (100 visiteurs) → ticket_click (15) → external_link_click (5) → Taux conversion 15%"

---

## 📈 Rapports Personnalisés Recommandés

### Rapport 1: Performance Billetterie FAS

**Objectif:** Voir quel concert génère le plus d'intention d'achat

**Comment créer:**
1. Explorer → Exploration libre
2. Dimensions: `concert_name`, `concert_date`, `concert_type`
3. Métriques: Nombre d'événements `ticket_click`
4. Filtres: Événement = `ticket_click`
5. Visualisation: Tableau

**KPIs à surveiller:**
- Concert avec le plus de clics (champion)
- Concert avec le moins de clics (à promouvoir davantage)
- Tendance temporelle (est-ce qu'on vend plus proche de la date?)

**Fréquence:** Hebdomadaire pendant la période FAS

### Rapport 2: Santé Formulaires

**Objectif:** Détecter si des formulaires échouent

**Comment créer:**
1. Explorer → Exploration libre
2. Dimensions: `form_name`, `error_message`
3. Métriques:
   - Nb `form_submit` (succès)
   - Nb `form_error` (échecs)
4. Calcul custom: Taux erreur = `form_error` / (`form_submit` + `form_error`)

**Seuils d'alerte:**
- ✅ Taux erreur < 5% : Normal
- ⚠️ Taux erreur 5-15% : À surveiller
- 🚨 Taux erreur > 15% : Bug technique probable

**Fréquence:** Mensuelle

### Rapport 3: Engagement Social

**Objectif:** Identifier les plateformes sociales les plus efficaces

**Comment créer:**
1. Explorer → Exploration libre
2. Dimensions: `link_domain`, `link_text`
3. Métriques: Nombre d'événements `external_link_click`
4. Visualisation: Graphique en barres

**Actions recommandées:**
- Si SoundCloud domine: Créer plus de playlists
- Si YouTube domine: Uploader plus de vidéos concerts
- Si Facebook domine: Investir dans des posts Facebook

**Fréquence:** Mensuelle

---

## 🎯 Dashboard Essentiel (Quick Wins)

**Pour créer un dashboard ultra-simple (15 min):**

### Métriques Clés à Afficher

1. **Billetterie FAS (Card):**
   - Métrique: Nb total `ticket_click`
   - Période: 7 derniers jours
   - Comparaison: vs 7 jours précédents
   - **Objectif:** +10% semaine après semaine

2. **Formulaires (Card):**
   - Métrique: Nb total `form_submit`
   - Période: 30 derniers jours
   - **Objectif:** >20 soumissions/mois

3. **Top 3 Concerts (Tableau):**
   - Dimension: `concert_name`
   - Métrique: `ticket_click`
   - Tri: Top 3 DESC
   - **Objectif:** Équilibrer la promotion

4. **Trafic Social (Graphique):**
   - Dimension: `link_text`
   - Métrique: `external_link_click`
   - Visualisation: Donut chart
   - **Objectif:** Diversifier les sources

### Comment Créer le Dashboard

1. **Aller dans:** Bibliothèque (menu latéral)
2. **Cliquer:** "Créer un nouveau rapport" → Modèle vierge
3. **Ajouter:** Les 4 cartes ci-dessus
4. **Nommer:** "Dashboard Maîtrise - Essentiel"
5. **Épingler** dans le menu pour accès rapide

**Temps de consultation:** 2 minutes/jour pour voir les tendances

---

## 🔒 Respect de la Vie Privée (Cookie Banner)

### Fonctionnement du Consentement

Le site utilise un **Cookie Banner conforme LPD Suisse** qui:
- ✅ Demande le consentement **avant** de tracker
- ✅ Permet de **refuser** les cookies analytiques
- ✅ Stocke le choix dans `localStorage` (révocable)
- ✅ Bloque GA4 si l'utilisateur refuse

**Code dans `useGATracking.ts` (ligne 73-79):**
```typescript
// Vérifier le consentement cookies (localStorage du Cookie Banner)
const cookieConsent = localStorage.getItem('cookieConsent');
if (cookieConsent) {
  const consent = JSON.parse(cookieConsent);
  if (!consent.analytics) {
    console.info('Analytics tracking blocked by user consent');
    return; // Ne pas tracker
  }
}
```

### Impact sur les Données

**Taux de consentement attendu:** 60-80% des visiteurs

**Cela signifie:**
- ❌ 20-40% des visiteurs NE SONT PAS trackés
- ✅ Les données GA4 représentent la **majorité** mais **pas 100%**
- ⚠️ Les chiffres sont donc **sous-estimés** (réalité > données GA4)

**Exemple:**
- GA4 affiche: **100 clics billetterie**
- Réalité estimée: **125-140 clics** (en comptant ceux qui refusent)

**Bonnes pratiques:**
- Utiliser GA4 pour les **tendances** (évolution)
- Comparer **avant/après** (campagnes marketing)
- Ne PAS se fier aux **valeurs absolues** (sous-estimées)

---

## ❓ FAQ & Troubleshooting

### Q1: Je ne vois aucun événement dans GA4, que faire?

**Checklist:**
1. ✅ Vérifie que GA4 est bien actif: Temps réel → Tu dois voir au moins `page_view`
2. ✅ Teste en navigation privée + accepte les cookies analytiques
3. ✅ Clique sur un bouton billetterie → Attends 10-30 secondes → Rafraîchis GA4 Temps réel
4. ✅ Ouvre la console navigateur (F12) → Recherche "GA4 Event" dans les logs

**Si toujours rien:**
- Problème probable: Cookie Banner bloque GA4
- Solution: Vérifier `localStorage` → `cookieConsent` → `analytics: true`

### Q2: Pourquoi certains événements ont-ils `error_message: "API error"`?

**Cause:** Le formulaire a été soumis mais l'API backend a renvoyé une erreur

**Actions:**
1. Vérifier les logs backend (routes `/api/contact`, `/api/newsletter`, `/api/amis-maitrise`)
2. Tester manuellement les formulaires
3. Si taux d'erreur > 15%: Bug à corriger

**Causes fréquentes:**
- API Resend mal configurée (clé invalide)
- Rate limiting (trop de requêtes)
- Validation backend trop stricte

### Q3: Comment savoir si un visiteur a acheté un billet (conversion finale)?

**Limite actuelle:** Le site track uniquement **l'intention d'achat** (clic sur "Réserver"), PAS l'achat final sur booking-corner.com

**Solution avancée (optionnelle):**
1. Demander à Booking Corner d'ajouter un **pixel de conversion** GA4
2. Ou utiliser des **URL paramétrées** (UTM) pour tracker la source

**Exemple URL paramétrée:**
```
https://booking-corner.com/...?utm_source=maitrise&utm_medium=website&utm_campaign=stile_antico
```

Booking Corner pourra alors dire: "15 achats venaient de votre site avec utm_source=maitrise"

### Q4: Combien de temps faut-il pour avoir des données significatives?

**Timeline:**
- **Jour 1-7:** Données brutes disponibles, mais volume faible
- **Semaine 2-4:** Tendances commencent à émerger
- **Mois 2-3:** Données statistiquement significatives

**Volume minimum recommandé pour insights fiables:**
- Billetterie: >30 clics/concert
- Formulaires: >20 soumissions/mois
- Liens externes: >50 clics/mois

**Si volume trop faible:**
- Attendre plus longtemps
- Ou promouvoir davantage le site (marketing)

### Q5: Puis-je tracker d'autres choses (ex: scroll depth, temps passé)?

**Oui!** Le hook `useGATracking` supporte déjà:
- `scroll_depth` (non implémenté actuellement)
- `time_on_page`
- `pdf_download`
- Tout événement custom

**Pour ajouter le tracking scroll (exemple):**
```typescript
// Dans un composant React
useEffect(() => {
  const handleScroll = () => {
    const scrollPercent = (window.scrollY / document.body.scrollHeight) * 100;
    if (scrollPercent > 75) {
      trackEvent('scroll_depth', { scroll_percentage: 75 });
    }
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

---

## 📝 Résumé des Fichiers Techniques

**Pour les développeurs OSOM:**

### Hook Principal
`/src/hooks/useGATracking.ts` (156 lignes)
- Hook React personnalisé
- Types TypeScript complets
- Vérification consentement cookies
- Helpers pour événements fréquents

### Composants Modifiés (Tracking Ajouté)
1. `/src/components/FASConcertsList.tsx` - Billetterie FAS (5 boutons)
2. `/src/components/Newsletter.tsx` - Formulaire newsletter
3. `/src/app/soutenir/contact/page.tsx` - Formulaire contact
4. `/src/app/soutenir/amis-maitrise/page.tsx` - Formulaire amis (avec type cotisation)
5. `/src/components/Footer.tsx` - Liens sociaux (5 liens)

### Configuration GA4
`/src/app/layout.tsx` (lignes 124-135)
- Script GA4 chargé avec `strategy="afterInteractive"`
- ID de mesure: `G-K5QG81C5Y1`
- dataLayer initialisé

---

## 🎯 Prochaines Étapes Recommandées

### Court Terme (1-2 semaines)
- [ ] Tester tous les événements manuellement (cliquer sur chaque CTA et vérifier GA4)
- [ ] Créer le dashboard essentiel (15 min)
- [ ] Former 1-2 personnes à consulter GA4 hebdomadairement

### Moyen Terme (1-2 mois)
- [ ] Analyser les premiers résultats billetterie FAS
- [ ] Ajuster la stratégie marketing selon concerts performants/faibles
- [ ] Évaluer le taux de conversion formulaires (si < 85%, optimiser UX)

### Long Terme (3-6 mois)
- [ ] Implémenter tracking scroll depth (engagement lecture)
- [ ] Tracker téléchargements PDF (programmes concerts, etc.)
- [ ] Configurer alertes automatiques (ex: si taux erreur formulaire > 15%)
- [ ] Intégrer avec Booking Corner pour tracking conversion complète

---

## 📞 Support Technique

**Questions GA4 ou tracking:**
- Contact OSOM: [À compléter]
- Documentation GA4 officielle: https://support.google.com/analytics/answer/9304153

**Logs de débogage:**
- Ouvrir console navigateur (F12)
- Rechercher "GA4 Event" pour voir événements envoyés en temps réel

---

**Document créé le:** 21 octobre 2025
**Dernière mise à jour:** 21 octobre 2025
**Auteur:** OSOM - Claude Code
**Version:** 1.0
**Contact:** info@maitrise-cathedrale.ch
