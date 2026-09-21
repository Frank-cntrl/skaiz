import { Link } from 'react-router-dom'
import LazyImage from '../components/LazyImage'
import { LOCATIONS } from '../data/world'

// Scattered placement for the desktop grid, one entry per location in
// LOCATIONS order. Written out as literal class strings so Tailwind picks the
// arbitrary values up when it scans this file.
const DESKTOP_LAYOUT = [
  'w-[58%] ml-[4%] mb-6',
  'w-[36%] ml-[calc(62%+10px)] -mt-10 mb-10',
  'w-[52%] ml-[2%] mb-6',
  'w-[44%] ml-[52%] -mt-14 mb-10',
  'w-[55%] ml-[6%]',
]

const LocationBlock = ({ location, className = '' }) => (
  <Link to={`/world/${location.id}`} className={`group block ${className}`}>
    <div className="mb-2">
      <img
        src={location.headerImage}
        alt={location.title}
        className="h-12 md:h-16 lg:h-20 w-auto object-contain"
      />
    </div>
    <div className="overflow-hidden">
      <LazyImage
        src={location.cover}
        alt={location.title}
        imgClassName="transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  </Link>
)

const World = () => (
  <div className="min-h-screen bg-white text-black pt-20">
    {/* Page Header */}
    <div className="max-w-7xl mx-auto px-8 py-12">
      <img
        src="/world_document.webp"
        alt="World"
        className="h-16 md:h-24 w-auto object-contain mb-12"
      />
    </div>

    {/* Scattered Layout — Desktop */}
    <div className="hidden md:block max-w-6xl mx-auto px-8 pb-24">
      {LOCATIONS.map((location, i) => (
        <LocationBlock key={location.id} location={location} className={DESKTOP_LAYOUT[i]} />
      ))}
    </div>

    {/* Mobile — simple single column stack */}
    <div className="md:hidden px-6 pb-24 space-y-10">
      {LOCATIONS.map((location) => (
        <LocationBlock key={location.id} location={location} />
      ))}
    </div>

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

export default World
