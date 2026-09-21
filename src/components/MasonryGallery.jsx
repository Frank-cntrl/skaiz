import { useEffect, useState } from 'react'
import LazyImage from './LazyImage'

// Tailwind's md and lg breakpoints, so column counts track the utility classes
// these galleries used before.
const columnsAt = (width, base, md, lg) =>
  width >= 1024 ? lg : width >= 768 ? md : base

/**
 * MasonryGallery — variable-height masonry that reads in source order: left to
 * right, then top to bottom.
 *
 * CSS `columns` fills one column all the way down before starting the next, so
 * the front of the list ends up stacked in the left column and the tail sits on
 * the right. Dealing the images round-robin across explicit flex columns keeps
 * the newest work along the top row instead. The trade is a slightly ragged
 * bottom edge, since the browser can no longer balance the column heights.
 *
 * Props:
 *  - images       [{ id, src, alt }] in display order
 *  - base/md/lg   column count per breakpoint
 *  - aspectRatio  forwarded to LazyImage for the loading skeleton
 *  - onSelect     called with the image that was clicked
 */
function MasonryGallery({ images, base = 2, md = 3, lg = 4, aspectRatio, onSelect }) {
  const [count, setCount] = useState(() =>
    columnsAt(typeof window === 'undefined' ? 1280 : window.innerWidth, base, md, lg)
  )

  useEffect(() => {
    const update = () => setCount(columnsAt(window.innerWidth, base, md, lg))
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [base, md, lg])

  const columns = Array.from({ length: count }, () => [])
  images.forEach((image, i) => columns[i % count].push(image))

  return (
    <div className="flex gap-4 items-start">
      {columns.map((column, i) => (
        <div key={i} className="flex-1 min-w-0">
          {column.map((image) => (
            <LazyImage
              key={image.id}
              src={image.src}
              alt={image.alt}
              className="cursor-pointer mb-4"
              imgClassName="transition-transform duration-500 hover:scale-105"
              aspectRatio={aspectRatio}
              onClick={() => onSelect(image)}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default MasonryGallery
