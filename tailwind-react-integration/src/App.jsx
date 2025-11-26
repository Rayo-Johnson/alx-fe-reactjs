import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center gap-8 mb-6">
            <img 
              src={viteLogo} 
              className="h-24 hover:drop-shadow-[0_0_2em_#646cffaa] transition-all duration-300" 
              alt="Vite logo" 
            />
            <img 
              src={reactLogo} 
              className="h-24 animate-spin-slow hover:drop-shadow-[0_0_2em_#61dafbaa] transition-all duration-300" 
              alt="React logo" 
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Vite + React + Tailwind
          </h1>
          <p className="text-gray-600">
            🎨 Tailwind CSS is working perfectly!
          </p>
        </div>

        {/* Counter Card */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 mb-6 text-white text-center">
          <p className="text-lg mb-4">
            Click the button to test interactivity:
          </p>
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 hover:scale-105 transform transition-all duration-200 shadow-lg"
          >
            Count is {count}
          </button>
        </div>

        {/* Features List */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
            <span className="text-2xl">⚡</span>
            <span className="text-gray-700 font-medium">Lightning fast with Vite</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
            <span className="text-2xl">⚛️</span>
            <span className="text-gray-700 font-medium">Powered by React 18</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
            <span className="text-2xl">🎨</span>
            <span className="text-gray-700 font-medium">Styled with Tailwind CSS v4</span>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Edit <code className="bg-gray-100 px-2 py-1 rounded text-purple-600 font-mono">src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {/* Add custom animation */}
      <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default App
