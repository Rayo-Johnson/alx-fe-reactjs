import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const favorites = useRecipeStore(state => state.favorites);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  // Get full recipe objects for favorited IDs
  const favoriteRecipes = favorites.map(id =>
    recipes.find(recipe => recipe.id === id)
  ).filter(Boolean); // Remove any undefined values

  return (
    <div style={{
      margin: '30px 0',
      padding: '25px',
      backgroundColor: '#fff3e0',
      borderRadius: '12px',
      border: '2px solid #ff9800',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ 
        color: '#ff9800', 
        marginTop: 0,
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        ⭐ My Favorite Recipes ({favoriteRecipes.length})
      </h2>

      {favoriteRecipes.length === 0 ? (
        <div style={{ 
          textAlign: 'center', 
          padding: '30px',
          color: '#666'
        }}>
          <p style={{ fontSize: '3em', margin: '10px 0' }}>💔</p>
          <p style={{ fontSize: '16px' }}>
            No favorites yet! Click the ⭐ button on any recipe to add it here.
          </p>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: '15px' }}>
          {favoriteRecipes.map(recipe => (
            <div 
              key={recipe.id}
              style={{
                padding: '15px',
                backgroundColor: 'white',
                borderRadius: '8px',
                border: '1px solid #ffcc80',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(5px)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ flex: 1 }}>
                <h3 style={{ 
                  margin: '0 0 8px 0', 
                  color: '#e65100',
                  fontSize: '1.2em'
                }}>
                  🍳 {recipe.title}
                </h3>
                <p style={{ 
                  margin: '0 0 10px 0', 
                  color: '#666',
                  fontSize: '14px'
                }}>
                  {recipe.description.substring(0, 100)}...
                </p>
                <Link 
                  to={`/recipe/${recipe.id}`}
                  style={{
                    color: '#2196F3',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: 'bold'
                  }}
                >
                  👁️ View Details →
                </Link>
              </div>

              <button
                onClick={() => removeFavorite(recipe.id)}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#f44336',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  marginLeft: '15px',
                  whiteSpace: 'nowrap',
                  transition: 'background-color 0.3s'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#d32f2f'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#f44336'}
              >
                💔 Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesList;