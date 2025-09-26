import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) => state.recipes.find((r) => String(r.id) === String(id)));
  const [editing, setEditing] = useState(false);

  if (!recipe) return (
    <div>
      <Link to="/">← Back</Link>
      <p>Recipe not found.</p>
    </div>
  );

  return (
    <div>
      <Link to="/">← Back</Link>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {recipe.createdAt && <p><small>Created: {new Date(recipe.createdAt).toLocaleString()}</small></p>}

      <div style={{ marginTop: 12 }}>
        <button onClick={() => setEditing((v) => !v)}>{editing ? 'Cancel' : 'Edit'}</button>
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>

      {editing && <EditRecipeForm recipe={recipe} onDone={() => setEditing(false)} />}
    </div>
  );
};

export default RecipeDetails;
