export interface User {
  id: string;
  name: string;
  email: string;
  profileImage?: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  ingredients: string[];
  instructions: string[];
  category: string;
  tags: string[];
  author: User;
  ratings: number;
  reviews: Review[];
  createdAt: string;
}

export interface Review {
  id: string;
  user: User;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  signup: (name: string, email: string, password: string) => void;
  logout: () => void;
  loading: boolean;
  error: string | null;
}