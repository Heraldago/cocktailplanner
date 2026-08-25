import { Cocktail, EquipmentItem, Ingredient, Instructions } from '../types/cocktail';
import { Language } from '../i18n/translations';
import { COCKTAIL_METAS, getLocalizedCategory, getLocalizedFlavorProfile } from '../i18n/cocktailDescriptions';
import { lookupIngredientTranslation } from '../i18n/ingredientTranslations';

// 1. Localized Ingredient Name & Brand Notes
export function getLocalizedIngredientName(name: string, lang: Language): string {
  return lookupIngredientTranslation(name, lang);
}

function getLocalizedBrandNotes(notes: string, lang: Language): string {
  if (lang === 'it') return notes;

  const lower = notes.toLowerCase();
  if (lower.includes('ben freddo') || lower.includes('frigorifero')) {
    if (lang === 'en') return 'Serve well chilled straight from the refrigerator';
    if (lang === 'es') return 'Servir muy frío directamente del frigorífico';
    if (lang === 'fr') return 'Servir très frais directement du réfrigérateur';
    if (lang === 'pt') return 'Servir bem gelado direto da geladeira';
    if (lang === 'de') return 'Gut gekühlt direkt aus dem Kühlschrank servieren';
  }
  if (lower.includes('bitter arancione') || lower.includes('11%')) {
    if (lang === 'en') return 'The quintessential Italian orange aperitif (11% ABV)';
    if (lang === 'es') return 'El aperitivo amargo de naranja italiano por excelencia (11% ABV)';
    if (lang === 'fr') return 'L\'apéritif amer à l\'orange emblématique d\'Italie (11% ABV)';
    if (lang === 'pt') return 'O aperitivo amargo de laranja clássico da Itália (11% ABV)';
    if (lang === 'de') return 'Der klassische italienische Orangen-Aperitif (11% Vol.)';
  }
  if (lower.includes('perlage') || lower.includes('allungare')) {
    if (lang === 'en') return 'Adds crisp effervescence and lively bubbles';
    if (lang === 'es') return 'Aporta una burbuja fina y refrescante';
    if (lang === 'fr') return 'Apporte des bulles vives et une fraîcheur éclatante';
    if (lang === 'pt') return 'Adiciona bolhas vivas e frescor';
    if (lang === 'de') return 'Sorgt für feine Kohlensäure und lebendiges Perlen';
  }
  if (lower.includes('freschissim') || lower.includes('spremut')) {
    if (lang === 'en') return 'Use fresh citrus squeezed right before preparation';
    if (lang === 'es') return 'Usar cítricos frescos recién exprimidos';
    if (lang === 'fr') return 'Utiliser des agrumes frais pressés à la minute';
    if (lang === 'pt') return 'Usar frutas frescas espremidas na hora';
    if (lang === 'de') return 'Frisch gepresster Zitrussaft für optimales Aroma';
  }

  return notes;
}

