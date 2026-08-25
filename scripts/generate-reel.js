import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

// Self-contained cocktail dataset and calculations for automatic video generation
const COCKTAILS_DATA = [
  {
    id: 'negroni',
    name: 'Negroni',
    tagline: 'L\'icona dell\'aperitivo italiano con Gin, Campari e Vermouth Rosso.',
    ingredients: [
      { name: 'Gin Tanqueray', amount: 30, bottleSize: 700, price: 14.90 },
      { name: 'Campari Bitter', amount: 30, bottleSize: 1000, price: 16.50 },
      { name: 'Vermouth Rosso (Martini/Carpano)', amount: 30, bottleSize: 750, price: 9.90 },
    ],
  },
  {
    id: 'aperol-spritz',
    name: 'Aperol Spritz',
    tagline: 'Il re indiscusso dell\'aperitivo italiano con Prosecco, Aperol e Soda.',
    ingredients: [
      { name: 'Prosecco DOC', amount: 90, bottleSize: 750, price: 6.90 },
      { name: 'Aperol', amount: 60, bottleSize: 1000, price: 13.90 },
      { name: 'Soda / Acqua Frizzante', amount: 30, bottleSize: 1000, price: 0.80 },
    ],
  },
  {
    id: 'margarita',
    name: 'Margarita',
    tagline: 'Il cocktail messicano a base di Tequila, Triple Sec e Succo di Lime.',
    ingredients: [
      { name: 'Tequila Blanco (Jose Cuervo/Espolòn)', amount: 50, bottleSize: 700, price: 17.50 },
      { name: 'Triple Sec / Cointreau', amount: 20, bottleSize: 700, price: 14.90 },
      { name: 'Succo di Lime Fresco', amount: 15, bottleSize: 500, price: 2.50 },
    ],
  },
  {
    id: 'mojito',
    name: 'Mojito',
    tagline: 'Fresco e aromatico con Rum Bianco, Menta, Lime e Zucchero di Canna.',
    ingredients: [
      { name: 'Rum Bianco (Havana 3 / Bacardi)', amount: 45, bottleSize: 700, price: 13.90 },
      { name: 'Succo di Lime & Zucchero', amount: 20, bottleSize: 500, price: 2.00 },
      { name: 'Soda / Seltz', amount: 50, bottleSize: 1000, price: 0.80 },
    ],
  },
  {
    id: 'gin-tonic',
    name: 'Gin Tonic',
    tagline: 'Il long drink per eccellenza: Gin botanico, Acqua Tonica e ghiaccio a volontà.',
    ingredients: [
      { name: 'Gin Tanqueray / Bombay', amount: 50, bottleSize: 700, price: 15.50 },
      { name: 'Acqua Tonica (Schweppes / Fever-Tree)', amount: 150, bottleSize: 1000, price: 3.50 },
    ],
  },
];

function calculateParty(cocktail, guests = 10, drinksPerPerson = 2) {
  const totalDrinks = guests * drinksPerPerson;
  
  const shoppingItems = cocktail.ingredients.map(ing => {
    const totalMlNeeded = ing.amount * totalDrinks;
    const bottlesToBuy = Math.ceil(totalMlNeeded / ing.bottleSize);
    const totalItemCost = bottlesToBuy * ing.price;
    return {
      name: ing.name,
      neededMl: totalMlNeeded,
      bottleSize: ing.bottleSize,
      bottlesToBuy,
      unitPrice: ing.price,
      totalCost: totalItemCost,
    };
  });

  const iceBags = Math.ceil((totalDrinks * 0.18) / 2);
  const iceCost = iceBags * 2.00;

  const totalCost = shoppingItems.reduce((acc, item) => acc + item.totalCost, 0) + iceCost;
  const costPerPerson = totalCost / guests;
  const barEstimate = totalDrinks * 8.00; // ~8€ per drink in a bar
  const savings = Math.max(0, barEstimate - totalCost);

  return {
    cocktail,
    guests,
    drinksPerPerson,
    totalDrinks,
    shoppingItems,
    iceBags,
    iceCost,
    totalCost,
    costPerPerson,
    savings,
  };
}

