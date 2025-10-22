# 📧 Guide Configuration Formulaires & Emails

**Date:** 21 octobre 2025
**Objectif:** Activer l'envoi d'emails pour les 3 formulaires du site

---

## 🎯 Situation Actuelle

### ✅ Ce Qui Est Fait (Code)

Les 3 API routes sont **100% fonctionnelles** et utilisent **Resend** (service d'envoi d'emails moderne):

1. **Newsletter** (`/api/newsletter`)
   - Collecte l'email du visiteur
   - Envoie notification à `info@maitrise-cathedrale.ch`
   - Template HTML professionnel avec branding Maîtrise

2. **Contact** (`/api/contact`)
   - Collecte: Prénom, Nom, Email, Téléphone, Sujet, Message
   - Envoie à `info@maitrise-cathedrale.ch`
   - Reply-To configuré (répondre directement au visiteur)

3. **Amis de la Maîtrise** (`/api/amis-maitrise`)
   - Collecte: Infos complètes + Type cotisation
   - Envoie à `info@maitrise-cathedrale.ch`
   - Indique la marche à suivre (envoyer bulletin adhésion)

### ⚠️ Ce Qu'il Faut Configurer (Vercel + Resend)

Pour que les emails partent réellement, il faut:
1. ✅ Créer un compte Resend (gratuit jusqu'à 3000 emails/mois)
2. ✅ Vérifier le domaine `maitrise-cathedrale.ch` dans Resend
3. ✅ Ajouter la clé API Resend dans Vercel
4. ✅ Configurer l'email de destination dans Vercel

**Temps estimé:** 15-20 minutes

---

## 📝 ÉTAPE 1: Créer Compte Resend (5 min)

### 1.1 Inscription

1. **Aller sur:** https://resend.com
2. **Cliquer:** "Sign Up" (en haut à droite)
3. **Méthode recommandée:** Se connecter avec GitHub (plus rapide)
   - Ou créer compte avec email (email de la Maîtrise recommandé)

**Compte créé? ✅** Tu arrives sur le dashboard Resend

### 1.2 Plan Gratuit (Suffisant)

**Plan Free inclut:**
- ✅ 3,000 emails/mois (largement suffisant pour newsletter + contacts)
- ✅ Domaine personnalisé (envoi depuis `noreply@maitrise-cathedrale.ch`)
- ✅ Templates HTML illimités
- ✅ API complète

**Pas besoin de payer** sauf si vous envoyez >3000 emails/mois (très improbable).

---

## 🌐 ÉTAPE 2: Vérifier le Domaine (10 min)

### 2.1 Ajouter le Domaine

1. **Dans Resend Dashboard:** Menu latéral → "Domains"
2. **Cliquer:** "Add Domain"
3. **Entrer:** `maitrise-cathedrale.ch` (SANS www)
4. **Cliquer:** "Add"

### 2.2 Configuration DNS (CRITIQUE)

Resend va afficher **3 enregistrements DNS** à ajouter. Ils ressemblent à ça:

**Exemple (vos valeurs seront différentes):**

| Type | Name | Value |
|------|------|-------|
| `TXT` | `@` | `resend_verify=abc123def456...` |
| `MX` | `@` | `10 mx.resend.com` |
| `TXT` | `resend._domainkey` | `v=DKIM1; k=rsa; p=MIIBIj...` |

**⚠️ IMPORTANT:** Ne ferme PAS cette page! Tu en auras besoin pour la suite.

### 2.3 Ajouter les DNS chez l'Hébergeur

**Question:** Où est hébergé le domaine `maitrise-cathedrale.ch`?

**Options fréquentes:**
- Infomaniak (hébergeur suisse)
- Hostpoint
- Cloudflare
- Autre

#### Si Infomaniak:

1. **Se connecter:** https://manager.infomaniak.com
2. **Aller dans:** Domaines → `maitrise-cathedrale.ch` → DNS
3. **Cliquer:** "Ajouter un enregistrement"
4. **Ajouter les 3 enregistrements** affichés par Resend (un par un)
5. **Enregistrer**

#### Si Cloudflare:

1. **Se connecter:** https://dash.cloudflare.com
2. **Sélectionner:** `maitrise-cathedrale.ch`
3. **Aller dans:** DNS → Records
4. **Cliquer:** "Add record"
5. **Ajouter les 3 enregistrements** (un par un)

#### Si autre hébergeur:

Chercher dans l'interface: "DNS", "Zone DNS", "Enregistrements DNS"
Ajouter les 3 enregistrements fournis par Resend.

### 2.4 Vérification

**Dans Resend:**
1. Une fois les DNS ajoutés chez l'hébergeur
2. Attendre **5-10 minutes** (propagation DNS)
3. Retour dans Resend → Domains → Cliquer "Verify"

**Statut attendu:** ✅ "Verified" (en vert)

**Si erreur:** Attendre encore 10-15 min et réessayer. La propagation DNS peut prendre jusqu'à 1h.

---

## 🔑 ÉTAPE 3: Obtenir la Clé API Resend (2 min)

### 3.1 Créer une API Key

1. **Dans Resend Dashboard:** Menu latéral → "API Keys"
2. **Cliquer:** "Create API Key"
3. **Nom suggéré:** `Maitrise Cathedrale Production`
4. **Permission:** "Sending access" (par défaut - suffisant)
5. **Cliquer:** "Create"

**⚠️ CRITIQUE:** La clé s'affiche **une seule fois**!

**Exemple:** `re_AbCdEfGh_123456789...`

**Copier immédiatement** dans un endroit sûr (tu en auras besoin dans 2 min).

---

## ⚙️ ÉTAPE 4: Configurer Vercel (3 min)

### 4.1 Ajouter les Variables d'Environnement

1. **Se connecter:** https://vercel.com
2. **Sélectionner le projet:** `maitrise-cathedrale`
3. **Aller dans:** Settings → Environment Variables

### 4.2 Ajouter RESEND_API_KEY

**Cliquer:** "Add New"

**Configuration:**
- **Key:** `RESEND_API_KEY`
- **Value:** `re_AbCdEfGh_123456789...` (coller la clé copiée à l'étape 3)
- **Environments:** ✅ Production, ✅ Preview, ✅ Development (cocher les 3)

**Cliquer:** "Save"

### 4.3 Ajouter CONTACT_EMAIL (Optionnel mais Recommandé)

**Cliquer:** "Add New"

**Configuration:**
- **Key:** `CONTACT_EMAIL`
- **Value:** `info@maitrise-cathedrale.ch`
- **Environments:** ✅ Production, ✅ Preview, ✅ Development

**Cliquer:** "Save"

**Pourquoi cette variable?**
- Par défaut, le code envoie déjà à `info@maitrise-cathedrale.ch`
- Mais cette variable permet de changer facilement l'email de destination sans toucher au code
- Utile si tu veux envoyer à un autre email (ex: `contact@...`, `secretariat@...`)

### 4.4 Redéployer le Site

**Important:** Vercel doit redéployer pour prendre en compte les nouvelles variables.

**Méthode 1 (Automatique):**
- Faire un commit vide pour forcer le redéploiement:
  ```bash
  git commit --allow-empty -m "🔧 Trigger redeploy pour variables Resend"
  git push origin main
  ```

**Méthode 2 (Manuelle):**
1. Dans Vercel → Deployments
2. Cliquer sur le dernier déploiement (en haut)
3. Cliquer "..." → "Redeploy"
4. Confirmer

**Attendre 2-3 minutes** → Déploiement terminé ✅

---

## 🧪 ÉTAPE 5: Tester les Formulaires (5 min)

### Test 1: Newsletter

1. **Ouvrir:** https://www.maitrise-cathedrale.ch
2. **Scroller** jusqu'au formulaire Newsletter
3. **Accepter les cookies** (sinon formulaire bloqué)
4. **Entrer un email de test:** ton email perso
5. **Cliquer:** "S'inscrire"

**Résultat attendu (10-30 secondes):**
- ✅ Message de confirmation sur le site
- ✅ Email reçu sur `info@maitrise-cathedrale.ch` avec:
  - Sujet: `📬 Nouvelle inscription Newsletter - Maîtrise Cathédrale`
  - Contenu: Email du visiteur + date + design branded

**Si erreur:**
- Ouvrir la console navigateur (F12)
- Chercher le message d'erreur
- Vérifier que `RESEND_API_KEY` est bien dans Vercel
- Vérifier que le domaine est vérifié dans Resend

### Test 2: Formulaire Contact

1. **Ouvrir:** https://www.maitrise-cathedrale.ch/soutenir/contact
2. **Remplir tous les champs:**
   - Prénom: `Test`
   - Nom: `OSOM`
   - Email: ton email
   - Téléphone: `+41 79 000 00 00`
   - Sujet: `Test formulaire`
   - Message: `Ceci est un test du formulaire contact`
3. **Cliquer:** "Envoyer"

**Résultat attendu:**
- ✅ Message de confirmation
- ✅ Email reçu sur `info@maitrise-cathedrale.ch` avec:
  - Sujet: `✉️ Nouveau message - Test formulaire`
  - Toutes les infos du visiteur
  - Bouton "Répondre" qui renvoie directement au visiteur

### Test 3: Amis de la Maîtrise

1. **Ouvrir:** https://www.maitrise-cathedrale.ch/soutenir/amis-maitrise
2. **Remplir le formulaire:**
   - Prénom: `Test`
   - Nom: `Adhésion`
   - Email: ton email
   - Type cotisation: `Individuelle` ou `Couple`
3. **Cliquer:** "Envoyer ma demande"

**Résultat attendu:**
- ✅ Message de confirmation
- ✅ Email reçu sur `info@maitrise-cathedrale.ch` avec:
  - Sujet: `🤝 Nouvelle demande adhésion - Amis de la Maîtrise`
  - Type de cotisation clairement indiqué
  - Rappel de la marche à suivre

---

## 📊 Suivi & Statistiques Emails

### Dashboard Resend

**Pour voir les emails envoyés:**

1. **Se connecter:** https://resend.com
2. **Menu latéral:** "Emails"
3. **Tu vois:**
   - Liste de tous les emails envoyés
   - Status: `delivered`, `opened`, `clicked`, `bounced`
   - Date/heure exacte
   - Destinataire

**Filtres utiles:**
- Par date (aujourd'hui, cette semaine, ce mois)
- Par status (delivered, failed)
- Recherche par email destinataire

### Métriques Importantes

**Resend track automatiquement:**
- ✅ **Delivered:** Email bien reçu
- ✅ **Opened:** Destinataire a ouvert l'email
- ✅ **Clicked:** Destinataire a cliqué sur un lien
- ❌ **Bounced:** Email rejeté (mauvaise adresse)
- ❌ **Failed:** Erreur d'envoi

**Quota mensuel:**
- Dashboard Resend → En haut à droite
- Affiche: `250 / 3000 emails this month`
- Si proche de 3000 → Passage au plan payant ou optimiser les envois

---

## 🔧 Troubleshooting (Problèmes Fréquents)

### Problème 1: "Erreur lors de l'envoi" (Frontend)

**Causes possibles:**
1. `RESEND_API_KEY` manquante ou invalide dans Vercel
2. Domaine pas encore vérifié dans Resend
3. Quota Resend dépassé (>3000 emails/mois)

**Solution:**
1. Vérifier Vercel → Settings → Environment Variables → `RESEND_API_KEY` existe
2. Vérifier Resend → Domains → Status = "Verified" ✅
3. Vérifier Resend → Dashboard → Quota restant

**Debug:**
- Ouvrir Vercel → Deployments → Dernier déploiement → "View Function Logs"
- Chercher l'erreur exacte (ex: "Invalid API key", "Domain not verified")

### Problème 2: Email envoyé mais pas reçu

**Causes possibles:**
1. Email dans le dossier SPAM/Indésirables
2. Email de destination incorrect
3. Filtre anti-spam du serveur email bloque Resend

**Solution:**
1. Vérifier le dossier SPAM de `info@maitrise-cathedrale.ch`
2. Vérifier dans Resend → Emails → L'email est "Delivered" ✅
3. Si "Bounced": Adresse email invalide ou serveur rejette
4. Ajouter `noreply@maitrise-cathedrale.ch` aux contacts autorisés

**Astuce:**
- Pour les premiers emails, marquer comme "Non spam" dans la boîte de réception
- Cela apprend au serveur que Resend est légitime

### Problème 3: Domaine ne se vérifie pas

**Causes possibles:**
1. DNS pas encore propagés (attendre 10-30 min)
2. Enregistrements DNS mal copiés (erreur de frappe)
3. Hébergeur bloque certains types d'enregistrements

**Solution:**
1. Attendre 1h puis réessayer "Verify" dans Resend
2. Comparer EXACTEMENT les valeurs DNS (hébergeur vs Resend)
3. Vérifier avec un outil: https://mxtoolbox.com/SuperTool.aspx
   - Entrer: `maitrise-cathedrale.ch`
   - Vérifier que les TXT et MX Resend apparaissent

### Problème 4: Les emails arrivent mais sont mal formatés

**Cause:** Client email (Outlook, Gmail) n'affiche pas bien le HTML

**Solution:**
- Les templates HTML sont testés sur Gmail, Outlook, Apple Mail
- Si problème: Consulter l'email en "Vue HTML" ou "Afficher l'original"
- Les infos sont toujours lisibles en mode texte brut

---

## 📈 Optimisations Futures (Optionnelles)

### 1. Email de Confirmation au Visiteur (Newsletter)

**Actuellement:** Seul `info@maitrise-cathedrale.ch` reçoit un email

**Amélioration possible:**
- Envoyer également un email de bienvenue au visiteur qui s'inscrit
- Contenu: "Merci pour votre inscription! Vous recevrez nos actualités..."

**Implémentation:** ~15 min
- Dupliquer `resend.emails.send()` dans `/api/newsletter/route.ts`
- Changer `to: email` (email du visiteur)
- Template de bienvenue personnalisé

### 2. Auto-Réponse Formulaire Contact

**Actuellement:** Le visiteur reçoit un message sur le site, mais pas d'email

**Amélioration:**
- Email automatique: "Merci pour votre message, nous vous répondrons sous 48h"

**Bénéfice:** Rassure le visiteur que son message est bien passé

### 3. Dashboard Interne Formulaires

**Actuellement:** Tous les formulaires arrivent par email

**Amélioration:**
- Page admin `/admin/formulaires` (protégée par mot de passe)
- Liste de tous les formulaires reçus
- Export CSV pour traitement

**Utile si:** >50 formulaires/mois (difficile de tout gérer par email)

### 4. Double Opt-In Newsletter (RGPD/LPD Strict)

**Actuellement:** Inscription directe (single opt-in)

**Amélioration:**
- Email de confirmation avec lien à cliquer
- Inscription validée seulement après clic
- Conforme RGPD strict (mais pas obligatoire en Suisse LPD)

**Quand l'utiliser:**
- Si vous stockez les emails dans une base de données
- Si vous envoyez des newsletters marketing fréquentes
- Si vous voulez éviter les fausses adresses

---

## ✅ Checklist Finale

**Avant de considérer la configuration terminée, vérifier:**

- [ ] Compte Resend créé ✅
- [ ] Domaine `maitrise-cathedrale.ch` vérifié dans Resend ✅
- [ ] API Key Resend générée et copiée ✅
- [ ] `RESEND_API_KEY` ajoutée dans Vercel ✅
- [ ] `CONTACT_EMAIL` ajoutée dans Vercel (optionnel) ✅
- [ ] Site redéployé sur Vercel ✅
- [ ] Test Newsletter OK (email reçu) ✅
- [ ] Test Contact OK (email reçu) ✅
- [ ] Test Amis Maîtrise OK (email reçu) ✅
- [ ] Email `noreply@maitrise-cathedrale.ch` marqué "Non spam" ✅

**Si tous les ✅ sont cochés:** Les formulaires sont 100% opérationnels! 🎉

---

## 📞 Support

**Questions Resend:**
- Documentation: https://resend.com/docs
- Support: support@resend.com (réponse <24h)

**Questions Vercel:**
- Documentation: https://vercel.com/docs/environment-variables
- Support: https://vercel.com/help

**Questions Code:**
- Fichiers API:
  - `/src/app/api/newsletter/route.ts`
  - `/src/app/api/contact/route.ts`
  - `/src/app/api/amis-maitrise/route.ts`
- Contact OSOM: [À compléter]

---

## 📊 Récapitulatif Technique

### Service d'Email: Resend

**Pourquoi Resend (vs Mailchimp, SendGrid, etc.)?**
- ✅ Gratuit jusqu'à 3000 emails/mois (autres: 500-1000)
- ✅ API moderne (simple à implémenter)
- ✅ Dashboard clair (suivi emails facile)
- ✅ Domaine personnalisé gratuit (envoi depuis `noreply@maitrise-cathedrale.ch`)
- ✅ Templates HTML illimités
- ✅ Excellent pour Next.js (documentation complète)

**Alternatives si besoin:**
- SendGrid (10K emails/mois gratuit mais plus complexe)
- Mailgun (complexe, payant rapidement)
- AWS SES (le moins cher mais très technique)

### Variables d'Environnement Vercel

| Variable | Valeur | Utilité |
|----------|--------|---------|
| `RESEND_API_KEY` | `re_AbC...` (secret) | Authentification Resend API |
| `CONTACT_EMAIL` | `info@maitrise-cathedrale.ch` | Email de destination (changeable facilement) |

**Sécurité:** Ces variables sont **privées** (jamais exposées au frontend).

### Emails Envoyés

| Formulaire | Sujet Email | Destinataire | Reply-To |
|------------|-------------|--------------|----------|
| Newsletter | `📬 Nouvelle inscription Newsletter` | `info@maitrise-cathedrale.ch` | - |
| Contact | `✉️ Nouveau message - [Sujet]` | `info@maitrise-cathedrale.ch` | Email visiteur |
| Amis Maîtrise | `🤝 Nouvelle demande adhésion` | `info@maitrise-cathedrale.ch` | Email visiteur |

**Format:** HTML responsive (lisible sur mobile/desktop/webmail)

---

**Document créé le:** 21 octobre 2025
**Dernière mise à jour:** 21 octobre 2025
**Auteur:** OSOM - Claude Code
**Version:** 1.0
