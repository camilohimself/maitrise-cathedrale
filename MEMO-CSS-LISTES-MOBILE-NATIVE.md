# 🎯 ASTUCE CSS: Listes natives mobile (vs ovales desktop)

**Date:** 24 novembre 2025
**Contexte:** Maîtrise Cathédrale - Refonte mobile page /maitrise
**Problème résolu:** Listes avec ovales 32px prenaient 100% écran mobile

---

## ❌ Problème initial

**Desktop (>768px):** Design riche avec cercles dorés 32px + SVG checkmarks
```jsx
<div className="programme-item" style={{
  display: 'flex',
  alignItems: 'center',
  gap: '16px'
}}>
  <div className="bullet-icon" style={{
    width: '32px',
    height: '32px',
    background: 'var(--color-gold)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <svg>...</svg>
  </div>
  <span>Item texte</span>
</div>
```

**Mobile (≤768px):** Ovales 32px + espacement = 4 items = 100% écran 🚫

---

## ✅ Solution: CSS listes natives

**Principe:** Ne pas "traduire" le desktop → Utiliser le CSS natif `list-style-type: disc`

### Code pattern (à réutiliser)

```jsx
// JSX Structure (inchangée)
<div className="programme-list" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
  {items.map((item, idx) => (
    <div key={idx} className="programme-item" style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
      <div className="bullet-icon" style={{
        width: '32px',
        height: '32px',
        background: 'var(--color-gold)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: '0'
      }}>
        <svg>...</svg>
      </div>
      <span className="programme-text">{item}</span>
    </div>
  ))}
</div>

// CSS Mobile (transformation radicale)
<style jsx>{`
  @media (max-width: 768px) {
    /* Liste CSS pure */
    .programme-list {
      display: block !important;
      padding-left: 20px !important;
      list-style-type: disc !important;
      margin: 0 !important;
    }

    /* Items = vrais <li> */
    .programme-item {
      display: list-item !important;
      margin-bottom: 8px !important;
      padding: 0 !important;
      background: transparent !important;
      border: none !important;
    }

    /* Masquer ovales desktop */
    .bullet-icon {
      display: none !important;
    }

    /* Texte épuré */
    .programme-text {
      display: inline !important;
      font-size: 15px !important;
      line-height: 1.76 !important;
      opacity: 0.95 !important;
      color: #ffffff !important;
    }

    /* Bullet doré natif */
    .programme-item::marker {
      color: var(--color-gold);
    }
  }
`}</style>
```

---

## 📊 Résultats

| Métrique | Desktop (ovales) | Mobile (natif) | Gain |
|----------|------------------|----------------|------|
| Hauteur 4 items | N/A | ~100px | -75% |
| Espace par item | ~32px circle + 16px gap | ~6px bullet + 8px gap | -70% |
| Code CSS | Design complexe | `list-style-type: disc` | Simplicité |

**Exemple concret (École Maîtrisienne):**
- **Avant:** 4 items = 100% écran mobile
- **Après:** 4 items = 25% écran mobile

---

## 🎨 Variations couleur background

### Fond sombre (navy)
```css
.programme-text {
  color: #ffffff !important;  /* Blanc */
}
```

### Fond clair (crème)
```css
.programme-text {
  color: #1a1340 !important;  /* Navy */
}
```

---

## 🔑 Points clés à retenir

1. **Ne pas adapter, transformer:** Mobile ≠ Desktop réduit
2. **CSS natif > Custom:** `list-style-type: disc` > 32px ovales
3. **`!important` obligatoire:** Override inline styles React
4. **`display: list-item`:** Active le `::marker` CSS
5. **`::marker` pour couleur:** Bullets dorés natifs
6. **Line-height généreux:** 1.76 pour lisibilité seniors 60+

---

## 📁 Fichiers modifiés (projet Maîtrise)

- `src/components/maitrise/EcoleSection.tsx`
- `src/components/maitrise/ChoeurGregorienSection.tsx`
- `src/components/maitrise/ChapelleMusicaleSection.tsx`

**Commit:** `385a5ea` - "📱 MOBILE MAITRISE: Refonte complète design listes"

---

## 💡 Cas d'usage futurs OSOM

**Appliquer cette technique quand:**
- ✅ Design desktop avec cercles/icônes décoratifs
- ✅ Liste textuelle simple (pas de metadata complexe)
- ✅ Public senior (60+) → Simplicité essentielle
- ✅ Mobile prend trop de place avec design desktop

**Ne PAS appliquer si:**
- ❌ Liste avec images/avatars (garder flex)
- ❌ Liste avec actions/boutons (garder structure)
- ❌ Design desktop minimaliste (déjà optimal)

---

## 🚀 Template réutilisable

```jsx
// 1. Structure JSX desktop (flex + cercles)
<div className="items-list">
  {items.map(item => (
    <div className="item">
      <div className="bullet-icon"><svg>...</svg></div>
      <span className="item-text">{item}</span>
    </div>
  ))}
</div>

// 2. CSS mobile natif
<style jsx>{`
  @media (max-width: 768px) {
    .items-list {
      display: block !important;
      padding-left: 20px !important;
      list-style-type: disc !important;
    }
    .item {
      display: list-item !important;
      margin-bottom: 8px !important;
    }
    .bullet-icon { display: none !important; }
    .item-text {
      font-size: 15px !important;
      line-height: 1.76 !important;
    }
    .item::marker { color: var(--color-gold); }
  }
`}</style>
```

---

**Créé par:** Agent Claude (Session 24 Nov 2025)
**Pour:** OSOM Agency - Agents futurs
**Statut:** ✅ Pattern validé en production
