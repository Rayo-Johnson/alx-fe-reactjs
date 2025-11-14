import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === parseInt(id))
  );
  
  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  // Check if this recipe is already a favorite
  const isFavorite = favorites.includes(parseInt(id));

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(parseInt(id));
    } else {
      addFavorite(parseInt(id));
    }
  };

  if (!recipe) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>😕 Recipe Not Found</h2>
        <button 
          onClick={() => navigate('/')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '20px'
          }}
        >
          ← Back to Recipes
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      {/* Back Button */}
      <button 
        onClick={() => navigate('/')}
        style={{
          padding: '8px 16px',
          backgroundColor: '#666',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '20px'
        }}
      >
        ← Back to All Recipes
      </button>

      {/* Recipe Details Card */}
      <div style={{
        border: '3px solid #4CAF50',
        borderRadius: '12px',
        padding: '30px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        {/* Title and Favorite Button */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start',
          marginBottom: '20px'
        }}>
          <h1 style={{ 
            color: '#4CAF50', 
            fontSize: '2.5em', 
            margin: 0,
            flex: 1
          }}>
            🍳 {recipe.title}
          </h1>

          {/* ⭐ NEW: Favorite Button */}
          <button
            onClick={toggleFavorite}
            style={{
              padding: '12px 20px',
              backgroundColor: isFavorite ? '#ff9800' : '#e0e0e0',
              color: isFavorite ? 'white' : '#666',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              marginLeft: '15px',
              transition: 'all 0.3s ease',
              boxShadow: isFavorite ? '0 4px 8px rgba(255,152,0,0.3)' : 'none'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.backgroundColor = isFavorite ? '#f57c00' : '#d0d0d0';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.backgroundColor = isFavorite ? '#ff9800' : '#e0e0e0';
            }}
          >
            {isFavorite ? '⭐ Favorited!' : '☆ Add to Favorites'}
          </button>
        </div>

        <p style={{ fontSize: '1.2em', color: '#666', lineHeight: '1.6' }}>
          {recipe.description}
        </p>

        {/* Edit and Delete Section */}
        <div style={{ marginTop: '30px', borderTop: '2px solid #ddd', paddingTop: '20px' }}>
          <h3 style={{ marginBottom: '15px' }}>✏️ Manage This Recipe</h3>
          <EditRecipeForm recipe={recipe} />
          <DeleteRecipeButton recipeId={recipe.id} />
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;