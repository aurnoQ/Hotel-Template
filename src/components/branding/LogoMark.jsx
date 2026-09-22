import React from 'react';
import { siteConfig } from '../../config/siteConfig';

export default function LogoMark({ variant = 'dark', size = 40, className = '' }) {
  const bg = variant === 'light' ? '#FFFDF9' : '#241A17';
  const fg = variant === 'light' ? '#241A17' : '#FFFDF9';

  return (
    <span
      aria-label={siteConfig.name}
      className={`inline-flex items-center justify-center rounded-sm font-display font-semibold select-none ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: bg,
        color: fg,
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontSize: size * 0.48,
        letterSpacing: '0.05em',
        lineHeight: 1,
      }}
    >
      {siteConfig.shortName}
    </span>
  );
}
