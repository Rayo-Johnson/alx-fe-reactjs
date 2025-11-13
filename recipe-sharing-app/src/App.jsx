import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import './App.css';

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ 
        textAlign: 'center', 
        color: '#4CAF50',
        fontSize: '3em',
        marginBottom: '10px'
      }}>
        👨‍🍳 Recipe Sharing App
      </h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>
        Share your favorite recipes with the world!
      </p>
      
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
