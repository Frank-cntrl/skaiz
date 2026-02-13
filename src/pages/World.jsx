import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const World = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  // Define sections with their images
  const sections = [
    {
      id: 'montanas',
      title: 'Aventuras de las montañas',
      headerImage: '/world/aventuras de las montañas vascas, 2025/montanas_document.png',
      images: Array.from({ length: 34 }, (_, i) => ({
        id: i + 1,
        src: `/world/aventuras de las montañas vascas, 2025/SanSebastianHike_Skaiz-${i + 1}.jpg`,
        alt: `Aventuras de las montañas ${i + 1}`,
      }))
    },
    {
      id: 'dyptychs',
      title: 'Dyptychs de san sebastian',
      headerImage: '/world/Dyptychs de san sebastian, 2025/dyptchsdesansebDOCUMENT.png',
      images: [
        { id: 1, src: '/world/Dyptychs de san sebastian, 2025/SanSebastian_skaizworld.png', alt: 'San Sebastian 1' },
        { id: 2, src: '/world/Dyptychs de san sebastian, 2025/sansebastian_2.png', alt: 'San Sebastian 2' },
        { id: 3, src: '/world/Dyptychs de san sebastian, 2025/sansebastian_3.png', alt: 'San Sebastian 3' },
        { id: 4, src: '/world/Dyptychs de san sebastian, 2025/sansebastian_4.png', alt: 'San Sebastian 4' },
        { id: 5, src: '/world/Dyptychs de san sebastian, 2025/sansebastian_5.png', alt: 'San Sebastian 5' },
        { id: 6, src: '/world/Dyptychs de san sebastian, 2025/sansebastian6.png', alt: 'San Sebastian 6' },
        { id: 7, src: '/world/Dyptychs de san sebastian, 2025/beach2.jpg', alt: 'Beach 2' },
        { id: 8, src: '/world/Dyptychs de san sebastian, 2025/beach3.jpg', alt: 'Beach 3' },
        { id: 9, src: '/world/Dyptychs de san sebastian, 2025/shereen_ss_skaiz02.jpg', alt: 'Shereen' },
      ]
    },
    {
      id: 'madiera',
      title: 'Madiera',
      images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 24].map(num => ({
        id: num,
        src: `/world/Madiera 2025/Madiera2025-${num}.jpg`,
        alt: `Madiera ${num}`,
      }))
    },
    {
      id: 'paris',
      title: 'Paris',
      images: Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        src: `/world/PARIS 2025/parisFilm-${i + 1}.jpg`,
        alt: `Paris ${i + 1}`,
      }))
    },
    {
      id: 'puertorico',
      title: 'Puerto Rico',
      headerImage: '/world/Puerto Rico 2025/PeurtoRico2025_document.png',
      images: [
        1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27
      ].map(num => ({
        id: num,
        src: `/world/Puerto Rico 2025/PuertoRico25-film-${num}.jpg`,
        alt: `Puerto Rico ${num}`,
      }))
    }
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
          src="/world_document.png" 
          alt="World" 
          className="h-16 md:h-24 w-auto object-contain mb-12"
        />
      </div>

      {/* Sections */}
      {sections.map((section, sectionIndex) => (
        <div key={section.id} className={`max-w-7xl mx-auto px-8 ${sectionIndex < sections.length - 1 ? 'mb-24' : 'pb-24'}`}>
          {/* Section Header */}
          <div className="mb-8">
            {section.headerImage ? (
              <img 
                src={section.headerImage} 
                alt={section.title} 
                className="h-12 md:h-16 w-auto object-contain"
              />
            ) : (
              <h2 className="text-3xl md:text-4xl font-serif tracking-wider">{section.title}</h2>
            )}
          </div>

          {/* Section Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {section.images.map((image) => (
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
      ))}

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

export default World
