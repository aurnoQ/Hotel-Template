import React from 'react';
import { Star } from 'lucide-react';
import { guestReviews } from '../../data/reviews';
import SectionHeader from '../common/SectionHeader';

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="fill-[#A85C3A] text-[#A85C3A]" aria-hidden="true" />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  // Triple for seamless infinite marquee
  const tripled = [...guestReviews, ...guestReviews, ...guestReviews];

  return (
    <section className="section-padding bg-[#F7F1E8] overflow-hidden" aria-label="Guest reviews">
      <div className="container-wide mb-12">
        <SectionHeader
          eyebrow="Loved By Our Guests"
          heading="Guest Reviews"
          subtext="Sample guest testimonials. Real reviews coming soon."
          align="center"
        />
      </div>

      {/* Marquee */}
      <div className="relative group/rmarquee">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[#F7F1E8] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[#F7F1E8] to-transparent z-10" />

        <div
          style={{
            display: 'flex',
            width: 'max-content',
            animation: 'reviewMarquee 28s linear infinite',
          }}
        >
          {tripled.map((review, i) => (
            <div
              key={`${review.id}-${i}`}
              className="flex-shrink-0 w-72 md:w-80 mx-4 bg-[#FFFDF9] border border-[#DCCDBB]/50 p-6 rounded-[4px] flex flex-col gap-4 cursor-default"
              onMouseEnter={e => {
                const track = e.currentTarget.parentElement;
                if (track) track.style.animationPlayState = 'paused';
              }}
              onMouseLeave={e => {
                const track = e.currentTarget.parentElement;
                if (track) track.style.animationPlayState = '';
              }}
            >
              <StarRating count={review.rating} />
              <p className="font-sans text-sm text-[#302C29]/80 leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="pt-3 border-t border-[#DCCDBB]/40">
                <p className="font-sans text-sm font-semibold text-[#241A17]">{review.author}</p>
                <p className="font-sans text-xs text-[#302C29]/50 mt-0.5">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center mt-8 text-xs font-sans text-[#302C29]/35 container-wide">
        * Sample testimonials for demonstration purposes only.
      </p>

      <style>{`
        @keyframes reviewMarquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}
