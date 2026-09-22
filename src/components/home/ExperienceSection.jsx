import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from '../common/ScrollReveal';
import { siteConfig } from '../../config/siteConfig';

export default function ExperienceSection() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden min-h-[70vh] flex items-center justify-center"
      aria-label="Experience section"
    >
      {/* Parallax background */}
      <div className="absolute inset-0 z-0">
        <motion.div className="w-full h-[115%] -top-[7.5%] absolute" style={{ y }}>
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1800&q=85"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </motion.div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#241A17]/60" />
      </div>

      {/* Content */}
      <div className="container-narrow relative z-10 text-center py-24 md:py-32">
        <ScrollReveal>
          <span className="eyebrow text-[#DCCDBB]/60">The Experience</span>
          <h2
            className="font-display text-[#F7F1E8] font-medium mt-4 leading-[1.1]"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
          >
            More than a meal.<br />
            <em style={{ color: '#DCCDBB' }}>It's a moment.</em>
          </h2>
          <p className="mt-6 font-sans text-[#FFFDF9]/65 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            From quiet mornings over coffee to long evenings shared around the table, {siteConfig.name} is designed around the simple pleasure of being together.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
