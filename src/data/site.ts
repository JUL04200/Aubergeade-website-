export const restaurant = {
  name: "L'Aubergeade",
  displayTitle: "Restaurant français | L'Aubergeade | Paris",
  tagline: "Bistrot parisien sans prétention",
  address: {
    line1: "17 rue Chaligny",
    postalCode: "75012",
    city: "Paris",
    country: "France",
    metro: "Reuilly-Diderot",
  },
  phone: "+33 1 43 44 33 36",
  phoneHref: "tel:+33143443336",
  email: "cnadir12@gmail.com",
  menuPdfUrl: "https://cdn.website.dish.co/media/83/a9/9911052/Menu.pdf",
  mapEmbedUrl:
    "https://www.google.com/maps?q=17+rue+Chaligny,+75012+Paris,+France&output=embed",
  mapLinkUrl:
    "https://www.google.com/maps/search/?api=1&query=17+rue+Chaligny+75012+Paris",
} as const;

export const hours = [
  { day: "Lundi", lunch: null, dinner: null },
  { day: "Mardi", lunch: null, dinner: null },
  { day: "Mercredi", lunch: "12h00 – 14h00", dinner: "19h00 – 22h30" },
  { day: "Jeudi", lunch: "12h00 – 14h00", dinner: "19h00 – 22h30" },
  { day: "Vendredi", lunch: "12h00 – 14h00", dinner: "19h00 – 23h00" },
  { day: "Samedi", lunch: "12h00 – 14h00", dinner: "19h00 – 23h00" },
  { day: "Dimanche", lunch: "12h00 – 14h00", dinner: "19h00 – 22h30" },
] as const;

export const paymentMethods = [
  "American Express",
  "Espèces",
  "Paiement sans contact",
  "MasterCard",
  "VISA",
  "Carte de débit",
  "Maestro",
  "Tickets restaurant",
  "Ticket Restaurant®",
] as const;

export type Dish = { name: string; price?: string };

export const pettisEncas: Dish[] = [
  { name: "Chiffonnade de jambon italien", price: "7,60 €" },
  { name: "Boîte de sardines ou maquereaux La Belle-Iloise", price: "7,60 €" },
  { name: "Toast de pain d'épice grillé au foie gras mi-cuit maison", price: "7,60 €" },
  { name: "Coupelle de saucisse sèche", price: "6,00 €" },
];

export const menu3780 = {
  title: "Menu à 37,80 € / 35,80 €",
  subtitle: "37,80 € : Entrée + Plat + Dessert · 35,80 € : Entrée + Plat ou Plat + Dessert",
  entrees: [
    { name: "Douzaine d'escargots de Bourgogne au beurre d'ail et persil maison" },
    {
      name: "Foie gras travaillé à l'armagnac, fleur de sel et poivre de Madagascar, accompagné d'une confiture de figues corses",
    },
  ] as Dish[],
  plats: [
    {
      name: "Magret de canard (IGP) entier grillé, sauce au caramel de beurre salé, écrasé de pommes de terre à la ciboulette",
    },
    {
      name: "Steak tartare de bœuf non préparé, classique ou aller-retour, grosses frites maison, feuilles de chêne en salade",
    },
    {
      name: "Calamars frais marinés aux herbes et épices puis grillés, condiment à l'huile d'olive, aneth, persil, cerfeuil, oignons rouges, citron et ail, micro-pousses de légumes et garniture du jour",
    },
  ] as Dish[],
  desserts: [
    { name: "Omelette norvégienne de la maison flambée au rhum" },
    { name: "Baba au rhum, crème sucrée, amandes effilées" },
    { name: "Café affogato" },
    { name: "Assiette de fromages, confiture de cerises noires corse" },
  ] as Dish[],
  note: "Le poisson peut varier en fonction des arrivages. Le menu peut être accommodé pour les végétariens.",
};