// 2. Localized Glassware mapping
export function getLocalizedGlass(glassName: string, lang: Language): string {
  if (lang === 'it') return glassName;

  const lower = glassName.toLowerCase();
  
  if (lower.includes('tumbler basso') || lower.includes('old fashioned') || lower.includes('rocks') || lower.includes('lowball')) {
    const map: Record<Language, string> = {
      en: 'Old Fashioned Glass (Rocks)',
      it: 'Tumbler Basso (Old Fashioned)',
      es: 'Vaso Bajo (Old Fashioned / Rocks)',
      fr: 'Verre Old Fashioned (Tumbler Bas)',
      pt: 'Copo Baixo (Old Fashioned / Rocks)',
      de: 'Tumbler (Old Fashioned Glas)',
    };
    return map[lang] || map.en;
  }

  if (lower.includes('coppa') || lower.includes('martini') || lower.includes('coupe')) {
    const map: Record<Language, string> = {
      en: 'Cocktail Glass (Coupe / Martini)',
      it: 'Coppa Cocktail (Coppetta Martini)',
      es: 'Copa de Cóctel (Copa Martini)',
      fr: 'Coupe à Cocktail (Verre à Martini)',
      pt: 'Taça de Coquetel (Taça Martini)',
      de: 'Cocktailglas (Martini-Schale)',
    };
    return map[lang] || map.en;
  }

  if (lower.includes('calice') || lower.includes('spritz') || lower.includes('vino') || lower.includes('wine')) {
    const map: Record<Language, string> = {
      en: 'Large Wine Glass / Spritz Goblet',
      it: 'Calice da Vino / Calice Spritz',
      es: 'Copa Grande de Vino / Copa Spritz',
      fr: 'Grand Verre à Vin / Verre Spritz',
      pt: 'Taça de Vinho Grande / Taça Spritz',
      de: 'Großes Weinglas / Spritz-Glas',
    };
    return map[lang] || map.en;
  }

  if (lower.includes('highball') || lower.includes('tumbler alto') || lower.includes('collins')) {
    const map: Record<Language, string> = {
      en: 'Highball Glass (Tall Tumbler)',
      it: 'Highball / Tumbler Alto',
      es: 'Vaso Alto (Highball / Collins)',
      fr: 'Verre Highball (Tumbler Haut)',
      pt: 'Copo Alto (Highball / Collins)',
      de: 'Highball-Glas (Longdrinkglas)',
    };
    return map[lang] || map.en;
  }

  if (lower.includes('flute') || lower.includes('flûte') || lower.includes('champagne')) {
    const map: Record<Language, string> = {
      en: 'Champagne Flute',
      it: 'Flûte da Champagne',
      es: 'Copa Flauta de Champán',
      fr: 'Flûte à Champagne',
      pt: 'Taça Flauta de Espumante',
      de: 'Sektflöte / Champagnerflöte',
    };
    return map[lang] || map.en;
  }

  if (lower.includes('rame') || lower.includes('mug') || lower.includes('mule')) {
    const map: Record<Language, string> = {
      en: 'Copper Mug (Moscow Mule)',
      it: 'Tazza in Rame (Moscow Mule)',
      es: 'Taza de Cobre (Mule Mug)',
      fr: 'Tasse en Cuivre (Moscow Mule)',
      pt: 'Caneca de Cobre (Moscow Mule)',
      de: 'Kupferbecher (Mule Mug)',
    };
    return map[lang] || map.en;
  }

  if (lower.includes('hurricane') || lower.includes('tiki')) {
    const map: Record<Language, string> = {
      en: 'Hurricane / Tiki Glass',
      it: 'Bicchiere Hurricane / Tiki',
      es: 'Vaso Hurricane / Tiki',
      fr: 'Verre Hurricane / Tiki',
      pt: 'Copo Hurricane / Tiki',
      de: 'Hurricane-Glas / Tiki-Becher',
    };
    return map[lang] || map.en;
  }

  return glassName;
}

// 3. Localized Bar Techniques
export function getLocalizedTechnique(technique: string, lang: Language): string {
  if (lang === 'it') return technique;

  const lower = technique.toLowerCase();

  if (lower.includes('build') || lower.includes('direttamente')) {
    const map: Record<Language, string> = {
      en: 'Build (Directly in glass over ice)',
      it: 'Build (Direttamente nel bicchiere su cubetti di ghiaccio)',
      es: 'Build (Directo en el vaso sobre hielo)',
      fr: 'Build (Directement dans le verre sur glaçons)',
      pt: 'Build (Direto no copo com cubos de gelo)',
      de: 'Build (Direkt im Glas auf Eiswürfeln gebaut)',
    };
    return map[lang] || map.en;
  }

  if (lower.includes('shake')) {
    const map: Record<Language, string> = {
      en: 'Shake and Strain (Shaker with ice, strain into glass)',
      it: 'Shake and Strain (Shakerare con ghiaccio e filtrare)',
      es: 'Shake and Strain (Agitar en coctelera con hielo y colar)',
      fr: 'Shake and Strain (Frapper au shaker et filtrer)',
      pt: 'Shake and Strain (Bater na coqueteleira com gelo e coar)',
      de: 'Shake and Strain (Im Shaker kräftig schütteln und abseihen)',
    };
    return map[lang] || map.en;
  }

  if (lower.includes('stir') || lower.includes('mixing glass')) {
    const map: Record<Language, string> = {
      en: 'Stir and Strain (Mixing glass with ice, stir and strain)',
      it: 'Stir and Strain (Mescolare nel mixing glass con ghiaccio e filtrare)',
      es: 'Stir and Strain (Remover en vaso mezclador con hielo y colar)',
      fr: 'Stir and Strain (Mélanger au verre à mélange et filtrer)',
      pt: 'Stir and Strain (Mexer no mixing glass com gelo e coar)',
      de: 'Stir and Strain (Im Rührglas mit Eis rühren und abseihen)',
    };
    return map[lang] || map.en;
  }

  if (lower.includes('muddle') || lower.includes('pestare')) {
    const map: Record<Language, string> = {
      en: 'Muddle & Build (Muddle fresh ingredients in glass, top with ice)',
      it: 'Muddle (Pestare ingredienti freschi nel bicchiere prima del ghiaccio)',
      es: 'Muddle (Macerar ingredientes en el vaso antes de añadir hielo)',
      fr: 'Muddle (Piler les ingrédients frais au fond du verre)',
      pt: 'Muddle (Macerar frutas/ervas no copo antes do gelo)',
      de: 'Muddle (Früchte/Kräuter im Glas andrücken, dann Eis zugeben)',
    };
    return map[lang] || map.en;
  }

  if (lower.includes('blend') || lower.includes('frullare')) {
    const map: Record<Language, string> = {
      en: 'Blend (Electric blender with crushed ice)',
      it: 'Blend (Frullare nel blender con ghiaccio tritato)',
      es: 'Blend (Licuar en batidora con hielo picado)',
      fr: 'Blend (Mixer au blender avec glace pilée)',
      pt: 'Blend (Bater no liquidificador com gelo triturado)',
      de: 'Blend (Im Standmixer mit Crushed Ice cremig pürieren)',
    };
    return map[lang] || map.en;
  }

  return technique;
}

