import { useState } from 'react'
import UserProfile from './components/UserProfile'
import UserProfileEnhanced from './components/UserProfileEnhanced'
import ProfileGallery from './components/ProfileGallery'

function App() {
  const [view, setView] = useState('basic')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400">
      {/* Navigation */}
      <nav className="bg-white shadow-md py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            🎨 Tailwind Profile Cards
          </h1>
          <div className="flex gap-3">
            <button
              onClick={() => setView('basic')}
              className={`px-4 py-2 rounded-lg font-bold transition-colors ${
                view === 'basic' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Basic
            </button>
            <button
              onClick={() => setView('enhanced')}
              className={`px-4 py-2 rounded-lg font-bold transition-colors ${
                view === 'enhanced' 
                  ? 'bg-purple-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Enhanced
            </button>
            <button
              onClick={() => setView('gallery')}
              className={`px-4 py-2 rounded-lg font-bold transition-colors ${
                view === 'gallery' 
                  ? 'bg-pink-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Gallery
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      {view === 'basic' && (
        <div>
          <header className="text-center py-8">
            <h2 className="text-4xl font-bold text-white mb-2">
              📝 Basic Profile Card
            </h2>
            <p className="text-white text-lg">
              Following exact specifications from the task
            </p>
          </header>
          <UserProfile />
        </div>
      )}

      {view === 'enhanced' && (
        <div>
          <header className="text-center py-8">
            <h2 className="text-4xl font-bold text-white mb-2">
              ✨ Enhanced Profile Card
            </h2>
            <p className="text-white text-lg">
              With hover effects and additional features
            </p>
          </header>
          <UserProfileEnhanced />
        </div>
      )}

      {view === 'gallery' && <ProfileGallery />}
    </div>
  )
}

export default App
