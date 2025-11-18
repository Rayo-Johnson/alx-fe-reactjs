import { useState } from 'react';
import Search from './components/Search';
import { searchUsers } from './services/githubService';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (searchTerm) => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await searchUsers(searchTerm);
      setUsers(data.items || []);
      
      if (data.items && data.items.length === 0) {
        setError('No users found. Try a different search term!');
      }
    } catch (err) {
      setError('Failed to fetch users. Please try again.');
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };

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

      {/* Search Component */}
      <Search onSearch={handleSearch} />

      {/* Loading State */}
      {loading && (
        <div style={{
          textAlign: 'center',
          padding: '40px',
          fontSize: '1.5em',
          color: '#0366d6'
        }}>
          <p>🔍 Searching...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div style={{
          maxWidth: '600px',
          margin: '20px auto',
          padding: '20px',
          backgroundColor: '#fff1f0',
          border: '2px solid #ff4d4f',
          borderRadius: '8px',
          color: '#cf1322',
          textAlign: 'center'
        }}>
          <p style={{ margin: 0 }}>❌ {error}</p>
        </div>
      )}

      {/* Results */}
      {!loading && users.length > 0 && (
        <div style={{
          maxWidth: '800px',
          margin: '40px auto',
          padding: '0 20px'
        }}>
          <h2 style={{
            color: '#24292e',
            marginBottom: '20px'
          }}>
            Found {users.length} user{users.length !== 1 ? 's' : ''}:
          </h2>
          
          <div style={{
            display: 'grid',
            gap: '20px',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))'
          }}>
            {users.map(user => (
              <div
                key={user.id}
                style={{
                  backgroundColor: 'white',
                  padding: '20px',
                  borderRadius: '12px',
                  border: '1px solid #e1e4e8',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                }}
              >
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    marginBottom: '15px',
                    border: '3px solid #0366d6'
                  }}
                />
                <h3 style={{
                  margin: '0 0 10px 0',
                  color: '#24292e',
                  fontSize: '1.2em'
                }}>
                  {user.login}
                </h3>
                
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    padding: '8px 16px',
                    backgroundColor: '#0366d6',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    marginTop: '10px'
                  }}
                <a>
                  View Profile →
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Initial State */}
      {!loading && !error && users.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '60px 20px',
          color: '#586069'
        }}>
          <p style={{ fontSize: '3em', margin: '0 0 20px 0' }}>🔍</p>
          <p style={{ fontSize: '1.2em', margin: 0 }}>
            Start by searching for a GitHub username above!
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