// 4. Localized Equipment & DIY Hacks
export function getLocalizedEquipment(equipmentList: EquipmentItem[], lang: Language): EquipmentItem[] {
  if (lang === 'it') return equipmentList;

  return equipmentList.map((eq) => {
    const lowerTool = eq.tool.toLowerCase();

    let tool = eq.tool;
    let diyAlternative = eq.diyAlternative;
    let purpose = eq.purpose;

    if (lowerTool.includes('shaker')) {
      const toolMap: Record<Language, string> = {
        en: 'Cocktail Shaker (Cobbler or Boston)',
        it: 'Shaker per Cocktail (Cobbler o Boston)',
        es: 'Coctelera (Cobbler o Boston)',
        fr: 'Shaker à Cocktail (Cobbler ou Boston)',
        pt: 'Coqueteleira (Cobbler ou Boston)',
        de: 'Cocktail-Shaker (Cobbler oder Boston)',
      };
      const diyMap: Record<Language, string> = {
        en: 'Jam jar with tight lid / Sport protein shaker / Insulated coffee thermos',
        it: 'Barattolo marmellata con coperchio ermetico / Shaker proteine / Borraccia termica',
        es: 'Frasco de mermelada con tapa hermética / Shaker de gimnasio / Termo de café',
        fr: 'Bocal en verre hermétique / Shaker de sport / Gourde isotherme étanche',
        pt: 'Pote de geleia com tampa / Coqueteleira de academia / Garrafa térmica',
        de: 'Einmachglas mit Schraubdeckel / Protein-Shaker / Isolierflasche',
      };
      const purposeMap: Record<Language, string> = {
        en: 'Emulsifies, aerates, chills rapidly and dilutes ingredients into a silky texture.',
        it: 'Emulsiona succhi e distillati, raffredda all\'istante e crea schiuma setosa.',
        es: 'Emulsiona, airea, enfría rápidamente y crea una textura sedosa.',
        fr: 'Émulsionne, aère, refroidit instantanément et crée une texture soyeuse.',
        pt: 'Emulsiona, aerifica, gela instantaneamente e cria textura aveludada.',
        de: 'Emulgiert Säfte und Spirituosen, kühlt blitzschnell und erzeugt seidigen Schaum.',
      };
      tool = toolMap[lang] || toolMap.en;
      diyAlternative = diyMap[lang] || diyMap.en;
      purpose = purposeMap[lang] || purposeMap.en;
    } else if (lowerTool.includes('jigger') || lowerTool.includes('misurino')) {
      const toolMap: Record<Language, string> = {
        en: 'Jigger (Bar Measuring Cup)',
        it: 'Jigger (Misurino graduato da bar)',
        es: 'Jigger (Medidor graduado de bar)',
        fr: 'Jigger (Verre doseur à cocktail)',
        pt: 'Jigger (Dosador graduado de bar)',
        de: 'Jigger (Cocktail-Messbecher)',
      };
      const diyMap: Record<Language, string> = {
        en: 'Espresso shot glass (~30ml) / Cooking measuring spoon / Digital kitchen scale',
        it: 'Tazzina da caffè (~30ml) / Bicchierino shot / Bilancia da cucina (1g = 1ml)',
        es: 'Vaso de chupito (~30ml) / Cuchara medidora de cocina / Báscula digital',
        fr: 'Tasse à expresso (~30ml) / Verre à shot / Balance de cuisine digitale (1g = 1ml)',
        pt: 'Copo de shot (~30ml) / Xícara de café / Balança digital de cozinha',
        de: 'Espresso-Tasse (~30ml) / Schnapsglas / Digitale Küchenwaage (1g = 1ml)',
      };
      const purposeMap: Record<Language, string> = {
        en: 'Guarantees the perfect balance between sweet, sour, bitter and spirit strength.',
        it: 'Garantisce il bilanciamento perfetto tra dolce, acido, amaro e distillati.',
        es: 'Garantiza el equilibrio perfetto entre dulce, ácido, amargo y alcohol.',
        fr: 'Garantit l\'équilibre parfait entre le sucré, l\'acide, l\'amer et les spiritueux.',
        pt: 'Garante o equilíbrio perfeito entre doce, cítrico, amargo e alcoólico.',
        de: 'Garantiert die perfekte Balance zwischen süß, sauer, bitter und Spirituose.',
      };
      tool = toolMap[lang] || toolMap.en;
      diyAlternative = diyMap[lang] || diyMap.en;
      purpose = purposeMap[lang] || purposeMap.en;
    } else if (lowerTool.includes('spoon') || lowerTool.includes('cucchiaio')) {
      const toolMap: Record<Language, string> = {
        en: 'Bar Spoon (Long Twisted Spoon)',
        it: 'Bar Spoon (Cucchiaio lungo da bar)',
        es: 'Cuchara Imperial de Bar (Bar Spoon)',
        fr: 'Cuillère à Cocktail (Bar Spoon)',
        pt: 'Colher Bailarina de Bar (Bar Spoon)',
        de: 'Barlöffel (Langer Drehlöffel)',
      };
      const diyMap: Record<Language, string> = {
        en: 'Long dessert iced tea spoon / Clean wooden chopstick',
        it: 'Cucchiaio lungo da dessert o tisana / Bacchetta di legno da sushi pulita',
        es: 'Cuchara larga de postre o batidos / Palillo de madera limpio',
        fr: 'Longue cuillère à dessert / Baguette en bois propre',
        pt: 'Colher comprida de sobremesa ou suco / Hashi de madeira limpo',
        de: 'Langer Dessertlöffel / Eisteelöffel / Sauberer Holz-Essstäbchen',
      };
      const purposeMap: Record<Language, string> = {
        en: 'Smoothly chills spirit-forward drinks without over-aerating or breaking ice cubes.',
        it: 'Raffredda e miscela drink spirit-forward con delicatezza senza rompere il ghiaccio.',
        es: 'Enfría delicadamente cócteles secos sin romper el hielo ni sobre-airear.',
        fr: 'Refroidit et mélange délicatement sans casser les glaçons ni troubler le liquide.',
        pt: 'Gela e mistura drinks alcoólicos com elegância sem quebrar o gelo.',
        de: 'Kühlt edle Drinks sanft und gleichmäßig, ohne das Eis zu zerschlagen.',
      };
      tool = toolMap[lang] || toolMap.en;
      diyAlternative = diyMap[lang] || diyMap.en;
      purpose = purposeMap[lang] || purposeMap.en;
    } else if (lowerTool.includes('strainer') || lowerTool.includes('colino') || lowerTool.includes('hawthorne')) {
      const toolMap: Record<Language, string> = {
        en: 'Hawthorne Strainer',
        it: 'Strainer Hawthorne (Colino con molla)',
        es: 'Colador Hawthorne (Colador de gusanillo)',
        fr: 'Passoire à Cocktail Hawthorne',
        pt: 'Coador Hawthorne (Coador com mola)',
        de: 'Hawthorne Strainer (Barsieb mit Spirale)',
      };
      const diyMap: Record<Language, string> = {
        en: 'Fine mesh tea strainer / Shaker lid cracked open',
        it: 'Colino da tè a maglia fine / Coperchio del barattolo tenuto leggermente aperto',
        es: 'Colador fino de té / Tapa del frasco ligeramente entreabierta',
        fr: 'Petite passoire à thé / Couvercle du bocal légèrement entrouvert',
        pt: 'Peneira fina de chá / Tampa do pote levemente entreaberta',
        de: 'Feines Teesieb / Schraubdeckel leicht schräg geöffnet halten',
      };
      const purposeMap: Record<Language, string> = {
        en: 'Separates spent ice crystals, mint leaves and pulp from the clean liquid.',
        it: 'Trattiene residui di ghiaccio spezzato, semi e polpa per un drink limpido e cristallino.',
        es: 'Retiene fragmentos de hielo, hojas de menta y pulpa para un líquido limpio.',
        fr: 'Retient les petits cristaux de glace, pépins et herbes pour un liquide limpide.',
        pt: 'Separa gelo quebrado, folhas e polpa para um coquetel límpido e brilhante.',
        de: 'Hält Eissplitter, Minzblätter und Kerne zurück für ein kristallklares Getränk.',
      };
      tool = toolMap[lang] || toolMap.en;
      diyAlternative = diyMap[lang] || diyMap.en;
      purpose = purposeMap[lang] || purposeMap.en;
    } else if (lowerTool.includes('pestello') || lowerTool.includes('muddler')) {
      const toolMap: Record<Language, string> = {
        en: 'Bar Muddler',
        it: 'Pestello da Bar (Muddler)',
        es: 'Mortero de Cóctel (Muddler)',
        fr: 'Pilon à Cocktail (Muddler)',
        pt: 'Socador de Bar (Muddler)',
        de: 'Stößel (Bar-Muddler)',
      };
      const diyMap: Record<Language, string> = {
        en: 'Wooden rolling pin end / Flat bottom of a clean heavy tool or wooden spoon handle',
        it: 'Manico di un cucchiaio di legno spesso / Estremità del matterello',
        es: 'Mango de cuchara de madera gruesa / Extremo de rodillo de amasar',
        fr: 'Manche de cuillère en bois épaisse / Bout de rouleau à pâtisserie',
        pt: 'Cabo grosso de colher de pau / Ponta de rolo de massa',
        de: 'Griff eines stabilen Kochlöffels / Ende eines Nudelholzes',
      };
      const purposeMap: Record<Language, string> = {
        en: 'Extracts essential citrus oils and herbs aromas without tearing bitter veins.',
        it: 'Estrae oli essenziali di agrumi e menta fresca senza lacerare le fibre amare.',
        es: 'Extrae aceites esenciales de cítricos y aromas de menta sin romper fibras amargas.',
        fr: 'Extrait les huiles essentielles d\'agrumes et menthe sans broyer les parties amères.',
        pt: 'Extrai óleos essenciais de frutas e ervas sem liberar o amargor indesejado.',
        de: 'Löst ätherische Öle aus Zitrusschalen und Minze, ohne Bitterstoffe zu erzeugen.',
      };
      tool = toolMap[lang] || toolMap.en;
      diyAlternative = diyMap[lang] || diyMap.en;
      purpose = purposeMap[lang] || purposeMap.en;
    }

    return {
      ...eq,
      tool,
      diyAlternative,
      purpose,
    };
  });
}

