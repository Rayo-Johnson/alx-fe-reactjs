import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

// Function to fetch posts from JSONPlaceholder API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  
  return response.json();
};

const PostsComponent = () => {
  const [showComponent, setShowComponent] = useState(true);

  // Using React Query's useQuery hook
  const { 
    data: posts, 
    isLoading, 
    isError, 
    error, 
    refetch,
    isFetching,
    dataUpdatedAt
  } = useQuery({
    queryKey: ['posts'], // Unique key for this query
    queryFn: fetchPosts, // Function to fetch data
  });

  // Loading state
  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <h2>Loading Posts...</h2>
        <p>Fetching data from JSONPlaceholder API</p>
      </div>
    );
  }

  // Error state
  if (isError) {
    return (
      <div className="error-container">
        <div className="error-content">
          <h2>⚠️ Error Loading Posts</h2>
          <p className="error-message">{error.message}</p>
          <button onClick={() => refetch()} className="btn-retry">
            🔄 Try Again
          </button>
        </div>
      </div>
    );
  }

  const lastUpdated = new Date(dataUpdatedAt).toLocaleTimeString();

  return (
    <div className="posts-container">
      {/* Header Section */}
      <header className="posts-header">
        <h1>📚 Posts Dashboard</h1>
        <p className="subtitle">
          Powered by React Query - Fetching data from JSONPlaceholder API
        </p>

        {/* Stats Bar */}
        <div className="stats-bar">
          <div className="stat-card">
            <span className="stat-label">Total Posts</span>
            <span className="stat-value">{posts?.length || 0}</span>
          </div>
          
          <div className="stat-card">
            <span className="stat-label">Last Updated</span>
            <span className="stat-value">{lastUpdated}</span>
          </div>

          {isFetching && (
            <div className="stat-card fetching">
              <div className="spinner-small"></div>
              <span className="stat-value">Refetching...</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button
            onClick={() => refetch()}
            disabled={isFetching}
            className={`btn-primary ${isFetching ? 'disabled' : ''}`}
          >
            {isFetching ? '🔄 Refetching...' : '🔄 Refetch Data'}
          </button>

          <button
            onClick={() => setShowComponent(false)}
            className="btn-danger"
          >
            🗑️ Unmount Component
          </button>
        </div>

        {/* Cache Info Banner */}
        <div className="info-banner">
          <strong>💡 React Query Cache Demo:</strong> Click "Unmount Component" 
          then remount - notice data loads instantly from cache! The "Refetch Data" 
          button manually updates the cache.
        </div>
      </header>

      {/* Posts Grid */}
      <div className="posts-grid">
        {posts?.slice(0, 12).map((post) => (
          <article key={post.id} className="post-card">
            <div className="post-header">
              <span className="post-badge">Post #{post.id}</span>
              <span className="post-icon">📄</span>
            </div>
            
            <h3 className="post-title">{post.title}</h3>
            
            <p className="post-body">{post.body}</p>

            <footer className="post-footer">
              <span className="post-user">User ID: {post.userId}</span>
            </footer>
          </article>
        ))}
      </div>

      {/* Show more info */}
      {posts && posts.length > 12 && (
        <div className="more-info">
          <p>
            Showing 12 of {posts.length} posts. 
            <strong> ({posts.length - 12} more available)</strong>
          </p>
        </div>
      )}
    </div>
  );
};

// Wrapper component to handle unmounting
const PostsComponentWrapper = () => {
  const [showComponent, setShowComponent] = useState(true);

  if (!showComponent) {
    return (
      <div className="unmounted-container">
        <div className="unmounted-content">
          <span className="unmounted-icon">🗑️</span>
          <h2>Component Unmounted</h2>
          <p>
            Data is still in React Query cache! Click below to remount and 
            see instant loading from cache.
          </p>
          <button
            onClick={() => setShowComponent(true)}
            className="btn-success"
          >
            ♻️ Remount Component
          </button>
          <p className="unmounted-tip">
            💡 Notice how data loads instantly from cache!
          </p>
        </div>
      </div>
    );
  }

  return <PostsComponent />;
};

export default PostsComponentWrapper;