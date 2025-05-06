
export interface Product {
  id: string;
  name: string;
  category: "yoga" | "decor" | "furniture" | "accessories";
  price: number;
  currency: string;
  description: string;
  shortDescription: string;
  features: string[];
  images: string[];
  sustainabilityInfo: string;
  materials: string[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "cork-yoga-mat",
    name: "Premium Cork Yoga Mat",
    category: "yoga",
    price: 89.99,
    currency: "USD",
    description: "Our premium cork yoga mats are made from sustainably harvested cork and natural rubber, offering superior grip that actually improves with moisture. The natural antimicrobial properties of cork ensure your mat stays fresh and odor-free, while the 5mm thickness provides optimal cushioning for your joints. These eco-friendly mats are biodegradable and contain no PVC, TPE, or other toxic materials.",
    shortDescription: "Eco-friendly yoga mat with natural antimicrobial properties",
    features: [
      "Naturally antimicrobial surface",
      "Improved grip with moisture",
      "5mm thickness for optimal cushioning",
      "Made from sustainable cork and natural rubber",
      "No PVC, TPE or toxic materials",
      "Biodegradable"
    ],
    images: [
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
    ],
    sustainabilityInfo: "Cork is one of the most sustainable materials available. It's harvested from the bark of cork oak trees without harming the tree, which continues to grow and can be harvested again every 9-12 years. The rubber base is sustainably sourced and naturally biodegradable.",
    materials: ["Cork", "Natural Rubber"],
    inStock: true
  },
  {
    id: "bamboo-desk-organizer",
    name: "Bamboo Desk Organizer",
    category: "decor",
    price: 45.99,
    currency: "USD",
    description: "Bring order to your workspace with our elegant bamboo desk organizer. Crafted from sustainably harvested bamboo, this organizer features multiple compartments for your stationery, devices, and small office essentials. The natural bamboo grain creates a unique pattern on each piece, making your organizer one-of-a-kind. The smooth, water-resistant finish ensures durability while maintaining the natural beauty of bamboo.",
    shortDescription: "Elegant bamboo organizer with multiple compartments",
    features: [
      "Multiple storage compartments",
      "Sustainable bamboo construction",
      "Water-resistant finish",
      "Natural antimicrobial properties",
      "Stackable design",
      "Unique natural grain pattern"
    ],
    images: [
      "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
    ],
    sustainabilityInfo: "Bamboo is one of the fastest-growing plants on Earth, making it an incredibly renewable resource. Our bamboo is sustainably harvested from managed forests, and we use water-based, non-toxic finishes to protect the wood.",
    materials: ["Bamboo", "Non-toxic Finish"],
    inStock: true
  },
  {
    id: "bamboo-cutlery-set",
    name: "Travel Bamboo Cutlery Set",
    category: "accessories",
    price: 24.99,
    currency: "USD",
    description: "Our travel bamboo cutlery set includes a knife, fork, spoon, chopsticks, and a cleaning brush, all packed in a convenient roll-up canvas pouch. The utensils are crafted from sustainably harvested bamboo and finished with food-safe oil. Lightweight yet durable, these utensils are perfect for everyday use at work, travel, or outdoor adventures. By using this reusable set, you're helping reduce single-use plastic waste.",
    shortDescription: "Portable bamboo cutlery set in canvas pouch",
    features: [
      "Complete set with knife, fork, spoon, and chopsticks",
      "Comes with canvas carrying pouch",
      "Naturally antimicrobial bamboo",
      "Food-safe finish",
      "Lightweight and portable",
      "Reduces single-use plastic waste"
    ],
    images: [
      "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
    ],
    sustainabilityInfo: "By choosing reusable bamboo cutlery, you're helping reduce the 40 billion plastic utensils thrown away each year in the US alone. Our bamboo is sustainably harvested, and the canvas pouches are made from organic cotton.",
    materials: ["Bamboo", "Organic Cotton"],
    inStock: true
  },
  {
    id: "bamboo-floor-lamp",
    name: "Bamboo Floor Lamp",
    category: "furniture",
    price: 149.99,
    currency: "USD",
    description: "Illuminate your space with our elegant bamboo floor lamp. The shade combines handwoven bamboo strips with organic cotton, creating a warm, diffused light perfect for creating a cozy atmosphere. The solid bamboo base provides stability and natural beauty, while the energy-efficient LED bulb included with the lamp reduces energy consumption. Each lamp is crafted by skilled artisans, ensuring attention to detail and exceptional quality.",
    shortDescription: "Artisanal floor lamp with bamboo base and woven shade",
    features: [
      "Handcrafted bamboo frame",
      "Handwoven bamboo and cotton shade",
      "Energy-efficient LED bulb included",
      "Three-way brightness settings",
      "Approximately 5ft tall",
      "Supports artisanal communities"
    ],
    images: [
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843",
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
    ],
    sustainabilityInfo: "This lamp combines sustainable materials with energy-efficient technology. The bamboo is sustainably harvested, and we work with artisan cooperatives that provide fair wages and good working conditions. The LED bulb uses up to 80% less energy than traditional bulbs and lasts up to 25 times longer.",
    materials: ["Bamboo", "Organic Cotton", "LED Technology"],
    inStock: true
  },
  {
    id: "cork-coaster-set",
    name: "Cork Coaster Set",
    category: "decor",
    price: 28.99,
    currency: "USD",
    description: "Protect your surfaces with our elegant set of six cork coasters. Each coaster features unique patterns cut into the cork surface, inspired by traditional Indian designs. The natural properties of cork make these coasters absorbent and slip-resistant, while their durability ensures they'll last for years. The cork material is naturally antimicrobial and easy to clean with a damp cloth. These versatile coasters work perfectly in any decor style, from modern to traditional.",
    shortDescription: "Set of six decorative cork coasters with Indian-inspired designs",
    features: [
      "Set of six uniquely designed coasters",
      "Thick 5mm cork construction",
      "Naturally absorbent and slip-resistant",
      "Heat resistant up to 300°F",
      "Traditional Indian-inspired patterns",
      "Eco-friendly packaging"
    ],
    images: [
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
      "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
    ],
    sustainabilityInfo: "Cork harvesting is one of the most sustainable agricultural practices in the world. The cork oak tree is not cut down to harvest cork; only the bark is carefully stripped by skilled harvesters. This process causes no harm to the tree, which continues to grow and can be harvested again every 9-12 years.",
    materials: ["Cork"],
    inStock: true
  },
  {
    id: "bamboo-hanging-planter",
    name: "Bamboo Hanging Planter",
    category: "decor",
    price: 35.99,
    currency: "USD",
    description: "Bring nature indoors with our handcrafted bamboo hanging planter. The geometric design combines bamboo rods with organic cotton rope to create a modern yet natural home for your favorite plants. The planter includes a ceramic pot with drainage holes and a matching saucer to protect your surfaces. The cotton rope is adjustable, allowing you to customize the height of your planter. This versatile piece works well with a variety of plants, from trailing vines to compact succulents.",
    shortDescription: "Modern geometric hanging planter made from bamboo and cotton rope",
    features: [
      "Handcrafted geometric design",
      "Includes ceramic pot with drainage",
      "Adjustable cotton rope hanger",
      "Supports up to 5 pounds",
      "Easy to assemble",
      "Works with various plant types"
    ],
    images: [
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9",
      "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
    ],
    sustainabilityInfo: "Our bamboo planters combine sustainable materials with traditional craftsmanship. The bamboo is sustainably harvested from managed forests, and the cotton rope is organic and biodegradable. By choosing natural materials over plastic planters, you're reducing environmental impact and supporting sustainable agriculture.",
    materials: ["Bamboo", "Organic Cotton", "Ceramic"],
    inStock: true
  }
];
