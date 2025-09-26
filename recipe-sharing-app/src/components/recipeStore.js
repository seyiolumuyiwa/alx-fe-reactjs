import create from 'zustand';


const useRecipeStore = create((set) => ({
recipes: [],
favorites: [],
searchTerm: '',
filteredRecipes: [],
recommendations: [],


addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
updateRecipe: (id, updatedRecipe) => set((state) => ({
recipes: state.recipes.map((r) => (r.id === id ? updatedRecipe : r))
})),
deleteRecipe: (id) => set((state) => ({
recipes: state.recipes.filter((r) => r.id !== id)
})),


addFavorite: (recipeId) => set((state) => ({ favorites: [...state.favorites, recipeId] })),
removeFavorite: (recipeId) => set((state) => ({
favorites: state.favorites.filter((id) => id !== recipeId)
})),


setSearchTerm: (term) => set((state) => {
const filtered = state.recipes.filter(
(recipe) =>
recipe.title.toLowerCase().includes(term.toLowerCase()) ||
(recipe.ingredients && recipe.ingredients.join(' ').toLowerCase().includes(term.toLowerCase())) ||
(recipe.prepTime && recipe.prepTime.toString().includes(term))
);
return { searchTerm: term, filteredRecipes: filtered };
}),


generateRecommendations: () => set((state) => {
const recommended = state.recipes.filter(
(recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5
);
return { recommendations: recommended };
}),
}));


export default useRecipeStore;
