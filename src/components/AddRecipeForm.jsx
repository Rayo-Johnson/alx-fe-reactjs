import { useState } from 'react';
import useRecipeStore from './recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore(state => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Check if fields are not empty
    if (title.trim() && description.trim()) {
      addRecipe({ 
        id: Date.now(), 
        title, 
        description 
      });
      
      // Clear the form
      setTitle('');
      setDescription('');
    } else {
      alert('Please fill in both fields! 📝');
    }
  };

  return (
    <div style={{ margin: '20px', padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
      <h2>➕ Add a New Recipe</h2>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe Title (e.g., Chocolate Cake)"
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '16px'
          }}
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Recipe Description (e.g., A delicious chocolate cake...)"
          rows="4"
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '16px',
            resize: 'vertical'
          }}
        />
        <button 
          onClick={handleSubmit}
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#45a049'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#4CAF50'}
        >
          🍳 Add Recipe
        </button>
      </div>
    </div>
  );
};

export default AddRecipeForm;