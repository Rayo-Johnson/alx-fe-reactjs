import { useState } from 'react'
import UserProfile from './components/UserProfile'
import ResponsiveDemo from './components/ResponsiveDemo'
import ResponsiveComparison from './components/ResponsiveComparison'

function App() {
  const [view, setView] = useState('responsive')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400">
      {/* Navigation */}
      <nav className="bg-white shadow-md py-4 px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">
            📱 Responsive Tailwind Profile
          </h1>
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
            <button
              onClick={() => setView('responsive')}
              className={`px-3 md:px-4 py-2 rounded-lg font-bold text-sm md:text-base transition-colors ${
                view === 'responsive' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              📱 Responsive
            </button>
            <button
              onClick={() => setView('demo')}
              className={`px-3 md:px-4 py-2 rounded-lg font-bold text-sm md:text-base transition-colors ${
                view === 'demo' 
                  ? 'bg-purple-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              📊 Breakpoints
            </button>
            <button
              onClick={() => setView('basic')}
              className={`px-3 md:px-4 py-2 rounded-lg font-bold text-sm md:text-base transition-colors ${
                view === 'basic' 
                  ? 'bg-pink-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              🎨 Basic
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      {view === 'responsive' && <ResponsiveComparison />}
      
      {view === 'demo' && <ResponsiveDemo />}
      
      {view === 'basic' && (
        <div>
          <header className="text-center py-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              🎨 Basic Profile Card
            </h2>
            <p className="text-white text-base md:text-lg px-4">
              The responsive component in its natural habitat
            </p>
          </header>
          <UserProfile />
        </div>
      )}
    </div>
  )
}

export default App
