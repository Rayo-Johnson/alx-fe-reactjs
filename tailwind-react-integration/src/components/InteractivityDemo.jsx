function InteractivityDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ✨ Interactive Effects Showcase
          </h1>
          <p className="text-white text-lg md:text-xl">
            Hover over elements to see the magic! 🎨
          </p>
        </header>

        {/* Effects Explanation Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Image Hover Effect */}
          <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="text-4xl mb-3 text-center">🖼️</div>
            <h3 className="text-xl font-bold text-blue-800 mb-3 text-center">Image Scale</h3>
            <code className="text-xs bg-gray-100 p-2 rounded block mb-3 overflow-x-auto">
              hover:scale-110
              transition-transform
              duration-300
              ease-in-out
            </code>
            <p className="text-sm text-gray-600 text-center">
              Image grows 10% larger on hover with smooth animation
            </p>
          </div>

          {/* Text Color Change */}
          <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="text-4xl mb-3 text-center">🎨</div>
            <h3 className="text-xl font-bold text-purple-800 mb-3 text-center">Color Change</h3>
            <code className="text-xs bg-gray-100 p-2 rounded block mb-3 overflow-x-auto">
              hover:text-blue-500
              transition-colors
              duration-300
              ease-in-out
            </code>
            <p className="text-sm text-gray-600 text-center">
              Heading smoothly changes from blue-800 to blue-500
            </p>
          </div>

          {/* Shadow Enhancement */}
          <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="text-4xl mb-3 text-center">✨</div>
            <h3 className="text-xl font-bold text-pink-800 mb-3 text-center">Shadow Lift</h3>
            <code className="text-xs bg-gray-100 p-2 rounded block mb-3 overflow-x-auto">
              hover:shadow-xl
              transition-shadow
              duration-300
              ease-in-out
            </code>
            <p className="text-sm text-gray-600 text-center">
              Card shadow intensifies creating a lifting effect
            </p>
          </div>
        </div>

        {/* Interactive Examples */}
        <div className="bg-white rounded-lg p-8 shadow-2xl mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            🎮 Try These Interactive Elements!
          </h2>
          
          <div className="space-y-8">
            {/* Hover Scale Examples */}
            <div>
              <h3 className="text-xl font-bold text-blue-800 mb-4">Scale Transform (hover:scale-110)</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="w-24 h-24 bg-blue-500 rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer flex items-center justify-center text-white font-bold">
                  Hover Me!
                </div>
                <img 
                  src="https://via.placeholder.com/100" 
                  alt="Demo" 
                  className="rounded-full hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
                />
                <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out font-bold">
                  Click Me!
                </button>
              </div>
            </div>

            {/* Color Change Examples */}
            <div>
              <h3 className="text-xl font-bold text-purple-800 mb-4">Color Transitions</h3>
              <div className="space-y-3">
                <h4 className="text-2xl text-blue-800 hover:text-blue-500 transition-colors duration-300 cursor-pointer font-bold text-center">
                  Hover to Change Color! 🎨
                </h4>
                <p className="text-gray-600 hover:text-purple-600 transition-colors duration-300 cursor-pointer text-center">
                  Even paragraphs can change color smoothly!
                </p>
              </div>
            </div>

            {/* Shadow Examples */}
            <div>
              <h3 className="text-xl font-bold text-pink-800 mb-4">Shadow Effects</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-white text-center font-bold cursor-pointer">
                  shadow-md → shadow-xl
                </div>
                <div className="bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-white text-center font-bold cursor-pointer">
                  shadow-lg → shadow-2xl
                </div>
                <div className="bg-gradient-to-r from-pink-400 to-red-500 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 text-white text-center font-bold cursor-pointer">
                  shadow-xl → shadow-2xl
                </div>
              </div>
            </div>

            {/* Combined Effects */}
            <div>
              <h3 className="text-xl font-bold text-indigo-800 mb-4">Combined Effects ��</h3>
              <div className="flex justify-center">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer border-2 border-gray-200 hover:border-blue-500">
                  <div className="text-4xl mb-3 text-center">🎉</div>
                  <h4 className="text-xl font-bold text-gray-800 text-center mb-2">
                    Multiple Effects!
                  </h4>
                  <p className="text-sm text-gray-600 text-center">
                    Scale + Lift + Shadow + Border Color
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transition Classes Reference */}
        <div className="bg-white rounded-lg p-8 shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            📚 Tailwind Transition Classes Reference
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold text-lg text-blue-800 mb-2">Transform Classes</h3>
              <ul className="space-y-2 text-sm">
                <li><code className="bg-blue-50 px-2 py-1 rounded">hover:scale-110</code> - Scale to 110%</li>
                <li><code className="bg-blue-50 px-2 py-1 rounded">hover:scale-105</code> - Scale to 105%</li>
                <li><code className="bg-blue-50 px-2 py-1 rounded">hover:-translate-y-2</code> - Move up 8px</li>
                <li><code className="bg-blue-50 px-2 py-1 rounded">transform</code> - Enable transforms</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-bold text-lg text-green-800 mb-2">Transition Classes</h3>
              <ul className="space-y-2 text-sm">
                <li><code className="bg-green-50 px-2 py-1 rounded">transition-transform</code> - For scale/move</li>
                <li><code className="bg-green-50 px-2 py-1 rounded">transition-colors</code> - For color changes</li>
                <li><code className="bg-green-50 px-2 py-1 rounded">transition-shadow</code> - For shadows</li>
                <li><code className="bg-green-50 px-2 py-1 rounded">transition-all</code> - For everything</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-bold text-lg text-purple-800 mb-2">Duration Classes</h3>
              <ul className="space-y-2 text-sm">
                <li><code className="bg-purple-50 px-2 py-1 rounded">duration-150</code> - 150ms (fast)</li>
                <li><code className="bg-purple-50 px-2 py-1 rounded">duration-300</code> - 300ms (standard)</li>
                <li><code className="bg-purple-50 px-2 py-1 rounded">duration-500</code> - 500ms (slow)</li>
                <li><code className="bg-purple-50 px-2 py-1 rounded">duration-1000</code> - 1000ms (very slow)</li>
              </ul>
            </div>

            <div className="border-l-4 border-pink-500 pl-4">
              <h3 className="font-bold text-lg text-pink-800 mb-2">Easing Functions</h3>
              <ul className="space-y-2 text-sm">
                <li><code className="bg-pink-50 px-2 py-1 rounded">ease-linear</code> - Constant speed</li>
                <li><code className="bg-pink-50 px-2 py-1 rounded">ease-in</code> - Slow start</li>
                <li><code className="bg-pink-50 px-2 py-1 rounded">ease-out</code> - Slow end</li>
                <li><code className="bg-pink-50 px-2 py-1 rounded">ease-in-out</code> - Smooth both ends</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InteractivityDemo;
