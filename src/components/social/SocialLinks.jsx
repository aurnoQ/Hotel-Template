import React from 'react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './SocialIcons';
import { siteConfig } from '../../config/siteConfig';

export default function SocialLinks({ className = '', iconSize = 18, variant = 'default' }) {
  const getColors = () => {
    switch (variant) {
      case 'light':
        return 'text-[#FFFDF9]/60 hover:text-[#FFFDF9] bg-[#FFFDF9]/5 hover:bg-[#FFFDF9]/15 border-[#FFFDF9]/10';
      case 'dark':
        return 'text-[#302C29]/70 hover:text-[#241A17] bg-[#241A17]/5 hover:bg-[#241A17]/10 border-[#DCCDBB]';
      default:
        return 'text-[#302C29]/60 hover:text-[#A85C3A] hover:bg-[#A85C3A]/10 border-transparent';
    }
  };

  const linkStyle = `inline-flex items-center justify-center p-2 rounded-full border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A85C3A] ${getColors()}`;

  return (
    <div className={`flex items-center gap-3 ${className}`} role="list" aria-label="Social media profiles">
      {siteConfig.social.instagram && (
        <a
          href={siteConfig.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow ${siteConfig.name} on Instagram`}
          className={linkStyle}
        >
          <InstagramIcon size={iconSize} className="flex-shrink-0" />
        </a>
      )}

      {siteConfig.social.facebook && (
        <a
          href={siteConfig.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow ${siteConfig.name} on Facebook`}
          className={linkStyle}
        >
          <FacebookIcon size={iconSize} className="flex-shrink-0" />
        </a>
      )}

      {siteConfig.social.youtube && (
        <a
          href={siteConfig.social.youtube}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Subscribe to ${siteConfig.name} on YouTube`}
          className={linkStyle}
        >
          <YoutubeIcon size={iconSize} className="flex-shrink-0" />
        </a>
      )}
    </div>
  );
}
