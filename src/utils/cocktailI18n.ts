import { Cocktail, EquipmentItem, Instructions } from '../types/cocktail';
import { Language } from '../i18n/translations';

// 1. Localized Glassware mapping
export function getLocalizedGlass(glassName: string, lang: Language): string {
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

  if (lower.includes('calice') || lower.includes('spritz') || lower.includes('wine')) {
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

// 2. Localized Bar Techniques
export function getLocalizedTechnique(technique: string, lang: Language): string {
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

// 3. Localized Equipment & DIY Hacks
export function getLocalizedEquipment(equipmentList: EquipmentItem[], lang: Language): EquipmentItem[] {
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
        es: 'Garantiza el equilibrio perfecto entre dulce, ácido, amargo y alcohol.',
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

// 4. Localized Dynamic Taglines
export function getLocalizedTagline(cocktail: Cocktail, lang: Language): string {
  if (lang === 'it') return cocktail.tagline;

  const name = cocktail.name.toLowerCase();

  const taglinesMap: Record<string, Record<Language, string>> = {
    negroni: {
      en: 'The definitive Italian aperitif with Gin, Campari Bitter and Sweet Red Vermouth.',
      it: 'L\'icona dell\'aperitivo italiano con Gin, Campari Bitter e Vermouth Rosso.',
      es: 'El icono del aperitivo italiano con Ginebra, Campari Bitter y Vermut Rojo.',
      fr: 'L\'icône de l\'apéritif italien au Gin, Campari Bitter et Vermouth Rouge.',
      pt: 'O ícone do aperitivo italiano com Gin, Campari Bitter e Vermute Tinto.',
      de: 'Die Ikone des italienischen Aperitifs mit Gin, Campari Bitter und rotem Wermut.',
    },
    'aperol-spritz': {
      en: 'The undisputed king of daytime aperitifs with Prosecco DOC, Aperol and Soda.',
      it: 'Il re indiscusso dell\'aperitivo italiano con Prosecco DOC, Aperol e Soda.',
      es: 'El rey indiscutible del aperitivo italiano con Prosecco DOC, Aperol y Soda.',
      fr: 'Le roi incontesté de l\'apéritif italien au Prosecco DOC, Aperol et Soda.',
      pt: 'O rei indiscutível do aperitivo italiano com Prosecco DOC, Aperol e Club Soda.',
      de: 'Der unangefochtene König des Aperitifs mit Prosecco DOC, Aperol und Soda.',
    },
    margarita: {
      en: 'The Mexican fiesta icon: Blanco Tequila, Cointreau/Triple Sec and fresh lime juice.',
      it: 'Il classico messicano con Tequila Blanco, Triple Sec e succo di lime fresco.',
      es: 'El clásico mexicano con Tequila Blanco, Triple Sec y zumo de lima recién exprimido.',
      fr: 'Le grand classique mexicain à la Tequila Blanco, Triple Sec et jus de citron vert.',
      pt: 'O clássico mexicano com Tequila Blanco, Triple Sec e suco de limão fresco.',
      de: 'Der mexikanische Klassiker mit Blanco Tequila, Triple Sec und frischem Limettensaft.',
    },
    mojito: {
      en: 'Refreshing Cuban legend with White Rum, fresh mint, lime juice, sugar and club soda.',
      it: 'Fresco e aromatico con Rum Bianco, Menta fresca, Lime, Zucchero e Soda.',
      es: 'Refrescante leyenda cubana con Ron Blanco, menta fresca, lima, azúcar y soda.',
      fr: 'Légende cubaine rafraîchissante au Rhum Blanc, menthe fraîche, citron vert et soda.',
      pt: 'Lenda cubana refrescante com Rum Branco, hortelã fresca, limão, açúcar e soda.',
      de: 'Erfrischende kubanische Legende mit weißem Rum, frischer Minze, Limette und Soda.',
    },
    'espresso-martini': {
      en: 'The modern nightlife classic: Vodka, rich coffee liqueur, and fresh espresso.',
      it: 'Il grande classico moderno della notte: Vodka, liquore al caffè ed espresso fresco.',
      es: 'El clásico moderno de la noche: Vodka, licor de café y café espresso recién hecho.',
      fr: 'Le grand classique moderne nocturne: Vodka, liqueur de café et expresso frais.',
      pt: 'O clássico moderno da noite: Vodka, licor de café e café espresso fresco.',
      de: 'Der moderne Nachtleben-Klassiker: Vodka, Kaffeelikör und frischer Espresso.',
    },
    'gin-tonic': {
      en: 'The ultimate timeless highball: Botanical Gin, crisp Tonic Water and abundant ice.',
      it: 'Il long drink senza tempo: Gin botanico, Acqua Tonica premium e ghiaccio a volontà.',
      es: 'El combinado atemporal: Ginebra botánica, tónica premium y abundante hielo.',
      fr: 'Le grand classique intemporel: Gin botanique, eau tonique pétillante et glace abondante.',
      pt: 'O clássico atemporal: Gin botânico, água tônica de qualidade e muito gelo.',
      de: 'Der zeitlose Longdrink: Botanischer Gin, Tonic Water und reichlich Eis.',
    },
  };

  if (taglinesMap[name]?.[lang]) {
    return taglinesMap[name][lang];
  }

  return cocktail.tagline;
}

// 5. Localized Instructions
export function getLocalizedInstructions(instructions: Instructions, lang: Language): Instructions {
  if (lang === 'it') return instructions;

  const singleMap: Record<Language, (steps: string[]) => string[]> = {
    it: (steps) => steps,
    en: (steps) => steps.map((s) => {
      let text = s;
      text = text.replace(/Riempi.*ghiaccio/i, 'Fill glass or shaker with fresh solid ice cubes.');
      text = text.replace(/Versa tutti gli ingredienti/i, 'Pour all measured spirits and ingredients.');
      text = text.replace(/Mescola.*secondi/i, 'Stir gently for 15-20 seconds to achieve optimal chilling and dilution.');
      text = text.replace(/Shakera energicamente/i, 'Shake vigorously for 10-12 seconds until frosty cold.');
      text = text.replace(/Filtra.*bicchiere/i, 'Strain into chilled serving glass over fresh ice or up.');
      text = text.replace(/Guarnisci con/i, 'Garnish with');
      return text;
    }),
    es: (steps) => steps.map((s) => {
      let text = s;
      text = text.replace(/Riempi.*ghiaccio/i, 'Llenar el vaso o coctelera con cubitos de hielo fresco.');
      text = text.replace(/Versa tutti gli ingredienti/i, 'Verter todos los ingredientes medidos.');
      text = text.replace(/Mescola.*secondi/i, 'Remover suavemente durante 15-20 segundos.');
      text = text.replace(/Shakera energicamente/i, 'Agitar enérgicamente durante 10-12 segundos.');
      text = text.replace(/Filtra.*bicchiere/i, 'Colar en la copa fría con hielo fresco.');
      text = text.replace(/Guarnisci con/i, 'Decorar con');
      return text;
    }),
    fr: (steps) => steps.map((s) => {
      let text = s;
      text = text.replace(/Riempi.*ghiaccio/i, 'Remplir le verre ou le shaker de glaçons frais.');
      text = text.replace(/Versa tutti gli ingredienti/i, 'Verser tous les ingrédients dosés.');
      text = text.replace(/Mescola.*secondi/i, 'Mélanger délicatement pendant 15-20 secondes.');
      text = text.replace(/Shakera energicamente/i, 'Frapper vigoureusement au shaker pendant 10-12 secondes.');
      text = text.replace(/Filtra.*bicchiere/i, 'Filtrer dans le verre de service rafraîchi.');
      text = text.replace(/Guarnisci con/i, 'Garnir avec');
      return text;
    }),
    pt: (steps) => steps.map((s) => {
      let text = s;
      text = text.replace(/Riempi.*ghiaccio/i, 'Encha o copo ou coqueteleira com cubos de gelo fresco.');
      text = text.replace(/Versa tutti gli ingredienti/i, 'Despeje todos os ingredientes dosados.');
      text = text.replace(/Mescola.*secondi/i, 'Mexa suavemente por 15-20 segundos.');
      text = text.replace(/Shakera energicamente/i, 'Bata vigorosamente na coqueteleira por 10-12 segundos.');
      text = text.replace(/Filtra.*bicchiere/i, 'Coe na taça resfriada com gelo novo.');
      text = text.replace(/Guarnisci con/i, 'Guarneça com');
      return text;
    }),
    de: (steps) => steps.map((s) => {
      let text = s;
      text = text.replace(/Riempi.*ghiaccio/i, 'Glas oder Shaker mit frischen Eiswürfeln füllen.');
      text = text.replace(/Versa tutti gli ingredienti/i, 'Alle abgemessenen Zutaten eingießen.');
      text = text.replace(/Mescola.*secondi/i, '15-20 Sekunden sanft kalt rühren.');
      text = text.replace(/Shakera energicamente/i, '10-12 Sekunden kräftig auf Eis schütteln.');
      text = text.replace(/Filtra.*bicchiere/i, 'In das gekühlte Glas auf frisches Eis abseihen.');
      text = text.replace(/Guarnisci con/i, 'Garnieren mit');
      return text;
    }),
  };

  const translatedSingle = singleMap[lang] ? singleMap[lang](instructions.single) : instructions.single;

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
      ...instructions.batch,
      dilutionTip: dilutionTipMap[lang] || instructions.batch.dilutionTip,
      coolingTip: coolingTipMap[lang] || instructions.batch.coolingTip,
    },
  };
}

// 6. Full Cocktail Localizer
export function getLocalizedCocktail(cocktail: Cocktail, lang: Language): Cocktail {
  const glass = getLocalizedGlass(cocktail.glass, lang);
  const technique = getLocalizedTechnique(cocktail.technique, lang);
  const equipment = getLocalizedEquipment(cocktail.equipment, lang);
  const tagline = getLocalizedTagline(cocktail, lang);
  const instructions = getLocalizedInstructions(cocktail.instructions, lang);

  return {
    ...cocktail,
    glass,
    technique,
    equipment,
    tagline,
    instructions,
  };
}
