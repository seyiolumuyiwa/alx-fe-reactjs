import { Link } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  if (!recipes || recipes.length === 0) return <p>No recipes added yet.</p>;

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '8px' }}>
          <h3>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description.length > 150 ? `${recipe.description.slice(0, 150)}...` : recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
