import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LazyImage from '../components/LazyImage'

const Memories = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  // Generate array of all 134 memories images
  const memoriesImages = Array.from({ length: 134 }, (_, i) => ({
    id: i + 1,
    src: `/Memories/SKAIZ.WORLD_film-${i + 1}.webp`,
    alt: `Memory ${i + 1}`,
  }))

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
          src="/Memories_Document.webp" 
          alt="Memories" 
          className="h-16 md:h-24 w-auto object-contain mb-12"
        />
      </div>

      {/* Image Gallery — masonry layout */}
      <div className="max-w-7xl mx-auto px-8 pb-24">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
          {memoriesImages.map((image) => (
            <LazyImage
              key={image.id}
              src={image.src}
              alt={image.alt}
              className="cursor-pointer mb-4 break-inside-avoid"
              imgClassName="transition-transform duration-500 hover:scale-105"
              aspectRatio="2 / 3"
              onClick={() => setSelectedImage(image)}
            />
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

export default Memories