export const menu4180 = {
  title: "Menu à 41,80 € / 39,80 €",
  subtitle: "41,80 € : Entrée + Plat + Dessert · 39,80 € : Entrée + Plat ou Plat + Dessert",
  entrees: [
    {
      name: "Os à moelle façon bistrot (gros sel, mignonnette et pain grillé), petite salade de persil plat aux câpres et émincé d'oignons",
    },
    { name: "Tartare de truite de mer, fruits de la passion, cébette, gingembre, aneth" },
  ] as Dish[],
  plats: [
    { name: "Homard entier rôti au beurre demi-sel, sauce tartare, garniture du jour", price: "+ 5 €" },
    {
      name: "Noix d'entrecôte d'Argentine marinée aux épices de la maison Thiercellin puis juste grillée, sauce béarnaise servie à part, grosses frites maison",
    },
    { name: "Souris d'agneau confite 5 heures, couscous roulé à la main, pois chiches et jus de cuisson réduit" },
    { name: "Ris de veau, fricassée de champignons de Paris au muscat et pousses d'épinards" },
    { name: "Assiette de grosses gambas grillées, sauce teriyaki, citron grillé et garniture du jour" },
  ] as Dish[],
  desserts: [
    { name: "Omelette norvégienne de la maison flambée au rhum" },
    { name: "Baba au rhum, crème sucrée, amandes effilées" },
    { name: "Coupe de sorbets ou glaces" },
  ] as Dish[],
  note: "Le poisson peut varier en fonction des arrivages. Le menu peut être accommodé pour les végétariens.",
};

export const carteEntrees: Dish[] = [
  { name: "Douzaine d'escargots de Bourgogne au beurre d'ail et persil maison", price: "15,30 €" },
  {
    name: "Foie gras de canard travaillé à l'armagnac, fleur de sel et poivre de Madagascar, accompagné d'une confiture de figues corses",
    price: "18,70 €",
  },
  {
    name: "Os à moelle façon bistrot, petite salade de persil plat aux câpres et émincé d'oignons",
    price: "15,70 €",
  },
  { name: "Tartare de truite de mer, fruits de la passion, cébette, gingembre, aneth", price: "9,50 €" },
];

export const cartePlats: Dish[] = [
  {
    name: "Magret de canard (IGP) entier grillé, sauce au caramel de beurre salé, écrasé de pommes de terre à la ciboulette",
    price: "25,70 €",
  },
  {
    name: "Steak tartare de bœuf non préparé, classique ou aller-retour, grosses frites maison, feuilles de chêne en salade",
    price: "19,60 €",
  },
  {
    name: "Noix d'entrecôte d'Argentine marinée aux épices de la maison Thiercellin, sauce béarnaise à part, grosses frites maison",
    price: "29,60 €",
  },
  { name: "Homard entier rôti au beurre demi-sel, sauce tartare, garniture du jour", price: "37,70 €" },
  {
    name: "Calamars frais marinés aux herbes et épices puis grillés, condiment aux herbes, citron et ail, micro-pousses et garniture du jour",
    price: "28,70 €",
  },
  { name: "Souris d'agneau confite 5 heures, couscous roulé à la main, pois chiches et jus réduit", price: "27,20 €" },
  { name: "Ris de veau, fricassée de champignons de Paris au muscat et pousses d'épinards", price: "30,20 €" },
  { name: "Assiette de grosses gambas grillées, sauce teriyaki, citron grillé et garniture du jour", price: "28,70 €" },
];

