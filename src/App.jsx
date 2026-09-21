import { useEffect, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

// Lazy load all page components
const Navbar = lazy(() => import('./components/Navbar.jsx'))
const Landing = lazy(() => import('./pages/Landing.jsx'))
const Editorial = lazy(() => import('./pages/Editorial.jsx'))
const Art = lazy(() => import('./pages/Art.jsx'))
const Light = lazy(() => import('./pages/Light.jsx'))
const Memories = lazy(() => import('./pages/Memories.jsx'))
const Video = lazy(() => import('./pages/Video.jsx'))
const World = lazy(() => import('./pages/World.jsx'))
const WorldLocation = lazy(() => import('./pages/WorldLocation.jsx'))
const Outside = lazy(() => import('./pages/Outside.jsx'))

// Loading fallback component
const LoadingScreen = () => (
  <div className="min-h-screen bg-white flex items-center justify-center">
    <div className="text-black text-2xl font-serif">Loading...</div>
  </div>
)

function App() {
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
            <Route path="/world/:locationId" element={<WorldLocation />} />
            <Route path="/outside" element={<Outside />} />
          </Routes>
        </div>
      </Suspense>
    </Router>
  )
}

export default App
