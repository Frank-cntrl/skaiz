import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const ImageCycler = ({ images, interval = 150 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  // Preload all images before cycling starts
  useEffect(() => {
    if (images.length === 0) return

    let loadedCount = 0
    const imageElements = images.map((src) => {
      const img = new Image()
      img.src = src
      img.onload = () => {
        loadedCount++
        if (loadedCount === images.length) {
          setImagesLoaded(true)
        }
      }
      img.onerror = () => {
        loadedCount++
        if (loadedCount === images.length) {
          setImagesLoaded(true)
        }
      }
      return img
    })

    return () => {
      imageElements.forEach((img) => {
        img.onload = null
        img.onerror = null
      })
    }
  }, [images])

  // Only start cycling once images are loaded
  useEffect(() => {
    if (!imagesLoaded || images.length <= 1) return
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval, imagesLoaded])

  return (
    <div className="relative w-full h-full overflow-hidden bg-white">
      {imagesLoaded ? (
        <img
          src={images[currentIndex]}
          alt=""
          className="w-full h-full object-contain"
        />
      ) : (
        <div className="w-full h-full bg-linear-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse" />
      )}
    </div>
  )
}

const SectionBlock = ({ section, className = '' }) => (
  <Link to={section.path} className={`group block ${className}`}>
    <div className="mb-2">
      {section.headerImage ? (
        <img
          src={section.headerImage}
          alt={section.label}
          className="h-12 md:h-16 lg:h-20 w-auto object-contain"
        />
      ) : (
        <h2 className="text-xl md:text-2xl font-serif tracking-wider">{section.label}</h2>
      )}
    </div>
    <div className="overflow-hidden relative aspect-4/3">
      {section.gif ? (
        <img src={section.gif} alt={section.label} className="w-full h-full object-cover" />
      ) : section.images.length > 0 ? (
        <ImageCycler images={section.images} interval={180} />
      ) : (
        <div className="w-full h-full bg-white flex items-center justify-center">
          <span className="text-gray-400 text-sm">Coming soon</span>
        </div>
      )}
    </div>
  </Link>
)

const Landing = () => {
  const sections = {
    editorial: {
      path: '/editorial',
      label: 'editorial',
      headerImage: '/editorial_document.webp',
      images: Array.from({ length: 8 }, (_, i) => `/editorial/SKAIZ.WORLD-${i + 1}.webp`),
    },
    memories: {
      path: '/memories',
      label: 'memories',
      headerImage: '/Memories_Document.webp',
      images: Array.from({ length: 8 }, (_, i) => `/Memories/SKAIZ.WORLD_film-${i + 1}.webp`),
    },
    world: {
      path: '/world',
      label: 'world',
      headerImage: '/world_document.webp',
      images: [
        '/world/aventuras de las montañas vascas, 2025/SanSebastianHike_Skaiz-1.webp',
        '/world/Madiera 2025/Madiera2025-1.webp',
        '/world/PARIS 2025/parisFilm-1.webp',
        '/world/Puerto Rico 2025/PuertoRico25-film-1.webp',
        '/world/aventuras de las montañas vascas, 2025/SanSebastianHike_Skaiz-5.webp',
        '/world/Madiera 2025/Madiera2025-3.webp',
        '/world/PARIS 2025/parisFilm-3.webp',
        '/world/Puerto Rico 2025/PuertoRico25-film-4.webp',
      ],
    },
    video: {
      path: '/video',
      label: 'video',
      headerImage: '/video_document.webp',
      gif: '/video_gif.gif',
      images: [],
    },
    art: {
      path: '/art',
      label: 'art',
      headerImage: '/ARTDOCUMENT.webp',
      images: [
        '/art/SKAIZ.WORLD_ART01.webp',
        '/art/SKAIZ.WORLD_ART02.webp',
        '/art/SKAIZ.WORLD_ART03.webp',
        '/art/SKAIZ.WORLD_ART04.webp',
        '/art/SKAIZ.WORLD_ART05.webp',
      ],
    },
    light: {
      path: '/light',
      label: 'light',
      headerImage: '/light_document.webp',
      gif: '/light_gif.gif',
      images: [],
    },
  }

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white py-3">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center relative">
          <img
            src="/favicon.webp"
            alt="Skaiz"
            className="h-8 w-auto object-contain"
          />
          <div className="absolute right-6 flex items-center space-x-6">
            <a
              href="mailto:Skaiz.co@gmail.com"
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
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>

      {/* Logo */}
      <div className="w-full flex justify-center py-8">
        <img
          src="/SkaizWorld_document.webp"
          alt="Skaiz World"
          className="h-16 md:h-24 w-auto object-contain"
        />
      </div>

      {/* Scattered Layout — Desktop */}
      <div className="hidden md:block max-w-6xl mx-auto px-8 pb-24">
        <SectionBlock section={sections.editorial} className="w-[60%] ml-[5%] mb-6" />
        <SectionBlock section={sections.memories} className="w-[50%] ml-[calc(58%+10px)] -mt-8 mb-10" />
        <SectionBlock section={sections.world} className="w-[45%] ml-[5%] mb-6" />
        <SectionBlock section={sections.video} className="w-[48%] ml-[52%] -mt-16 mb-10" />
        <SectionBlock section={sections.art} className="w-[53%] ml-[3%] mb-6" />
        <SectionBlock section={sections.light} className="w-[33%] ml-[52%] -mt-6" />
      </div>

      {/* Mobile — simple single column stack */}
      <div className="md:hidden px-6 pb-24 space-y-10">
        <SectionBlock section={sections.editorial} />
        <SectionBlock section={sections.memories} />
        <SectionBlock section={sections.world} />
        <SectionBlock section={sections.video} />
        <SectionBlock section={sections.art} />
        <SectionBlock section={sections.light} />
      </div>
    </div>
  )
}

export default Landing
