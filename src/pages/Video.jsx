import LazyImage from '../components/LazyImage'

const Video = () => {
  const videos = [
    {
      id: 1,
      title: '"Dangerous!"',
      artist: 'DEY G ft. Adol & Syrosis',
      credit: 'Directed, Shot, and Lit by Skaiz',
      youtubeUrl: 'https://www.youtube.com/watch?v=7oQy7tEP88s',
      thumbnail: 'https://img.youtube.com/vi/7oQy7tEP88s/maxresdefault.jpg',
    },
    {
      id: 2,
      title: '"Beyond the Veil"',
      artist: 'Ajai Kasim',
      credit: 'Directed, Shot, and Lit by Skaiz',
      youtubeUrl: 'https://www.youtube.com/watch?v=ExTzx3l4fKg',
      thumbnail: 'https://img.youtube.com/vi/ExTzx3l4fKg/sddefault.jpg',
    },
    {
      id: 3,
      title: '"Girl You Got Cash?"',
      artist: 'Omighty',
      credit: 'Directed, Shot, and Lit by Skaiz',
      youtubeUrl: null,
      thumbnail: null,
      localVideo: '/video/Girlyougotcash_.MP4',
    },
    {
      id: 4,
      title: '"EYE 2 EYE"',
      artist: 'DEY-G',
      credit: 'Directed, Shot, and Lit by Skaiz',
      youtubeUrl: 'https://www.youtube.com/watch?v=GG71YhiWVKc',
      thumbnail: 'https://img.youtube.com/vi/GG71YhiWVKc/maxresdefault.jpg',
    },
  ]

  return (
    <div className="min-h-screen bg-white text-black pt-20">

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <img 
          src="/video_document.webp" 
          alt="Video" 
          className="h-16 md:h-24 w-auto object-contain mb-12"
        />
      </div>

      {/* Video Stack */}
      <div className="max-w-4xl mx-auto px-8 pb-24">
        <div className="space-y-16">
          {videos.map((video) => (
            <div key={video.id} className="group">
              {/* Video Title & Credits */}
              <div className="text-center mb-6">
                <h2 className="text-xl font-serif tracking-wide">
                  {video.title}
                </h2>
                <p className="text-sm text-black/60 mt-1">{video.artist}</p>
                <p className="text-xs text-black/40 mt-1 tracking-wider uppercase">{video.credit}</p>
              </div>
              
              {/* Video Container */}
              {video.localVideo ? (
                <div className="relative overflow-hidden aspect-video bg-black">
                  <video
                    src={video.localVideo}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <div className="relative overflow-hidden aspect-video">
                  <a 
                    href={video.youtubeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full h-full relative group-hover:scale-105 transition-transform duration-500"
                  >
                    <LazyImage
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full"
                      imgClassName="h-full object-cover"
                      aspectRatio={null}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                  </a>
                </div>
              )}
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
