export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price?: string;
  category: string;
  image?: string;
  featured?: boolean;
  spicy?: boolean;
  glutenFree?: boolean;
  chefsSpecial?: boolean;
  orderLink?: string;
}

export const menuData: MenuItem[] = [
  // Specialty Rolls
  {
    id: 1,
    name: 'Golden Knights Roll',
    description: 'Colorful assortment of fresh vegetables and avocado topped with vibrant plant-based sashimi',
    category: 'Specialty Rolls',
    image: '/images/menu/golden-knights-vegan-sushi-roll-las-vegas.webp',
    featured: true,
    orderLink: 'https://order.toasttab.com/online/basil-vegan-thai/item-golden-knights-roll_3d297b4d-408b-4da4-bc14-7f2d608e79fa'
  },
  {
    id: 3,
    name: 'Basil Eggplant and Tofu Rice',
    description: 'Stir-fry Thai basil, eggplant, and tofu in chef\'s sauce, including celery, jalapeno, and red bell peppers. Served with steamed white rice',
    category: 'Thai Entrees',
    image: '/images/menu/basil-eggplant-tofu-vegan-thai-dish.webp',
    featured: true,
    price: '$17.50',
    orderLink: 'https://order.toasttab.com/online/basil-vegan-thai/item-basil-eggplant-and-tofu-rice_5a3ce2cd-3ee8-4053-a2f8-c1f02b87d0a9'
  },

  // Thai Entrees
  {
    id: 10,
    name: 'Green Curry',
    description: 'Rich coconut curry with Thai basil, bell peppers, and your choice of protein',
    category: 'Thai Entrees',
    image: '/images/menu/vegan-green-curry-thai-basil-henderson.webp',
    featured: true,
    spicy: true,
    orderLink: 'https://order.toasttab.com/online/basil-vegan-thai/item-green-curry-rice_82c44a7b-fc64-45ce-a830-decef3896831'
  },
  {
    id: 11,
    name: 'Tom Yum Soup',
    description: 'Authentic spicy and sour Thai soup with lemongrass, galangal, and lime leaves',
    category: 'Thai Entrees',
    image: '/images/menu/vegan-tom-yum-soup-henderson-thai.webp',
    featured: true,
    spicy: true,
    orderLink: 'https://order.toasttab.com/online/basil-vegan-thai/item-tom-yum-soup_6377d2d4-abfa-4646-babe-fba8ad733f53'
  },
  {
    id: 12,
    name: 'Sesame Chicken',
    description: 'Crispy plant-based chicken tossed in sweet sesame sauce with vegetables',
    category: 'Thai Entrees',
    image: '/images/menu/sesame-chicken-vegan-thai-basil.webp',
    featured: true,
    orderLink: 'https://order.toasttab.com/online/basil-vegan-thai/item-sesame-chicken-rice-_f497e1e9-9d97-44a4-84bc-b286f5fda256'
  },
  {
    id: 13,
    name: 'Drunken Noodles',
    description: 'Spicy Thai basil noodles with vegetables and plant-based protein',
    category: 'Thai Entrees',
    spicy: true
  },
  {
    id: 14,
    name: 'Massaman Curry',
    description: 'Mild coconut curry with potatoes, peanuts, and aromatic spices',
    category: 'Thai Entrees'
  },
  {
    id: 15,
    name: 'Vegan Larb',
    description: 'Traditional Thai larb salad with plant-based protein, fresh herbs, lime, and chili. A rare vegan larb option in Las Vegas',
    category: 'Thai Entrees',
    spicy: true,
    chefsSpecial: true
  },

  // Appetizers
  {
    id: 20,
    name: 'Spring Rolls',
    description: 'Fresh vegetable spring rolls with peanut dipping sauce',
    category: 'Appetizers'
  },
  {
    id: 21,
    name: 'Satay Skewers',
    description: 'Grilled plant-based satay with peanut sauce and cucumber relish',
    category: 'Appetizers'
  },
  {
    id: 22,
    name: 'Tom Kha Soup',
    description: 'Creamy coconut soup with galangal, lemongrass, and mushrooms',
    category: 'Appetizers'
  },

  // Fried Rice & Noodles
  {
    id: 30,
    name: 'Basil Fried Rice',
    description: 'Spicy Thai basil fried rice with vegetables, jalapeños, and plant-based protein',
    category: 'Fried Rice & Noodles',
    spicy: true
  },
  {
    id: 31,
    name: 'Pineapple Fried Rice',
    description: 'Sweet and savory fried rice with pineapple, cashews, and curry powder',
    category: 'Fried Rice & Noodles'
  },
  {
    id: 32,
    name: 'Tom Yum Fried Rice',
    description: 'Fried rice with fried tofu, green beans, mushrooms, tofu-egg, red onions, and tomatoes with a mild and tangy chef\'s sauce',
    category: 'Fried Rice & Noodles',
    image: '/images/menu/tom-yum-fried-rice.png',
    spicy: true,
    featured: true,
    price: '$15.50',
    orderLink: 'https://order.toasttab.com/online/basil-vegan-thai/item-tom-yum-fried-rice_e2dc253e-e36c-4cfc-adc1-a43dcc856b84'
  },
];

export const categories = [
  'Specialty Rolls',
  'Thai Entrees',
  'Appetizers',
  'Fried Rice & Noodles'
];
