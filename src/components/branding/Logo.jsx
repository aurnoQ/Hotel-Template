import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/siteConfig';

export default function Logo({ variant = 'dark', className = '' }) {
  const textColor = variant === 'light'
    ? 'text-[#FFFDF9]'
    : 'text-[#241A17]';

  return (
    <Link
      to="/"
      aria-label={`${siteConfig.name} — Home`}
      className={`inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A85C3A] focus-visible:ring-offset-2 rounded-sm ${className}`}
    >
      <span
        className={`font-display tracking-[0.12em] text-2xl font-semibold leading-none select-none ${textColor}`}
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", letterSpacing: '0.12em' }}
      >
        {siteConfig.name}
      </span>
    </Link>
  );
}
