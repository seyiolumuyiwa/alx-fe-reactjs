import create from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],

 
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  
  updateRecipe: (id, updatedFields) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        String(r.id) === String(id) ? { ...r, ...updatedFields } : r
      ),
    })),

  
  deleteRecipe: (id) =>
    set((state) => ({ recipes: state.recipes.filter((r) => String(r.id) !== String(id)) })),


  setRecipes: (recipes) => set({ recipes }),
}));
