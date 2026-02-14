import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LazyImage from '../components/LazyImage'

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
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <img 
          src="/ARTDOCUMENT.png" 
          alt="Art" 
          className="h-16 md:h-24 w-auto object-contain mb-12"
        />
      </div>

      {/* Image Gallery — scattered collage */}
      <div className="max-w-7xl mx-auto px-8 pb-24">
        <div className="flex flex-wrap items-start">
          {artImages.map((image, index) => {
            // Use index for more variation with small image sets
            const rand = (i, seed) => ((i * 7 + seed * 13 + 3) % 11) / 10
            const w = 30 + Math.round(rand(index, 1) * 18)         // 30% to 48%
            const mt = -8 + Math.round(rand(index, 2) * 30)        // -8px to 22px
            const ml = Math.round(rand(index, 3) * 5)              // 0% to 5%
            return (
              <LazyImage
                key={image.id}
                src={image.src}
                alt={image.alt}
                className="cursor-pointer"
                imgClassName="transition-transform duration-500 hover:scale-105"
                style={{
                  width: `${w}%`,
                  marginTop: `${mt}px`,
                  marginLeft: `${ml}%`,
                  marginBottom: '10px',
                }}
                onClick={() => setSelectedImage(image)}
              />
            )
          })}
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
