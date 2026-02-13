import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Art = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  // All art images including SKAIZ.WORLD_ART.png
  const artImages = [
    { id: 0, src: '/art/SKAIZ.WORLD_ART.png', alt: 'Skaiz World Art' },
    { id: 1, src: '/art/SKAIZ.WORLD_ART01.png', alt: 'Art 1' },
    { id: 2, src: '/art/SKAIZ.WORLD_ART02.png', alt: 'Art 2' },
    { id: 3, src: '/art/SKAIZ.WORLD_ART03.png', alt: 'Art 3' },
    { id: 4, src: '/art/SKAIZ.WORLD_ART04.png', alt: 'Art 4' },
    { id: 5, src: '/art/SKAIZ.WORLD_ART05.png', alt: 'Art 5' },
    { id: 6, src: '/art/SKAIZ.WORLD_ART06.png', alt: 'Art 6' },
    { id: 7, src: '/art/SKAIZ.WORLD_ART07.png', alt: 'Art 7' },
    { id: 8, src: '/art/SKAIZ.WORLD_ART08.png', alt: 'Art 8' },
    { id: 10, src: '/art/SKAIZ.WORLD_ART10.png', alt: 'Art 10' },
    { id: 11, src: '/art/SKAIZ.WORLD_ART11.png', alt: 'Art 11' },
  ]

  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setSelectedImage(null)
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <div className="min-h-screen bg-white text-black pt-20">
      {/* Image Gallery */}
      <div className="max-w-7xl mx-auto px-8 py-12 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {artImages.map((image) => (
            <div
              key={image.id}
              className="group cursor-pointer overflow-hidden"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Back to Home */}
      <div className="text-center pb-12">
        <Link 
          to="/" 
          className="inline-block border-2 border-black px-6 py-2 text-sm tracking-wider hover:bg-black hover:text-white transition-all duration-300"
        >
          ← BACK TO HOME
        </Link>
      </div>
    </div>
  )
}

export default Art
