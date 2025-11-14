import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);
  const favorites = useRecipeStore(state => state.favorites);

  // Generate recommendations when component mounts or favorites change
  useEffect(() => {
    generateRecommendations();
  }, [favorites, generateRecommendations]);

  if (recommendations.length === 0) {
    return null; // Don't show the section if no recommendations
  }

  return (
    <div style={{
      margin: '30px 0',
      padding: '25px',
      backgroundColor: '#e8f5e9',
      borderRadius: '12px',
      border: '2px solid #4CAF50',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ 
        color: '#2e7d32', 
        marginTop: 0,
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        💡 Recommended For You
      </h2>
      <p style={{ 
        color: '#666', 
        fontSize: '14px',
        marginBottom: '20px',
        fontStyle: 'italic'
      }}>
        Based on your favorite recipes, you might also enjoy these:
      </p>

      <div style={{ display: 'grid', gap: '15px' }}>
        {recommendations.map(recipe => (
          <div 
            key={recipe.id}
            style={{
              padding: '15px',
              backgroundColor: 'white',
              borderRadius: '8px',
              border: '1px solid #a5d6a7',
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '2em' }}>🍳</span>
              <div style={{ flex: 1 }}>
                <h3 style={{ 
                  margin: '0 0 8px 0', 
                  color: '#1b5e20',
                  fontSize: '1.2em'
                }}>
                  {recipe.title}
                </h3>
                <p style={{ 
                  margin: '0 0 10px 0', 
                  color: '#666',
                  fontSize: '14px',
                  lineHeight: '1.5'
                }}>
                  {recipe.description.substring(0, 120)}...
                </p>
                <Link 
                  to={`/recipe/${recipe.id}`}
                  style={{
                    display: 'inline-block',
                    padding: '8px 16px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    transition: 'background-color 0.3s'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
                >
                  👁️ View Recipe
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsList;