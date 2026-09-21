import { useCallback, useState } from 'react'
import LazyImage from '../components/LazyImage'
import Lightbox from '../components/Lightbox'
import MasonryGallery from '../components/MasonryGallery'

const Editorial = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  // 2026 shoots — newest first
  const newEditorial = [
    '/editorial/2026/WEOUT_skaizsquare-8.webp',
    '/editorial/2026/WEOUT_skaiz-17.webp',
    '/editorial/2026/WEOUT_skaiz-20.webp',
    '/editorial/2026/U-turnCover_Skaiz-1.webp',
    '/editorial/2026/U-turnCover_Skaiz-2.webp',
    '/editorial/2026/U-turnCover_Skaiz-3.webp',
    '/editorial/2026/Domestic_Monbon-Skaiz-6.webp',
    '/editorial/2026/Domestic_Monbon-Skaiz-72.webp',
  ]

  // Original 45 editorial images
  const originalEditorial = Array.from(
    { length: 45 },
    (_, i) => `/editorial/SKAIZ.WORLD-${i + 1}.webp`
  )

  const editorialImages = [...newEditorial, ...originalEditorial].map((src, i) => ({
    id: i + 1,
    src,
    alt: `Editorial ${i + 1}`,
  }))

  const closeLightbox = useCallback(() => setSelectedImage(null), [])

  return (
    <div className="min-h-screen bg-white text-black pt-20">

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <img 
          src="/editorial_document.webp" 
          alt="Editorial" 
          className="h-16 md:h-24 w-auto object-contain mb-12"
        />
      </div>

      {/* Cover Image */}
      <div className="w-full flex justify-center px-8 mb-16">
        <LazyImage 
          src="/SKAIZ.WORLD_COVERPAGE.webp" 
          alt="Skaiz World Editorial Cover" 
          className="w-full max-w-4xl"
        />
      </div>

      {/* Image Gallery — masonry layout */}
      <div className="max-w-7xl mx-auto px-8 pb-24">
        <MasonryGallery
          images={editorialImages}
          base={1}
          md={2}
          lg={2}
          onSelect={setSelectedImage}
        />
      </div>

      <Lightbox image={selectedImage} onClose={closeLightbox} />

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