// 5. Localized Dynamic Taglines & Descriptions
export function getLocalizedTagline(cocktail: Cocktail, lang: Language): string {
  if (lang === 'it') return cocktail.tagline;

  const id = cocktail.id.toLowerCase();
  if (COCKTAIL_METAS[id]?.tagline[lang]) {
    return COCKTAIL_METAS[id].tagline[lang];
  }

  // Fallback for general structure
  const name = cocktail.name;
  if (lang === 'en') return `The classic recipe for ${name}, balanced with premium ingredients and ice.`;
  if (lang === 'es') return `La receta clásica de ${name}, equilibrada con ingredientes de calidad y hielo.`;
  if (lang === 'fr') return `La recette classique du ${name}, sublimée par des ingrédients frais et de la glace.`;
  if (lang === 'pt') return `A receita clássica de ${name}, equilibrada com ingredientes frescos e muito gelo.`;
  if (lang === 'de') return `Das klassische Rezept für ${name}, perfekt balanciert mit besten Zutaten.`;

  return cocktail.tagline;
}

export function getLocalizedDescription(cocktail: Cocktail, lang: Language): string {
  if (lang === 'it') return cocktail.description;

  const id = cocktail.id.toLowerCase();
  if (COCKTAIL_METAS[id]?.description[lang]) {
    return COCKTAIL_METAS[id].description[lang];
  }

  return cocktail.description;
}

