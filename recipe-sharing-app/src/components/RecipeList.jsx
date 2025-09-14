import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) =>
    state.searchTerm ? state.filteredRecipes : state.recipes
  );

  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  if (recipes.length === 0) {
    return <p>No recipes found.</p>;
  }

  return (
    <div>
      {recipes.map((recipe) => {
        const isFavorite = favorites.includes(recipe.id);

        return (
          <div key={recipe.id}>
            {/* ✅ Title links to details */}
            <h3>
              <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>

            {/* ✅ Favorite button */}
            <button
              onClick={() =>
                isFavorite ? removeFavorite(recipe.id) : addFavorite(recipe.id)
              }
              style={{
                marginTop: "8px",
                padding: "6px 12px",
                backgroundColor: isFavorite ? "red" : "green",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;