import React from 'react';
import { ExternalLink, MapPin } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export default function MapEmbed({ className = '', compact = false }) {
  const embedUrl = siteConfig.location.mapsEmbedUrl || `https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.location.area + ' ' + siteConfig.location.city)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className={`flex flex-col w-full h-full ${className}`}>
      <div
        className="relative w-full rounded-[4px] overflow-hidden border border-[#DCCDBB]/30 bg-[#241A17]"
        style={{
          height: compact ? '100%' : '280px',
          minHeight: compact ? '180px' : '280px'
        }}
      >
        <iframe
          title={`Map location of ${siteConfig.name}`}
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0, display: 'block' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </div>

      {!compact && (
        <a
          href={siteConfig.location.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-3 font-sans text-xs md:text-sm font-medium text-[#A85C3A] hover:text-[#241A17] transition-colors duration-200 group"
          aria-label={`Get directions to ${siteConfig.name} on Google Maps`}
        >
          <MapPin size={14} aria-hidden="true" />
          <span>Get Directions</span>
          <ExternalLink size={12} className="opacity-60" aria-hidden="true" />
        </a>
      )}
    </div>
  );
}
