import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import Lightbox from '../components/Lightbox'
import MasonryGallery from '../components/MasonryGallery'

// Event photography — newest event first. The leather & fur set keeps its hand-numbered order.
const OUTSIDE_FILES = [
  // Shereen's birthday — September 2026
  'shereenbday_SKAIZ-20',
  'shereenbday_SKAIZ-21',
  'shereenbday_SKAIZ-22',
  'shereenbday_SKAIZ-23',
  // August 2026
  'AugustFilm_skaiz-77',
  // Jazz4Lovers — August 2026
  'Jazz4Lovers_Skaiz-2',
  'Jazz4Lovers_Skaiz-5',
  'Jazz4Lovers_Skaiz-9',
  'Jazz4Lovers_Skaiz-11',
  'Jazz4Lovers_Skaiz-12',
  'Jazz4Lovers_Skaiz-18',
  'Jazz4Lovers_Skaiz-51',
  'Jazz4Lovers_Skaiz-60',
  // July 2026
  'JulySkaiz-13',
  // YoungWorld26 — July 2026
  'YoungWorld26_Skaiz-4',
  'YoungWorld26_Skaiz-32',
  'YoungWorld26_Skaiz-33',
  'YoungWorld26_Skaiz-36',
  'YoungWorld26_Skaiz-39',
  'YoungWorld26_Skaiz-41',
  'YoungWorld26_Skaiz-58',
  'YoungWorld26_Skaiz-77',
  // June 2026
  'junefilmedited_skaiz-46',
  // Film — January 2026
  'SKAIZ.WORLD_film-56',
  'SKAIZ.WORLD_film-57',
  'SKAIZ.WORLD_film-58',
  'SKAIZ.WORLD_film-59',
  'SKAIZ.WORLD_film-63',
  'SKAIZ.WORLD_film-83',
  'SKAIZ.WORLD_film-90',
  'SKAIZ.WORLD_film-111',
  // Leather & Fur — 2025
  '1leatherandfur_IAMSKAIZ-94',
  '2leatherandfur_IAMSKAIZ-15',
  '3leatherandfur_IAMSKAIZ-22',
  '4leatherandfur_IAMSKAIZ-60',
  '5leatherandfur_IAMSKAIZ-33',
  '6leatherandfur_IAMSKAIZ-35',
  '7leatherandfur_IAMSKAIZ-44',
  '8leatherandfur_IAMSKAIZ-46',
  '9leatherandfur_IAMSKAIZ-48',
  '10leatherandfur_IAMSKAIZ-49',
  '11leatherandfur_IAMSKAIZ-50',
  '12leatherandfur_IAMSKAIZ-55',
  '14leatherandfur_IAMSKAIZ-63',
  '15leatherandfur_IAMSKAIZ-65',
  '16leatherandfur_IAMSKAIZ-66',
  '17leatherandfur_IAMSKAIZ-70',
  '18leatherandfur_IAMSKAIZ-87',
  '20leatherandfur_IAMSKAIZ-97',
  '20leatherandfur_IAMSKAIZ-98',
  '21leatherandfur_IAMSKAIZ-102',
  '21leatherandfur_IAMSKAIZ-106',
  '22leatherandfur_IAMSKAIZ-3',
  // Styled by Simar — February 2024
  'STYLEDbySIMARbyiamskaiz-61',
  'STYLEDbySIMARbyiamskaiz-67',
  // February 2024 film
  'february2024film_02',
  'february2024film_03',
]

// The girl on the stairs — pinned to the top of the page.
const LEAD_FILE = 'SKAIZ.WORLD_film-63'

const Outside = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  // Kaiya wants the run reversed — oldest first — with the stairs shot leading.
  const ordered = [
    LEAD_FILE,
    ...OUTSIDE_FILES.filter((name) => name !== LEAD_FILE).reverse(),
  ]

  const outsideImages = ordered.map((name, i) => ({
    id: i + 1,
    src: `/outside/${name}.webp`,
    alt: `Outside ${i + 1}`,
  }))

  const closeLightbox = useCallback(() => setSelectedImage(null), [])

  return (
    <div className="min-h-screen bg-white text-black pt-20">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <img
          src="/outside_document.webp"
          alt="Outside"
          className="h-16 md:h-24 w-auto object-contain mb-12"
        />
      </div>

      {/* Image Gallery — masonry layout */}
      <div className="max-w-7xl mx-auto px-8 pb-24">
        <MasonryGallery
          images={outsideImages}
          base={2}
          md={3}
          lg={4}
          aspectRatio="3 / 2"
          onSelect={setSelectedImage}
        />
      </div>

      <Lightbox image={selectedImage} onClose={closeLightbox} />

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

export default Outside
