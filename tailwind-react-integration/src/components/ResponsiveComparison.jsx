import UserProfile from './UserProfile';

function ResponsiveComparison() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            📱 Responsive UserProfile Component
          </h1>
          <p className="text-white text-lg md:text-xl">
            Resize your browser to see the magic! ✨
          </p>
        </header>

        {/* The Responsive Component */}
        <UserProfile />

        {/* Visual Indicators */}
        <div className="max-w-2xl mx-auto mt-12 space-y-4">
          {/* Mobile Indicator */}
          <div className="sm:hidden bg-blue-500 text-white p-4 rounded-lg shadow-lg text-center">
            <p className="text-xl font-bold">📱 Mobile View Active</p>
            <p className="text-sm mt-2">
              Small padding, compact image (24), smaller text
            </p>
          </div>

          {/* Small Tablet Indicator */}
          <div className="hidden sm:block md:hidden bg-green-500 text-white p-4 rounded-lg shadow-lg text-center">
            <p className="text-xl font-bold">📱 Small Tablet View Active</p>
            <p className="text-sm mt-2">
              Medium padding, medium image (32), comfortable text
            </p>
          </div>

          {/* Tablet/Desktop Indicator */}
          <div className="hidden md:block bg-purple-500 text-white p-4 rounded-lg shadow-lg text-center">
            <p className="text-xl font-bold">💻 Tablet/Desktop View Active</p>
            <p className="text-sm mt-2">
              Large padding, large image (36), optimal text size
            </p>
          </div>
        </div>

        {/* Class Reference Card */}
        <div className="max-w-4xl mx-auto mt-12 bg-white rounded-lg shadow-2xl p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
            🎨 Responsive Classes Applied
          </h2>

          <div className="space-y-6">
            {/* Container */}
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-bold text-lg text-blue-800 mb-2">Container</h3>
              <code className="text-sm bg-gray-100 p-3 rounded block overflow-x-auto">
                p-4 sm:p-6 md:p-8 max-w-xs sm:max-w-sm md:max-w-md
              </code>
              <ul className="mt-2 text-sm text-gray-600 space-y-1">
                <li>• Mobile: 16px padding, 320px max width</li>
                <li>• Small: 24px padding, 384px max width</li>
                <li>• Medium+: 32px padding, 448px max width</li>
              </ul>
            </div>

            {/* Image */}
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h3 className="font-bold text-lg text-green-800 mb-2">Image</h3>
              <code className="text-sm bg-gray-100 p-3 rounded block overflow-x-auto">
                w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36
              </code>
              <ul className="mt-2 text-sm text-gray-600 space-y-1">
                <li>• Mobile: 96px × 96px</li>
                <li>• Small: 128px × 128px</li>
                <li>• Medium+: 144px × 144px</li>
              </ul>
            </div>

            {/* Heading */}
            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <h3 className="font-bold text-lg text-purple-800 mb-2">Heading</h3>
              <code className="text-sm bg-gray-100 p-3 rounded block overflow-x-auto">
                text-lg sm:text-xl md:text-2xl
              </code>
              <ul className="mt-2 text-sm text-gray-600 space-y-1">
                <li>• Mobile: 18px (1.125rem)</li>
                <li>• Small: 20px (1.25rem)</li>
                <li>• Medium+: 24px (1.5rem)</li>
              </ul>
            </div>

            {/* Paragraph */}
            <div className="border-l-4 border-pink-500 pl-4 py-2">
              <h3 className="font-bold text-lg text-pink-800 mb-2">Paragraph</h3>
              <code className="text-sm bg-gray-100 p-3 rounded block overflow-x-auto">
                text-sm sm:text-base md:text-lg
              </code>
              <ul className="mt-2 text-sm text-gray-600 space-y-1">
                <li>• Mobile: 14px (0.875rem)</li>
                <li>• Small: 16px (1rem)</li>
                <li>• Medium+: 18px (1.125rem)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResponsiveComparison;
