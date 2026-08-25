import { Language } from './translations';

export interface LocalizedCocktailMeta {
  name?: Record<Language, string>;
  tagline: Record<Language, string>;
  description: Record<Language, string>;
}

export const COCKTAIL_METAS: Record<string, LocalizedCocktailMeta> = {
  // APERITIVI & EXTRAS
  'aperol-spritz': {
    tagline: {
      en: 'The icon of Italian sunshine: Prosecco DOC, Aperol and soda (Official 3:2:1 Formula)',
      it: 'L\'icona del sole italiano: Prosecco, Aperol e soda (Formula ufficiale 3:2:1)',
      es: 'El icono del sol italiano: Prosecco DOC, Aperol y soda (Fórmula oficial 3:2:1)',
      fr: 'L\'icône du soleil italien: Prosecco DOC, Aperol et soda (Formule officielle 3:2:1)',
      pt: 'O ícone do sol italiano: Prosecco DOC, Aperol e soda (Fórmula oficial 3:2:1)',
      de: 'Die Ikone der italienischen Sonne: Prosecco DOC, Aperol und Soda (Offizielle 3:2:1 Formel)',
    },
    description: {
      en: 'The official Venetian and IBA 3-2-1 recipe: 3 parts Prosecco DOC, 2 parts Aperol, and 1 splash of sparkling soda water over fresh orange slices.',
      it: 'La formula ufficiale veneziana e IBA 3-2-1: 3 parti di Prosecco DOC, 2 parti di Aperol e 1 spruzzo di soda o acqua gassata.',
      es: 'La fórmula oficial veneciana e IBA 3-2-1: 3 partes de Prosecco DOC, 2 partes de Aperol y 1 toque de agua con gas sobre rodajas de naranja fresca.',
      fr: 'La recette officielle vénitienne et IBA 3-2-1: 3 parts de Prosecco DOC, 2 parts d\'Aperol et 1 trait d\'eau gazeuse sur des tranches d\'orange fraîche.',
      pt: 'A fórmula oficial veneziana e IBA 3-2-1: 3 partes de Prosecco DOC, 2 partes de Aperol e 1 splash de club soda sobre fatias de laranja fresca.',
      de: 'Die offizielle venezianische IBA 3-2-1 Formel: 3 Teile Prosecco DOC, 2 Teile Aperol und 1 Spritzer Sodawasser auf frischen Orangenscheiben.',
    },
  },
  'campari-spritz': {
    tagline: {
      en: 'Bold, bitter and intensely red: Prosecco DOC, Campari Bitter and soda.',
      it: 'Il fratello deciso e amaricante: Prosecco, Campari e soda per palati esigenti.',
      es: 'El hermano intenso y amargo: Prosecco DOC, Campari y soda para paladares exigentes.',
      fr: 'Le frère intense et amer: Prosecco DOC, Campari et soda pour les amateurs de caractère.',
      pt: 'O irmão intenso e marcante: Prosecco DOC, Campari e soda para paladares exigentes.',
      de: 'Der herbe, charakterstarke Bruder: Prosecco DOC, Campari und Soda.',
    },
    description: {
      en: 'A more robust and bitter take on the classic Spritz, replacing Aperol with Campari for deeper herbal complexity.',
      it: 'Una variante più decisa e secca del classico Spritz, sostituendo l\'Aperol con il Campari per un profilo aromatico più intenso.',
      es: 'Una versión más seca e intensa del Spritz clásico, con Campari en lugar de Aperol.',
      fr: 'Une version plus intense et sèche du Spritz classique, sublimée par l\'amertume élégante du Campari.',
      pt: 'Uma versão mais seca e intensa do Spritz clássico, substituindo o Aperol por Campari.',
      de: 'Eine herbere, kräftigere Variante des klassischen Spritz mit Campari Bitter.',
    },
  },
  'espresso-martini': {
    tagline: {
      en: 'The definitive modern nightlife classic: Vodka, rich coffee liqueur and freshly extracted hot espresso.',
      it: 'Il re della notte moderna: Vodka, liquore al caffè ed espresso caldo appena estratto.',
      es: 'El rey de la noche moderna: Vodka, licor de café y café espresso recién hecho.',
      fr: 'Le roi de la nuit moderne: Vodka, liqueur de café et expresso chaud fraîchement extrait.',
      pt: 'O rei da noite moderna: Vodka, licor de café e café espresso fresco.',
      de: 'Der moderne König des Nachtlebens: Vodka, Kaffeelikör und frisch gebrühter Espresso.',
    },
    description: {
      en: 'Created by Dick Bradsell in London (1983). Rich, velvety with a dense hazelnut crema foam on top.',
      it: 'Creato da Dick Bradsell a Londra (1983). Morbido, vellutato con una schiuma nocciola irresistibile.',
      es: 'Creado por Dick Bradsell en Londres (1983). Suave, aterciopelado con una crema de café irresistible.',
      fr: 'Créé par Dick Bradsell à Londres (1983). Onctueux, riche avec une mousse noisette crémeuse.',
      pt: 'Criado por Dick Bradsell em Londres (1983). Cremoso, aveludado com uma espuma de café perfeita.',
      de: '1983 von Dick Bradsell in London kreiert. Samtig, aromatisch mit dichter Haselnuss-Crema.',
    },
  },
  'gin-tonic': {
    tagline: {
      en: 'The ultimate timeless highball: Botanical Gin, crisp Tonic Water and abundant solid ice.',
      it: 'Il long drink per eccellenza: Gin botanico, Acqua Tonica premium e ghiaccio a volontà.',
      es: 'El combinado por excelencia: Ginebra botánica, tónica premium y abundante hielo macizo.',
      fr: 'Le long drink d\'excellence: Gin botanique, eau tonique premium et glace abondante.',
      pt: 'O long drink por excelência: Gin botânico, água tônica de qualidade e muito gelo.',
      de: 'Der ultimative Longdrink: Botanischer Gin, Premium Tonic Water und reichlich solides Eis.',
    },
    description: {
      en: 'The immortal English highball combining floral and juniper botanicals with crisp quinine tonic water.',
      it: 'Il celebre highball britannico che sposa le botaniche di ginepro con il chinino rinfrescante della tonica.',
      es: 'El famoso highball británico que une los botánicos de enebro con la frescura de la tónica.',
      fr: 'Le célèbre highball britannique associant genièvre botanique et tonic pétillant.',
      pt: 'O clássico highball britânico unindo zimbro botânico e água tônica refrescante.',
      de: 'Der legendäre britische Highball aus feinsten Wacholder-Botanicals und erfrischendem Tonic.',
    },
  },
  'paloma': {
    tagline: {
      en: 'Mexico\'s favorite highball: 100% Agave Blanco Tequila, fresh lime juice and pink grapefruit soda.',
      it: 'L\'autentico aperitivo messicano: Tequila 100% Agave, succo di lime fresco e soda al pompelmo rosa.',
      es: 'El cóctel más popular de México: Tequila 100% Agave, zumo de lima y refresco de pomelo rosa.',
      fr: 'Le cocktail préféré du Mexique: Tequila 100% Agave, jus de citron vert frais et soda au pamplemousse rose.',
      pt: 'O drink favorito do México: Tequila 100% Agave, suco de limão e refrigerante de toranja rosa.',
      de: 'Mexikos beliebtester Highball: 100% Agave Tequila, frischer Limettensaft und Pink-Grapefruit-Soda.',
    },
    description: {
      en: 'A thirst-quenching agave highball with vibrant citrus notes, pink grapefruit effervescence and a saline rim.',
      it: 'Un long drink dissetante e vivace a base di agave, arricchito da pompelmo rosa e un pizzico di sale.',
      es: 'Un trago largo refrescante con notas cítricas vivas, pomelo rosa y un toque de sal.',
      fr: 'Un cocktail ultra-rafraîchissant aux notes d\'agave, pamplemousse rose pétillant et touche saline.',
      pt: 'Um long drink refrescante com notas cítricas, toranja rosa e borda de sal.',
      de: 'Ein herrlich erfrischender Agaven-Drink mit spritziger Pink Grapefruit und Salzrand.',
    },
  },
  'dark-n-stormy': {
    tagline: {
      en: 'Bermuda\'s spicy stormy sea: Rich Dark Rum floating over spicy Ginger Beer and fresh lime.',
      it: 'La tempesta delle Bermuda: Rum Scuro invecchiato su Ginger Beer speziata e succo di lime.',
      es: 'La tormenta de Bermudas: Ron Oscuro añejo flotando sobre Ginger Beer picante y lima.',
      fr: 'La tempête des Bermudes: Rhum Vieux flottant sur de la Ginger Beer épicée et citron vert.',
      pt: 'A tempestade das Bermudas: Rum Escuro sobre Ginger Beer picante e limão.',
      de: 'Der stürmische Klassiker aus Bermuda: Dunkler gereifter Rum auf scharfem Ginger Beer und Limette.',
    },
    description: {
      en: 'The trademarked cocktail of Bermuda, featuring a dark rum float over cloudy spicy ginger beer.',
      it: 'Il leggendario cocktail caraibico con uno strato scuro di rum che galleggia sulla ginger beer piccante.',
      es: 'El cóctel insignia de las Bermudas con ron oscuro sobre cerveza de jengibre especiada.',
      fr: 'Le cocktail légendaire des Bermudes avec sa couche de rhum ambré sur ginger beer piquante.',
      pt: 'O lendário coquetel caribenho com camada de rum escuro sobre cerveja de gengibre.',
      de: 'Der legendäre Drink aus Bermuda mit dunklem Rum auf trübem, scharfem Ingwerbier.',
    },
  },

  // CONTEMPORARY CLASSICS
  'margarita': {
    tagline: {
      en: 'The immortal Mexican masterpiece: Blanco Tequila, Cointreau orange liqueur and fresh lime juice.',
      it: 'Il capolavoro messicano: Tequila Blanco 100% Agave, Triple Sec Cointreau e succo di lime fresco.',
      es: 'La obra maestra mexicana: Tequila Blanco 100% Agave, Triple Sec Cointreau y zumo de lima fresco.',
      fr: 'Le chef-d\'œuvre mexicain: Tequila Blanco 100% Agave, Triple Sec Cointreau et jus de citron vert frais.',
      pt: 'A obra-prima mexicana: Tequila Blanco 100% Agave, Triple Sec Cointreau e suco de limão fresco.',
      de: 'Das unsterbliche mexikanische Meisterwerk: Blanco Tequila, Cointreau und frischer Limettensaft.',
    },
    description: {
      en: 'Crisp, sour, saline and balanced. The perfect harmony of agave, orange liqueur and fresh citrus with a salt rim.',
      it: 'Fresco, acido e sapido. La combinazione perfetta tra note di agave, liquore all\'arancia e crosta di sale.',
      es: 'Fresco, cítrico y equilibrado. La armonía perfecta entre agave, licor de naranja y borde de sal.',
      fr: 'Frais, acidulé et salin. L\'accord parfait entre agave, liqueur d\'orange et sel fin.',
      pt: 'Fresco, cítrico e equilibrado. A harmonia perfeita entre agave, licor de laranja e borda de sal.',
      de: 'Frisch, knackig-sauer und balanciert: Agave, Orangenlikör und feiner Salzrand.',
    },
  },
  'mojito': {
    tagline: {
      en: 'The legendary Cuban classic: White Rum, crushed fresh mint, lime juice, cane sugar and sparkling club soda.',
      it: 'La leggenda cubana per eccellenza: Rum Bianco, menta fresca pestata, lime, zucchero e soda.',
      es: 'La leyenda cubana por excelencia: Ron Blanco, hierbabuena fresca macerada, lima, azúcar y soda.',
      fr: 'La légende cubaine par excellence: Rhum Blanc, menthe fraîche pilée, citron vert, sucre et soda.',
      pt: 'A lenda cubana por excelência: Rum Branco, hortelã fresca macerada, limão, açúcar e club soda.',
      de: 'Die legendäre kubanische Ikone: Weißer Rum, frische Minze, Limette, Rohrzucker und Sodawasser.',
    },
    description: {
      en: 'Havana\'s most famous highball. Gently muddled mint releases refreshing essential oils without bitterness.',
      it: 'Il cocktail più celebre dell\'Avana. La menta fresca delicatamente premuta sprigiona aromi unici senza amaro.',
      es: 'El trago más famoso de La Habana. La menta fresca suavemente presionada libera aceites esenciales.',
      fr: 'Le cocktail le plus célèbre de La Havane. La menthe fraîche délicatement pressée libère ses huiles parfumées.',
      pt: 'O drink mais famoso de Havana. A hortelã delicadamente macerada libera aromas sem amargar.',
      de: 'Havannas berühmtester Drink. Sanft angedrückte Minze entfaltet frische ätherische Öle.',
    },
  },
  'moscow-mule': {
    tagline: {
      en: 'The copper mug icon: Crisp Vodka, fresh lime juice and spicy bubbly Ginger Beer.',
      it: 'L\'icona nella tazza di rame: Vodka, succo di lime fresco e Ginger Beer frizzante speziata.',
      es: 'El icono en taza de cobre: Vodka, zumo de lima fresco y Ginger Beer picante con burbuja.',
      fr: 'L\'icône en tasse de cuivre: Vodka, jus de citron vert frais et Ginger Beer épicée pétillante.',
      pt: 'O ícone na caneca de cobre: Vodka, suco de limão fresco e Ginger Beer picante bem gelada.',
      de: 'Die Kupferbecher-Ikone: Vodka, frischer Limettensaft und würziges Ginger Beer.',
    },
    description: {
      en: 'Created in 1941 in the USA. Served in an ice-cold copper mug for rapid thermal conductivity and sharp ginger bite.',
      it: 'Nato nel 1941 negli USA. Servito nell\'iconica tazza di rame per un freddo tagliente e note di zenzero vivo.',
      es: 'Creado en 1941 en EE.UU. Servido en taza de cobre para un frío intenso y chispa de jengibre.',
      fr: 'Créé en 1941 aux États-Unis. Servi dans sa tasse en cuivre pour une fraîcheur intense.',
      pt: 'Criado em 1941 nos EUA. Servido na caneca de cobre para manter o gelo e o frescor do gengibre.',
      de: '1941 in den USA entstanden. Im eisgekühlten Kupferbecher mit feiner Ingwerschärfe serviert.',
    },
  },
  'pina-colada': {
    tagline: {
      en: 'The tropical Puerto Rican paradise: White Rum, rich coconut cream and sweet pineapple juice.',
      it: 'Il paradiso tropicale di Porto Rico: Rum Bianco, vellutata crema di cocco e succo d\'ananas.',
      es: 'El paraíso tropical de Puerto Rico: Ron Blanco, crema de coco rica y zumo de piña.',
      fr: 'Le paradis tropical de Porto Rico: Rhum Blanc, crème de coco onctueuse et jus d\'ananas.',
      pt: 'O paraíso tropical de Porto Rico: Rum Branco, creme de coco aveludado e suco de abacaxi.',
      de: 'Das tropische Paradies aus Puerto Rico: Weißer Rum, cremige Kokosnusscreme und Ananassaft.',
    },
    description: {
      en: 'The national drink of Puerto Rico (1954). Ultra-creamy, velvety and exotic sweet balance.',
      it: 'La bevanda nazionale di Porto Rico (1954). Vellutata, cremosa e dal sapore esotico irresistibile.',
      es: 'La bebida nacional de Puerto Rico (1954). Cremosa, aterciopelada y de sabor exótico inconfundible.',
      fr: 'La boisson nationale de Porto Rico (1954). Ultra-crémeuse, onctueuse et exotique.',
      pt: 'A bebida nacional de Porto Rico (1954). Muito cremosa, aveludada e exótica.',
      de: 'Das Nationalgetränk Puerto Ricos (1954). Wunderbar cremig, samtig und exotisch süß.',
    },
  },
  'cosmopolitan': {
    tagline: {
      en: 'The chic 90s Manhattan icon: Citron Vodka, Cointreau, fresh lime and tart cranberry juice.',
      it: 'L\'icona glamour anni \'90 di New York: Vodka al limone, Cointreau, lime e succo di cranberry.',
      es: 'El icono glamuroso de Nueva York: Vodka al limón, Cointreau, lima fresca y zumo de arándanos.',
      fr: 'L\'icône glamour new-yorkaise: Vodka citron, Cointreau, citron vert et jus de canneberge.',
      pt: 'O ícone glamouroso de Nova York: Vodka citrus, Cointreau, limão fresco e suco de cranberry.',
      de: 'Die glamouröse New Yorker 90er-Ikone: Citrus-Vodka, Cointreau, Limette und Cranberrysaft.',
    },
    description: {
      en: 'Popularized in Manhattan by Toby Cecchini and Sex and the City. Brilliant pink hue with crisp citrus-berry tartness.',
      it: 'Reso leggendario a Manhattan da Toby Cecchini. Colore rosa brillante e perfetto equilibrio agro-dolce.',
      es: 'Popularizado en Manhattan por Toby Cecchini. Color rosa brillante y equilibrio cítrico-afrutado.',
      fr: 'Rendu culte à Manhattan par Toby Cecchini. Robe rose éclatante et bel équilibre acidulé.',
      pt: 'Tornado famoso em Manhattan por Toby Cecchini. Cor rosa vibrante e frescor cítrico frissonnant.',
      de: 'In Manhattan durch Toby Cecchini berühmt geworden. Strahlendes Pink und feine Fruchtsäure.',
    },
  },

  // UNFORGETTABLES
  'negroni': {
    tagline: {
      en: 'The definitive King of Italian aperitifs: Equal parts London Dry Gin, Campari Bitter and Sweet Red Vermouth (1:1:1).',
      it: 'Il re assoluto dell\'aperitivo italiano: Parti uguali di Gin London Dry, Campari Bitter e Vermouth Rosso (1:1:1).',
      es: 'El rey indiscutible del aperitivo italiano: Partes iguales de Gin London Dry, Campari Bitter y Vermut Rojo (1:1:1).',
      fr: 'Le roi incontesté de l\'apéritif italien: Parts égales de Gin London Dry, Campari Bitter et Vermouth Rouge (1:1:1).',
      pt: 'O rei absoluto do aperitivo italiano: Partes iguais de Gin London Dry, Campari Bitter e Vermute Tinto (1:1:1).',
      de: 'Der unangefochtene König des italienischen Aperitifs: Gleiche Teile Gin, Campari und roter Wermut (1:1:1).',
    },
    description: {
      en: 'Born in Florence in 1919 for Count Camillo Negroni. Bold, dry, herbal and universally recognized as the gold standard of cocktails.',
      it: 'Nato a Firenze nel 1919 per il Conte Camillo Negroni. Secco, amaro, speziato e perfetto in ogni momento.',
      es: 'Nacido en Florencia en 1919 para el Conde Camillo Negroni. Seco, amargo, especiado e icónico.',
      fr: 'Né à Florence en 1919 pour le Comte Camillo Negroni. Sec, amer, épicé et légendaire.',
      pt: 'Criado em Florença em 1919 para o Conde Camillo Negroni. Seco, amargo, complexo e atemporal.',
      de: '1919 in Florenz für Graf Camillo Negroni erfunden. Herb, trocken, aromatisch und weltberühmt.',
    },
  },
  'old-fashioned': {
    tagline: {
      en: 'The pioneer of all cocktail history: Bourbon Whiskey, aromatic bitters, sugar and essential orange oils.',
      it: 'Il padre di tutta la miscelazione: Bourbon Whiskey, Angostura aromatic bitters, zucchero e oli essenziali d\'arancia.',
      es: 'El padre de toda la coctelería: Bourbon Whiskey, amargo de Angostura, azúcar y aceites de naranja.',
      fr: 'Le père fondateur du cocktail: Bourbon Whiskey, Angostura bitters, sucre et zeste d\'orange.',
      pt: 'O pai da coquetelaria mundial: Bourbon Whiskey, bitter de Angostura, açúcar e óleos de laranja.',
      de: 'Der Urvater aller Cocktails: Bourbon Whiskey, Angostura Bitter, Zucker und Orangenöle.',
    },
    description: {
      en: 'The original 19th-century cocktail formula: spirit, bitter, sugar and water. Rich, smooth and warming.',
      it: 'La formula originale dell\'800: distillato, bitter, zucchero e diluizione. Caldo, ricco e aromatico.',
      es: 'La fórmula original del siglo XIX: destilado, amargo, azúcar y dilución. Rico y reconfortante.',
      fr: 'La formule originale du XIXe siècle: spiritueux, bitter, sucre et eau. Riche et élégant.',
      pt: 'A fórmula primordial do século XIX: destilado, bitter, açúcar e água. Intenso e envolvente.',
      de: 'Die Ur-Formel des 19. Jahrhunderts: Spirituose, Bitter, Zucker und sanfte Kältedilution.',
    },
  },
  'dry-martini': {
    tagline: {
      en: 'The pinnacle of dry elegance: London Dry Gin, Dry French Vermouth and a green cocktail olive or lemon twist.',
      it: 'La massima espressione dell\'eleganza secca: Gin London Dry, Vermouth Dry e oliva o scorza di limone.',
      es: 'La cúspide de la elegancia seca: Ginebra London Dry, Vermut Seco y aceituna o twist de limón.',
      fr: 'Le sommet de l\'élégance sèche: Gin London Dry, Vermouth Sec et olive verte ou zeste de citron.',
      pt: 'O ápice da elegância seca: Gin London Dry, Vermute Seco e azeitona ou twist de limão.',
      de: 'Der Gipfel trockener Eleganz: London Dry Gin, trockener Wermut und Cocktail-Olive.',
    },
    description: {
      en: 'The silver bullet of cocktail culture. Ice-cold, crystal clear, aromatic and uncompromisingly sophisticated.',
      it: 'Il drink più celebre della storia. Cristallino, ghiacciato, profumato di ginepro e botaniche essenziali.',
      es: 'El cóctel más icónico de la historia. Cristalino, helado, aromático y sofisticado.',
      fr: 'Le cocktail le plus célèbre de l\'histoire. Cristallin, glacé et d\'une grande pureté aromatique.',
      pt: 'O drink mais icônico da história. Cristalino, gelado, aromático e extremamente elegante.',
      de: 'Das Kultgetränk schlechthin. Eiskalt gerührt, kristallklar und kompromisslos elegant.',
    },
  },
  'manhattan': {
    tagline: {
      en: 'New York\'s historic crown jewel: Rye/Bourbon Whiskey, Sweet Red Vermouth and Angostura Bitters.',
      it: 'Il gioiello storico di New York: Rye o Bourbon Whiskey, Vermouth Rosso Dolce e Angostura.',
      es: 'La joya histórica de Nueva York: Rye o Bourbon Whiskey, Vermut Rojo Dulce y Angostura.',
      fr: 'Le joyau historique de New York: Rye ou Bourbon Whiskey, Vermouth Rouge Doux et Angostura.',
      pt: 'A joia histórica de Nova York: Rye ou Bourbon Whiskey, Vermute Tinto Doce e Angostura.',
      de: 'Das historische Kronjuwel New Yorks: Rye/Bourbon Whiskey, roter Wermut und Angostura Bitter.',
    },
    description: {
      en: 'Created at the Manhattan Club in NYC around 1874. Deep, velvety, spiced and finished with a Maraschino cherry.',
      it: 'Creato al Manhattan Club di New York nel 1874. Caldo, vellutato, speziato e guarnito con ciliegina.',
      es: 'Creado en el Manhattan Club de Nueva York en 1874. Cálido, aterciopelado y especiado.',
      fr: 'Créé au Manhattan Club de New York en 1874. Profond, soyeux et garni d\'une cerise au marasquin.',
      pt: 'Criado no Manhattan Club de Nova York em 1874. Envolvente, aveludado e com cereja ao marasquino.',
      de: 'Um 1874 im Manhattan Club in New York kreiert. Samtig, würzig und mit Maraschino-Kirsche.',
    },
  },
  'whiskey-sour': {
    tagline: {
      en: 'The classic balance of sour and sweet: Bourbon Whiskey, fresh lemon juice, simple syrup and silky foam.',
      it: 'Il perfetto equilibrio agrodolce: Bourbon Whiskey, succo di limone fresco, zucchero e schiuma vellutata.',
      es: 'El equilibrio perfecto agridulce: Bourbon Whiskey, zumo de limón fresco, jarabe y espuma sedosa.',
      fr: 'L\'équilibre parfait entre acidité et douceur: Bourbon Whiskey, jus de citron frais, sucre et mousse soyeuse.',
      pt: 'O equilíbrio perfeito agridoce: Bourbon Whiskey, suco de limão fresco, açúcar e espuma sedosa.',
      de: 'Die klassische Balance aus Süße und Säure: Bourbon Whiskey, frischer Zitronensaft, Sirup und feiner Schaum.',
    },
    description: {
      en: 'One of the oldest surviving cocktails (1870). The acidity of fresh lemon balances the sweet vanilla wood of Bourbon.',
      it: 'Uno dei drink storici più amati dal 1870. L\'acidità del limone taglia le note dolci e vanigliate del Bourbon.',
      es: 'Uno de los cócteles más antiguos y apreciados (1870). El limón equilibra las notas de vainilla del Bourbon.',
      fr: 'L\'un des plus grands classiques depuis 1870. L\'acidité du citron équilibre le boisé vanillé du Bourbon.',
      pt: 'Um dos drinks mais amados desde 1870. A acidez do limão equilibra a baunilha do Bourbon.',
      de: 'Einer der traditionsreichsten Sours seit 1870. Frische Zitrone balanciert die Bourbon-Noten perfekt aus.',
    },
  },
  'daiquiri': {
    tagline: {
      en: 'The pure Cuban holy trinity: Cuban White Rum, freshly squeezed lime juice and fine sugar (3:2:1).',
      it: 'La santissima trinità caraibica: Rum Bianco cubano, succo di lime fresco e zucchero raffinato.',
      es: 'La santísima trinidad cubana: Ron Blanco cubano, zumo de lima recién exprimido y azúcar.',
      fr: 'La sainte trinité cubaine: Rhum Blanc cubain, jus de citron vert frais et sucre fin.',
      pt: 'A santíssima trindade cubana: Rum Branco cubano, suco de limão fresco e açúcar fino.',
      de: 'Die kubanische Dreifaltigkeit: Weißer kubanischer Rum, frischer Limettensaft und feiner Zucker.',
    },
    description: {
      en: 'Invented in Santiago de Cuba around 1898. Pure, crisp, refreshing and the ultimate benchmark of bar balance.',
      it: 'Nato a Santiago di Cuba nel 1898. Fresco, acido, vibrante e prova del nove di ogni barista.',
      es: 'Nacido en Santiago de Cuba en 1898. Puro, fresco, equilibrado y el examen definitivo de todo barman.',
      fr: 'Né à Cuba vers 1898. Pur, acidulé, désaltérant et véritable mètre étalon de la mixologie.',
      pt: 'Nascido em Cuba por volta de 1898. Puro, refrescante, cítrico e a prova de fogo de qualquer bartender.',
      de: 'Um 1898 in Santiago de Cuba entstanden. Kristallklar, knackig-frisch und die Messlatte für Bar-Balance.',
    },
  },
};

