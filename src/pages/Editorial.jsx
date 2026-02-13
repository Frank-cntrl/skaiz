import { useState, useEffect } from 'react'

const Editorial = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  // Generate array of all 45 editorial images
  const editorialImages = Array.from({ length: 45 }, (_, i) => ({
    id: i + 1,
    src: `/editorial/SKAIZ.WORLD-${i + 1}.jpg`,
    alt: `Editorial ${i + 1}`,
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
          src="/editorial_document.png" 
          alt="Editorial" 
          className="h-16 md:h-24 w-auto object-contain mb-12"
        />
      </div>

      {/* Cover Image */}
      <div className="w-full flex justify-center px-8 mb-16">
        <img 
          src="/SKAIZ.WORLD_COVERPAGE.jpg" 
          alt="Skaiz World Editorial Cover" 
          className="w-full max-w-4xl h-auto object-cover"
        />
      </div>

      {/* Image Gallery — masonry layout */}
      <div className="max-w-7xl mx-auto px-8 pb-24">
        <div className="columns-1 md:columns-2 gap-4">
          {editorialImages.map((image) => (
            <div
              key={image.id}
              className="group cursor-pointer overflow-hidden mb-4 break-inside-avoid"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
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
        <a 
          href="/" 
          className="inline-block border-2 border-black px-6 py-2 text-sm tracking-wider hover:bg-black hover:text-white transition-all duration-300"
        >
          ← BACK TO HOME
        </a>
      </div>
    </div>
  )
}

export default Editorial