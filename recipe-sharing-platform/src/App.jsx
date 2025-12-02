import { useState } from 'react'
import HomePage from './components/HomePage'
import HomePageEnhanced from './components/HomePageEnhanced'

function App() {
  const [version, setVersion] = useState('enhanced')

  return (
    <div>
      {/* Version Switcher (only for development) */}
      <div className="fixed bottom-4 right-4 z-50 bg-white rounded-lg shadow-lg p-3">
        <div className="flex gap-2">
          <button
            onClick={() => setVersion('basic')}
            className={`px-3 py-1 rounded text-sm font-bold ${
              version === 'basic'
                ? 'bg-orange-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Basic
          </button>
          <button
            onClick={() => setVersion('enhanced')}
            className={`px-3 py-1 rounded text-sm font-bold ${
              version === 'enhanced'
                ? 'bg-orange-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Enhanced
          </button>
        </div>
      </div>

      {/* Render selected version */}
      {version === 'basic' ? <HomePage /> : <HomePageEnhanced />}
    </div>
  )
}

export default App
