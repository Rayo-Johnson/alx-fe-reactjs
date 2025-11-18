import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Don't search if input is empty
    if (!username.trim()) {
      return;
    }

    // Reset states
    setLoading(true);
    setError(false);
    setUserData(null);
    setSubmitted(true);

    try {
      // Fetch user data from GitHub API
      const data = await fetchUserData(username.trim());
      setUserData(data);
      setError(false);
    } catch (err) {
      setError(true);
      setUserData(null);
      console.error('Error fetching user:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px'
    }}>
      {/* Search Form */}
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '30px' }}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username (e.g., octocat)"
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
            disabled={loading}
            style={{
              padding: '12px 24px',
              backgroundColor: loading ? '#ccc' : '#0366d6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.3s'
            }}
            onMouseOver={(e) => {
              if (!loading) e.target.style.backgroundColor = '#0256c5';
            }}
            onMouseOut={(e) => {
              if (!loading) e.target.style.backgroundColor = '#0366d6';
            }}
          >
            {loading ? '⏳' : '🔍'} Search
          </button>
        </div>
      </form>

      {/* Loading State */}
      {loading && (
        <div style={{
          textAlign: 'center',
          padding: '40px',
          backgroundColor: '#f6f8fa',
          borderRadius: '12px',
          border: '2px solid #0366d6'
        }}>
          <div style={{
            fontSize: '3em',
            marginBottom: '15px',
            animation: 'spin 1s linear infinite'
          }}>
            ⏳
          </div>
          <p style={{
            fontSize: '1.2em',
            color: '#0366d6',
            margin: 0,
            fontWeight: 'bold'
          }}>
            Loading...
          </p>
        </div>
      )}

      {/* Error State */}
      {error && !loading && submitted && (
        <div style={{
          textAlign: 'center',
          padding: '40px',
          backgroundColor: '#fff1f0',
          borderRadius: '12px',
          border: '2px solid #ff4d4f'
        }}>
          <p style={{
            fontSize: '3em',
            margin: '0 0 15px 0'
          }}>
            😕
          </p>
          <p style={{
            fontSize: '1.2em',
            color: '#cf1322',
            margin: 0,
            fontWeight: 'bold'
          }}>
            Looks like we cant find the user
          </p>
          <p style={{
            fontSize: '0.9em',
            color: '#666',
            marginTop: '10px'
          }}>
            Double-check the username and try again!
          </p>
        </div>
      )}

      {/* Success State - Display User Data */}
      {userData && !loading && !error && (
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          border: '2px solid #28a745',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          overflow: 'hidden'
        }}>
          {/* User Header */}
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            padding: '30px',
            textAlign: 'center',
            color: 'white'
          }}>
            <img
              src={userData.avatar_url}
              alt={userData.login}
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                border: '4px solid white',
                marginBottom: '15px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
              }}
            />
            <h2 style={{
              margin: '0 0 5px 0',
              fontSize: '2em'
            }}>
              {userData.name || userData.login}
            </h2>
            <p style={{
              margin: 0,
              fontSize: '1.1em',
              opacity: 0.9
            }}>
              @{userData.login}
            </p>
          </div>

          {/* User Details */}
          <div style={{
            padding: '25px'
          }}>
            {/* Bio */}
            {userData.bio && (
              <p style={{
                fontSize: '1em',
                color: '#586069',
                lineHeight: '1.6',
                marginBottom: '20px',
                fontStyle: 'italic'
              }}>
                "{userData.bio}"
              </p>
            )}

            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '15px',
              marginBottom: '20px'
            }}>
              <div style={{
                textAlign: 'center',
                padding: '15px',
                backgroundColor: '#f6f8fa',
                borderRadius: '8px'
              }}>
                <div style={{
                  fontSize: '1.8em',
                  fontWeight: 'bold',
                  color: '#0366d6'
                }}>
                  {userData.public_repos}
                </div>
                <div style={{
                  fontSize: '0.9em',
                  color: '#586069',
                  marginTop: '5px'
                }}>
                  Repositories
                </div>
              </div>

              <div style={{
                textAlign: 'center',
                padding: '15px',
                backgroundColor: '#f6f8fa',
                borderRadius: '8px'
              }}>
                <div style={{
                  fontSize: '1.8em',
                  fontWeight: 'bold',
                  color: '#0366d6'
                }}>
                  {userData.followers}
                </div>
                <div style={{
                  fontSize: '0.9em',
                  color: '#586069',
                  marginTop: '5px'
                }}>
                  Followers
                </div>
              </div>

              <div style={{
                textAlign: 'center',
                padding: '15px',
                backgroundColor: '#f6f8fa',
                borderRadius: '8px'
              }}>
                <div style={{
                  fontSize: '1.8em',
                  fontWeight: 'bold',
                  color: '#0366d6'
                }}>
                  {userData.following}
                </div>
                <div style={{
                  fontSize: '0.9em',
                  color: '#586069',
                  marginTop: '5px'
                }}>
                  Following
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              marginBottom: '20px'
            }}>
              {userData.location && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.2em' }}>📍</span>
                  <span style={{ color: '#586069' }}>{userData.location}</span>
                </div>
              )}
              {userData.company && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.2em' }}>🏢</span>
                  <span style={{ color: '#586069' }}>{userData.company}</span>
                </div>
              )}
              {userData.blog && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.2em' }}>🔗</span>
                  <a 
                    href={userData.blog.startsWith('http') ? userData.blog : `https://${userData.blog}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#0366d6', textDecoration: 'none' }}
                  >
                    {userData.blog}
                  </a>
                </div>
              )}
            </div>

            {/* View Profile Button */}
            
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                textAlign: 'center',
                padding: '12px',
                backgroundColor: '#0366d6',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 'bold',
                transition: 'background-color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#0256c5'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#0366d6'}
            <a>
              🔗 View Full GitHub Profile
            </a>
          </div>
        </div>
      )}

      {/* Initial State Hint */}
      {!submitted && (
        <div style={{
          textAlign: 'center',
          padding: '40px',
          color: '#586069'
        }}>
          <p style={{ fontSize: '2.5em', margin: '0 0 15px 0' }}>👆</p>
          <p style={{ fontSize: '1.1em', margin: 0 }}>
            Enter a GitHub username and click Search!
          </p>
          <p style={{ fontSize: '0.9em', marginTop: '10px', color: '#999' }}>
            Try: <strong>octocat</strong>, <strong>torvalds</strong>, or <strong>gaearon</strong>
          </p>
        </div>
      )}

      {/* Add spinning animation */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Search;