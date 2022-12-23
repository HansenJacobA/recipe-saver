import { Recipe } from "../../types";
import getValueByKey from "../getValueByKey";
import setValueByKey from "../setValueByKey";

export const templateRecipe: Recipe = {
  ingredients: [],
  directions: [],
  category: "",
  description: "",
  rating: 0,
  inspiredBy: "",
  images: [],
  prepTime: 0,
  cookTime: 0,
  totalTime: 0,
  servings: 0,
  notes: [],
  reviews: [],
};

export const addRecipe = (recipe: Recipe) => {
  const recipeHistory = getValueByKey("recipeHistory");
  recipeHistory.push(recipe);
  setValueByKey("recipeHistory", recipeHistory);
};

export const removeRecipeByIndex = (index: number) => {
  const recipeHistory = getValueByKey("recipeHistory");
  recipeHistory.splice(index, 1);
  setValueByKey("recipeHistory", recipeHistory);
};