// 6. Localized Step-by-Step Instructions
export function getLocalizedInstructions(instructions: Instructions, lang: Language): Instructions {
  if (lang === 'it') return instructions;

  const translateStep = (s: string, l: Language): string => {
    let t = s;
    if (l === 'en') {
      t = t.replace(/Riempi.*ghiaccio.*/i, 'Fill the serving glass or shaker generously with solid ice cubes.');
      t = t.replace(/Versa prima.*Prosecco.*/i, 'Pour chilled Prosecco first into the glass.');
      t = t.replace(/Versa tutti gli ingredienti.*/i, 'Pour all measured spirits and ingredients into the mixing glass or shaker.');
      t = t.replace(/Aggiungi.*Aperol.*/i, 'Add Aperol with a circular pour over the ice.');
      t = t.replace(/Completa con.*soda.*/i, 'Top off with a splash of chilled club soda.');
      t = t.replace(/Mescola.*secondi.*/i, 'Stir gently for 15-20 seconds to achieve optimal chilling and dilution.');
      t = t.replace(/Dai una sola mescolata.*/i, 'Stir gently once from bottom to top to preserve carbonation.');
      t = t.replace(/Shakera energicamente.*/i, 'Shake vigorously with ice for 10-12 seconds until the shaker is frosty.');
      t = t.replace(/Filtra.*bicchiere.*/i, 'Strain into the chilled glass over fresh ice or straight up.');
      t = t.replace(/Guarnisci con.*/i, 'Garnish with a fresh citrus wheel, olive, or mint sprig.');
    } else if (l === 'es') {
      t = t.replace(/Riempi.*ghiaccio.*/i, 'Llenar el vaso o coctelera con abundante hielo macizo.');
      t = t.replace(/Versa prima.*Prosecco.*/i, 'Verter primero el Prosecco frío en la copa.');
      t = t.replace(/Versa tutti gli ingredienti.*/i, 'Verter todos los ingredientes medidos en el vaso mezclador.');
      t = t.replace(/Aggiungi.*Aperol.*/i, 'Añadir Aperol con un movimiento circular sobre el hielo.');
      t = t.replace(/Completa con.*soda.*/i, 'Completar con un toque de soda muy fría.');
      t = t.replace(/Mescola.*secondi.*/i, 'Remover suavemente durante 15-20 segundos.');
      t = t.replace(/Dai una sola mescolata.*/i, 'Remover suavemente una sola vez de abajo hacia arriba.');
      t = t.replace(/Shakera energicamente.*/i, 'Agitar enérgicamente con hielo durante 10-12 segundos.');
      t = t.replace(/Filtra.*bicchiere.*/i, 'Colar en la copa fría con hielo fresco.');
      t = t.replace(/Guarnisci con.*/i, 'Decorar con una rodaja de cítrico fresco o aceituna.');
    } else if (l === 'fr') {
      t = t.replace(/Riempi.*ghiaccio.*/i, 'Remplir le verre ou le shaker de glaçons pleins.');
      t = t.replace(/Versa prima.*Prosecco.*/i, 'Verser d\'abord le Prosecco bien frais dans le verre.');
      t = t.replace(/Versa tutti gli ingredienti.*/i, 'Verser tous les ingrédients dosés dans le shaker ou verre à mélange.');
      t = t.replace(/Aggiungi.*Aperol.*/i, 'Ajouter l\'Aperol en mouvement circulaire.');
      t = t.replace(/Completa con.*soda.*/i, 'Compléter avec un trait d\'eau gazeuse bien fraîche.');
      t = t.replace(/Mescola.*secondi.*/i, 'Mélanger délicatement pendant 15-20 secondes.');
      t = t.replace(/Dai una sola mescolata.*/i, 'Mélanger délicatement de bas en haut pour préserver les bulles.');
      t = t.replace(/Shakera energicamente.*/i, 'Frapper vigoureusement au shaker pendant 10-12 secondes.');
      t = t.replace(/Filtra.*bicchiere.*/i, 'Filtrer dans le verre rafraîchi avec des glaçons neufs.');
      t = t.replace(/Guarnisci con.*/i, 'Garnir d\'une tranche d\'agrume frais ou d\'une olive.');
    } else if (l === 'pt') {
      t = t.replace(/Riempi.*ghiaccio.*/i, 'Encha o copo ou coqueteleira com bastante gelo maciço.');
      t = t.replace(/Versa prima.*Prosecco.*/i, 'Despeje primeiro o Prosecco gelado na taça.');
      t = t.replace(/Versa tutti gli ingredienti.*/i, 'Despeje todos os ingredientes dosados.');
      t = t.replace(/Aggiungi.*Aperol.*/i, 'Adicione o Aperol em movimento circular.');
      t = t.replace(/Completa con.*soda.*/i, 'Complete com um toque de Club Soda gelado.');
      t = t.replace(/Mescola.*secondi.*/i, 'Mexa suavemente por 15-20 segundos.');
      t = t.replace(/Dai una sola mescolata.*/i, 'Mexa delicadamente de baixo para cima para manter as bolhas.');
      t = t.replace(/Shakera energicamente.*/i, 'Bata vigorosamente na coqueteleira com gelo por 10-12 segundos.');
      t = t.replace(/Filtra.*bicchiere.*/i, 'Coe na taça resfriada com gelo novo.');
      t = t.replace(/Guarnisci con.*/i, 'Guarneça com uma fatia de fruta fresca ou azeitona.');
    } else if (l === 'de') {
      t = t.replace(/Riempi.*ghiaccio.*/i, 'Glas oder Shaker großzügig mit soliden Eiswürfeln füllen.');
      t = t.replace(/Versa prima.*Prosecco.*/i, 'Zuerst den gut gekühlten Prosecco ins Glas gießen.');
      t = t.replace(/Versa tutti gli ingredienti.*/i, 'Alle abgemessenen Zutaten in das Rührglas oder den Shaker geben.');
      t = t.replace(/Aggiungi.*Aperol.*/i, 'Aperol in kreisender Bewegung über das Eis gießen.');
      t = t.replace(/Completa con.*soda.*/i, 'Mit einem Spritzer kaltem Sodawasser auffüllen.');
      t = t.replace(/Mescola.*secondi.*/i, '15-20 Sekunden sanft kalt rühren.');
      t = t.replace(/Dai una sola mescolata.*/i, 'Nur einmal vorsichtig von unten nach oben rühren, um die Kohlensäure zu schonen.');
      t = t.replace(/Shakera energicamente.*/i, '10-12 Sekunden kräftig auf Eis schütteln.');
      t = t.replace(/Filtra.*bicchiere.*/i, 'In das gekühlte Glas auf frisches Eis abseihen.');
      t = t.replace(/Guarnisci con.*/i, 'Mit frischer Zitrusscheibe oder Olive garnieren.');
    }
    return t;
  };

  const translateBatchRatio = (ratio: string, l: Language): string => {
    if (l === 'it') return ratio;
    let t = ratio;
    if (l === 'en') {
      t = t.replace(/Rapporto/gi, 'Ratio');
      t = t.replace(/Parti uguali/gi, 'Equal parts');
      t = t.replace(/la soda e il prosecco vanno aperti all'ultimo istante/gi, 'open sparkling wine and soda at the very last moment');
      t = t.replace(/Nota:/gi, 'Note:');
    } else if (l === 'es') {
      t = t.replace(/Rapporto/gi, 'Proporción');
      t = t.replace(/Parti uguali/gi, 'Partes iguales');
      t = t.replace(/la soda e il prosecco vanno aperti all'ultimo istante/gi, 'abrir el vino espumoso y la soda en el último momento');
      t = t.replace(/Nota:/gi, 'Nota:');
    } else if (l === 'fr') {
      t = t.replace(/Rapporto/gi, 'Proportions');
      t = t.replace(/Parti uguali/gi, 'Parts égales');
      t = t.replace(/la soda e il prosecco vanno aperti all'ultimo istante/gi, 'ouvrir le vin effervescent et le soda au dernier moment');
      t = t.replace(/Nota:/gi, 'Note:');
    } else if (l === 'pt') {
      t = t.replace(/Rapporto/gi, 'Proporção');
      t = t.replace(/Parti uguali/gi, 'Partes iguais');
      t = t.replace(/la soda e il prosecco vanno aperti all'ultimo istante/gi, 'abrir o espumante e a soda no último momento');
      t = t.replace(/Nota:/gi, 'Nota:');
    } else if (l === 'de') {
      t = t.replace(/Rapporto/gi, 'Mischverhältnis');
      t = t.replace(/Parti uguali/gi, 'Gleiche Teile');
      t = t.replace(/la soda e il prosecco vanno aperti all'ultimo istante/gi, 'Schaumwein und Soda erst unmittelbar vor dem Servieren öffnen');
      t = t.replace(/Nota:/gi, 'Hinweis:');
    }
    return t;
  };

  const translateBatchStep = (step: string, l: Language): string => {
    if (l === 'it') return step;
    let t = step;
    if (l === 'en') {
      t = t.replace(/Prepara una caraffa con solo.*/i, 'Pour all measured spirits and base ingredients into the pitcher (without ice).');
      t = t.replace(/Conserva.*frigo.*/i, 'Store the sealed pitcher in the refrigerator until ready to serve.');
      t = t.replace(/Al momento del brindisi.*/i, 'When serving, stir once with chilled water/soda and pour over ice into pre-chilled glasses.');
      t = t.replace(/Miscela tutti gli ingredienti.*/i, 'Combine all spirit ingredients in the pitcher and chill thoroughly.');
    } else if (l === 'es') {
      t = t.replace(/Prepara una caraffa con solo.*/i, 'Verter todos los destilados y bases en la jarra (sin hielo).');
      t = t.replace(/Conserva.*frigo.*/i, 'Guardar la jarra tapada en el frigorífico hasta el momento de servir.');
      t = t.replace(/Al momento del brindisi.*/i, 'Al momento de servir, remover una vez y verter en vasos con hielo fresco.');
      t = t.replace(/Miscela tutti gli ingredienti.*/i, 'Mezclar todos los ingredientes en la jarra y enfriar en la nevera.');
    } else if (l === 'fr') {
      t = t.replace(/Prepara una caraffa con solo.*/i, 'Verser tous les spiritueux et bases dans le pichet (sans glace).');
      t = t.replace(/Conserva.*frigo.*/i, 'Conserver le pichet fermé au réfrigérateur jusqu\'au service.');
      t = t.replace(/Al momento del brindisi.*/i, 'Au moment de servir, mélanger une fois et verser sur glaçons dans les verres.');
      t = t.replace(/Miscela tutti gli ingredienti.*/i, 'Mélanger tous les ingrédients dans le pichet et placer au frais.');
    } else if (l === 'pt') {
      t = t.replace(/Prepara una caraffa con solo.*/i, 'Despeje todos os destilados e bases na jarra (sem gelo).');
      t = t.replace(/Conserva.*frigo.*/i, 'Guarde a jarra tampada na geladeira até a hora de servir.');
      t = t.replace(/Al momento del brindisi.*/i, 'Na hora de servir, mexa uma vez e despeje nos copos com gelo novo.');
      t = t.replace(/Miscela tutti gli ingredienti.*/i, 'Misture todos os ingredientes na jarra e mantenha bem gelado.');
    } else if (l === 'de') {
      t = t.replace(/Prepara una caraffa con solo.*/i, 'Alle Spirituosen und Zutaten in die Kanne geben (ohne Eis).');
      t = t.replace(/Conserva.*frigo.*/i, 'Die verschlossene Kanne bis zum Servieren im Kühlschrank kaltstellen.');
      t = t.replace(/Al momento del brindisi.*/i, 'Beim Servieren einmal umrühren und in Gläser mit frischem Eis einschenken.');
      t = t.replace(/Miscela tutti gli ingredienti.*/i, 'Alle Zutaten in der Kanne mischen und gründlich vorkühlen.');
    }
    return t;
  };

  const translatedSingle = instructions.single.map((s) => translateStep(s, lang));
  const translatedBatchSteps = instructions.batch.steps.map((s) => translateBatchStep(s, lang));
  const translatedRatio = translateBatchRatio(instructions.batch.ratioExplanation, lang);

  const dilutionTipMap: Record<Language, string> = {
    en: 'Add ~15% cold filtered water to the batch pitcher to replicate the chilling dilution of melting ice, ensuring smooth drinkability.',
    it: instructions.batch.dilutionTip,
    es: 'Añade un ~15% de agua fría filtrada a la jarra para replicar la dilución térmica del hielo al servir.',
    fr: 'Ajoutez environ 15% d\'eau fraîche filtrée au pichet pour reproduire la dilution naturelle des glaçons.',
    pt: 'Adicione cerca de 15% de água gelada filtrada à jarra para replicar a diluição natural do gelo.',
    de: 'Füge ca. 15% kaltes Wasser zur Kanne hinzu, um das Schmelzwasser des Shakers perfekt auszugleichen.',
  };

  const coolingTipMap: Record<Language, string> = {
    en: 'Store the pitcher tightly sealed in the refrigerator for at least 3-4 hours before the party. Do NOT add ice inside the pitcher.',
    it: instructions.batch.coolingTip,
    es: 'Conserva la jarra cerrada en el frigorífico al menos 3-4 horas antes de la fiesta. NO añadas hielo dentro de la jarra.',
    fr: 'Conservez le pichet hermétiquement au réfrigérateur au moins 3-4 heures avant la fête. Ne mettez PAS de glace dans le pichet.',
    pt: 'Guarde a jarra bem tampada na geladeira por pelo menos 3-4 horas antes da festa. NÃO adicione gelo dentro da jarra.',
    de: 'Die Kanne mindestens 3-4 Stunden vor der Party im Kühlschrank kühlen. KEIN Eis direkt in die Kanne geben.',
  };

  return {
    single: translatedSingle,
    batch: {
      ratioExplanation: translatedRatio,
      steps: translatedBatchSteps,
      dilutionTip: dilutionTipMap[lang] || instructions.batch.dilutionTip,
      coolingTip: coolingTipMap[lang] || instructions.batch.coolingTip,
    },
  };
}

// 7. Full Cocktail Localizer (Ingredients, Glassware, Techniques, Equipment, Tagline, Description, FlavorProfile, Category)
export function getLocalizedCocktail(cocktail: Cocktail, lang: Language): Cocktail {
  const glass = getLocalizedGlass(cocktail.glass, lang);
  const technique = getLocalizedTechnique(cocktail.technique, lang);
  const equipment = getLocalizedEquipment(cocktail.equipment, lang);
  const tagline = getLocalizedTagline(cocktail, lang);
  const description = getLocalizedDescription(cocktail, lang);
  const category = getLocalizedCategory(cocktail.category, lang);
  const flavorProfile = getLocalizedFlavorProfile(cocktail.flavorProfile, lang);
  const instructions = getLocalizedInstructions(cocktail.instructions, lang);

  const ingredients: Ingredient[] = cocktail.ingredients.map((ing) => ({
    ...ing,
    name: getLocalizedIngredientName(ing.name, lang),
    brands: {
      ...ing.brands,
      notes: ing.brands?.notes ? getLocalizedBrandNotes(ing.brands.notes, lang) : undefined,
    },
  }));

  return {
    ...cocktail,
    glass,
    technique,
    equipment,
    tagline,
    description,
    category,
    flavorProfile,
    instructions,
    ingredients,
  };
}
