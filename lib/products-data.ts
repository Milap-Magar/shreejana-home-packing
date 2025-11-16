export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  fullDescription: string;
  origin: string;
  nutritionInfo: {
    calories: string;
    protein: string;
    fat: string;
    carbs: string;
  };
  bestSeller?: boolean;
}

export const products: Product[] = [
  // Existing Data (Almonds, Cashews, Yellow Raisins, Mixed Nuts, Walnuts, Pistachios)
  {
    id: "almonds",
    name: "Fresh Almonds",
    price: "18.99",
    image: "/product/Almond.jpg",
    description:
      "Premium quality organic almonds rich in nutrients and antioxidants",
    fullDescription:
      "Our fresh almonds are researched and imported. Rich in vitamin E and magnesium, these creamy and crunchy almonds are perfect for snacking or adding to your recipes.",
    origin: "Ilam District, Nepal",
    nutritionInfo: {
      calories: "164 per oz",
      protein: "6g",
      fat: "14g",
      carbs: "6g",
    },
  },
  {
    id: "cashews",
    name: "Plain Cashews",
    price: "22.99",
    image: "/product/Cashewnut.jpg",
    description: "Creamy and buttery raw cashews, naturally unsalted and whole",
    fullDescription:
      "Experience the rich, buttery flavor of our raw cashews. Sourced from sustainable farms in Nepal, these whole nuts are packed with healthy fats and essential minerals like copper and zinc.",
    origin: "Morang District, Nepal",
    nutritionInfo: {
      calories: "155 per oz",
      protein: "5g",
      fat: "12g",
      carbs: "9g",
    },
  },
  {
    id: "mixednuts",
    name: "Mixed Dry Fruits & Nuts",
    price: "16.99",
    image: "/product/Mixnuts.jpg",
    description:
      "Best-selling premium blend of dry fruits and nuts for daily energy & nutrition",
    fullDescription:
      "Our Mixed Dry Fruits & Nuts is the most loved and best-selling product in our collection. A perfect blend of almonds, cashews, pistachios, raisins, and walnuts — crafted for maximum freshness, nutrition, and flavor. Ideal for gifting, snacking, and boosting your daily energy.",
    origin: "Chitwan Valley, Nepal",
    nutritionInfo: {
      calories: "150 per 30g",
      protein: "4g",
      fat: "9g",
      carbs: "14g",
    },
    bestSeller: true,
  },
  {
    id: "walnutpeeled",
    name: "Special Peeled Walnuts",
    price: "19.99",
    image: "/product/WalnutPeeled.jpg",
    description:
      "Raw organic walnuts rich in omega-3 fatty acids and antioxidants",
    fullDescription:
      "Our organic walnuts are sourced from small family farms in the Himalayan foothills. Rich in omega-3 fatty acids and antioxidants, they support heart and brain health. Perfect for breakfast bowls or snacking.",
    origin: "Kaski District, Nepal",
    nutritionInfo: {
      calories: "185 per oz",
      protein: "4.3g",
      fat: "18.5g",
      carbs: "3.9g",
    },
  },
  {
    id: "yellowraisins",
    name: "Yellow Raisins",
    price: "14.99",
    image: "/product/yellowraisin.jpg",
    description:
      "Sun-dried golden raisins with natural sweetness and chewy texture",
    fullDescription:
      "Our golden raisins are naturally sun-dried without any artificial additives. They offer a perfect balance of sweetness and tanginess, ideal for cooking, baking, or eating as a healthy snack.",
    origin: "Jhapa District, Nepal",
    nutritionInfo: {
      calories: "85 per 1/4 cup",
      protein: "1g",
      fat: "0.2g",
      carbs: "22g",
    },
  },
  {
    id: "pistachios",
    name: "Roasted Pistachios & Salted Pista",
    price: "24.99",
    image: "/product/Pista.jpg",
    description: "Lightly roasted pistachios with a delicate salt coating",
    fullDescription:
      "These lightly roasted pistachios are seasoned with sea salt from the Himalayan region. They offer a perfect balance of flavor and nutrition, making them an ideal choice for health-conscious snackers.",
    origin: "Dhading District, Nepal",
    nutritionInfo: {
      calories: "160 per oz",
      protein: "6g",
      fat: "14g",
      carbs: "8g",
    },
  },
  // --- New Data Added Based on Image File Names ---
  {
    id: "apricots",
    name: "Dried Apricots",
    price: "12.50",
    image: "/product/Apricot.jpg",
    description:
      "Naturally sweet, chewy dried apricots, a great source of Vitamin A and fiber.",
    fullDescription:
      "Our sun-dried apricots are plump and tangy-sweet. A fantastic snack that's rich in iron and potassium, perfect for maintaining energy throughout the day. No added sugar.",
    origin: "Mustang District, Nepal",
    nutritionInfo: {
      calories: "78 per 1/4 cup",
      protein: "1.1g",
      fat: "0.1g",
      carbs: "20g",
    },
  },
  {
    id: "berryblend",
    name: "Berry Blend",
    price: "15.99",
    image: "/product/Berryblend.jpg",
    description: "Antioxidant-rich blend of dried berries for vitality.",
    fullDescription:
      "A vibrant mix of cranberries, blueberries, and raspberries. This blend is packed with antioxidants, promoting heart health and immunity. Excellent addition to cereals, yogurt, or salads.",
    origin: "Terai Region, Nepal",
    nutritionInfo: {
      calories: "100 per 1/4 cup",
      protein: "0.5g",
      fat: "0.5g",
      carbs: "25g",
    },
  },
  {
    id: "blackraisins",
    name: "Black Raisins",
    price: "13.99",
    image: "/product/BlackRaisin.jpg",
    description:
      "Dark, seedless raisins with a deep, concentrated sweetness and chewy texture.",
    fullDescription:
      "These black raisins are incredibly flavorful and naturally sweet. Known for their high iron content, they are a traditional remedy for anemia and great for boosting energy.",
    origin: "Bardiya District, Nepal",
    nutritionInfo: {
      calories: "80 per 1/4 cup",
      protein: "0.8g",
      fat: "0.1g",
      carbs: "21g",
    },
  },
  {
    id: "greenraisin",
    name: "Green Raisins",
    price: "14.50",
    image: "/product/Green Raisin.jpg",
    description:
      "Long, mild-flavored green raisins, naturally sweet and slightly tart.",
    fullDescription:
      "A unique variety of raisins, known for their elongated shape and pleasant, subtle flavor. They are sun-dried to a perfect chewiness, making them an interesting and healthy snack alternative.",
    origin: "Banke District, Nepal",
    nutritionInfo: {
      calories: "82 per 1/4 cup",
      protein: "1g",
      fat: "0.2g",
      carbs: "21g",
    },
  },
  {
    id: "hazelnuttreat",
    name: "Hazelnut Treat",
    price: "25.99",
    image: "/product/HazelnutTreat.jpg",
    description:
      "Gourmet roasted hazelnuts, a rich, buttery, and aromatic snack.",
    fullDescription:
      "Our hazelnuts are lightly roasted to bring out their warm, nutty flavor. They are a great source of Vitamin E and healthy monounsaturated fats. A luxurious treat for any occasion.",
    origin: "Sankhuwasabha District, Nepal",
    nutritionInfo: {
      calories: "178 per oz",
      protein: "4.2g",
      fat: "17g",
      carbs: "5g",
    },
  },
  {
    id: "meditereanmix",
    name: "Mediterranean Mix",
    price: "19.50",
    image: "/product/MediterianMix.jpg",
    description:
      "An exotic blend of nuts, seeds, and dried fruit inspired by the Mediterranean diet.",
    fullDescription:
      "This wholesome mix features cashews, pistachios, pine nuts, and sun-dried tomatoes (optional if focused on nuts/seeds, keeping it simple here). A savory-sweet blend for a taste of the Mediterranean.",
    origin: "Imported Blend",
    nutritionInfo: {
      calories: "140 per 30g",
      protein: "4g",
      fat: "10g",
      carbs: "10g",
    },
  },
  {
    id: "mixmasala",
    name: "Masala Nut Mix",
    price: "17.50",
    image: "/product/MixMasala.jpg",
    description:
      "A fiery blend of nuts seasoned with authentic Nepali spices (masala).",
    fullDescription:
      "Our unique mix of cashews and peanuts coated in a secret blend of garam masala and other authentic spices. It offers a zesty, savory kick perfect for evening snacking.",
    origin: "Kathmandu Valley, Nepal",
    nutritionInfo: {
      calories: "165 per oz",
      protein: "6g",
      fat: "13g",
      carbs: "7g",
    },
  },
  {
    id: "mixnut",
    name: "Everyday Mixnut",
    price: "15.99",
    image: "/product/Mixnut.jpg",
    description: "Simple, healthy mix of everyday nuts and seeds.",
    fullDescription:
      "A straightforward blend of almonds, cashews, and pumpkin seeds. It's an excellent source of daily essential nutrients and a hassle-free, energizing snack.",
    origin: "Local Sourcing",
    nutritionInfo: {
      calories: "160 per 30g",
      protein: "5g",
      fat: "13g",
      carbs: "7g",
    },
  },
  {
    id: "nutseedmix",
    name: "Nut & Seed Mix",
    price: "18.99",
    image: "/product/Nut&SeedMix.jpg",
    description:
      "A power-packed mix of nuts and healthy seeds for maximum nutritional impact.",
    fullDescription:
      "This blend combines the crunch of nuts with the goodness of seeds (sunflower, pumpkin, chia). It’s designed to provide a comprehensive profile of vitamins, minerals, and healthy fats. High in fiber and protein.",
    origin: "Various Nepalese Districts",
    nutritionInfo: {
      calories: "155 per 30g",
      protein: "6g",
      fat: "12g",
      carbs: "6g",
    },
  },
  {
    id: "plaincashew",
    name: "Plain Cashewnut",
    price: "21.99",
    image: "/product/PlainCashewnut.jpg",
    description: "Just cashews. Raw, whole, and perfectly plain.",
    fullDescription:
      "Our most straightforward cashew offering. These are raw, whole, and completely unsalted or seasoned, preserving the pure, buttery flavor of the finest cashews.",
    origin: "Morang District, Nepal",
    nutritionInfo: {
      calories: "155 per oz",
      protein: "5g",
      fat: "12g",
      carbs: "9g",
    },
  },
  {
    id: "pumpkinseed",
    name: "Roasted Pumpkin Seed",
    price: "11.99",
    image: "/product/PumpkinSeed.jpg",
    description: "Lightly roasted pumpkin seeds, crunchy and nutritious.",
    fullDescription:
      "Rich in magnesium and zinc, these pepitas are lightly roasted for a satisfying crunch. A perfect source of plant-based protein, ideal for topping salads or eating solo.",
    origin: "Rupandehi District, Nepal",
    nutritionInfo: {
      calories: "126 per oz",
      protein: "5g",
      fat: "5g",
      carbs: "15g",
    },
  },
  {
    id: "roastedandsaltedpista",
    name: "Roasted & Salted Pista (Premium)",
    price: "26.99",
    image: "/product/Roasted&SaltedPista.jpg",
    description: "Top-grade pistachios, perfectly roasted and sea-salted.",
    fullDescription:
      "These are our premium shelled pistachios, fire-roasted to achieve a deep, nutty flavor and lightly seasoned with gourmet sea salt. They are simply the best for a luxurious snacking experience.",
    origin: "Dhading District, Nepal",
    nutritionInfo: {
      calories: "160 per oz",
      protein: "6g",
      fat: "14g",
      carbs: "8g",
    },
  },
  {
    id: "special150gm",
    name: "Special Pack 150gm",
    price: "9.99",
    image: "/product/Special150gm.jpg",
    description:
      "Sampler pack of our best-selling mixed nuts, perfect for trying or gifting.",
    fullDescription:
      "A conveniently sized 150gm pack containing a selection of our finest dry fruits and nuts. Great for a healthy travel snack or a small gift.",
    origin: "Chitwan Valley, Nepal",
    nutritionInfo: {
      calories: "155 per 30g",
      protein: "4g",
      fat: "10g",
      carbs: "12g",
    },
  },
  {
    id: "special300gm",
    name: "Special Pack 300gm",
    price: "18.99",
    image: "/product/Special300gm.jpg",
    description: "Large, economical pack of our popular mixed dry fruits.",
    fullDescription:
      "A 300gm pack offering a great value on our customer-favorite mixed nuts blend. Ideal for regular snacking or family use.",
    origin: "Chitwan Valley, Nepal",
    nutritionInfo: {
      calories: "155 per 30g",
      protein: "4g",
      fat: "10g",
      carbs: "12g",
    },
  },
  {
    id: "sunflowerseeds",
    name: "Sunflower Seeds",
    price: "9.50",
    image: "/product/SunflowerSeeds.jpg",
    description:
      "Shelled sunflower seeds, a source of Vitamin E and healthy oils.",
    fullDescription:
      "Deliciously crunchy and mildly nutty. Our shelled sunflower seeds are perfect for baking, mixing into granola, or enjoying straight from the bag. A healthy dose of Vitamin E and selenium.",
    origin: "Kailali District, Nepal",
    nutritionInfo: {
      calories: "164 per oz",
      protein: "5.8g",
      fat: "14.5g",
      carbs: "6.8g",
    },
  },
  {
    id: "walnutdana",
    name: "Walnut Dana (Halves & Pieces)",
    price: "18.50",
    image: "/product/WalnutDana.jpg",
    description:
      "Broken walnut pieces, ideal for baking, cooking, and adding to desserts.",
    fullDescription:
      "These are high-quality walnut halves and pieces, perfect for recipes where you need a consistent texture. They offer the same omega-3 benefits as whole walnuts at a great value.",
    origin: "Jumla District, Nepal",
    nutritionInfo: {
      calories: "185 per oz",
      protein: "4.3g",
      fat: "18.5g",
      carbs: "3.9g",
    },
  },
];
