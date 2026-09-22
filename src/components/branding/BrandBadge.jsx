import React from 'react';
import { siteConfig } from '../../config/siteConfig';

export default function BrandBadge({ className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[0.65rem] font-sans font-semibold tracking-[0.15em] uppercase text-[#A85C3A] ${className}`}
    >
      <span
        style={{
          display: 'inline-block',
          width: 20,
          height: 20,
          borderRadius: 2,
          backgroundColor: '#241A17',
          color: '#FFFDF9',
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 10,
          lineHeight: '20px',
          textAlign: 'center',
          letterSpacing: '0.05em',
          fontWeight: 600,
        }}
      >
        {siteConfig.shortName}
      </span>
      {siteConfig.name}
    </span>
  );
}
