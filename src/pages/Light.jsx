import { Link } from 'react-router-dom'

const Light = () => {
  const projects = [
    {
      id: 1,
      title: 'Paper Magazine — "Coolest Person in the Room"',
      role: 'Light Designer',
      featuring: 'Steph Suganami',
      link: 'https://www.papermag.com/stephanie-suganami',
      image: '/light/Steph-5.jpg',
      type: 'article',
    },
    {
      id: 2,
      title: '"Sensational Killers" Music Video',
      role: 'Head Gaffer',
      featuring: null,
      link: 'https://www.youtube.com/watch?v=L1wRfgzd0ic',
      thumbnail: 'https://img.youtube.com/vi/L1wRfgzd0ic/maxresdefault.jpg',
      type: 'video',
    },
    {
      id: 3,
      title: 'Paper Magazine — "Coolest Person in the Room"',
      role: 'Lighting Designer',
      featuring: 'Dominique Jackson',
      link: 'https://www.papermag.com/dominique-jackson#rebelltitem19',
      image: '/light/DJ_6.jpg',
      type: 'article',
    },
    {
      id: 4,
      title: '"Dangerous!" Music Video',
      role: 'Head Gaffer',
      featuring: 'DEY-G ft. Adol & Syrosis',
      link: 'https://www.youtube.com/watch?v=7oQy7tEP88s',
      thumbnail: 'https://img.youtube.com/vi/7oQy7tEP88s/maxresdefault.jpg',
      type: 'video',
    },
  ]

  return (
    <div className="min-h-screen bg-white text-black pt-20">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <h1 className="text-4xl md:text-6xl font-serif tracking-wider mb-8">Light</h1>
        <div className="h-px bg-black w-24 mb-12" />
      </div>

      {/* Projects */}
      <div className="max-w-4xl mx-auto px-8 pb-24">
        <div className="space-y-16">
          {projects.map((project) => (
            <div key={project.id}>
              {/* Title & Credits */}
              <div className="text-center mb-6">
                <h2 className="text-xl font-serif tracking-wide">
                  {project.title}
                </h2>
                <p className="text-sm text-black/60 mt-1">{project.role}</p>
                {project.featuring && (
                  <p className="text-xs text-black/40 mt-1 tracking-wider uppercase">
                    ft. {project.featuring}
                  </p>
                )}
              </div>

              {/* Image / Video Thumbnail */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block relative overflow-hidden ${project.type === 'video' ? 'aspect-video' : ''}`}
              >
                <img
                  src={project.image || project.thumbnail}
                  alt={project.title}
                  className={`w-full group-hover:scale-105 transition-transform duration-500 ${project.type === 'video' ? 'h-full object-cover' : 'h-auto object-contain'}`}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </a>
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
