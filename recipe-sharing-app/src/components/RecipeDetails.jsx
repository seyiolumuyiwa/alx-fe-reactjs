import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';


export default function RecipeDetails() {
const { id } = useParams();
const recipeId = Number(id);
const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === recipeId));


if (!recipe) return <p>Recipe not found.</p>;


return (
<div>
<h1>{recipe.title}</h1>
<p>{recipe.description}</p>


<div style={{ marginTop: 12 }}>
<Link to={`/recipes/${recipeId}/edit`}>Edit</Link>
<DeleteRecipeButton id={recipeId} />
</div>


<div style={{ marginTop: 20 }}>
<Link to="/">← Back to list</Link>
</div>
</div>
);
}