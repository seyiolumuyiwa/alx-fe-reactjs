import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams(); // Get recipe ID from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error("Error loading recipe:", error));
  }, [id]);

  if (!recipe) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg animate-pulse">Loading recipe...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />

        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
          <p className="text-gray-600 mb-6">{recipe.summary}</p>

          {/* Ingredients Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
              🧂 Ingredients
            </h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
              {recipe.ingredients
                ? recipe.ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))
                : ["2 cups of flour", "1 tbsp salt", "1 tsp pepper"].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
            </ul>
          </div>

          {/* Instructions Section */}
          <div>
            <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
              👨‍🍳 Cooking Instructions
            </h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-2 leading-relaxed">
              {recipe.instructions
                ? recipe.instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))
                : [
                    "Preheat oven to 180°C.",
                    "Mix all ingredients in a bowl.",
                    "Cook for 20 minutes until golden brown.",
                  ].map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
            </ol>
          </div>

          <Link
            to="/"
            className="inline-block mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300"
          >
            ← Back to Recipes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
