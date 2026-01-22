import { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CountdownScreen from './components/CountdownScreen'

// Lazy load all main site components to prevent code access
const Navbar = lazy(() => import('./components/Navbar.jsx'))
const Home = lazy(() => import('./pages/Home.jsx'))
const Video = lazy(() => import('./pages/Video.jsx'))
const Editorial = lazy(() => import('./pages/Editorial.jsx'))
const Documentary = lazy(() => import('./pages/Documentary.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))

// Loading fallback component
const LoadingScreen = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="text-white text-2xl font-serif">Loading...</div>
  </div>
)

function App() {
  const [countdownStatus, setCountdownStatus] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Fetch countdown status from backend
    const checkCountdown = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 
          (import.meta.env.DEV 
            ? 'http://localhost:8080/api/countdown'
            : '/api/countdown')
        
        const response = await fetch(apiUrl)
        const data = await response.json()
        setCountdownStatus(data)
      } catch (error) {
        console.error('Failed to fetch countdown status:', error)
        // On error, default to showing countdown
        setCountdownStatus({
          isRevealed: false,
          revealDate: null,
          timeRemaining: 0
        })
      } finally {
        setIsLoading(false)
      }
    }

    checkCountdown()
    // Check for countdown updates (interval from backend config or default 60s)
    const refreshInterval = countdownStatus?.config?.refreshInterval || 60000
    const interval = setInterval(checkCountdown, refreshInterval)
    
    return () => clearInterval(interval)
  }, [])

  // Show loading state
  if (isLoading) {
    return <LoadingScreen />
  }

  // Show countdown screen if not revealed
  if (!countdownStatus?.isRevealed) {
    return (
      <CountdownScreen 
        revealDate={countdownStatus?.revealDate}
        timeRemaining={countdownStatus?.timeRemaining || 0}
        config={countdownStatus?.config}
      />
    )
  }

  // Show main site after reveal
  return (
    <Router>
      <Suspense fallback={<LoadingScreen />}>
        <div className="min-h-screen bg-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video" element={<Video />} />
            <Route path="/editorial" element={<Editorial />} />
            <Route path="/documentary" element={<Documentary />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Suspense>
    </Router>
  )
}

export default App