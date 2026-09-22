import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/siteConfig';
import ScrollReveal from '../common/ScrollReveal';

export default function ReservationTeaser() {
  return (
    <section className="py-20 md:py-28 bg-[#241A17] text-center relative overflow-hidden" aria-label="Reservation invitation">
      {/* Subtle texture/overlay */}
      <div className="container-narrow relative z-10">
        <ScrollReveal>
          <span className="eyebrow text-[#DCCDBB]/60">Reservations</span>
          <h2 className="font-display text-[#F7F1E8] text-[clamp(2.25rem,5vw,3.75rem)] font-medium mt-3 mb-6 leading-tight">
            A table is waiting for you.
          </h2>
          <p className="font-sans text-[#FFFDF9]/65 text-base md:text-lg max-w-lg mx-auto mb-8 leading-relaxed">
            Join us for morning coffee, a relaxed lunch, or an intimate dinner. We'll keep the lights warm and the table ready.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/reservations"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#A85C3A] text-[#FFFDF9] font-sans text-sm font-medium tracking-wide rounded-[4px] hover:bg-[#8f4d30] transition-colors duration-200 shadow-sm"
            >
              Reserve a Table
            </Link>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#FFFDF9]/30 text-[#FFFDF9] font-sans text-sm font-medium tracking-wide rounded-[4px] hover:bg-[#FFFDF9]/10 transition-colors duration-200"
            >
              Or Call {siteConfig.contact.phone}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
