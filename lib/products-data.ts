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
    id: "raisins",
    name: "Yellow  Raisins",
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
    id: "walnuts",
    name: "Special Walnuts",
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
];
