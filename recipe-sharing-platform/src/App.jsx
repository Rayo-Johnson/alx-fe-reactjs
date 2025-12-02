import { useState } from 'react'

function App() {
  const [testVisible, setTestVisible] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-4xl">🍳</span>
              <h1 className="text-3xl font-bold text-gray-900">
                Recipe Sharing Platform
              </h1>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Recipes
              </a>
              <a href="#" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Add Recipe
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to Recipe Sharing! 👨‍🍳
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Discover, share, and create amazing recipes with our community
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
              Browse Recipes
            </button>
            <button className="bg-white hover:bg-gray-50 text-orange-600 font-bold py-3 px-8 rounded-lg shadow-lg border-2 border-orange-600 transform hover:scale-105 transition-all duration-300">
              Add Your Recipe
            </button>
          </div>
        </div>

        {/* Tailwind CSS Test Card */}
        {testVisible && (
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border-2 border-green-500">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="text-4xl">✅</span>
                <div>
                  <h3 className="text-2xl font-bold text-green-600">
                    Tailwind CSS is Working!
                  </h3>
                  <p className="text-gray-600">
                    All utility classes are properly configured
                  </p>
                </div>
              </div>
              <button
                onClick={() => setTestVisible(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {/* Test: Colors */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <h4 className="font-bold text-blue-900 mb-2">🎨 Colors</h4>
                <div className="space-y-2">
                  <div className="bg-red-500 text-white p-2 rounded text-sm text-center">
                    Red
                  </div>
                  <div className="bg-green-500 text-white p-2 rounded text-sm text-center">
                    Green
                  </div>
                  <div className="bg-blue-500 text-white p-2 rounded text-sm text-center">
                    Blue
                  </div>
                </div>
              </div>

              {/* Test: Typography */}
              <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                <h4 className="font-bold text-purple-900 mb-2">📝 Typography</h4>
                <p className="text-xs mb-1">Extra Small</p>
                <p className="text-sm mb-1">Small</p>
                <p className="text-base mb-1">Base</p>
                <p className="text-lg font-bold">Large Bold</p>
              </div>

              {/* Test: Spacing & Shadows */}
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                <h4 className="font-bold text-orange-900 mb-2">✨ Effects</h4>
                <div className="bg-white p-3 rounded shadow-sm mb-2 text-sm text-center">
                  Shadow SM
                </div>
                <div className="bg-white p-3 rounded shadow-lg text-sm text-center">
                  Shadow LG
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-700 text-center">
                <strong>✅ Success!</strong> Tailwind CSS is properly configured and ready to use.
                You can now start building your Recipe Sharing Platform!
              </p>
            </div>
          </div>
        )}

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">📖</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
              Browse Recipes
            </h3>
            <p className="text-gray-600 text-center">
              Explore thousands of delicious recipes from around the world
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">➕</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
              Share Your Recipes
            </h3>
            <p className="text-gray-600 text-center">
              Add your favorite recipes and share them with the community
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="text-5xl mb-4 text-center">💬</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
              Join Community
            </h3>
            <p className="text-gray-600 text-center">
              Connect with food lovers and share cooking tips
            </p>
          </div>
        </div>

        {/* Setup Status */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl shadow-xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">🎉 Project Setup Complete!</h3>
          <div className="space-y-2 text-lg">
            <p>✅ React + Vite installed</p>
            <p>✅ Tailwind CSS configured</p>
            <p>✅ Responsive design ready</p>
            <p>✅ Ready for development!</p>
          </div>
          <p className="mt-6 text-sm opacity-90">
            Start building your Recipe Sharing Platform now! 🚀
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">
            🍳 Recipe Sharing Platform - Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
