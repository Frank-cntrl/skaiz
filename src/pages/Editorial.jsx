const Editorial = () => {
  const editorialImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1469460340997-2f854421e72f?w=800&q=80',
      alt: 'Editorial 1',
      size: 'medium'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
      alt: 'Editorial 2',
      size: 'medium'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?w=800&q=80',
      alt: 'Editorial 3',
      size: 'large'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80',
      alt: 'Editorial 4',
      size: 'medium'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      alt: 'Editorial 5',
      size: 'small'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
      alt: 'Editorial 6',
      size: 'small'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80',
      alt: 'Editorial 7',
      size: 'small'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80',
      alt: 'Editorial 8',
      size: 'medium'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&q=80',
      alt: 'Editorial 9',
      size: 'small'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
      alt: 'Editorial 10',
      size: 'large'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1506629905607-bfa2d2c88e3e?w=800&q=80',
      alt: 'Editorial 11',
      size: 'medium'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80',
      alt: 'Editorial 12',
      size: 'medium'
    },
  ]

  return (
    <div className="min-h-screen bg-white text-black pt-20">

      {/* Masonry Gallery */}
      <div className="max-w-7xl mx-auto px-8 pb-24 pt-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-min">
          {editorialImages.map((image, index) => (
            <div
              key={image.id}
              className={`
                group cursor-pointer overflow-hidden
                ${image.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                ${image.size === 'medium' ? 'row-span-1' : ''}
                ${image.size === 'small' ? 'row-span-1' : ''}
                ${index === 2 ? 'md:col-span-1 md:row-span-2' : ''}
                ${index === 6 || index === 7 ? 'md:col-span-1' : ''}
                ${index === 9 ? 'md:col-span-2' : ''}
              `}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{
                  aspectRatio: image.size === 'large' ? '4/5' : 
                             image.size === 'medium' ? '3/4' : '1/1'
                }}
              />
            </div>
          ))}
        </div>
      </div>

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