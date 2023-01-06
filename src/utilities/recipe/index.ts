import { Recipe } from "../../types";
import getValueByKey from "../getValueByKey";
import setValueByKey from "../setValueByKey";

export const templateRecipe: Recipe = {
  category: "",
  description: "",
  ingredients: [],
  directions: [],
  prepTime: "",
  cookTime: "",
  servings: "",
  inspiredBy: "",
  notes: [],
  reviews: [],
};

export const upsertRecipeByIndex = (recipe: Recipe, index: number): void => {
  const recipeHistory = getValueByKey("recipeHistory");
  if (index < recipeHistory.length) {
    recipeHistory[index] = recipe;
  } else if (index === -1) {
    recipeHistory.unshift(recipe);
  }
  setValueByKey("recipeHistory", recipeHistory);
};

export const removeRecipeByIndex = (index: number): void => {
  const recipeHistory = getValueByKey("recipeHistory");
  recipeHistory.splice(index, 1);
  setValueByKey("recipeHistory", recipeHistory);
};

export const getRecipeHistory = (): Recipe[] => {
  const recipeHistory = getValueByKey("recipeHistory");
  return recipeHistory;
};
