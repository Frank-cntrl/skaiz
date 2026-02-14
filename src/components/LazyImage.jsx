import { useState, useRef, useEffect } from 'react'

/**
 * LazyImage — reserves space with a skeleton placeholder while the image loads,
 * then fades the image in. Prevents cumulative layout shift (CLS).
 *
 * Props:
 *  - aspectRatio  CSS aspect-ratio while loading (default '3 / 4').
 *                 Pass null to skip (when parent already sizes the container).
 *  - className    Extra classes on the wrapper <div>.
 *  - imgClassName Extra classes on the <img> element.
 *  - style        Inline styles merged onto the wrapper.
 *  - onClick      Click handler on the wrapper.
 *  - All standard <img> props (src, alt) are forwarded.
 */
function LazyImage(props) {
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef(null)

  // If the image is already cached the onLoad won't fire, so check immediately
  useEffect(() => {
    setLoaded(false)
    const el = imgRef.current
    if (el && el.complete && el.naturalWidth > 0) {
      setLoaded(true)
    }
  }, [props.src])

  const aspectRatio = props.aspectRatio !== undefined ? props.aspectRatio : '3 / 4'

  const containerCls = 'relative overflow-hidden ' + (props.className || '')
  const skelCls =
    'absolute inset-0 transition-opacity duration-500 ' +
    (loaded ? 'opacity-0 pointer-events-none' : 'opacity-100')
  const imgCls =
    'w-full h-auto transition-opacity duration-700 ease-out ' +
    (loaded ? 'opacity-100 ' : 'opacity-0 ') +
    (props.imgClassName || '')

  // While loading, apply aspectRatio so the container reserves space.
  // Once loaded, remove it so the image shows at its natural dimensions.
  const mergedStyle = {
    ...(!loaded && aspectRatio ? { aspectRatio } : {}),
    ...(props.style || {}),
  }

  return (
    <div className={containerCls} style={mergedStyle} onClick={props.onClick}>
      {/* Skeleton shimmer */}
      <div className={skelCls}>
        <div className="absolute inset-0 bg-linear-to-r from-gray-100 via-gray-200 to-gray-100 animate-pulse" />
      </div>

      {/* Actual image — invisible until loaded */}
      <img
        ref={imgRef}
        src={props.src}
        alt={props.alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={imgCls}
      />
    </div>
  )
}

export default LazyImage
