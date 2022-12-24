export interface NavBarLinkNameAndUrl {
  linkName: string;
  url: string;
}

export interface Recipe {
  ingredients?: string[];
  directions?: string[];
  category?: string;
  description?: string;
  inspiredBy?: string;
  prepTime?: string;
  cookTime?: string;
  servings?: string;
  notes?: string[];
  reviews?: Review[];
}

export interface Review {
  rating?: string;
  review?: string;
  date: string;
}
