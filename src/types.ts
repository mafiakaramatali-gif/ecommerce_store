export interface MenuItem {
  id: string;
  name: string;
  category: 'Burgers' | 'Pizza' | 'Main Course' | 'Fast Food' | 'Drinks' | 'Desserts';
  price: number;
  description: string;
  image: string;
  isPopular?: boolean;
  isChefSpecial?: boolean;
  isSpicy?: boolean;
  isVeg?: boolean;
  rating: number;
  prepTime: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  specialInstructions?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Dishes' | 'Interior' | 'Chef' | 'Events';
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ReservationFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  occasion?: string;
  specialRequests?: string;
}