export const winesBottles = {
  rouges: [
    { name: "Côtes du Roussillon (AOC)", price: "28,50 €" },
    { name: "Pic Saint Loup (AOC)", price: "35,00 €" },
    { name: "Terrasse du Larzac (AOP)", price: "35,00 €" },
    { name: "Rasteau (AOC)", price: "35,00 €" },
    { name: "Beaumes de Venise bio (AOP)", price: "34,00 €" },
    { name: "Crozes-Hermitage (AOP)", price: "37,00 €" },
    { name: "Costières de Nîmes (AOP)", price: "35,00 €" },
    { name: "Mercurey (AOC)", price: "45,00 €" },
    { name: "Brouilly (AOC)", price: "32,00 €" },
    { name: "Blaye (AOC)", price: "28,50 €" },
    { name: "Le p'tit cab (Anjou)", price: "27,50 €" },
    { name: "Saumur-Champigny (AOC)", price: "30,00 €" },
  ] as Dish[],
  blancs: [
    { name: "Cheverny (AOC)", price: "28,50 €" },
    { name: "Chenin (AOC)", price: "31,00 €" },
    { name: "Quincy (AOC)", price: "31,00 €" },
    { name: "Viré-Clessé (AOC)", price: "42,00 €" },
    { name: "Montagny 1er cru (AOC)", price: "36,00 €" },
    { name: "Mâcon Village (AOC)", price: "33,00 €" },
    { name: "Crozes-Hermitage (AOC)", price: "37,00 €" },
    { name: "Viognier (IGP)", price: "28,50 €" },
  ] as Dish[],
  rosesEtBulles: [
    { name: "Petite Seine (Vin de France)", price: "27,50 €" },
    { name: "Petit Chaumont vin gris (IGP)", price: "27,50 €" },
    { name: "Champagne", price: "47,00 €" },
    { name: "Coupe de champagne 12,5 cl", price: "8,00 €" },
    { name: "Prosecco", price: "25,50 €" },
    { name: "Verre de Prosecco", price: "5,90 €" },
  ] as Dish[],
};

export const carafesEtVerres = {
  headers: ["Vin", "50 cl", "25 cl", "Verre 12 cl"],
  rows: [
    ["Brouilly (AOC)", "15,90 €", "8,65 €", "6,20 €"],
    ["Blaye Côtes de Bordeaux (AOC)", "18,25 €", "10,30 €", "6,70 €"],
    ["Saint Chinian (AOP)", "15,90 €", "8,65 €", "6,20 €"],
    ["Côtes du Roussillon (AOC)", "15,90 €", "8,65 €", "6,20 €"],
    ["Bourgogne Hautes Côtes de Nuits (AOP)", "18,30 €", "9,80 €", "6,70 €"],
    ["Vin d'Anjou (AOC)", "15,90 €", "8,65 €", "6,20 €"],
    ["Porte-Plume Merlot (IGP)", "15,90 €", "8,65 €", "6,20 €"],
    ["Cheverny (AOC)", "15,90 €", "8,65 €", "6,20 €"],
    ["Mâcon Village (AOC)", "19,30 €", "10,30 €", "8,25 €"],
    ["Quincy (AOC)", "18,10 €", "9,70 €", "8,25 €"],
    ["Viognier Pays d'Oc (IGP)", "17,00 €", "9,15 €", "6,70 €"],
    ["Tariquet (IGP)", "17,00 €", "9,15 €", "6,70 €"],
    ["Le TiTi Méditerranée (AOP)", "14,80 €", "8,05 €", "5,50 €"],
    ["Petite Seine bio (vin de France)", "14,80 €", "8,05 €", "5,50 €"],
  ],
  cidre: "Cidre artisanal 33 cl : 6,15 €",
};

export const bieres: Dish[] = [
  { name: "Heineken", price: "6,30 €" },
  { name: "Bière blanche", price: "6,30 €" },
  { name: "Pelforth brune", price: "6,30 €" },
  { name: "Picon bière", price: "6,40 €" },
  { name: "Myrha (pale ale)", price: "6,40 €" },
  { name: "Chapelle (bière de blé au chai blanche)", price: "6,40 €" },
  { name: "Ernestine (IPA)", price: "6,40 €" },
  { name: "Oliphant (IPA bio à la française)", price: "6,40 €" },
  { name: "Bières du moment", price: "6,40 €" },
  { name: "Cerberus (triple bio)", price: "6,40 €" },
  { name: "Bière sans alcool", price: "6,40 €" },
];

