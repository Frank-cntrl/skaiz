import { useEffect } from 'react'

/**
 * Lightbox — full-screen overlay for a single image. Renders nothing when
 * `image` is null. Closes on backdrop click, the × button, or Escape.
 *
 * Props:
 *  - image    { src, alt } to display, or null to stay closed
 *  - onClose  called when the viewer dismisses it; keep it stable (useCallback)
 */
function Lightbox({ image, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])

  if (!image) return null

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
        onClick={onClose}
      >
        ×
      </button>
      <img
        src={image.src}
        alt={image.alt}
        className="max-w-full max-h-full object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )
}

export default Lightbox
