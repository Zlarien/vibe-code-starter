# Vibe Code Starter

Generate a **production-ready prompt** from a one-sentence app idea, plus:
- recommended stack,
- ordered implementation steps,
- monetization blueprint (**free with ads / €7 per month Pro**).

This starter is built for **beginner vibe coders** using tools like Cursor, Lovable, or Bolt.

## Features actually implemented

- One-line idea input (CLI)
- Prompt generation tuned for Cursor/Lovable/Bolt
- Stack recommendation based on project intent keywords
- Ordered execution plan (from MVP definition to deployment)
- Monetization model embedded in output
- Automated tests (`node:test`)

## Quick start

### Requirements
- Node.js 20+

### Install
```bash
npm install
```

### Run
```bash
npm start -- "An app that helps freelancers send invoices automatically"
```

You get a JSON payload containing:
- `perfectPrompt`
- `recommendedStack`
- `orderedSteps`
- `monetization`

## Test tutorial (A to Z)

1. Install dependencies
   ```bash
   npm install
   ```
2. Run test suite
   ```bash
   npm test
   ```
3. Expected result:
   - 2 tests pass
   - 0 failures
4. Manual validation (CLI)
   ```bash
   npm start -- "A community app for beginner coders"
   ```
5. Confirm output includes:
   - an actionable `perfectPrompt`
   - at least 5 stack items
   - ordered steps
   - free/pro monetization details

## Project structure

```text
.
├── src/
│   ├── index.js      # Core generation logic
│   └── cli.js        # CLI entrypoint
├── test/
│   └── generator.test.js
├── .gitignore
├── package.json
└── README.md
```

---

## 🇫🇷 Section française (README FR dans le README global EN)

### Objectif
Transformer une phrase décrivant une app en:
- un prompt très exploitable pour Cursor/Lovable/Bolt,
- une stack recommandée,
- des étapes dans le bon ordre,
- un plan de monétisation (gratuit avec pub, pro à 7€/mois).

### Lancer le projet
```bash
npm install
npm start -- "Une app qui aide les étudiants à réviser avec des quiz"
```

### Tester rapidement
```bash
npm test
```

Résultat attendu: tous les tests passent.

### Ce qui est réellement codé
- Génération du prompt final
- Recommandation de stack selon le type d’idée
- Étapes d’implémentation ordonnées
- Bloc monétisation Free/Pro
- Tests automatisés

## Notes

- This starter is intentionally lightweight and framework-agnostic at runtime (plain Node.js).
- You can wrap `generateVibeStarter()` into an API (Express/Fastify/Next route) as a next step.
