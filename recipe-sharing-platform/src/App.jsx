import { useState } from 'react'
import HomePage from './components/HomePage'
import AddRecipeForm from './components/AddRecipeForm'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div 
              onClick={() => setCurrentPage('home')}
              className="flex items-center gap-3 cursor-pointer"
            >
              <span className="text-4xl">🍳</span>
              <h1 className="text-2xl font-bold text-gray-900">
                Recipe Platform
              </h1>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={() => setCurrentPage('home')}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  currentPage === 'home'
                    ? 'bg-orange-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                🏠 Home
              </button>
              <button
                onClick={() => setCurrentPage('add')}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  currentPage === 'add'
                    ? 'bg-orange-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                ➕ Add Recipe
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'add' && <AddRecipeForm />}
      </main>
    </div>
  )
}

export default App
