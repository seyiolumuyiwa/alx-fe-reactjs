import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  // Validation function
  const validate = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Recipe title is required.";
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else {
      const list = ingredients.split(",").map((i) => i.trim());
      if (list.length < 2) {
        newErrors.ingredients =
          "Please include at least two ingredients, separated by commas.";
      }
    }

    if (!steps.trim()) {
      newErrors.steps = "Preparation steps are required.";
    }

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return; // stop submission if validation fails

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split(",").map((i) => i.trim()),
      steps,
    };

    console.log("New recipe submitted:", newRecipe);
    alert("Recipe submitted successfully!");

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white shadow-md rounded-2xl p-8"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Add a New Recipe
        </h2>

        {/* Title Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            className={`w-full p-3 border rounded-lg focus:ring-2 outline-none ${
              errors.title ? "border-red-400" : "border-gray-300"
            }`}
            placeholder="Enter recipe title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Ingredients
          </label>
          <textarea
            className={`w-full p-3 border rounded-lg focus:ring-2 outline-none ${
              errors.ingredients ? "border-red-400" : "border-gray-300"
            }`}
            rows="4"
            placeholder="List ingredients separated by commas"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Preparation Steps Field */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Preparation Steps
          </label>
          <textarea
            className={`w-full p-3 border rounded-lg focus:ring-2 outline-none ${
              errors.steps ? "border-red-400" : "border-gray-300"
            }`}
            rows="5"
            placeholder="Describe preparation steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
