import { useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    // Ask for confirmation before deleting
    const confirmDelete = window.confirm(
      '🗑️ Are you sure you want to delete this recipe? This cannot be undone!'
    );
    
    if (confirmDelete) {
      deleteRecipe(recipeId);
      alert('✅ Recipe deleted successfully!');
      navigate('/'); // Go back to the home page
    }
  };

  return (
    <button
      onClick={handleDelete}
      style={{
        padding: '10px 20px',
        backgroundColor: '#f44336',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        marginTop: '10px'
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = '#d32f2f'}
      onMouseOut={(e) => e.target.style.backgroundColor = '#f44336'}
    >
      🗑️ Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;