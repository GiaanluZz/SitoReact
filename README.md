# Yu-Gi-Oh! Carte - Archivio Web App

Questa applicazione web permette di esplorare, cercare e visualizzare le carte Yu-Gi-Oh! rilasciate tra il 2000 e il 2002. È stata realizzata in React + TypeScript e utilizza Vite per il build system.

## Funzionalità principali

- **Registrazione e Login**: Accesso tramite form di registrazione e autenticazione utente.
- **Archivio Carte**: Visualizzazione di tutte le carte Yu-Gi-Oh! del periodo selezionato, con ricerca per nome.
- **Dettaglio Carta**: Pagina dedicata con tutte le informazioni e l'immagine della carta selezionata.
- **Profilo Utente**: Gestione del profilo personale.
- **Navigazione protetta**: Alcune pagine sono accessibili solo dopo il login.
- **Design Responsive**: Interfaccia moderna e adattabile a dispositivi mobili.

## Struttura del progetto

- `src/core/Carte.ts`: Tipi TypeScript per le carte (ICarte, TCarte)
- `src/pages/`: Tutte le pagine principali (Home, Login, Registrazione, Archivio, Dettaglio, Profilo, ecc.)
- `src/components/`: Componenti riutilizzabili (Header, ListaCarte, ecc.)
- `src/utils/`: Utility e route protette

## Come avviare il progetto

1. Installa le dipendenze:
   ```bash
   npm install
   ```
2. Avvia il server di sviluppo:
   ```bash
   npm run dev
   ```
3. Apri il browser su `http://localhost:5173` (o la porta indicata da Vite)

## Dipendenze principali
- React
- React Router DOM
- TypeScript
- Vite
- @tanstack/react-query

## Note aggiuntive
- Il logo e le immagini delle carte sono forniti tramite API pubbliche e asset locali.
- Il codice è organizzato per favorire la leggibilità e la scalabilità.

---

Sviluppato per esercizio didattico e per appassionati di Yu-Gi-Oh!
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
