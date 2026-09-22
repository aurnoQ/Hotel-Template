import React from 'react';
import { testimonials } from '../../data/testimonials';
import SectionHeader from '../common/SectionHeader';

export default function TestimonialsSection() {
  // Triple the testimonials for a seamless infinite marquee loop
  const tripled = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="section-padding bg-[#FFFDF9] overflow-hidden" aria-label="Guest testimonials">
      <div className="container-wide mb-14">
        <SectionHeader
          eyebrow="Guest Stories"
          heading="What our guests say."
          align="center"
        />
      </div>

      {/* Marquee track */}
      <div className="relative group/tmarquee">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[#FFFDF9] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[#FFFDF9] to-transparent z-10" />

        <div
          style={{
            display: 'flex',
            width: 'max-content',
            animation: 'testimonialMarquee 30s linear infinite',
          }}
          className="group-hover/tmarquee:[animation-play-state:paused]"
        >
          {tripled.map((t, i) => (
            <figure
              key={`${t.id}-${i}`}
              className="flex flex-col w-72 md:w-80 flex-shrink-0 mx-4 px-6 py-7 bg-[#F7F1E8] rounded-[4px] border border-[#DCCDBB]/40 cursor-default"
              onMouseEnter={e => {
                // Pause entire track on individual card hover
                const track = e.currentTarget.parentElement;
                if (track) track.style.animationPlayState = 'paused';
              }}
              onMouseLeave={e => {
                const track = e.currentTarget.parentElement;
                if (track) track.style.animationPlayState = '';
              }}
            >
              <blockquote className="font-display text-lg md:text-xl font-medium text-[#241A17] leading-[1.4] italic flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="w-8 h-px bg-[#A85C3A]" aria-hidden="true" />
                <div>
                  <p className="font-sans text-sm font-semibold text-[#302C29]">{t.author}</p>
                  <p className="font-sans text-xs text-[#302C29]/50 mt-0.5">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes testimonialMarquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}
