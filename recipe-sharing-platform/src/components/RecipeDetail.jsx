import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import recipeData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe by ID
    const foundRecipe = recipeData.find(r => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Recipe Not Found</h2>
          <Link 
            to="/" 
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-lg transition-all"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-gray-700 hover:text-orange-600 font-semibold transition-colors"
            >
              <span className="text-2xl">←</span>
              <span>Back to Recipes</span>
            </button>
            <div className="flex items-center gap-3">
              <span className="text-3xl">🍳</span>
              <h1 className="text-xl font-bold text-gray-900 hidden sm:block">
                Recipe Platform
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Recipe Header */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          {/* Hero Image */}
          <div className="relative h-64 sm:h-96 overflow-hidden">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
              <h1 className="text-3xl sm:text-5xl font-bold mb-2">{recipe.title}</h1>
              <p className="text-lg opacity-90">{recipe.summary}</p>
            </div>
          </div>

          {/* Recipe Meta Info */}
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl mb-1">⏱️</div>
                <div className="text-sm text-gray-600">Prep Time</div>
                <div className="font-bold text-gray-900">{recipe.prepTime}</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-2xl mb-1">🔥</div>
                <div className="text-sm text-gray-600">Cook Time</div>
                <div className="font-bold text-gray-900">{recipe.cookTime}</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-2xl mb-1">👥</div>
                <div className="text-sm text-gray-600">Servings</div>
                <div className="font-bold text-gray-900">{recipe.servings}</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl mb-1">📊</div>
                <div className="text-sm text-gray-600">Difficulty</div>
                <div className="font-bold text-gray-900">{recipe.difficulty}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Ingredients and Instructions */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Ingredients */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span>🛒</span>
                Ingredients
              </h2>
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-2 rounded hover:bg-orange-50 transition-colors"
                  >
                    <span className="text-orange-600 font-bold mt-1">✓</span>
                    <span className="text-gray-700">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Instructions */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span>👨‍🍳</span>
                Instructions
              </h2>
              <ol className="space-y-6">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white font-bold flex items-center justify-center shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-gray-700 leading-relaxed">{instruction}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <span className="text-xl mr-2">❤️</span>
                Save to Favorites
              </button>
              <button className="flex-1 bg-white hover:bg-gray-50 text-gray-800 font-bold py-4 px-6 rounded-xl shadow-lg border-2 border-gray-300 transform hover:scale-105 transition-all duration-300">
                <span className="text-xl mr-2">📤</span>
                Share Recipe
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">
            🍳 Recipe Sharing Platform - Enjoy cooking!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default RecipeDetail;
