// Sample data with meal types and full dish list
export const categories = [
  { id: "all", name: "All" },
  { id: "breakfast", name: "Breakfast" },
  { id: "lunch", name: "Lunch" },
  { id: "dinner", name: "Dinner" },
  { id: "indian", name: "Indian Specialties" },
  { id: "chinese", name: "Chinese Fusion" },
];

export const dishes = [
  {
    id: "1",
    name: "Paneer Butter Masala",
    description:
      "Soft paneer cubes simmered in a rich, creamy tomato sauce flavored with butter and aromatic spices.",
    price: 299.99,
    image: "public/Assets/panner_butter_masala.png",
    categoryId: "indian",
    mealType: "dinner",
    dietary: ["Vegetarian"],
  },
  {
    id: "2",
    name: "Chicken 65",
    description:
      "Spicy, deep-fried chicken chunks marinated with ginger, garlic, red chilies and aromatic spices. A popular South Indian appetizer.",
    price: 349.5,
    image: "public/Assets/chicken_65.png",
    categoryId: "indian",
    mealType: "lunch",
    dietary: ["Spicy", "Protein Rich"],
  },
  {
    id: "3",
    name: "Chicken Curry",
    description:
      "Tender chicken pieces cooked in a flavorful gravy with onions, tomatoes, and traditional Indian spice blend.",
    price: 329.99,
    image: "public/Assets/chicken_curry.png",
    categoryId: "indian",
    mealType: "dinner",
    dietary: ["Protein Rich"],
  },
  {
    id: "4",
    name: "Chilli Chicken",
    description:
      "Indo-Chinese specialty with crispy chicken tossed in a spicy sauce with bell peppers and green chilies.",
    price: 329.5,
    image: "public/Assets/chilly_chicken.png",
    categoryId: "indian",
    mealType: "lunch",
    dietary: ["Spicy", "Indo-Chinese"],
  },
  {
    id: "5",
    name: "Mutton Seekh Kebab",
    description:
      "Minced lamb mixed with herbs and spices, skewered and grilled to perfection. Served with mint chutney.",
    price: 399.99,
    image: "public/Assets/mutton_seekh_kebab.png",
    categoryId: "indian",
    mealType: "dinner",
    dietary: ["Protein Rich"],
  },
  {
    id: "6",
    name: "Chicken Biryani",
    description:
      "Fragrant basmati rice cooked with marinated chicken pieces, saffron, and aromatic spices. Served with raita.",
    price: 349,
    image: "public/Assets/chicken_biryani.png",
    categoryId: "indian",
    mealType: "lunch",
    dietary: ["Signature Dish"],
  },
  {
    id: "7",
    name: "Vegetable Pakora",
    description:
      "Mixed vegetables dipped in spiced gram flour batter and deep-fried. Served with tamarind and mint chutneys.",
    price: 199.99,
    image: "public/Assets/vegetable_pakora.png",
    categoryId: "indian",
    mealType: "breakfast",
    dietary: ["Vegetarian", "Vegan"],
  },
  {
    id: "8",
    name: "Avocado Toast",
    description:
      "Multigrain toast topped with smashed avocado, poached eggs, and microgreens.",
    price: 249.5,
    image: "public/Assets/avocado_toast.png",
    categoryId: "breakfast",
    mealType: "breakfast",
    dietary: ["Vegetarian"],
  },
  {
    id: "9",
    name: "Masala Dosa",
    description:
      "Crispy rice and lentil crepe filled with spiced potato filling. Served with coconut chutney and sambar.",
    price: 199.5,
    image: "public/Assets/masala_dosa.png",
    categoryId: "indian",
    mealType: "breakfast",
    dietary: ["Vegetarian", "South Indian"],
  },
  {
    id: "10",
    name: "Butter Chicken",
    description:
      "Tender chicken cooked in a creamy tomato sauce with butter and aromatic spices. A North Indian classic.",
    price: 349.99,
    image: "public/Assets/butter_chicken.png",
    categoryId: "indian",
    mealType: "dinner",
    dietary: ["Signature Dish"],
  },
  {
    id: "11",
    name: "Chilly Parotta",
    description:
      "Shredded layers of flaky parotta stir-fried with bell peppers, onions and spicy sauce. A popular South Indian street food fusion.",
    price: 279.5,
    image: "public/Assets/Chilly_Parotta.png",
    categoryId: "indian",
    mealType: "dinner",
    dietary: ["Spicy", "Street Food"],
  },
  {
    id: "12",
    name: "Chilly Paneer",
    description:
      "Crispy paneer cubes tossed in a spicy and tangy Indo-Chinese sauce with bell peppers and onions.",
    price: 289.5,
    image: "public/Assets/Chiily_Panner.png",
    categoryId: "chinese",
    mealType: "dinner",
    dietary: ["Spicy", "Vegetarian", "Indo-Chinese"],
  },
  {
    id: "13",
    name: "Chilly Mushroom Dry",
    description:
      "Crispy mushrooms stir-fried with bell peppers, onions, and spicy Indo-Chinese sauces.",
    price: 269.5,
    image: "public/Assets/Chilly_Mushroom_dy.png",
    categoryId: "chinese",
    mealType: "dinner",
    dietary: ["Spicy", "Vegetarian", "Indo-Chinese"],
  },
  {
    id: "14",
    name: "Dragon Paneer",
    description:
      "Spicy paneer cubes in fiery red sauce with bell peppers, onions and special dragon spices.",
    price: 309.5,
    image: "public/Assets/Dragon_Panner.png",
    categoryId: "chinese",
    mealType: "dinner",
    dietary: ["Very Spicy", "Vegetarian", "Indo-Chinese"],
  },
  {
    id: "15",
    name: "Gobi Manchurian Dry",
    description:
      "Crispy cauliflower florets tossed in a spicy, sweet, and tangy Manchurian sauce.",
    price: 249.5,
    image: "public/Assets/Gobi_Machurian_Dry.png",
    categoryId: "chinese",
    mealType: "lunch",
    dietary: ["Vegetarian", "Indo-Chinese"],
  },
  {
    id: "16",
    name: "Kaima Parotta",
    description:
      "Flaky, layered parotta served with spicy minced meat. A South Indian delicacy.",
    price: 299.5,
    image: "public/Assets/kaima_parotta.png",
    categoryId: "indian",
    mealType: "dinner",
    dietary: ["Spicy", "Street Food"],
  },
  {
    id: "17",
    name: "Mixed Schezwan Fried Rice",
    description:
      "Wok-tossed rice with vegetables, chicken, and egg in a spicy Schezwan sauce.",
    price: 279.5,
    image: "public/Assets/mixed_shezwan_fried_rice.png",
    categoryId: "chinese",
    mealType: "lunch",
    dietary: ["Spicy", "Indo-Chinese"],
  },
  {
    id: "18",
    name: "Mushroom Dry",
    description:
      "Stir-fried mushrooms with garlic, ginger, and aromatic spices. A flavorful appetizer.",
    price: 259.5,
    image: "public/Assets/Mushroom_dry.png",
    categoryId: "indian",
    mealType: "lunch",
    dietary: ["Vegetarian"],
  }
];
