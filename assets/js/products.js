/**
 * FLASH TRANSIT - Base de Données Officielle des Produits
 */

const PRODUCTS_DATA = [
  // ==========================================
  // LUNDI : High-Tech, Informatique, Consoles & Téléphonie
  // ==========================================
  {
    id: "phone-01",
    day: "lundi",
    dayLabel: "Lundi - High-Tech & Téléphonie",
    category: "lundi",
    gender: "mixte",
    name: "iPhone XR 128GB (Débloqué / WiFi)",
    priceXOF: 45000,
    priceKMF: 35000,
    badge: "Bon Plan 📱",
    image: "assets/images/IMG-20261012-WA0106.jpg",
    description: "iPhone XR capacité 128Go, disponible en plusieurs coloris (Jaune, Rouge, Bleu, Blanc)."
  },
  {
    id: "phone-02",
    day: "lundi",
    dayLabel: "Lundi - High-Tech & Téléphonie",
    category: "lundi",
    gender: "mixte",
    name: "iPhone 11 128GB (Double Appareil Photo)",
    priceXOF: 50000,
    priceKMF: 38000,
    badge: "Populaire 🔥",
    image: "assets/images/IMG-20261012-WA0107.jpg",
    description: "iPhone 11 128Go en excellent état, coloris variés au choix."
  },
  {
    id: "tech-01",
    day: "lundi",
    dayLabel: "Lundi - High-Tech & Téléphonie",
    category: "lundi",
    gender: "mixte",
    name: "Console de Jeux Portable Rétro X12 (MP5 + 2 Manettes sans fil)",
    priceXOF: 18000,
    priceKMF: 13500,
    badge: "Gaming",
    image: "assets/images/IMG-20261012-WA0077.jpg",
    description: "Console portable 5.1 pouces avec 1000 jeux intégrés et double manette sans fil."
  },
  {
    id: "tech-02",
    day: "lundi",
    dayLabel: "Lundi - High-Tech & Téléphonie",
    category: "lundi",
    gender: "mixte",
    name: "Console Rétro Portable Transparente (Violet)",
    priceXOF: 14000,
    priceKMF: 10500,
    badge: "Gaming",
    image: "assets/images/IMG-20261012-WA0083.jpg",
    description: "Console de jeux rétro design transparent avec sticks analogiques."
  },
  {
    id: "tech-03",
    day: "lundi",
    dayLabel: "Lundi - High-Tech & Téléphonie",
    category: "lundi",
    gender: "mixte",
    name: "Ordinateur Portable Ultra-Fin Fujitsu Lifebook",
    priceXOF: 125000,
    priceKMF: 95000,
    badge: "Professionnel",
    image: "assets/images/IMG-20261012-WA0080.jpg",
    description: "PC portable professionnel léger, clavier ergonomique et performance fiable."
  },
  {
    id: "tech-04",
    day: "lundi",
    dayLabel: "Lundi - High-Tech & Téléphonie",
    category: "lundi",
    gender: "mixte",
    name: "Ultrabook Xiaomi Mi Laptop 13.3\" (i5)",
    priceXOF: 150000,
    priceKMF: 115000,
    badge: "Premium",
    image: "assets/images/IMG-20261012-WA0096.jpg",
    description: "PC portable Xiaomi design aluminium fin, processeur Core i5 et écran Full HD."
  },

  // ==========================================
  // MARDI : Bijoux, Accessoires & Perruques (Femme)
  // ==========================================
  {
    id: "hair-01",
    day: "mardi",
    dayLabel: "Mardi - Bijoux & Accessoires",
    category: "mardi",
    gender: "femme",
    name: "Perruque Lace Front Wig Ondulée Miel & Chocolat",
    priceXOF: 25000,
    priceKMF: 19000,
    badge: "Femme 👩",
    image: "assets/images/IMG-20261012-WA0113.jpg",
    description: "Perruque longue wavy mèches lumineuses, effet naturel soyeux."
  },
  {
    id: "hair-02",
    day: "mardi",
    dayLabel: "Mardi - Bijoux & Accessoires",
    category: "mardi",
    gender: "femme",
    name: "Perruque Cheveux Naturels Noirs Brillants Longueur Média",
    priceXOF: 22000,
    priceKMF: 16500,
    badge: "Femme 👩",
    image: "assets/images/IMG-20261012-WA0114.jpg",
    description: "Chevelure souple, dense et douce au toucher."
  },
  {
    id: "hair-03",
    day: "mardi",
    dayLabel: "Mardi - Bijoux & Accessoires",
    category: "mardi",
    gender: "femme",
    name: "Modèle Perruque Wavy Ombré Brown & Balayage",
    priceXOF: 28000,
    priceKMF: 21000,
    badge: "Femme 👩",
    image: "assets/images/IMG-20261012-WA0115.jpg",
    description: "Coupe volumineuse avec dégradé chaleureux et lace transparente."
  },
  {
    id: "hair-04",
    day: "mardi",
    dayLabel: "Mardi - Bijoux & Accessoires",
    category: "mardi",
    gender: "femme",
    name: "Perruque Bouclée Kinky Curly Courte & Dense",
    priceXOF: 20000,
    priceKMF: 15000,
    badge: "Femme 👩",
    image: "assets/images/IMG-20261012-WA0116.jpg",
    description: "Boucles serrées bien définies, style afro-chic tendance."
  },

  // ==========================================
  // MERCREDI : Mode Homme
  // ==========================================
  {
    id: "mode-h-01",
    day: "mercredi",
    dayLabel: "Mercredi - Mode Homme",
    category: "mercredi",
    gender: "homme",
    name: "Ensemble Casual Été T-shirt & Short Blanc",
    priceXOF: 15000,
    priceKMF: 11200,
    badge: "Homme 👨",
    image: "assets/images/IMG-20261012-WA0072.jpg",
    description: "Ensemble streetwear stylé et confortable, idéal pour les beaux jours."
  },
  {
    id: "mode-h-02",
    day: "mercredi",
    dayLabel: "Mercredi - Mode Homme",
    category: "mercredi",
    gender: "homme",
    name: "Chemise / T-shirt Élégant Col Mao avec Boutons",
    priceXOF: 12000,
    priceKMF: 9000,
    badge: "Homme 👨",
    image: "assets/images/IMG-20261012-WA0073.jpg",
    description: "Haut chic à col montant texturé, coupe moderne et soignée."
  },
  {
    id: "mode-h-03",
    day: "mercredi",
    dayLabel: "Mercredi - Mode Homme",
    category: "mercredi",
    gender: "homme",
    name: "Ensemble Chemise Manches Courtes & Short Cargo Texturé",
    priceXOF: 18000,
    priceKMF: 13500,
    badge: "Homme 👨",
    image: "assets/images/IMG-20261012-WA0074.jpg",
    description: "Ensemble estival disponible en plusieurs coloris tendance."
  },

  // ==========================================
  // VENDREDI : Beauté, Cosmétiques & Nail Art (Femme)
  // ==========================================
  {
    id: "nail-01",
    day: "vendredi",
    dayLabel: "Vendredi - Beauté & Cosmétiques",
    category: "vendredi",
    gender: "femme",
    name: "Kit de Faux Ongles Press-on Nails (Nail Art Tendance)",
    priceXOF: 3500,
    priceKMF: 2600,
    badge: "Femme 👩",
    image: "assets/images/IMG-20261002-WA0006.jpg",
    description: "Ensemble de faux ongles prêts à poser avec motifs chics et brillants."
  },
  {
    id: "nail-02",
    day: "vendredi",
    dayLabel: "Vendredi - Beauté & Cosmétiques",
    category: "vendredi",
    gender: "femme",
    name: "Capsules d'Ongles Décorées (Modèles Variés)",
    priceXOF: 3500,
    priceKMF: 2600,
    badge: "Femme 👩",
    image: "assets/images/IMG-20261002-WA0007.jpg",
    description: "Styles variés et colorés pour manucure professionnelle express."
  },
  {
    id: "nail-03",
    day: "vendredi",
    dayLabel: "Vendredi - Beauté & Cosmétiques",
    category: "vendredi",
    gender: "femme",
    name: "Faux Ongles Manucure Effet Marbré & Strass",
    priceXOF: 4000,
    priceKMF: 3000,
    badge: "Femme 👩",
    image: "assets/images/IMG-20261002-WA0008.jpg",
    description: "Finition haut de gamme pour des mains élégantes en toute occasion."
  },
  {
    id: "lip-01",
    day: "vendredi",
    dayLabel: "Vendredi - Beauté & Cosmétiques",
    category: "vendredi",
    gender: "femme",
    name: "Coffret de 3 Rouges à Lèvres Liquides Mat Dragon Ranee",
    priceXOF: 5000,
    priceKMF: 3750,
    badge: "Femme 👩",
    image: "assets/images/IMG-20261002-WA0010.jpg",
    description: "Ensemble de teintes mates longue tenue ultra-pigmentées."
  },
  {
    id: "lip-02",
    day: "vendredi",
    dayLabel: "Vendredi - Beauté & Cosmétiques",
    category: "vendredi",
    gender: "femme",
    name: "Rouge à Lèvres Mat Velouté 'Oxygen Girl'",
    priceXOF: 3000,
    priceKMF: 2250,
    badge: "Femme 👩",
    image: "assets/images/IMG-20261002-WA0011.jpg",
    description: "Texture douce effet velours et rendu naturel effet nude/terracotta."
  },
  {
    id: "lip-03",
    day: "vendredi",
    dayLabel: "Vendredi - Beauté & Cosmétiques",
    category: "vendredi",
    gender: "femme",
    name: "Mini Rouges à Lèvres Format Capsule",
    priceXOF: 2500,
    priceKMF: 1850,
    badge: "Femme 👩",
    image: "assets/images/IMG-20261002-WA0012.jpg",
    description: "Set de mini rouges à lèvres originaux en forme de capsule, faciles à transporter."
  },
  {
    id: "lip-04",
    day: "vendredi",
    dayLabel: "Vendredi - Beauté & Cosmétiques",
    category: "vendredi",
    gender: "femme",
    name: "Encre à Lèvres Peel-off Longue Tenue Romantic Bear",
    priceXOF: 3000,
    priceKMF: 2250,
    badge: "Femme 👩",
    image: "assets/images/IMG-20261002-WA0013.jpg",
    description: "Gloss pelable pour colorer durablement les lèvres toute la journée sans transfert."
  }
];