// Localized Category Names
export function getLocalizedCategory(category: string, lang: Language): string {
  if (lang === 'it') return category;

  const lower = category.toLowerCase();
  if (lower.includes('aperitivi')) {
    const map: Record<Language, string> = {
      en: 'Italian Aperitifs & Spritz',
      it: 'Aperitivi Italiani',
      es: 'Aperitivos Italianos & Spritz',
      fr: 'Apéritifs Italiens & Spritz',
      pt: 'Aperitivos Italianos & Spritz',
      de: 'Italienische Aperitifs & Spritz',
    };
    return map[lang] || map.en;
  }
  if (lower.includes('unforgettables') || lower.includes('classici storici')) {
    const map: Record<Language, string> = {
      en: 'The Unforgettables (Historic Classics)',
      it: 'The Unforgettables (IBA Classici Storici)',
      es: 'Los Inolvidables (Clásicos Históricos)',
      fr: 'Les Inoubliables (Classiques Historiques)',
      pt: 'Os Inesquecíveis (Clássicos Históricos)',
      de: 'The Unforgettables (Historische Klassiker)',
    };
    return map[lang] || map.en;
  }
  if (lower.includes('contemporary') || lower.includes('moderni')) {
    const map: Record<Language, string> = {
      en: 'Contemporary Classics (Modern Era)',
      it: 'Contemporary Classics (IBA Moderni)',
      es: 'Clásicos Contemporáneos (Era Moderna)',
      fr: 'Classiques Contemporains (Ère Moderne)',
      pt: 'Clássicos Contemporâneos (Era Moderna)',
      de: 'Contemporary Classics (Moderne Ära)',
    };
    return map[lang] || map.en;
  }

  return category;
}

