import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';

const EditRecipeForm = ({ recipe, onDone }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    updateRecipe(recipe.id, {
      title: title.trim(),
      description: description.trim(),
      updatedAt: new Date().toISOString(),
    });

    onDone?.();
    navigate(`/recipes/${recipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 12 }}>
      <h3>Edit Recipe</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{ display: 'block', marginBottom: '8px', padding: '8px', width: '320px' }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        style={{ display: 'block', marginBottom: '8px', padding: '8px', width: '320px', height: '100px' }}
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
