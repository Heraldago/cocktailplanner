# 🍸 Cocktail Party Planner

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FHeraldago%2Fcocktailplanner)

> Web app interattiva e reattiva per pianificare cocktail party con calcolo matematico esatto della lista spesa in bottiglie reperibili in Italia (`Math.ceil`), stima del budget totale e a persona, utensili bar con alternative fai-da-te (DIY) e istruzioni step-by-step per singolo drink o caraffa (Batch Party).

---

## 🎨 Design & Interfaccia

L'applicazione è progettata seguendo i principi del **Costruttivismo Bauhaus**:
- **Palette Colori Primari**: Rosso (#D02020), Blu (#1040C0), Giallo (#F0C020), Nero profondo (#121212) e Grigio chiaro (#F0F0F0).
- **Tipografia Geometrica**: Font *Outfit* (Google Fonts) ad alto impatto visivo.
- **Bordi e Ombre Nette**: Spessi bordi neri da 4px e ombre geometriche rigide senza sfocature (`shadow-[6px_6px_0px_0px_#121212]`).

---

## 🚀 Funzionalità Principali

### 1. Database Ufficiale Completo (Oltre 70 Cocktail)
- **34 Cocktail IBA "The Unforgettables"** (Negroni, Manhattan, Old Fashioned, Dry Martini, Aviation, Boulevardier, Sazerac, Daiquiri, Alexander, White Lady, Ramos Fizz, ecc.).
- **34 Cocktail IBA "Contemporary Classics"** (Margarita, Mojito, Moscow Mule, Piña Colada, Pisco Sour, Caipirinha, Cosmopolitan, French 75, Irish Coffee, Zombie, Mai-Tai, Long Island, ecc.).
- **Aperitivi Italiani e Grandi Classici** (Aperol Spritz, Campari Spritz, Espresso Martini, Gin Tonic, Paloma, Dark 'n' Stormy).

### 2. Calcolo Matematico Spesa & Rimanenze
- **Arrotondamento per Eccesso (`Math.ceil`)**: Calcola quante bottiglie reali intere (700ml, 750ml, 1000ml, 200ml) o confezioni devi acquistare.
- **Stima Rimanenze**: Mostra esattamente quanti ml o quale percentuale della bottiglia ti rimarrà in dispensa.
- **Calcolo Ghiaccio**: Fabbisogno stimato (~0.18–0.22 kg a drink) convertito in sacchetti da 2kg del supermercato.

### 3. Calcolatore Budget & Quota per Ospite
- **Totale Spesa alla Cassa**: Costo stimato di tutte le bottiglie, ghiaccio e ingredienti freschi.
- **Quota per Persona**: Spesa divisa automaticamente per il numero di invitati (slider 1–30).
- **Costo Reale per Drink**: Costo effettivo del solo volume consumato.
- **Risparmio vs Cocktail Bar**: Confronto del risparmio rispetto alla consumazione al bar.
- **Brand Toggle**: Scelta tra fascia **Supermercato / Standard** ed **Enoteca / Premium**.

### 4. Utensili Bar & Alternative Fai-Da-Te (DIY)
- Mappatura intelligente da bar professionale a cucina di casa (es. Barattolo Bormioli $\rightarrow$ Shaker, Tazzina caffè $\rightarrow$ Jigger, Colino da tè $\rightarrow$ Strainer, Mattarello $\rightarrow$ Pestello).

### 5. Istruzioni Singolo & Caraffa (Batch Party)
- Guida passo-passo per il singolo drink espresso e modalità caraffa con aggiunta del **15% di acqua minerale per pre-diluizione** e abbattimento temperatura in freezer/frigorifero.

### 6. Condivisione Rapida su WhatsApp
- Pulsante *"Copia Lista & Budget"* con coriandoli interattivi che genera un messaggio formattato da incollare direttamente nella chat di gruppo.

---

## 🛠️ Stack Tecnologico

- **Frontend**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icone**: [Lucide React](https://lucide.dev/)
- **Effetti**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)

---

## 📦 Installazione e Avvio Locale

```bash
# Clona il repository
git clone https://github.com/Heraldago/cocktailplanner.git
cd cocktailplanner

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

Apri `http://localhost:5173/` nel tuo browser.

### Compilazione per la Produzione

```bash
npm run build
```

---

## 📄 Licenza

Distribuito sotto licenza MIT.
