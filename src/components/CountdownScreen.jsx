import { useState, useEffect } from 'react';

const CountdownScreen = ({ revealDate, timeRemaining, config = {} }) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Use backend config or fallback to defaults
  const screenConfig = config.screen || {
    title: 'SKAIZ',
    subtitle: 'WORLD',
    message: 'Coming Soon',
    socialLinks: {
      instagram: 'https://www.instagram.com/flyskaiz/',
    },
    backgroundImage: '/skaiz-world.png',
  };

  useEffect(() => {
    const calculateCountdown = () => {
      // Calculate from current time to reveal date for real-time countdown
      const now = new Date().getTime();
      const target = new Date(revealDate).getTime();
      const remaining = Math.max(0, target - now);
      
      const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval);
  }, [revealDate]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start overflow-hidden relative px-8 pt-4">
      {/* Logo Image - Original Size */}
      <div className="relative z-10 -mb-32 md:-mb-40 lg:-mb-48">
        <img
          src={screenConfig.backgroundImage}
          alt={`${screenConfig.title} ${screenConfig.subtitle}`}
          className="w-96 h-96 md:w-[480px] md:h-[480px] lg:w-[576px] lg:h-[576px] object-contain mx-auto -mt-32"
        />
      </div>

      {/* Looping Video */}
      <div className="relative z-10 mb-8 w-full max-w-4xl px-4">
        <video
          src="/memories-sequence.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full rounded-lg shadow-lg"
          style={{ maxHeight: '500px', objectFit: 'contain' }}
          onError={(e) => console.error('Video error:', e.target.error)}
          onLoadedData={() => console.log('✅ Video loaded')}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl">
        {/* Logo - Hidden since it's in the background image */}
        {/* <div className="mb-12">
          <h1 className="font-serif text-7xl md:text-9xl text-red-500 tracking-wider transform -rotate-3 drop-shadow-2xl">
            {screenConfig.title}
          </h1>
          {screenConfig.subtitle && (
            <p className="text-white text-xl md:text-2xl mt-6 tracking-widest font-light">
              {screenConfig.subtitle}
            </p>
          )}
        </div> */}

        {/* Countdown Timer */}
        <div className="mb-8">
          <p className="text-black/80 text-sm md:text-base uppercase tracking-widest mb-8">
            {screenConfig.message}
          </p>
          
          <div className="grid grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto">
            {[
              { value: countdown.days, label: 'Days' },
              { value: countdown.hours, label: 'Hours' },
              { value: countdown.minutes, label: 'Minutes' },
              { value: countdown.seconds, label: 'Seconds' }
            ].map((item, index) => (
              <div key={index} className="bg-black/5 backdrop-blur-sm border-2 border-red-500/30 rounded-lg p-4 md:p-6">
                <div className="text-3xl md:text-5xl font-bold text-black mb-2">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-[10px] md:text-xs text-black/60 uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        {screenConfig.socialLinks?.instagram && (
          <div className="mt-16 mb-12">
            <a 
              href={screenConfig.socialLinks.instagram}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black/70 hover:text-red-500 text-sm tracking-widest transition-colors duration-300 uppercase"
            >
              Follow on Instagram →
            </a>
          </div>
        )}
      </div>

      {/* Animated Particles/Stars Effect (Optional) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gray-400 rounded-full animate-pulse"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 3 + 's',
              animationDuration: Math.random() * 3 + 2 + 's',
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CountdownScreen;
