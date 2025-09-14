import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';


export default function RecipeList() {
const recipes = useRecipeStore((s) => s.recipes);


if (!recipes || recipes.length === 0) return <p>No recipes yet — add one!</p>;


return (
<div>
{recipes.map((r) => (
<div key={r.id} style={{ border: '1px solid #ddd', padding: 12, marginBottom: 10 }}>
<h3 style={{ margin: '0 0 8px' }}>{r.title}</h3>
<p style={{ margin: '0 0 8px' }}>{r.description}</p>
<Link to={`/recipes/${r.id}`}>View details</Link>
</div>
))}
</div>
);
}