import LazyImage from './LazyImage'

// Pseudo-random number from image id — consistent across re-renders
const rand = (id, seed = 1) => ((id * 7 + seed * 13 + 3) % 11) / 10

// Scattered collage: width 38-48%, margin-left 0-3%, so two always fit per row
const collageStyle = (id) => {
  const w = 38 + Math.round(rand(id, 1) * 10)
  const mt = -5 + Math.round(rand(id, 2) * 20)
  const ml = Math.round(rand(id, 3) * 3)
  return { width: `${w}%`, marginTop: `${mt}px`, marginLeft: `${ml}%`, marginBottom: '8px' }
}

/**
 * SectionHeader — a location's handwritten document scan, falling back to type
 * when a location has no scan.
 */
export const SectionHeader = ({ section }) => (
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

/**
 * StaggeredGallery — the scrapbook collage used throughout World: images wrap
 * at uneven widths and offsets so the rows never line up.
 */
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

export default StaggeredGallery
