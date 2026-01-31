import { Link } from 'react-router-dom'

const Light = () => {
  return (
    <div className="min-h-screen bg-white text-black pt-20">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <h1 className="text-4xl md:text-6xl font-serif tracking-wider mb-8">Light</h1>
        <div className="h-px bg-black w-24 mb-12" />
      </div>

      {/* Content Area - Placeholder */}
      <div className="max-w-7xl mx-auto px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder cards */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div 
              key={item}
              className="aspect-video bg-gray-100 flex items-center justify-center border border-gray-200 hover:border-black transition-colors duration-300 cursor-pointer"
            >
              <span className="text-gray-400 text-sm">Lighting work {item}</span>
            </div>
          ))}
        </div>
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
}

export default Light