// Localized Flavor Profiles
const FLAVOR_TRANSLATIONS: Record<string, Record<Language, string>> = {
  'frizzante': { en: 'Sparkling', it: 'Frizzante', es: 'Burbujeante', fr: 'Pétillant', pt: 'Com gás', de: 'Spritzig' },
  'agrumato': { en: 'Citrusy', it: 'Agrumato', es: 'Cítrico', fr: 'Citronné', pt: 'Cítrico', de: 'Zitrusartig' },
  'dolce-amaro': { en: 'Bittersweet', it: 'Dolce-Amaro', es: 'Agridulce / Amargo', fr: 'Amer-Doux', pt: 'Agridoce / Amargo', de: 'Bittersüß' },
  'rinfrescante': { en: 'Refreshing', it: 'Rinfrescante', es: 'Refrescante', fr: 'Rafraîchissant', pt: 'Refrescante', de: 'Erfrischend' },
  'dissetante': { en: 'Thirst-quenching', it: 'Dissetante', es: 'Calmante', fr: 'Désaltérant', pt: 'Refrescante', de: 'Durstlöschend' },
  'secco': { en: 'Dry', it: 'Secco', es: 'Seco', fr: 'Sec', pt: 'Seco', de: 'Trocken' },
  'aromatico': { en: 'Aromatic', it: 'Aromatico', es: 'Aromático', fr: 'Aromatique', pt: 'Aromático', de: 'Aromatisch' },
  'speziato': { en: 'Spiced', it: 'Speziato', es: 'Especiado', fr: 'Épicé', pt: 'Especiado', de: 'Würzig' },
  'forte': { en: 'Strong', it: 'Forte', es: 'Fuerte', fr: 'Fort', pt: 'Forte', de: 'Kräftig' },
  'fruttato': { en: 'Fruity', it: 'Fruttato', es: 'Afrutado', fr: 'Fruité', pt: 'Frutado', de: 'Fruchtig' },
  'erbaceo': { en: 'Herbal', it: 'Erbaceo', es: 'Herbáceo', fr: 'Herbacé', pt: 'Herbáceo', de: 'Kräuterig' },
  'cremoso': { en: 'Creamy', it: 'Cremoso', es: 'Cremoso', fr: 'Crémeux / Onctueux', pt: 'Cremoso', de: 'Cremig' },
  'affumicato': { en: 'Smoky', it: 'Affumicato', es: 'Ahumado', fr: 'Fumé', pt: 'Defumado', de: 'Rauchig' },
  'tropicale': { en: 'Tropical', it: 'Tropicale', es: 'Tropical', fr: 'Tropical', pt: 'Tropical', de: 'Tropisch' },
  'dolce': { en: 'Sweet', it: 'Dolce', es: 'Dulce', fr: 'Doux / Sucré', pt: 'Doce', de: 'Süß' },
  'amaro': { en: 'Bitter', it: 'Amaro', es: 'Amargo', fr: 'Amer', pt: 'Amargo', de: 'Bitter' },
  'elegante': { en: 'Elegant', it: 'Elegante', es: 'Elegante', fr: 'Élégant', pt: 'Elegante', de: 'Elegant' },
  'complesso': { en: 'Complex', it: 'Complesso', es: 'Complejo', fr: 'Complexe', pt: 'Complexo', de: 'Komplex' },
  'vellutato': { en: 'Silky', it: 'Vellutato', es: 'Aterciopelado', fr: 'Velouté', pt: 'Aveludado', de: 'Seidig' },
  'balsamico': { en: 'Balsamic', it: 'Balsamico', es: 'Balsámico', fr: 'Balsamique', pt: 'Balsâmico', de: 'Balsamisch' },
};

export function getLocalizedFlavorProfile(flavors: string[], lang: Language): string[] {
  if (lang === 'it') return flavors;
  return flavors.map((f) => {
    const lower = f.toLowerCase();
    for (const [k, trans] of Object.entries(FLAVOR_TRANSLATIONS)) {
      if (lower.includes(k)) {
        return trans[lang] || trans.en;
      }
    }
    return f;
  });
}
