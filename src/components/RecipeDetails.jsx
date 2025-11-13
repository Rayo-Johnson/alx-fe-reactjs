import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const navigate = useNavigate();
  
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === parseInt(id))
  );

  // If recipe doesn't exist, show error message
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
          backgroundColor: '#gray',
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
        <h1 style={{ color: '#4CAF50', fontSize: '2.5em', marginBottom: '10px' }}>
          🍳 {recipe.title}
        </h1>
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