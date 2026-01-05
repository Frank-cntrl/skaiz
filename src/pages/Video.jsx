const Video = () => {
  const videos = [
    {
      id: 1,
      title: '"DANGEROUS! music video by DEY-G, Adol, Syrosis',
      youtubeUrl: 'https://youtube.com/watch?v=example1',
      thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
    },
    {
      id: 2,
      title: '"Beyond the Veild" Visualizer for Ajai Kasim',
      youtubeUrl: 'https://youtube.com/watch?v=example2',
      thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80',
    },
    {
      id: 3,
      title: 'Music Video - "Neon Dreams"',
      youtubeUrl: 'https://youtube.com/watch?v=example3',
      thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80',
    },
    {
      id: 4,
      title: 'Brand Campaign - "Future Forward"',
      youtubeUrl: 'https://youtube.com/watch?v=example4',
      thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    },
    {
      id: 5,
      title: 'Short Film - "Midnight Stories"',
      youtubeUrl: 'https://youtube.com/watch?v=example5',
      thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80',
    },
  ]

  return (
    <div className="min-h-screen bg-white text-black pt-20">

      {/* Video Stack */}
      <div className="max-w-4xl mx-auto px-8 pb-24 pt-12">
        <div className="space-y-16">
          {videos.map((video, index) => (
            <div key={video.id} className="group">
              {/* Video Title */}
              <h2 className="text-xl font-serif text-center mb-6 tracking-wide">
                {video.title}
              </h2>
              
              {/* Video Container with Red Border */}
              <div className="border-4 border-red-500 relative overflow-hidden aspect-video">
                <a 
                  href={video.youtubeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full h-full relative group-hover:scale-105 transition-transform duration-500"
                >
                  {/* Video Thumbnail */}
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-red-500/80 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-red-600/80 transition-colors duration-300">
                      <div className="w-0 h-0 border-t-12 border-t-transparent border-l-20 border-l-white border-b-12 border-b-transparent ml-2"></div>
                    </div>
                  </div>
                  
                  {/* YouTube Link Indicator */}
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 text-xs tracking-wider rounded">
                    WATCH FULL VIDEO
                  </div>
                </a>
              </div>
              
              {/* Video Description/Link */}
              <div className="text-center mt-4">
                <a 
                  href={video.youtubeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-700 text-sm tracking-wider transition-colors duration-300"
                >
                  → View on YouTube
                </a>
              </div>
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

export default Video