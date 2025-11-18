import { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px'
    }}>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search GitHub users... (e.g., octocat)"
            style={{
              flex: 1,
              padding: '12px 16px',
              fontSize: '16px',
              border: '2px solid #0366d6',
              borderRadius: '8px',
              outline: 'none'
            }}
          />
          <button
            type="submit"
            style={{
              padding: '12px 24px',
              backgroundColor: '#0366d6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#0256c5'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#0366d6'}
          >
            🔍 Search
          </button>
        </div>
      </form>
      
      <p style={{ 
        fontSize: '14px', 
        color: '#666', 
        marginTop: '10px',
        textAlign: 'center'
      }}>
        💡 Try searching for: "octocat", "torvalds", or "gaearon"
      </p>
    </div>
  );
};

export default Search;