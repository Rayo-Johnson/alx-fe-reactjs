import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Add this import
import recipeData from '../data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipeData);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Header - same as before */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-4xl">🍳</span>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Recipe Sharing Platform
              </h1>
            </div>
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 sm:px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 text-sm sm:text-base">
              ➕ Add Recipe
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Discover Delicious Recipes 👨‍🍳
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Browse our collection of mouth-watering recipes from around the world
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <Link
              key={recipe.id}
              to={`/recipe/${recipe.id}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-orange-100 transition-colors">
                  <span className="text-xl">❤️</span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-orange-600 transition-colors">
                  {recipe.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {recipe.summary}
                </p>

                <button className="w-full bg-orange-100 hover:bg-orange-600 text-orange-600 hover:text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300">
                  View Recipe →
                </button>
              </div>
            </Link>
          ))}
        </div>

        {recipes.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🍽️</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">
              No recipes found
            </h3>
            <p className="text-gray-600">
              Start by adding your first recipe!
            </p>
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">
            🍳 Recipe Sharing Platform - Showing {recipes.length} delicious recipes
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
