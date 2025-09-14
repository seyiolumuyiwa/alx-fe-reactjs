import create from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  recommendations: [],


  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  generateRecommendations: () =>
    set((state) => {
      const favRecipes = state.recipes.filter((r) =>
        state.favorites.includes(r.id)
      );

      let recommended = [];
      if (favRecipes.length > 0) {
        const favWords = favRecipes
          .flatMap((r) => r.title.toLowerCase().split(" "))
          .filter((w) => w.length > 3);

        recommended = state.recipes.filter(
          (r) =>
            !state.favorites.includes(r.id) &&
            favWords.some((word) =>
              r.title.toLowerCase().includes(word.toLowerCase())
            )
        );
      }

      return { recommendations: recommended };
    }),
}));