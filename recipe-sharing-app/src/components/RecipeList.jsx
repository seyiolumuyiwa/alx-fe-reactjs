import { Link } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';


const RecipeList = () => {
const recipes = useRecipeStore((state) =>
state.searchTerm ? state.filteredRecipes : state.recipes
);
const addFavorite = useRecipeStore((state) => state.addFavorite);
const removeFavorite = useRecipeStore((state) => state.removeFavorite);
const favorites = useRecipeStore((state) => state.favorites);


if (recipes.length === 0) {
return <p>No recipes found.</p>;
}


return (
<div>
{recipes.map((recipe) => (
<div key={recipe.id}>
<h3>{recipe.title}</h3>
<p>{recipe.description}</p>
<Link to={`/recipes/${recipe.id}`}>View Details</Link>
{favorites.includes(recipe.id) ? (
<button onClick={() => removeFavorite(recipe.id)}>Remove Favorite</button>
) : (
<button onClick={() => addFavorite(recipe.id)}>Add to Favorites</button>
)}
</div>
))}
</div>
);
};


export default RecipeList;
