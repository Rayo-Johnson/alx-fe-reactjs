import useRecipeStore from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div style={{ margin: '20px' }}>
      <h2>📋 My Recipes</h2>
      {recipes.length === 0 ? (
        <p style={{ color: 'gray' }}>No recipes yet! Add one below! 👇</p>
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
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;