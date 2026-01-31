import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Image cycling component for each section - fast, no transitions
const ImageCycler = ({ images, interval = 300 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval])

  return (
    <div className="relative w-full h-full overflow-hidden">
      <img
        src={images[currentIndex]}
        alt=""
        className="w-full h-full object-cover"
      />
    </div>
  )
}

const Landing = () => {
  // Preview images for each section (first 5-8 images from each)
  const sections = [
    {
      path: '/editorial',
      label: 'editorial',
      images: Array.from({ length: 8 }, (_, i) => `/editorial/SKAIZ.WORLD-${i + 1}.jpg`)
    },
    {
      path: '/memories',
      label: 'memories',
      images: Array.from({ length: 8 }, (_, i) => `/Memories/SKAIZ.WORLD_film-${i + 1}.jpg`)
    },
    {
      path: '/light',
      label: 'light',
      images: [] // No images yet
    },
    {
      path: '/video',
      label: 'video',
      images: [] // Video thumbnails could go here
    },
    {
      path: '/world',
      label: 'world',
      images: [
        '/world/aventuras de las montañas vascas, 2025/SanSebastianHike_Skaiz-1.jpg',
        '/world/Madiera 2025/Madiera2025-1.jpg',
        '/world/PARIS 2025/parisFilm-1.jpg',
        '/world/Puerto Rico 2025/PuertoRico25-film-1.jpg',
        '/world/aventuras de las montañas vascas, 2025/SanSebastianHike_Skaiz-5.jpg',
        '/world/Madiera 2025/Madiera2025-3.jpg',
        '/world/PARIS 2025/parisFilm-3.jpg',
        '/world/Puerto Rico 2025/PuertoRico25-film-4.jpg',
      ]
    },
    {
      path: '/art',
      label: 'art',
      images: [
        '/art/SKAIZ.WORLD_ART01.png',
        '/art/SKAIZ.WORLD_ART02.png',
        '/art/SKAIZ.WORLD_ART03.png',
        '/art/SKAIZ.WORLD_ART04.png',
        '/art/SKAIZ.WORLD_ART05.png',
      ]
    },
  ]

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Top Navigation - Contact and Instagram */}
      <div className="fixed top-4 right-6 flex items-center space-x-6 z-50">
        <div className="w-2 h-2 rounded-full"></div>
        <a 
          href="mailto:contact@skaiz.world"
          className="text-black text-sm tracking-wider hover:opacity-70 transition-opacity duration-300"
        >
          contact
        </a>
        <a 
          href="https://www.instagram.com/iamskaiz/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-black text-sm tracking-wider hover:opacity-70 transition-opacity duration-300"
        >
          instagram
        </a>
      </div>

      {/* Logo */}
      <div className="w-full flex justify-center pt-8 pb-4">
        <img 
          src="/SkaizWorld_document.png" 
          alt="Skaiz World" 
          className="h-16 md:h-24 w-auto object-contain"
        />
      </div>

      {/* Hero Image */}
      <div className="w-full flex justify-center px-8">
        <img 
          src="/SKAIZ.WORLD_COVERPAGE.jpg" 
          alt="Skaiz World Cover" 
          className="w-full max-w-4xl h-auto object-cover"
        />
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section) => (
            <Link
              key={section.path}
              to={section.path}
              className="group"
            >
              <div className="text-center mb-4">
                <h2 className="text-2xl font-serif tracking-wider">{section.label}</h2>
              </div>
              <div className="border-4 border-red-500 aspect-[4/3] overflow-hidden relative">
                {section.images.length > 0 ? (
                  <ImageCycler images={section.images} interval={300} />
                ) : (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Coming soon</span>
                  </div>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Landing
