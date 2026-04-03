# Résilience 2060 — Dashboard France

Dashboard interactif d'analyse de la résilience environnementale des 96 départements métropolitains français à l'horizon 2060.

## Déploiement sur Vercel (5 minutes)

### Étape 1 — Uploader sur GitHub

1. Allez sur [github.com](https://github.com) → bouton **"+"** en haut à droite → **New repository**
2. Nom : `resilience2060`
3. Visibilité : **Public** ou Private (les deux fonctionnent avec Vercel)
4. Cliquez **Create repository**
5. Sur la page du repository vide, cliquez **"uploading an existing file"**
6. Glissez-déposez **tous les fichiers de ce dossier** (y compris les dossiers `pages/` et `public/`)
7. Cliquez **Commit changes**

### Étape 2 — Connecter à Vercel

1. Allez sur [vercel.com](https://vercel.com) → **Add New Project**
2. Sélectionnez votre repository `resilience2060`
3. Vercel détecte automatiquement Next.js → cliquez **Deploy** (ne changez rien)
4. Attendez ~60 secondes → votre app est en ligne !

### Étape 3 — Ajouter la clé API Anthropic (obligatoire)

Sans cette étape, les fiches détaillées ne se génèreront pas.

1. Dans votre projet Vercel → onglet **Settings** → **Environment Variables**
2. Cliquez **Add New**
   - **Name** : `ANTHROPIC_API_KEY`
   - **Value** : votre clé `sk-ant-api03-...` (depuis [console.anthropic.com](https://console.anthropic.com))
3. Cliquez **Save**
4. Allez dans l'onglet **Deployments** → cliquez les **3 points** sur le dernier déploiement → **Redeploy**

Votre dashboard est maintenant accessible à l'URL fournie par Vercel (ex: `resilience2060.vercel.app`).

---

## Structure du projet

```
resilience2060/
├── pages/
│   ├── _app.js          # App Next.js minimal
│   ├── index.js         # Redirection vers public/index.html
│   └── api/
│       └── fiche.js     # Proxy API Anthropic (clé côté serveur)
├── public/
│   ├── index.html       # Dashboard principal
│   └── departements.geojson  # Géométries des 96 départements
├── next.config.js
├── package.json
└── .gitignore
```

## Coût estimé

| Usage | Coût API Anthropic |
|-------|-------------------|
| 1 fiche générée | ~0,003€ |
| 100 utilisateurs × 6 fiches | ~1,80€ |
| Hébergement Vercel | 0€ (plan gratuit) |

## Domaine personnalisé (optionnel)

Dans Vercel → Settings → Domains → ajoutez votre domaine.
Vercel configure le SSL automatiquement.
