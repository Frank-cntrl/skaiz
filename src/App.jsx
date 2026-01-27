import { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CountdownScreen from './components/CountdownScreen'

// Reveal date - change this to control when the site becomes visible
const REVEAL_DATE = new Date('2026-02-17T00:00:00')

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
  const [isRevealed, setIsRevealed] = useState(false)

  useEffect(() => {
    // Check if reveal date has passed
    const checkReveal = () => {
      const now = new Date()
      setIsRevealed(now >= REVEAL_DATE)
    }

    checkReveal()
    // Check every second to handle the moment of reveal
    const interval = setInterval(checkReveal, 1000)
    
    return () => clearInterval(interval)
  }, [])

  // Show countdown screen if not revealed
  if (!isRevealed) {
    return <CountdownScreen revealDate={REVEAL_DATE} />
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