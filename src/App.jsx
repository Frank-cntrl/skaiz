import { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CountdownScreen from './components/CountdownScreen'

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

// Secret path that bypasses the countdown
const SECRET_PATH = '/super-secret-view-for-kaiya-and-frank-only'

function App() {
  const [isRevealed, setIsRevealed] = useState(Date.now() >= REVEAL_DATE.getTime())

  useEffect(() => {
    if (isRevealed) return

    const msUntilReveal = REVEAL_DATE.getTime() - Date.now()

    if (msUntilReveal <= 0) {
      setIsRevealed(true)
      return
    }

    const timeout = setTimeout(() => setIsRevealed(true), msUntilReveal)
    return () => clearTimeout(timeout)
  }, [isRevealed])

  // Check if current URL starts with the secret path
  const isSecretAccess = window.location.pathname.startsWith(SECRET_PATH)

  if (!isRevealed && !isSecretAccess) {
    return <CountdownScreen revealDate={REVEAL_DATE} />
  }

  return (
    <Router>
      <Suspense fallback={<LoadingScreen />}>
        <div className="min-h-screen bg-white">
          <Navbar />
          <Routes>
            {/* Secret entry point — renders the landing page */}
            <Route path={SECRET_PATH} element={<Landing />} />
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