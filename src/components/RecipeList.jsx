import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const searchTerm = useRecipeStore(state => state.searchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  // Initial filter when component mounts or recipes change
  useEffect(() => {
    filterRecipes();
  }, [recipes, filterRecipes]);

  // Determine which recipes to display
  const recipesToDisplay = searchTerm ? filteredRecipes : recipes;

  return (
    <div style={{ margin: '20px 0' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '15px'
      }}>
        <h2 style={{ margin: 0 }}>
          📋 {searchTerm ? 'Search Results' : 'All Recipes'} ({recipesToDisplay.length})
        </h2>
        {searchTerm && (
          <span style={{ 
            fontSize: '14px', 
            color: '#666',
            backgroundColor: '#f0f0f0',
            padding: '5px 10px',
            borderRadius: '15px'
          }}>
            Searching for: "{searchTerm}"
          </span>
        )}
      </div>

      {recipesToDisplay.length === 0 ? (
        <div style={{ 
          textAlign: 'center', 
          padding: '40px', 
          backgroundColor: '#f9f9f9',
          borderRadius: '8px',
          border: '2px dashed #ccc'
        }}>
          {searchTerm ? (
            <>
              <p style={{ fontSize: '3em', margin: '10px 0' }}>🔍</p>
              <p style={{ color: '#666', fontSize: '18px' }}>
                No recipes found for "{searchTerm}"
              </p>
              <p style={{ color: '#999', fontSize: '14px' }}>
                Try a different search term or add a new recipe!
              </p>
            </>
          ) : (
            <>
              <p style={{ fontSize: '3em', margin: '10px 0' }}>🍳</p>
              <p style={{ color: 'gray' }}>No recipes yet! Add one above! 👆</p>
            </>
          )}
        </div>
      ) : (
        <div style={{ 
          display: 'grid', 
          gap: '15px' 
        }}>
          {recipesToDisplay.map(recipe => (
            <div 
              key={recipe.id} 
              style={{
                border: '2px solid #4CAF50',
                borderRadius: '12px',
                padding: '20px',
                backgroundColor: '#f9f9f9',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
              }}
            >
              <h3 style={{ 
                color: '#4CAF50', 
                marginTop: 0,
                fontSize: '1.5em'
              }}>
                🍳 {recipe.title}
              </h3>
              <p style={{ 
                color: '#666',
                lineHeight: '1.6',
                marginBottom: '15px'
              }}>
                {recipe.description.length > 150 
                  ? `${recipe.description.substring(0, 150)}...` 
                  : recipe.description
                }
              </p>
              
              {/* Link to view full details */}
              <Link 
                to={`/recipe/${recipe.id}`}
                style={{
                  display: 'inline-block',
                  padding: '10px 20px',
                  backgroundColor: '#2196F3',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#1976D2'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#2196F3'}
              >
                👁️ View Details →
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;