export const aperitifs: Dish[] = [
  { name: "Kir royal 10 cl", price: "7,40 €" },
  { name: "Kir bourguignon 10 cl", price: "4,80 €" },
  { name: "Kir au sauvignon 10 cl", price: "4,80 €" },
  { name: "Martini rouge ou blanc 4 cl", price: "5,10 €" },
  { name: "Pastis 51 2 cl", price: "5,05 €" },
  { name: "Suze 4 cl", price: "5,10 €" },
  { name: "Porto rouge ou blanc 4 cl", price: "6,10 €" },
  { name: "Americano 6 cl", price: "5,10 €" },
  { name: "Muscat 4 cl", price: "5,05 €" },
];

export const digestifs = {
  items: [
    "Poire",
    "Mirabelle",
    "Get 27",
    "Get 31",
    "Calvados",
    "Cognac",
    "Armagnac",
    "Limoncello",
    "Menthe Pastille",
    "Chartreuse",
    "Amaretto",
  ],
  price: "9,00 € (4 cl, chacun)",
};

export const eauxEtSodas: Dish[] = [
  { name: "Coca-Cola 33 cl", price: "4,95 €" },
  { name: "Limonade artisanale 33 cl", price: "4,70 €" },
  { name: "Perrier 33 cl", price: "5,50 €" },
  { name: "Orezza 50 cl", price: "5,80 €" },
  { name: "Cidre brut Fils de Pomme 33 cl", price: "6,15 €" },
  { name: "Jus de fruit 25 cl", price: "4,80 €" },
  { name: "Jus d'oranges pressées 25 cl", price: "4,80 €" },
];

export const cafesEtThes: Dish[] = [
  { name: "Café expresso", price: "2,90 €" },
  { name: "Double café", price: "5,90 €" },
  { name: "Café crème", price: "4,00 €" },
  { name: "Thé Mariage Frères", price: "4,90 €" },
];

export const legal = {
  companyName: "L'Aubergeade SARL",
  representativeFirstName: "Nahdi",
  representativeLastName: "Cherifi",
  address: "17 rue Chaligny, 75012 Paris, France",
  phone: "+33 1 43 44 33 36",
  email: "cnadir12@gmail.com",
  registrationAuthority: "Registre du commerce et des sociétés de Paris",
  registrationNumber: "326 276 771 00010",
  vatNumber: "FR27326276771",
  shareCapital: "2 000 €",
};

export const aboutText = {
  lead:
    "L'Aubergeade est un petit bistrot sans prétention du 12ᵉ arrondissement, où la cuisine française traditionnelle se déguste sans chichis, dans une ambiance brasserie-cantine bon enfant.",
  body: "La carte évolue régulièrement au fil des saisons et des arrivages, mais l'esprit reste le même : des plats généreux et bien faits, comme un velouté d'endives au lard et miettes de pain d'épices, un filet de Saint-Pierre, un steak tartare, un risotto, des poireaux braisés ou l'incontournable omelette norvégienne maison.",
  patron:
    "À la tête de la maison, Nahdi accueille chaque client les bras ouverts, dans un cadre convivial et sympathique où l'on se sent vite comme chez soi.",
};

export const cuisineText = {
  intro:
    "Une cuisine française variée et traditionnelle, à savourer en salle climatisée ou, aux beaux jours, sur notre terrasse animée.",
  lunchDinner:
    "Une cuisine riche en traditions et au goût authentique, à découvrir aussi bien au déjeuner qu'au dîner.",
  vegetarian:
    "Des plats végétariens sont proposés à la carte, pour une gustation saine et gourmande accessible à tous.",
};

export const services = {
  title: "Événements privés",
  text:
    "L'Aubergeade se prête aux repas de groupe et aux événements privés, dans l'esprit convivial qui fait la réputation de la maison. Contactez-nous pour organiser votre déjeuner d'entreprise, votre anniversaire ou toute autre occasion.",
};
