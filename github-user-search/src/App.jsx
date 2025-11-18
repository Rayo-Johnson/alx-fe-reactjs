import Search from './components/Search';
import './App.css';

function App() {
  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#f6f8fa',
      padding: '20px'
    }}>
      {/* Header */}
      <header style={{
        textAlign: 'center',
        marginBottom: '40px',
        paddingTop: '40px'
      }}>
        <h1 style={{
          fontSize: '3em',
          color: '#24292e',
          margin: '0 0 10px 0'
        }}>
          🐙 GitHub User Search
        </h1>
        <p style={{
          fontSize: '1.2em',
          color: '#586069',
          margin: 0
        }}>
          Find and explore GitHub users around the world!
        </p>
      </header>

      {/* Search Component - Now handles everything! */}
      <Search />
    </div>
  );
}

export default App;
