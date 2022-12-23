export interface NavBarLinkNameAndUrl {
  linkName: string;
  url: string;
}

export interface Recipe {
  ingredients: string[];
  directions: string[];
  category?: string;
  description?: string;
  rating?: number;
  inspiredBy?: string;
  images?: [];
  prepTime?: number;
  cookTime?: number;
  totalTime?: number;
  servings?: number;
  notes?: string[];
  reviews?: string[];
}
