import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <Routes>
          {/* Home Page - List all recipes */}
          <Route path="/" element={
            <>
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
            </>
          } />
          
          {/* Recipe Details Page */}
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
