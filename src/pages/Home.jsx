import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-black pt-20">
      {/* Top Navigation Links */}
      <div className="fixed top-4 right-6 flex space-x-6 z-50">
        <Link 
          to="/contact" 
          className="text-black text-sm tracking-wider hover:opacity-70 transition-opacity duration-300"
        >
          contact
        </Link>
        <a 
          href="https://www.instagram.com/flyskaiz/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-black text-sm tracking-wider hover:opacity-70 transition-opacity duration-300"
        >
          instagram
        </a>
      </div>

      {/* Mobile SKAIZ Logo - Only visible on mobile */}
      <div className="md:hidden text-center py-8">
        <h1 className="font-serif text-5xl text-red-500 tracking-wider transform -rotate-3">
          SKAIZ
        </h1>
      </div>

      {/* Main Grid Layout */}
      <div className="min-h-screen flex flex-col justify-center px-8 py-16">

        {/* Main Content Grid */}
        <div className="max-w-6xl mx-auto w-full">
          {/* Top Row - Video, SKAIZ Logo, Editorial */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-center">
            
            {/* Video Section */}
            <Link to="/video" className="group">
              <div className="text-center">
                <h2 className="text-2xl font-serif mb-6">video</h2>
                <div className="border-4 border-red-500 p-6 min-h-[200px] flex flex-col justify-center hover:bg-red-50 transition-colors duration-300">
                  <div className="text-center">
                    <div className="text-sm mb-2">moving image</div>
                    <div className="text-sm mb-2">click-able</div>
                    <div className="text-sm mb-2">-takes you to portfolio</div>
                    <div className="text-sm">page of video work</div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Center SKAIZ Logo - Only visible on desktop */}
            <div className="text-center hidden md:block">
              <h1 className="font-serif text-6xl md:text-8xl text-red-500 tracking-wider transform -rotate-3">
                SKAIZ
              </h1>
            </div>

            {/* Editorial Section */}
            <Link to="/editorial" className="group">
              <div className="text-center">
                <h2 className="text-2xl font-serif mb-6">editorial</h2>
                <div className="border-4 border-red-500 p-6 min-h-[200px] flex flex-col justify-center hover:bg-red-50 transition-colors duration-300">
                  <div className="text-center">
                    <div className="text-sm mb-2">moving images</div>
                    <div className="text-sm mb-2">click-able</div>
                    <div className="text-sm mb-2">-takes you to portfolio</div>
                    <div className="text-sm">page of editorial work</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Middle Row - Documentary and Light */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            {/* Documentary Section */}
            <Link to="/documentary" className="group">
              <div className="text-center relative">
                <h2 className="text-2xl font-serif mb-6">documentary</h2>
                
                {/* Handwritten note */}
                <div className="absolute -top-2 right-0 text-red-500 italic text-sm transform rotate-12">
                  <div>titles are handwritten</div>
                  <div>(I will send scanned files)</div>
                </div>
                
                <div className="border-4 border-red-500 p-6 min-h-[180px] flex flex-col justify-center hover:bg-red-50 transition-colors duration-300">
                  <div className="text-center">
                    <div className="text-sm mb-2">moving images</div>
                    <div className="text-sm mb-2">click-able</div>
                    <div className="text-sm mb-2">-takes you to portfolio</div>
                    <div className="text-sm">page of documentary work</div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Light Section */}
            <div className="group cursor-pointer">
              <div className="text-center">
                <h2 className="text-2xl font-serif mb-6">light</h2>
                <div className="border-4 border-red-500 p-6 min-h-[180px] flex flex-col justify-center hover:bg-red-50 transition-colors duration-300">
                  <div className="text-center">
                    <div className="text-sm mb-2">moving image</div>
                    <div className="text-sm mb-2">click-able</div>
                    <div className="text-sm mb-2">-takes you to portfolio</div>
                    <div className="text-sm">page of lighting work</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row - Drawings and Production */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Drawings Section */}
            <div className="group cursor-pointer">
              <div className="text-center">
                <h2 className="text-2xl font-serif mb-6">drawings</h2>
                <div className="border-4 border-red-500 p-6 min-h-[160px] flex flex-col justify-center hover:bg-red-50 transition-colors duration-300">
                  <div className="text-center text-sm">
                    [Content for drawings section]
                  </div>
                </div>
              </div>
            </div>

            {/* Production Section */}
            <div className="group cursor-pointer">
              <div className="text-center">
                <h2 className="text-2xl font-serif mb-6">production</h2>
                <div className="border-4 border-red-500 p-6 min-h-[160px] flex flex-col justify-center hover:bg-red-50 transition-colors duration-300">
                  <div className="text-center text-sm">
                    [Content for production section]
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home