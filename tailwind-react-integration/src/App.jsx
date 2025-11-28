import { useState } from 'react'
import UserProfile from './components/UserProfile'
import UserProfileInteractive from './components/UserProfileInteractive'
import InteractivityDemo from './components/InteractivityDemo'

function App() {
  const [view, setView] = useState('interactive')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400">
      {/* Navigation */}
      <nav className="bg-white shadow-md py-4 px-4 md:px-6 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">
            ✨ Interactive Tailwind Components
          </h1>
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
            <button
              onClick={() => setView('interactive')}
              className={`px-3 md:px-4 py-2 rounded-lg font-bold text-sm md:text-base transform hover:scale-105 transition-all duration-300 ${
                view === 'interactive' 
                  ? 'bg-blue-500 text-white shadow-lg' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              ✨ Task Version
            </button>
            <button
              onClick={() => setView('enhanced')}
              className={`px-3 md:px-4 py-2 rounded-lg font-bold text-sm md:text-base transform hover:scale-105 transition-all duration-300 ${
                view === 'enhanced' 
                  ? 'bg-purple-500 text-white shadow-lg' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              🚀 Enhanced
            </button>
            <button
              onClick={() => setView('demo')}
              className={`px-3 md:px-4 py-2 rounded-lg font-bold text-sm md:text-base transform hover:scale-105 transition-all duration-300 ${
                view === 'demo' 
                  ? 'bg-pink-500 text-white shadow-lg' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              🎮 Interactive Demo
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      {view === 'interactive' && (
        <div>
          <header className="text-center py-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              ✨ Interactive UserProfile
            </h2>
            <p className="text-white text-base md:text-lg px-4">
              Hover over the image, name, and card to see the effects!
            </p>
          </header>
          <UserProfile />
          
          {/* Instructions */}
          <div className="max-w-2xl mx-auto mt-12 px-4">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                🎯 Interactive Features Added
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🖼️</span>
                  <div>
                    <strong>Image Hover:</strong> <code className="bg-gray-100 px-2 py-1 rounded text-sm">hover:scale-110 transition-transform duration-300 ease-in-out</code>
                    <p className="text-sm text-gray-600 mt-1">Image grows 10% on hover with smooth animation</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🎨</span>
                  <div>
                    <strong>Name Hover:</strong> <code className="bg-gray-100 px-2 py-1 rounded text-sm">hover:text-blue-500 transition-colors duration-300</code>
                    <p className="text-sm text-gray-600 mt-1">Name changes from blue-800 to blue-500</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✨</span>
                  <div>
                    <strong>Card Hover:</strong> <code className="bg-gray-100 px-2 py-1 rounded text-sm">hover:shadow-xl transition-shadow duration-300</code>
                    <p className="text-sm text-gray-600 mt-1">Card shadow intensifies creating lifting effect</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {view === 'enhanced' && (
        <div>
          <header className="text-center py-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              🚀 Enhanced Interactive Profile
            </h2>
            <p className="text-white text-base md:text-lg px-4">
              With even more interactive effects and animations!
            </p>
          </header>
          <UserProfileInteractive />
        </div>
      )}

      {view === 'demo' && <InteractivityDemo />}
    </div>
  )
}

export default App
