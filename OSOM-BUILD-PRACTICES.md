# 🚀 OSOM - BONNES PRATIQUES BUILD PROJETS

## 📂 NOMMAGE DOSSIERS - LEÇONS APPRISES

### ❌ ERREURS À ÉVITER :
- **Dossiers imbriqués identiques** : `/PROJECT/project/`
- **Noms génériques** : `src/`, `app/`, `website/` 
- **Mode automatique sans réflexion**

### ✅ CONVENTIONS OSOM :
```
/NOM-PROJET/
├── 📁 assets/              # Design, docs, ressources
├── 📁 web-app/            # Code Next.js/React
└── 📁 mobile-app/         # Code mobile (si nécessaire)
```

**Alternative pour projets simples :**
```
/NOM-PROJET/
├── 📁 design-assets/      # Maquettes, logos, docs
└── 📁 site/              # Code web
```

## 🧠 PROCESS MENTAL OPTIMISÉ

### AVANT DE CRÉER UN PROJET :
1. **🤔 Réfléchir** : Où suis-je ? Qu'est-ce qui existe ?
2. **📝 Nommer explicitement** : `web-app`, `site`, `frontend`
3. **✅ Vérifier** : `ls -la` pour voir la structure
4. **📋 Documenter** : Créer le guide immédiatement

### AGENTS SPÉCIALISÉS EFFICACES :
- **🎨 Agent Branding** : Analyse couleurs/identité
- **🔍 Agent Scanner** : Analyse maquettes/screenshots  
- **🏗️ Agent Architecture** : Structure technique
- **🧹 Agent Cleanup** : Nettoyage et organisation

## 💡 OPTIMISATIONS FUTURES

### STRUCTURE PROJET TYPE :
```
/CLIENT-PROJET/
├── 📁 brief-client/       # Cahier charges, docs initiaux
├── 📁 design-system/      # Charte, maquettes, assets
├── 📁 content/           # Textes, photos, vidéos
└── 📁 web-platform/      # Code technique
    ├── .git/
    ├── src/
    ├── public/
    └── CLAUDE.md
```

### CHECKLIST DÉMARRAGE PROJET :
- [ ] Structure dossiers claire et explicite
- [ ] Guide CLAUDE.md avec chemins exacts
- [ ] Convention nommage définie
- [ ] Repository Git dans le bon dossier
- [ ] Configuration déploiement (Vercel/autres)

## 🎯 RÈGLES D'OR OSOM

1. **NOMS EXPLICITES** : Toujours préférer `web-app` à `app`
2. **ÉVITER DOUBLONS** : Si parent = "PROJECT", enfant ≠ "project"  
3. **DOCUMENTER IMMÉDIATEMENT** : Structure dans CLAUDE.md
4. **VÉRIFIER CONTEXTE** : `pwd` et `ls` avant création
5. **PENSER ÉQUIPE** : Quelqu'un qui arrive doit comprendre

---

*Généré lors du build Maîtrise Cathédrale - Session FAS 9 sept 2025*