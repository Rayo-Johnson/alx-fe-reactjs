import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  
  // Action to add a new recipe
  addRecipe: (newRecipe) => set((state) => ({ 
    recipes: [...state.recipes, newRecipe] 
  })),
  
  // Action to set all recipes at once
  setRecipes: (recipes) => set({ recipes })
}));

export default useRecipeStore;