function getSlideHtml(slideType, data) {
  const { cocktail, guests, totalDrinks, shoppingItems, iceBags, totalCost, costPerPerson, savings } = data;

  return `
<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@800;900&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap');

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      width: 1080px;
      height: 1920px;
      background-color: #F0F0F0;
      font-family: 'Plus Jakarta Sans', sans-serif;
      color: #121212;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 90px 70px;
    }

    /* Bauhaus Dot Grid Background */
    .dots-bg {
      position: absolute;
      inset: 0;
      background-image: radial-gradient(#121212 1.5px, transparent 1.5px);
      background-size: 24px 24px;
      opacity: 0.12;
      pointer-events: none;
    }

    /* Top Brand Header */
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 6px solid #121212;
      padding-bottom: 30px;
      z-index: 10;
    }

    .brand-title {
      font-family: 'Cabinet Grotesk', sans-serif;
      font-size: 40px;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: -1px;
    }

    .bauhaus-badge {
      background: #F0C020;
      border: 4px solid #121212;
      padding: 8px 18px;
      font-weight: 900;
      font-size: 22px;
      text-transform: uppercase;
      box-shadow: 4px 4px 0px #121212;
    }

    /* Card Box */
    .main-card {
      background: #FFFFFF;
      border: 8px solid #121212;
      box-shadow: 16px 16px 0px #121212;
      padding: 60px 50px;
      display: flex;
      flex-direction: column;
      gap: 36px;
      z-index: 10;
    }

    .hook-tag {
      display: inline-block;
      align-self: flex-start;
      background: #D02020;
      color: white;
      font-weight: 900;
      font-size: 28px;
      text-transform: uppercase;
      padding: 10px 24px;
      border: 4px solid #121212;
      box-shadow: 6px 6px 0px #121212;
      transform: rotate(-1.5deg);
    }

    .main-title {
      font-family: 'Cabinet Grotesk', sans-serif;
      font-size: 68px;
      font-weight: 900;
      text-transform: uppercase;
      line-height: 1.05;
      letter-spacing: -2px;
    }

    .highlight-yellow {
      background: #F0C020;
      padding: 0 12px;
      border: 3px solid #121212;
      display: inline-block;
    }

    /* Shopping Items Grid */
    .items-list {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .item-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #F8F8F8;
      border: 4px solid #121212;
      padding: 22px 28px;
      box-shadow: 6px 6px 0px #121212;
    }

    .item-name {
      font-size: 32px;
      font-weight: 800;
      text-transform: uppercase;
    }

    .item-qty {
      font-size: 30px;
      font-weight: 900;
      color: #1040C0;
      background: #E8EEFF;
      padding: 6px 16px;
      border: 3px solid #121212;
    }

    .item-price {
      font-size: 32px;
      font-weight: 900;
      color: #121212;
    }

    /* KPI Summary Box */
    .kpi-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
    }

    .kpi-box {
      background: #1040C0;
      color: white;
      border: 6px solid #121212;
      box-shadow: 8px 8px 0px #121212;
      padding: 36px 30px;
      text-align: center;
    }

    .kpi-box.yellow {
      background: #F0C020;
      color: #121212;
    }

    .kpi-label {
      font-size: 24px;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 12px;
      opacity: 0.9;
    }

    .kpi-val {
      font-family: 'Cabinet Grotesk', sans-serif;
      font-size: 64px;
      font-weight: 900;
      line-height: 1;
    }

    .savings-badge {
      background: #00B050;
      color: white;
      border: 5px solid #121212;
      box-shadow: 6px 6px 0px #121212;
      padding: 24px;
      text-align: center;
      font-size: 36px;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: -0.5px;
    }

    /* Footer CTA */
    .footer-cta {
      background: #121212;
      color: white;
      border: 6px solid #121212;
      box-shadow: 10px 10px 0px #F0C020;
      padding: 40px;
      text-align: center;
      z-index: 10;
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .cta-text {
      font-family: 'Cabinet Grotesk', sans-serif;
      font-size: 42px;
      font-weight: 900;
      text-transform: uppercase;
      color: #F0C020;
    }

    .cta-sub {
      font-size: 26px;
      font-weight: 700;
      color: white;
    }
  </style>
</head>
<body>
  <div class="dots-bg"></div>

  <!-- Header -->
  <div class="header">
    <div class="brand-title">🍸 Cocktail Party Planner</div>
    <div class="bauhaus-badge">Party Math #01</div>
  </div>

  <!-- Main Content Card -->
  <div class="main-card">
    <div class="hook-tag">Budget & Spesa Esatta</div>

    <div class="main-title">
      FESTA A <span class="highlight-yellow">${cocktail.name.toUpperCase()}</span> PER ${guests} PERSONE?
    </div>

    <!-- Items List -->
    <div class="items-list">
      ${shoppingItems.map(item => `
        <div class="item-row">
          <div class="item-name">${item.name}</div>
          <div class="item-qty">${item.bottlesToBuy}x (${item.bottleSize}ml)</div>
          <div class="item-price">~€ ${item.totalCost.toFixed(2)}</div>
        </div>
      `).join('')}

      <div class="item-row">
        <div class="item-name">🧊 Ghiaccio a Cubetti</div>
        <div class="item-qty">${iceBags}x Sacchi da 2kg</div>
        <div class="item-price">~€ ${(iceBags * 2).toFixed(2)}</div>
      </div>
    </div>

    <!-- KPI Box -->
    <div class="kpi-container">
      <div class="kpi-box">
        <div class="kpi-label">Totale Cassa</div>
        <div class="kpi-val">€ ${totalCost.toFixed(2)}</div>
      </div>
      <div class="kpi-box yellow">
        <div class="kpi-label">Quota a Persona</div>
        <div class="kpi-val">€ ${costPerPerson.toFixed(2)}</div>
      </div>
    </div>

    <!-- Savings Bar -->
    <div class="savings-badge">
      🎉 Risparmiate oltre € ${savings.toFixed(0)} vs cocktail bar!
    </div>
  </div>

  <!-- Footer CTA -->
  <div class="footer-cta">
    <div class="cta-text">👉 Calcola la spesa gratis per 74 cocktail</div>
    <div class="cta-sub">cocktailplanner.vercel.app • Link in bio!</div>
  </div>
</body>
</html>
  `;
}

async function run() {
  console.log('🚀 Avvio del generatore automatico di Reel / TikTok in stile Bauhaus...');
  
  const outputDir = path.resolve(process.cwd(), 'output/reels');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({
    width: 1080,
    height: 1920,
    deviceScaleFactor: 1,
  });

  // Generate Reel slide for each featured cocktail
  for (const cocktail of COCKTAILS_DATA) {
    const data = calculateParty(cocktail, 10, 2);
    const html = getSlideHtml('storyboard', data);

    await page.setContent(html, { waitUntil: 'networkidle0' });

    const fileName = `reel-${cocktail.id}-10-persone.png`;
    const filePath = path.join(outputDir, fileName);
    
    await page.screenshot({
      path: filePath,
      type: 'png',
    });

    console.log(`✅ Generato Reel per ${cocktail.name}: ${filePath}`);
  }

  await browser.close();
  console.log(`\n🎉 Completato! Tutti i Reel/TikTok sono stati salvati in: ${outputDir}`);
}

run().catch(console.error);
