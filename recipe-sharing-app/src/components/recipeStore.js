import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [], // ⭐ NEW: Array of favorite recipe IDs
  recommendations: [], // 💡 NEW: Array of recommended recipes
  
  // Add a new recipe
  addRecipe: (newRecipe) => set((state) => ({ 
    recipes: [...state.recipes, newRecipe] 
  })),
  
  // Delete a recipe by ID
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  })),
  
  // Update an existing recipe
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe => 
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),
  
  // Set all recipes at once
  setRecipes: (recipes) => set({ recipes }),
  
  // Set the search term
  setSearchTerm: (term) => set({ searchTerm: term }),
  
  // Filter recipes based on search term
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  // ⭐ NEW: Add a recipe to favorites
  addFavorite: (recipeId) => set((state) => ({
    favorites: [...state.favorites, recipeId]
  })),

  // ⭐ NEW: Remove a recipe from favorites
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  // 💡 NEW: Generate personalized recommendations
  // This looks at your favorites and suggests similar recipes
  generateRecommendations: () => set((state) => {
    // Get all favorite recipes
    const favoriteRecipes = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id)
    );

    // If user has no favorites, recommend random popular recipes
    if (favoriteRecipes.length === 0) {
      const randomRecipes = state.recipes
        .filter(recipe => !state.favorites.includes(recipe.id))
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      return { recommendations: randomRecipes };
    }

    // Extract keywords from favorite recipes
    const favoriteKeywords = favoriteRecipes
      .map(recipe => recipe.title.toLowerCase().split(' '))
      .flat();

    // Find recipes that share keywords with favorites (but aren't already favorites)
    const recommended = state.recipes
      .filter(recipe => !state.favorites.includes(recipe.id)) // Not already a favorite
      .map(recipe => {
        // Count how many keywords match
        const recipeWords = (recipe.title + ' ' + recipe.description).toLowerCase();
        const matchCount = favoriteKeywords.filter(keyword => 
          recipeWords.includes(keyword)
        ).length;
        return { ...recipe, matchCount };
      })
      .filter(recipe => recipe.matchCount > 0) // Has at least one match
      .sort((a, b) => b.matchCount - a.matchCount) // Sort by relevance
      .slice(0, 3); // Get top 3 recommendations

    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;