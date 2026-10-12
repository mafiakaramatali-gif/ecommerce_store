import { MenuItem, GalleryItem, Testimonial, FeatureCard } from '../types';

// Import local image assets
import logoImg from '../assets/logo.jpg';
import chefImg from '../assets/images/female_executive_chef_1787986253267.jpg';
import chefCookingImg from '../assets/images/female_chef_cooking_1787986431866.jpg';
import burgerImg from '../assets/burger.jpg';
import pizzaImg from '../assets/pizza.jpg';
import steakImg from '../assets/steak.jpg';
import dessertImg from '../assets/dessert.jpg';

export { logoImg, chefImg, chefCookingImg, burgerImg, pizzaImg, steakImg, dessertImg };

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'b1',
    name: 'Castle Royal Gourmet Burger',
    category: 'Burgers',
    price: 16.99,
    description: 'Double juicy Angus beef patty, gold-leaf smoked cheddar, caramelized onions, crispy turkey bacon & signature Castle sauce.',
    image: burgerImg,
    isPopular: true,
    isChefSpecial: true,
    rating: 4.9,
    prepTime: '15-20 min'
  },
  {
    id: 'b2',
    name: 'Truffle Mushroom Smash Burger',
    category: 'Burgers',
    price: 15.49,
    description: 'Smashed prime beef patty, white truffle aioli, wild sautéed mushrooms, Swiss cheese on a toasted brioche bun.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800',
    isPopular: true,
    rating: 4.8,
    prepTime: '12-15 min'
  },
  {
    id: 'b3',
    name: 'Crispy Gold Zinger Burger',
    category: 'Burgers',
    price: 13.99,
    description: 'Golden fried chicken breast, spicy jalapeno coleslaw, house pickle slices, spicy gold glaze.',
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&q=80&w=800',
    isSpicy: true,
    rating: 4.7,
    prepTime: '15 min'
  },
  {
    id: 'p1',
    name: 'Food Castle Wood-Fired Pizza',
    category: 'Pizza',
    price: 21.99,
    description: 'Hand-stretched dough, artisan Italian pepperoni, creamy buffalo mozzarella, San Marzano tomato basil sauce.',
    image: pizzaImg,
    isPopular: true,
    isChefSpecial: true,
    rating: 5.0,
    prepTime: '18-22 min'
  },
  {
    id: 'p2',
    name: 'Quattro Formaggi Gold',
    category: 'Pizza',
    price: 19.99,
    description: 'Rich blend of Gorgonzola, Aged Parmesan, Fresh Mozzarella, and Ricotta topped with truffle honey drizzle.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800',
    isVeg: true,
    rating: 4.9,
    prepTime: '15-20 min'
  },
  {
    id: 'p3',
    name: 'Smoked BBQ Chicken Pizza',
    category: 'Pizza',
    price: 18.99,
    description: 'Slow-smoked chicken tenders, red onions, cilantro, mozzarella, and hickory BBQ sauce base.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    prepTime: '18 min'
  },
  {
    id: 'm1',
    name: 'Prime Reserve Filet Mignon',
    category: 'Main Course',
    price: 34.99,
    description: '8oz USDA Prime beef tenderloin served with garlic herb butter, grilled asparagus, and gold-dusted potato puree.',
    image: steakImg,
    isPopular: true,
    isChefSpecial: true,
    rating: 4.9,
    prepTime: '20-25 min'
  },
  {
    id: 'm2',
    name: 'Pan-Seared Atlantic Salmon',
    category: 'Main Course',
    price: 28.99,
    description: 'Crispy skin salmon fillet, lemon saffron risotto, baby spinach, and roasted cherry tomatoes.',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    prepTime: '20 min'
  },
  {
    id: 'm3',
    name: 'Creamy Truffle Alfredo Pasta',
    category: 'Main Course',
    price: 22.49,
    description: 'Fresh handmade fettuccine in a rich black truffle parmesan cream sauce with wild woodland mushrooms.',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281288?auto=format&fit=crop&q=80&w=800',
    isVeg: true,
    rating: 4.7,
    prepTime: '15-18 min'
  },
  {
    id: 'f1',
    name: 'Castle Gold Loaded Nachos',
    category: 'Fast Food',
    price: 12.99,
    description: 'Crispy tortilla chips, melted cheese sauce, guacamole, pico de gallo, pickled jalapenos, and sour cream.',
    image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&q=80&w=800',
    isPopular: true,
    rating: 4.7,
    prepTime: '10 min'
  },
  {
    id: 'f2',
    name: 'Crispy Garlic Parmesan Wings',
    category: 'Fast Food',
    price: 14.49,
    description: '8 pieces of golden fried wings tossed in roasted garlic butter, aged parmesan, and fresh parsley.',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    prepTime: '15 min'
  },
  {
    id: 'd1',
    name: 'Royal Gold Chocolate Lava Cake',
    category: 'Desserts',
    price: 11.99,
    description: 'Warm Belgian chocolate molten cake with edible 24k gold leaf flakes, served with Madagascar vanilla gelato.',
    image: dessertImg,
    isPopular: true,
    isChefSpecial: true,
    rating: 5.0,
    prepTime: '12 min'
  },
  {
    id: 'd2',
    name: 'Classic New York Cheesecake',
    category: 'Desserts',
    price: 9.99,
    description: 'Velvety cream cheese cake on a graham cracker crust, topped with fresh raspberry coulis and fresh mint.',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    prepTime: '5 min'
  },
  {
    id: 'dr1',
    name: 'Castle Golden Passion Mocktail',
    category: 'Drinks',
    price: 8.99,
    description: 'Fresh passionfruit juice, sparkling botanical tonic, mint sprig, lime wedge, and edible gold shimmer.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800',
    isPopular: true,
    rating: 4.9,
    prepTime: '5 min'
  },
  {
    id: 'dr2',
    name: 'Signature Iced Caramel Macchiato',
    category: 'Drinks',
    price: 6.99,
    description: 'Freshly pulled espresso shots with cold milk, dark chocolate drizzle, and velvety golden caramel.',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
    prepTime: '5 min'
  }
];

