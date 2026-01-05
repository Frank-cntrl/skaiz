const Documentary = () => {
  const documentaryImages = [
    // Blue/Cool tones first
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80',
      alt: 'Documentary 1',
      size: 'medium'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80',
      alt: 'Documentary 2',
      size: 'large'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=800&q=80',
      alt: 'Documentary 3',
      size: 'small'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      alt: 'Documentary 4',
      size: 'medium'
    },
    
    // Transition to greens
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
      alt: 'Documentary 5',
      size: 'small'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=80',
      alt: 'Documentary 6',
      size: 'medium'
    },
    
    // Transition to warm tones
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
      alt: 'Documentary 7',
      size: 'large'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80',
      alt: 'Documentary 8',
      size: 'small'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
      alt: 'Documentary 9',
      size: 'medium'
    },
    
    // End with monochrome
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80',
      alt: 'Documentary 10',
      size: 'medium'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80',
      alt: 'Documentary 11',
      size: 'small'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&q=80',
      alt: 'Documentary 12',
      size: 'large'
    },
    {
      id: 13,
      src: 'https://images.unsplash.com/photo-1506629905607-bfa2d2c88e3e?w=800&q=80',
      alt: 'Documentary 13',
      size: 'small'
    },
    {
      id: 14,
      src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80',
      alt: 'Documentary 14',
      size: 'medium'
    },
    {
      id: 15,
      src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
      alt: 'Documentary 15',
      size: 'small'
    },
  ]

  return (
    <div className="min-h-screen bg-white text-black pt-20">

      {/* Seamless Color-Gradient Gallery */}
      <div className="max-w-7xl mx-auto px-8 pb-24 pt-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-min">
          {documentaryImages.map((image, index) => (
            <div
              key={image.id}
              className={`
                group cursor-pointer overflow-hidden
                ${image.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                ${image.size === 'medium' ? 'row-span-1' : ''}
                ${image.size === 'small' ? 'row-span-1' : ''}
              `}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 filter group-hover:brightness-110"
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

export default Documentary