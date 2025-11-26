const TailwindTest = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        🎨 Tailwind CSS Utility Classes Test
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Colors */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 text-blue-600">Colors</h3>
          <div className="space-y-2">
            <div className="bg-red-500 text-white p-3 rounded">Red 500</div>
            <div className="bg-green-500 text-white p-3 rounded">Green 500</div>
            <div className="bg-blue-500 text-white p-3 rounded">Blue 500</div>
          </div>
        </div>

        {/* Typography */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 text-purple-600">Typography</h3>
          <p className="text-xs mb-2">Extra Small Text</p>
          <p className="text-sm mb-2">Small Text</p>
          <p className="text-base mb-2">Base Text</p>
          <p className="text-lg mb-2">Large Text</p>
          <p className="text-xl font-bold">Extra Large Bold</p>
        </div>

        {/* Spacing */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 text-green-600">Spacing</h3>
          <div className="space-y-4">
            <div className="bg-gray-200 p-2">Padding 2</div>
            <div className="bg-gray-200 p-4">Padding 4</div>
            <div className="bg-gray-200 p-6">Padding 6</div>
          </div>
        </div>

        {/* Flexbox */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 text-pink-600">Flexbox</h3>
          <div className="flex justify-between items-center gap-2">
            <div className="bg-pink-300 p-4 rounded">Box 1</div>
            <div className="bg-pink-400 p-4 rounded">Box 2</div>
            <div className="bg-pink-500 p-4 rounded text-white">Box 3</div>
          </div>
        </div>
      </div>

      {/* Hover Effects */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4 text-indigo-600">Hover Effects</h3>
        <div className="flex gap-4 flex-wrap">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
            Hover Me!
          </button>
          <button className="bg-green-500 hover:scale-110 text-white font-bold py-2 px-4 rounded transform transition-transform">
            Scale on Hover
          </button>
          <button className="bg-purple-500 hover:shadow-lg text-white font-bold py-2 px-4 rounded transition-shadow">
            Shadow on Hover
          </button>
        </div>
      </div>
    </div>
  );
};

export default TailwindTest;
