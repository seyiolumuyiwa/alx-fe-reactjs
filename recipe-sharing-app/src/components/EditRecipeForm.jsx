import { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';


const EditRecipeForm = ({ recipe }) => {
const [title, setTitle] = useState(recipe.title);
const [description, setDescription] = useState(recipe.description);
const updateRecipe = useRecipeStore(state => state.updateRecipe);


const handleSubmit = (event) => {
event.preventDefault();
updateRecipe({ ...recipe, title, description });
};


return (
<form onSubmit={handleSubmit}>
<div>
<label>Title</label>
<input
type="text"
value={title}
onChange={(e) => setTitle(e.target.value)}
/>
</div>
<div>
<label>Description</label>
<textarea
value={description}
onChange={(e) => setDescription(e.target.value)}
/>
</div>
<button type="submit">Save Changes</button>
</form>
);
};


export default EditRecipeForm;
