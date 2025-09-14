import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';


export default function EditRecipeForm() {
const { id } = useParams();
const recipeId = Number(id);
const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === recipeId));
const updateRecipe = useRecipeStore((s) => s.updateRecipe);
const navigate = useNavigate();


const [title, setTitle] = useState('');
const [description, setDescription] = useState('');


useEffect(() => {
if (recipe) {
setTitle(recipe.title);
setDescription(recipe.description);
}
}, [recipe]);


if (!recipe) return <p>Recipe not found.</p>;


const handleSubmit = (e) => {
e.preventDefault();
if (!title.trim() || !description.trim()) return;
updateRecipe({ id: recipeId, title: title.trim(), description: description.trim() });
navigate(`/recipes/${recipeId}`);
};


return (
<form onSubmit={handleSubmit}>
<div style={{ marginBottom: 8 }}>
<input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" style={{ padding: 8, width: '100%' }} />
</div>
<div style={{ marginBottom: 8 }}>
<textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={6} style={{ padding: 8, width: '100%' }} />
</div>
<button type="submit">Save</button>
</form>
);
}