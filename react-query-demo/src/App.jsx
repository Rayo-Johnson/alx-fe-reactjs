import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import PostsComponent from './components/PostsComponent';
import './App.css';

// Create a QueryClient instance with custom configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // Data is fresh for 5 minutes
      cacheTime: 1000 * 60 * 10, // Cache persists for 10 minutes
      refetchOnWindowFocus: false, // Don't refetch when window regains focus
      retry: 1, // Retry failed requests once
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app-container">
        <PostsComponent />
      </div>
      {/* React Query Devtools - helps debug queries */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
