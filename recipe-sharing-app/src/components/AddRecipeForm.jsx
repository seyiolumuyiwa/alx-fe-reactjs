import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';


export default function AddRecipeForm() {
const addRecipe = useRecipeStore((s) => s.addRecipe);
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const navigate = useNavigate();


const handleSubmit = (e) => {
e.preventDefault();
if (!title.trim() || !description.trim()) return;
const id = Date.now();
const newRecipe = { id, title: title.trim(), description: description.trim() };
addRecipe(newRecipe);
setTitle('');
setDescription('');


navigate(`/recipes/${id}`);
};


return (
<form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
<div style={{ marginBottom: 8 }}>
<input
placeholder="Title"
value={title}
onChange={(e) => setTitle(e.target.value)}
style={{ padding: 8, width: '100%' }}
/>
</div>
<div style={{ marginBottom: 8 }}>
<textarea
placeholder="Description"
value={description}
onChange={(e) => setDescription(e.target.value)}
rows={4}
style={{ padding: 8, width: '100%' }}
/>
</div>
<button type="submit">Add Recipe</button>
</form>
);
}
