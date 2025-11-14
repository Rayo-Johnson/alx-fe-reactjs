import { useEffect } from 'react';
import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    filterRecipes(); // Filter immediately when search term changes
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="🔍 Search recipes by name or ingredients..."
        onChange={handleSearchChange}
        style={{
          width: '100%',
          padding: '15px',
          fontSize: '16px',
          border: '2px solid #4CAF50',
          borderRadius: '8px',
          outline: 'none',
          transition: 'border-color 0.3s'
        }}
        onFocus={(e) => e.target.style.borderColor = '#45a049'}
        onBlur={(e) => e.target.style.borderColor = '#4CAF50'}
      />
      <p style={{ 
        fontSize: '12px', 
        color: '#666', 
        marginTop: '5px',
        fontStyle: 'italic'
      }}>
        💡 Tip: Search by recipe name or description (e.g., "chocolate", "pasta", "quick")
      </p>
    </div>
  );
};

export default SearchBar;