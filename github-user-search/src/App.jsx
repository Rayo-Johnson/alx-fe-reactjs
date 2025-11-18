import Search from './components/Search';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8">
      {/* Header */}
      <header className="text-center mb-12 px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          🐙 GitHub User Search
        </h1>
        <p className="text-xl text-gray-600">
          Find and explore GitHub users with advanced filters!
        </p>
      </header>

      {/* Search Component */}
      <Search />

      {/* Footer */}
      <footer className="text-center mt-12 text-gray-600 text-sm">
        <p>Powered by GitHub API 🚀</p>
      </footer>
    </div>
  );
}

export default App;
