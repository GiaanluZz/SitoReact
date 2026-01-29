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


Sviluppato per esercizio didattico e per appassionati di Yu-Gi-Oh!

