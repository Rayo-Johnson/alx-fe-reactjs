import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div style={{ margin: '20px' }}>
      <h2>📋 My Recipes ({recipes.length})</h2>
      {recipes.length === 0 ? (
        <p style={{ color: 'gray' }}>No recipes yet! Add one above! 👇</p>
      ) : (
        recipes.map(recipe => (
          <div 
            key={recipe.id} 
            style={{
              border: '2px solid #4CAF50',
              borderRadius: '8px',
              padding: '15px',
              margin: '10px 0',
              backgroundColor: '#f9f9f9'
            }}
          >
            <h3 style={{ color: '#4CAF50' }}>🍳 {recipe.title}</h3>
            <p>{recipe.description.substring(0, 100)}...</p>
            
            {/* Link to view full details */}
            <Link 
              to={`/recipe/${recipe.id}`}
              style={{
                display: 'inline-block',
                marginTop: '10px',
                padding: '8px 16px',
                backgroundColor: '#2196F3',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px',
                fontSize: '14px'
              }}
            >
              👁️ View Details
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;