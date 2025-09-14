import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';


export default function DeleteRecipeButton({ id }) {
const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
const navigate = useNavigate();


const handleDelete = () => {
if (!window.confirm('Delete this recipe?')) return;
deleteRecipe(id);
// go back to list after deletion
navigate('/');
};


return (
<button onClick={handleDelete} style={{ marginLeft: 8 }}>
Delete
</button>
);
}