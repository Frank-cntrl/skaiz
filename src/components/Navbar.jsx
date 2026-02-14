import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/editorial', label: 'Editorial', headerImage: '/editorial_document.png' },
    { path: '/art', label: 'Art', headerImage: '/ARTDOCUMENT.png' },
    { path: '/light', label: 'Light', headerImage: '/light_document.png' },
    { path: '/memories', label: 'Memories', headerImage: '/Memories_Document.png' },
    { path: '/video', label: 'Video', headerImage: '/video_document.png' },
    { path: '/world', label: 'World', headerImage: '/world_document.png' },
  ]

  const isActive = (path) => location.pathname === path
  
  // Hide navbar on homepage since it has its own layout
  if (location.pathname === '/') {
    return null
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="hover:opacity-70 transition-opacity duration-300">
            <img 
              src="/SkaizWorld_document.png" 
              alt="Skaiz World" 
              className="h-8 w-auto object-contain justify-center"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block transition-opacity duration-300 ${
                  isActive(link.path)
                    ? 'opacity-100 border-b border-black pb-0.5'
                    : 'opacity-50 hover:opacity-100'
                }`}
              >
                <img
                  src={link.headerImage}
                  alt={link.label}
                  className="h-6 w-auto object-contain"
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex flex-col space-y-1.5 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile  */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 mt-6' : 'max-h-0'}`}>
          <div className="flex flex-col space-y-5 py-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block transition-opacity duration-300 ${
                  isActive(link.path)
                    ? 'opacity-100'
                    : 'opacity-50 hover:opacity-100'
                }`}
              >
                <img
                  src={link.headerImage}
                  alt={link.label}
                  className="h-7.5 w-auto object-contain"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar