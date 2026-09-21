import { useCallback, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Lightbox from '../components/Lightbox'
import StaggeredGallery, { SectionHeader } from '../components/WorldGallery'
import { findLocation } from '../data/world'

const WorldLocation = () => {
  const { locationId } = useParams()
  const [selectedImage, setSelectedImage] = useState(null)
  const closeLightbox = useCallback(() => setSelectedImage(null), [])

  const location = findLocation(locationId)
  if (!location) return <Navigate to="/world" replace />

  return (
    <div className="min-h-screen bg-white text-black pt-20">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <img
          src="/world_document.webp"
          alt="World"
          className="h-16 md:h-24 w-auto object-contain mb-12"
        />
      </div>

      {/* Scrapbook collage for this location */}
      <div className="max-w-6xl mx-auto px-8 pb-24">
        <SectionHeader section={location} />
        <StaggeredGallery
          images={location.images}
          large={location.large}
          onSelect={setSelectedImage}
        />
      </div>

      <Lightbox image={selectedImage} onClose={closeLightbox} />

      {/* Back to World */}
      <div className="text-center pb-12">
        <Link
          to="/world"
          className="inline-block border-2 border-black px-6 py-2 text-sm tracking-wider hover:bg-black hover:text-white transition-all duration-300"
        >
          ← BACK TO WORLD
        </Link>
      </div>
    </div>
  )
}

export default WorldLocation
