import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  return (
    <Router>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
        <Routes>
          {/* Home Page - List all recipes with search */}
          <Route path="/" element={
            <>
              {/* Header */}
              <header style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h1 style={{ 
                  color: '#4CAF50',
                  fontSize: '3em',
                  marginBottom: '10px',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                }}>
                  👨‍🍳 Recipe Sharing App
                </h1>
                <p style={{ color: '#666', fontSize: '1.2em' }}>
                  Share your favorite recipes with the world!
                </p>
              </header>

              {/* Search Bar - NEW! */}
              <SearchBar />
              
              {/* Add Recipe Form */}
              <AddRecipeForm />

              {/* Recipe List (now shows filtered results) */}
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
