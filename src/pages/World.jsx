import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LazyImage from '../components/LazyImage'

// ── Sub-components defined OUTSIDE World so they stay stable across re-renders ──

// Pseudo-random number from image id — consistent across re-renders
const rand = (id, seed = 1) => ((id * 7 + seed * 13 + 3) % 11) / 10

// Scattered collage: width 38-48%, margin-left 0-3%, so two always fit per row
const collageStyle = (id) => {
  const w = 38 + Math.round(rand(id, 1) * 10)
  const mt = -5 + Math.round(rand(id, 2) * 20)
  const ml = Math.round(rand(id, 3) * 3)
  return { width: `${w}%`, marginTop: `${mt}px`, marginLeft: `${ml}%`, marginBottom: '8px' }
}

const StaggeredGallery = ({ images, large = false, onSelect }) => (
  <div className="flex flex-wrap items-start">
    {images.map((image) => (
      <LazyImage
        key={image.id}
        src={image.src}
        alt={image.alt}
        className="cursor-pointer"
        imgClassName={'transition-transform duration-500 hover:scale-105' + (large ? ' object-contain' : '')}
        style={collageStyle(image.id)}
        onClick={() => onSelect(image)}
      />
    ))}
  </div>
)

const SectionHeader = ({ section }) => (
  <div className="mb-4">
    {section.headerImage ? (
      <img
        src={section.headerImage}
        alt={section.title}
        className="h-20 md:h-28 w-auto object-contain"
      />
    ) : (
      <div>
        <h2 className="text-2xl md:text-3xl font-serif tracking-wider">{section.title}</h2>
        {section.subtitle && (
          <p className="text-xs text-black/40 tracking-wider mt-1">{section.subtitle}</p>
        )}
      </div>
    )}
  </div>
)

// ── Main component ──

const World = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  // Define sections
  const paris = {
    id: 'paris',
    title: 'Paris, France',
    subtitle: 'September 2025',
    headerImage: '/world/ParisDocument_SkaizWorld.png',
    images: Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      src: `/world/PARIS 2025/parisFilm-${i + 1}.jpg`,
      alt: `Paris ${i + 1}`,
    })),
  }

  const puertoRico = {
    id: 'puertorico',
    title: 'Puerto Rico',
    subtitle: 'January 2025',
    headerImage: '/world/Puerto Rico 2025/PeurtoRico2025_document.png',
    images: [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27].map(
      (num) => ({
        id: num,
        src: `/world/Puerto Rico 2025/PuertoRico25-film-${num}.jpg`,
        alt: `Puerto Rico ${num}`,
      })
    ),
  }

  const dyptychs = {
    id: 'dyptychs',
    title: 'San Sebastian, Spain',
    subtitle: 'July 2025',
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
    ],
  }

  const madeira = {
    id: 'madiera',
    title: 'Madeira, Portugal',
    subtitle: 'May 2025',
    headerImage: '/world/Madiera2025_document.png',
    images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 24].map((num) => ({
      id: num,
      src: `/world/Madiera 2025/Madiera2025-${num}.jpg`,
      alt: `Madiera ${num}`,
    })),
  }

  const aventuras = {
    id: 'montanas',
    title: 'Aventuras de las montañas',
    headerImage: '/world/aventuras de las montañas vascas, 2025/montanas_document.png',
    images: Array.from({ length: 34 }, (_, i) => ({
      id: i + 1,
      src: `/world/aventuras de las montañas vascas, 2025/SanSebastianHike_Skaiz-${i + 1}.jpg`,
      alt: `Aventuras de las montañas ${i + 1}`,
    })),
  }

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

      {/* Two-column layout: Paris + San Sebastian (left) | Puerto Rico + Madeira (right) */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-24">

          {/* Left column: Paris → San Sebastian */}
          <div className="flex-1 space-y-16">
            {/* Paris */}
            <div>
              <SectionHeader section={paris} />
              <StaggeredGallery images={paris.images} onSelect={setSelectedImage} />
            </div>

            {/* San Sebastian / Dyptychs — larger images */}
            <div>
              <SectionHeader section={dyptychs} />
              <StaggeredGallery images={dyptychs.images} large onSelect={setSelectedImage} />
            </div>
          </div>

          {/* Right column: Puerto Rico → Madeira */}
          <div className="flex-1 space-y-16 md:mt-12">
            {/* Puerto Rico */}
            <div>
              <SectionHeader section={puertoRico} />
              <StaggeredGallery images={puertoRico.images} onSelect={setSelectedImage} />
            </div>

            {/* Madeira */}
            <div>
              <SectionHeader section={madeira} />
              <StaggeredGallery images={madeira.images} onSelect={setSelectedImage} />
            </div>
          </div>
        </div>

        {/* Aventuras — full width across both columns */}
        <div className="pb-24">
          <SectionHeader section={aventuras} />
          <StaggeredGallery images={aventuras.images} onSelect={setSelectedImage} />
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

export default World
