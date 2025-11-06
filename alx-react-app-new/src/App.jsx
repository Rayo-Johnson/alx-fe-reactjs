import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import './App.css'

function App() {
  return (
    <div style={{ 
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    }}>
      <Header />
      <MainContent />
      
      <div style={{ 
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <UserProfile 
          name="Alice" 
          age="25" 
          bio="Loves hiking and photography" 
        />
        
        <UserProfile 
          name="Bob" 
          age="30" 
          bio="Enjoys coding and gaming" 
        />
        
        <UserProfile 
          name="Charlie" 
          age="28" 
          bio="Passionate about music and travel" 
        />
      </div>
      
      <Footer />
    </div>
  )
}

export default App
