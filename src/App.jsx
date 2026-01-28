import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Lazy load all main site components
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