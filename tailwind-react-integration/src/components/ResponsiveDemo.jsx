function ResponsiveDemo() {
  return (
    <div className="max-w-4xl mx-auto p-6 mt-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          📱 Responsive Breakpoints Explained
        </h2>

        {/* Breakpoint Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Mobile */}
          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">📱</span>
              <div>
                <h3 className="text-xl font-bold text-blue-800">Mobile</h3>
                <p className="text-sm text-gray-600">&lt; 640px (default)</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Padding: <code className="bg-blue-100 px-2 py-1 rounded">p-4</code></li>
              <li>• Max Width: <code className="bg-blue-100 px-2 py-1 rounded">max-w-xs</code> (320px)</li>
              <li>• Image: <code className="bg-blue-100 px-2 py-1 rounded">w-24 h-24</code> (96px)</li>
              <li>• Heading: <code className="bg-blue-100 px-2 py-1 rounded">text-lg</code></li>
              <li>• Text: <code className="bg-blue-100 px-2 py-1 rounded">text-sm</code></li>
            </ul>
          </div>

          {/* Small Tablet */}
          <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">📱</span>
              <div>
                <h3 className="text-xl font-bold text-green-800">Small Tablet</h3>
                <p className="text-sm text-gray-600">≥ 640px (sm:)</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Padding: <code className="bg-green-100 px-2 py-1 rounded">sm:p-6</code></li>
              <li>• Max Width: <code className="bg-green-100 px-2 py-1 rounded">sm:max-w-sm</code> (384px)</li>
              <li>• Image: <code className="bg-green-100 px-2 py-1 rounded">sm:w-32 sm:h-32</code> (128px)</li>
              <li>• Heading: <code className="bg-green-100 px-2 py-1 rounded">sm:text-xl</code></li>
              <li>• Text: <code className="bg-green-100 px-2 py-1 rounded">sm:text-base</code></li>
            </ul>
          </div>

          {/* Tablet/Laptop */}
          <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">💻</span>
              <div>
                <h3 className="text-xl font-bold text-purple-800">Tablet/Laptop</h3>
                <p className="text-sm text-gray-600">≥ 768px (md:)</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Padding: <code className="bg-purple-100 px-2 py-1 rounded">md:p-8</code></li>
              <li>• Max Width: <code className="bg-purple-100 px-2 py-1 rounded">md:max-w-md</code> (448px)</li>
              <li>• Image: <code className="bg-purple-100 px-2 py-1 rounded">md:w-36 md:h-36</code> (144px)</li>
              <li>• Heading: <code className="bg-purple-100 px-2 py-1 rounded">md:text-2xl</code></li>
              <li>• Text: <code className="bg-purple-100 px-2 py-1 rounded">md:text-lg</code></li>
            </ul>
          </div>

          {/* Desktop */}
          <div className="bg-pink-50 p-6 rounded-lg border-2 border-pink-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🖥️</span>
              <div>
                <h3 className="text-xl font-bold text-pink-800">Desktop</h3>
                <p className="text-sm text-gray-600">≥ 1024px (lg:)</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Inherits md: styles</li>
              <li>• More comfortable spacing</li>
              <li>• Maximum readability</li>
              <li>• Full feature display</li>
            </ul>
          </div>
        </div>

        {/* Current Screen Size Indicator */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-3">📏 Your Current Screen Size:</h3>
          <div className="text-4xl font-bold">
            <span className="sm:hidden">📱 Mobile</span>
            <span className="hidden sm:block md:hidden">📱 Small Tablet</span>
            <span className="hidden md:block lg:hidden">💻 Tablet</span>
            <span className="hidden lg:block">🖥️ Desktop</span>
          </div>
          <p className="mt-3 text-sm opacity-90">
            Resize your browser window to see the indicator change!
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveDemo;