export const SPECIAL_FEATURES: FeatureCard[] = [
  {
    id: '1',
    title: 'Fresh Ingredients',
    description: '100% farm-sourced, organic, and handpicked daily to guarantee unrivaled freshness and vibrant taste.',
    iconName: 'Leaf'
  },
  {
    id: '2',
    title: 'Expert Chefs',
    description: 'Master culinary artists with over 15+ years of Michelin-star level international cooking expertise.',
    iconName: 'ChefHat'
  },
  {
    id: '3',
    title: 'Premium Taste',
    description: 'Exquisite flavor pairings, custom-crafted sauces, and signature recipes passed down through generations.',
    iconName: 'Sparkles'
  },
  {
    id: '4',
    title: 'Great Ambience',
    description: 'A luxurious dark-and-gold dining atmosphere with romantic warm lighting, cozy seating, and gentle music.',
    iconName: 'Utensils'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Fresh & Quality Food',
    description: 'Zero frozen shortcuts. We cook every dish fresh to order using premium grade ingredients.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Experienced Chefs',
    description: 'Our culinary team brings passion, artistic presentation, and global food culture to your plate.',
    icon: 'Award'
  },
  {
    title: 'Elegant Environment',
    description: 'Immerse yourself in a royal black and metallic gold sanctuary designed for memorable moments.',
    icon: 'Sparkles'
  },
  {
    title: 'Fast & Attentive Service',
    description: 'Hassle-free dining with prompt kitchen turnarounds and warm, polite hospitality staff.',
    icon: 'Clock'
  },
  {
    title: 'Affordable Luxury',
    description: 'Five-star gourmet dining experiences offered at honest, customer-friendly prices.',
    icon: 'DollarSign'
  },
  {
    title: '100% Customer Satisfaction',
    description: 'Over 10,000+ 5-star reviews praising our hospitality, cleanliness, and unforgettable taste.',
    icon: 'HeartHandshake'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Alexander Wright',
    role: 'Food Critic & Blogger',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    comment: 'Food Castle Restaurant exceeded all my expectations! The Castle Royal Gourmet Burger was juicy, perfectly seasoned, and the gold-accented atmosphere made us feel like royalty.',
    date: 'August 2, 2026'
  },
  {
    id: '2',
    name: 'Sophia Martinez',
    role: 'Regular Guest',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    comment: 'The Wood-Fired Pizza has the crispiness and flavor of authentic Naples wood ovens. Chef’s passion really shows in every dish. Highly recommended!',
    date: 'July 28, 2026'
  },
  {
    id: '3',
    name: 'David & Emma Chen',
    role: 'Anniversary Dinner',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    comment: 'We celebrated our 5th wedding anniversary here. The Filet Mignon melted in our mouth, and the Chocolate Lava Cake with 24k gold leaf was the highlight of our night!',
    date: 'July 20, 2026'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Signature Gourmet Burger',
    category: 'Dishes',
    image: burgerImg,
    description: 'Angus beef patty with gold glaze and caramelized onions'
  },
  {
    id: 'g2',
    title: 'Wood-Fired Pizza Oven',
    category: 'Dishes',
    image: pizzaImg,
    description: 'Artisan hand-stretched pizza with fresh buffalo mozzarella'
  },
  {
    id: 'g3',
    title: 'Executive Chef Cooking In Action',
    category: 'Chef',
    image: chefCookingImg,
    description: 'Chef Eleanor sautéing fresh organic ingredients over flame in the gourmet kitchen'
  },
  {
    id: 'g4',
    title: 'Executive Chef Eleanor Vance',
    category: 'Chef',
    image: chefImg,
    description: 'Master of culinary arts with over 15+ years of luxury dining excellence'
  },
  {
    id: 'g5',
    title: 'Prime Reserve Steak',
    category: 'Dishes',
    image: steakImg,
    description: 'Tenderloin filet mignon with garlic herb butter glaze'
  },
  {
    id: 'g6',
    title: 'Royal Gold Dessert',
    category: 'Dishes',
    image: dessertImg,
    description: 'Molten Belgian chocolate lava cake with gold leaf flakes'
  },
  {
    id: 'g7',
    title: 'Luxury Dining Hall',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
    description: 'Our luxurious dark-and-gold ambient restaurant interior'
  }
];
