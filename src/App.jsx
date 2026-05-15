import { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import CountdownScreen from './components/CountdownScreen'

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

// Reveal date — site goes live automatically when this moment passes
const REVEAL_DATE = new Date('2026-02-17T00:00:00')

// Lazy load all page components
const Navbar = lazy(() => import('./components/Navbar.jsx'))
const Landing = lazy(() => import('./pages/Landing.jsx'))
const Editorial = lazy(() => import('./pages/Editorial.jsx'))
const Art = lazy(() => import('./pages/Art.jsx'))
const Light = lazy(() => import('./pages/Light.jsx'))
const Memories = lazy(() => import('./pages/Memories.jsx'))
const Video = lazy(() => import('./pages/Video.jsx'))
const World = lazy(() => import('./pages/World.jsx'))

// Loading fallback component
const LoadingScreen = () => (
  <div className="min-h-screen bg-white flex items-center justify-center">
    <div className="text-black text-2xl font-serif">Loading...</div>
  </div>
)

// Secret hash that bypasses the countdown — visit skaiz.world/#kaiya-and-frank
const SECRET_HASH = '#kaiya-and-frank'

function App() {
  const [isRevealed, setIsRevealed] = useState(
    Date.now() >= REVEAL_DATE.getTime() || window.location.hash === SECRET_HASH
  )

  useEffect(() => {
    if (isRevealed) return

    // Listen for hash changes (in case they add the hash after page load)
    const checkHash = () => {
      if (window.location.hash === SECRET_HASH) {
        setIsRevealed(true)
      }
    }
    window.addEventListener('hashchange', checkHash)

    const msUntilReveal = REVEAL_DATE.getTime() - Date.now()

    if (msUntilReveal <= 0) {
      setIsRevealed(true)
      return
    }

    const timeout = setTimeout(() => setIsRevealed(true), msUntilReveal)
    return () => {
      clearTimeout(timeout)
      window.removeEventListener('hashchange', checkHash)
    }
  }, [isRevealed])

  if (!isRevealed) {
    return <CountdownScreen revealDate={REVEAL_DATE} />
  }

  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<LoadingScreen />}>
        <div className="min-h-screen bg-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/editorial" element={<Editorial />} />
            <Route path="/art" element={<Art />} />
            <Route path="/light" element={<Light />} />
            <Route path="/memories" element={<Memories />} />
            <Route path="/video" element={<Video />} />
            <Route path="/world" element={<World />} />
          </Routes>
        </div>
      </Suspense>
    </Router>
  )
}

export default App