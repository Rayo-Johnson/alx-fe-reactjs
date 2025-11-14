import { useState } from 'react';
import useRecipeStore from './recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore(state => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (title.trim() && description.trim()) {
      addRecipe({ 
        id: Date.now(), 
        title, 
        description 
      });
      setTitle('');
      setDescription('');
    } else {
      alert('Please fill in both fields! 📝');
    }
  };

  // ✨ NEW: Add sample recipes for testing
  const addSampleRecipes = () => {
    const samples = [
      {
        id: Date.now() + 1,
        title: "Chocolate Chip Cookies",
        description: "Soft and chewy cookies with chocolate chips. Perfect for dessert or snack time!"
      },
      {
        id: Date.now() + 2,
        title: "Spaghetti Carbonara",
        description: "Classic Italian pasta with eggs, cheese, and bacon. Creamy and delicious!"
      },
      {
        id: Date.now() + 3,
        title: "Chicken Stir Fry",
        description: "Quick and healthy stir fry with chicken, vegetables, and soy sauce."
      },
      {
        id: Date.now() + 4,
        title: "Chocolate Cake",
        description: "Rich and moist chocolate cake with chocolate frosting. A chocolate lover's dream!"
      },
      {
        id: Date.now() + 5,
        title: "Caesar Salad",
        description: "Fresh romaine lettuce with Caesar dressing, croutons, and parmesan cheese."
      }
    ];

    samples.forEach(recipe => addRecipe(recipe));
    alert('✅ 5 sample recipes added! Try searching for "chocolate" or "pasta"!');
  };

  return (
    <div style={{ 
      margin: '20px 0', 
      padding: '25px', 
      backgroundColor: '#f0f0f0', 
      borderRadius: '12px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ marginTop: 0 }}>➕ Add a New Recipe</h2>
      
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe Title (e.g., Chocolate Cake)"
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '12px',
            borderRadius: '6px',
            border: '2px solid #ccc',
            fontSize: '16px',
            outline: 'none'
          }}
          onFocus={(e) => e.target.style.borderColor = '#4CAF50'}
          onBlur={(e) => e.target.style.borderColor = '#ccc'}
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Recipe Description (e.g., A delicious chocolate cake...)"
          rows="4"
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '12px',
            borderRadius: '6px',
            border: '2px solid #ccc',
            fontSize: '16px',
            resize: 'vertical',
            outline: 'none'
          }}
          onFocus={(e) => e.target.style.borderColor = '#4CAF50'}
          onBlur={(e) => e.target.style.borderColor = '#ccc'}
        />
        
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            onClick={handleSubmit}
            style={{
              flex: 1,
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '12px 24px',
              border: 'none',
              borderRadius: '6px',
              fontSize: '16px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'background-color 0.3s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
          >
            🍳 Add Recipe
          </button>

          {/* ✨ NEW: Sample Recipes Button */}
          <button 
            onClick={addSampleRecipes}
            style={{
              backgroundColor: '#2196F3',
              color: 'white',
              padding: '12px 24px',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              cursor: 'pointer',
              fontWeight: 'bold',
              whiteSpace: 'nowrap',
              transition: 'background-color 0.3s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#1976D2'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#2196F3'}
          >
            📚 Add Sample Recipes
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRecipeForm;