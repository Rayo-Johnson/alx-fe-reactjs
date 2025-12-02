import { useState } from 'react';

const RecipeCard = ({ recipe }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer group">
      {/* Recipe Image */}
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
        
        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite();
          }}
          className={`absolute top-3 right-3 ${
            isFavorite ? 'bg-red-500' : 'bg-white'
          } rounded-full p-2 shadow-md hover:scale-110 transition-all duration-300`}
        >
          <span className="text-xl">
            {isFavorite ? '❤️' : '🤍'}
          </span>
        </button>

        {/* Recipe ID Badge */}
        <div className="absolute bottom-3 left-3 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-xs font-bold">
          Recipe #{recipe.id}
        </div>
      </div>

      {/* Recipe Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-1">
          {recipe.title}
        </h3>

        {/* Summary */}
        <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed">
          {recipe.summary}
        </p>

        {/* Stats (Mock data) */}
        <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <span>⏱️</span>
            <span>30 min</span>
          </div>
          <div className="flex items-center gap-1">
            <span>👥</span>
            <span>4 servings</span>
          </div>
          <div className="flex items-center gap-1">
            <span>⭐</span>
            <span>4.5</span>
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
          View Full Recipe →
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
