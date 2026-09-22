import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// Curated high-definition hospitality, dining & lounge video
const HERO_VIDEOS = [
  // High quality luxury hospitality & restaurant ambiance video (Coverr/Pexels CDN)
  'https://cdn.coverr.co/videos/coverr-a-luxurious-restaurant-table-setting-5246/1080p.mp4',
  'https://assets.mixkit.co/videos/4713/4713-720.mp4'
];

const HERO_FALLBACK = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1800&q=85';

export default function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback or browser policy handled silently
      });
    }
  }, []);

  return (
    <section
      className="relative min-h-[92vh] flex items-end pb-16 md:pb-24 overflow-hidden"
      aria-label="Hero"
    >
      {/* Background — video + image fallback */}
      <div className="absolute inset-0 z-0 bg-[#1a1209]">
        {/* Fallback image */}
        <img
          src={HERO_FALLBACK}
          alt="Luxury hospitality interior"
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}
          loading="eager"
        />

        {/* Ambient Restaurant & Hotel Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden="true"
        >
          <source src={HERO_VIDEOS[0]} type="video/mp4" />
          <source src={HERO_VIDEOS[1]} type="video/mp4" />
        </video>

        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1209] via-[#1a1209]/40 to-[#1a1209]/20" />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 w-full">
        <div className="max-w-2xl">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="font-display text-[#F7F1E8] leading-[1.06] font-medium"
            style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
          >
            Good food.<br />
            <em style={{ fontStyle: 'italic', color: '#DCCDBB' }}>Slow moments.</em>
          </motion.h1>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.65 }}
            className="mt-5 font-sans text-[#FFFDF9]/75 text-base md:text-lg max-w-md leading-relaxed"
          >
            Seasonal plates, handcrafted coffee, and spaces made for lingering memories.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#A85C3A] text-[#FFFDF9] font-sans text-sm font-medium tracking-wide rounded-[4px] hover:bg-[#8f4d30] transition-all duration-300 group shadow-md"
            >
              Explore Menu
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
            <Link
              to="/reservations"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#FFFDF9]/60 text-[#FFFDF9] font-sans text-sm font-medium tracking-wide rounded-[4px] hover:bg-[#FFFDF9]/15 transition-all duration-300 backdrop-blur-sm"
            >
              Reserve a Table
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.5 }}
        className="absolute bottom-6 right-6 md:right-12 z-10 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[#FFFDF9]/40 font-sans text-[10px] tracking-[0.2em] uppercase" style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)', letterSpacing: '0.2em' }}>Scroll</span>
        <ChevronDown className="text-[#FFFDF9]/40 animate-bounce" size={16} />
      </motion.div>
    </section>
  );
}
