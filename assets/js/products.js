/**
 * FLASH TRANSIT - Base de Données des Produits
 * Structuré par Planning Hebdomadaire (Prix FCFA et KMF)
 */

const PRODUCTS_DATA = [
  // LUNDI : High-Tech
  {
    id: "tech-01",
    day: "lundi",
    dayLabel: "Lundi - High Tech",
    category: "Ordinateur",
    name: "MacBook Pro M3 Max (16\" / 36GB / 1TB)",
    priceXOF: 1950000,
    priceKMF: 1500000,
    badge: "Haut de gamme",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80",
    description: "Performances extrêmes pour professionnels. Importation directe Chine."
  },
  {
    id: "tech-02",
    day: "lundi",
    dayLabel: "Lundi - High Tech",
    category: "iPhone",
    name: "iPhone 15 Pro Max 512GB - Titanium",
    priceXOF: 850000,
    priceKMF: 650000,
    badge: "Arrivage Chine",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&auto=format&fit=crop&q=80",
    description: "Neuf scellé avec garantie. Envoi express par avion."
  },
  {
    id: "tech-03",
    day: "lundi",
    dayLabel: "Lundi - High Tech",
    category: "Casque & Écouteurs",
    name: "AirPods Max & Sony WH-1000XM5",
    priceXOF: 260000,
    priceKMF: 200000,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&auto=format&fit=crop&q=80",
    description: "Réduction de bruit active, son haute fidélité."
  },

  // MARDI : Bijoux & Accessoires
  {
    id: "jewel-01",
    day: "mardi",
    dayLabel: "Mardi - Bijoux & Accessoires",
    category: "Colliers & Bracelets",
    name: "Parure de Luxe Plaqué Or 24K",
    priceXOF: 85000,
    priceKMF: 65000,
    badge: "Luxe",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop&q=80",
    description: "Finition raffinée, résistant à l'eau, garanti anti-allergie."
  },
  {
    id: "jewel-02",
    day: "mardi",
    dayLabel: "Mardi - Bijoux & Accessoires",
    category: "Lunettes",
    name: "Lunettes de Soleil Tendance Style T-Charge",
    priceXOF: 35000,
    priceKMF: 27000,
    badge: "Tendance",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop&q=80",
    description: "Protection UV400, monture renforcée haute durabilité."
  },

  // MERCREDI : Mode Homme
  {
    id: "man-01",
    day: "mercredi",
    dayLabel: "Mercredi - Mode Homme",
    category: "Costumes",
    name: "Costume Sur-Mesure 3 Pièces Coupe Italienne",
    priceXOF: 120000,
    priceKMF: 90000,
    badge: "Élégance",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=80",
    description: "Tissu premium respirant, idéal pour cérémonies et business."
  },

  // JEUDI : Sacs & Chaussures
  {
    id: "shoes-01",
    day: "jeudi",
    dayLabel: "Jeudi - Chaussures & Sacs",
    category: "Sacs femme",
    name: "Sac à Main Cuir Véritable Haute Couture",
    priceXOF: 75000,
    priceKMF: 58000,
    badge: "Luxe VIP",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop&q=80",
    description: "Design élégant avec fermeture sécurisée et finitions soignées."
  },

  // VENDREDI : Cosmétiques
  {
    id: "beauty-01",
    day: "vendredi",
    dayLabel: "Vendredi - Beauté & Parfums",
    category: "Parfums",
    name: "Coffret Parfum de Luxe Eau de Parfum (100ml)",
    priceXOF: 85000,
    priceKMF: 65000,
    badge: "Exclusif",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&auto=format&fit=crop&q=80",
    description: "Sillage intense et longue tenue. Flacon haute parfumerie."
  }
];