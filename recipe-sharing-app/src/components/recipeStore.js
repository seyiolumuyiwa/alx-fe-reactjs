import create from 'zustand';


export const useRecipeStore = create((set) => ({

recipes: [
{
id: 1,
title: 'Sample: Spaghetti Bolognese',
description: 'A classic Italian pasta with rich meat sauce.'
}
],


addRecipe: (newRecipe) =>
set((state) => ({ recipes: [...state.recipes, newRecipe] })),


updateRecipe: (updatedRecipe) =>
set((state) => ({
recipes: state.recipes.map((r) =>
r.id === updatedRecipe.id ? { ...r, ...updatedRecipe } : r
),
})),


deleteRecipe: (id) =>
set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),


setRecipes: (recipes) => set({ recipes }),
}));