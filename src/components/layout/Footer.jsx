import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import Logo from '../branding/Logo';
import SocialLinks from '../social/SocialLinks';
import MapEmbed from '../location/MapEmbed';
import { siteConfig } from '../../config/siteConfig';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#241A17] text-[#FFFDF9] border-t border-[#FFFDF9]/10" aria-label="Site footer">
      <div className="container-wide py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Quick Info (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <Logo variant="light" />
            <p className="text-xs md:text-sm text-[#FFFDF9]/75 leading-relaxed max-w-sm">
              {siteConfig.tagline} Seasonal plates, handcrafted coffee & slow moments in {siteConfig.location.city}.
            </p>
            
            {/* Direct Contact Info */}
            <div className="space-y-1.5 pt-2 text-xs md:text-sm text-[#FFFDF9]/80 font-sans">
              <p className="flex items-center gap-2">
                <MapPin size={13} className="text-[#A85C3A] flex-shrink-0" />
                <span>{siteConfig.location.address}, {siteConfig.location.area}, {siteConfig.location.city}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={13} className="text-[#A85C3A] flex-shrink-0" />
                <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} className="hover:text-[#FFFDF9] transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={13} className="text-[#A85C3A] flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[#FFFDF9] transition-colors">
                  {siteConfig.contact.email}
                </a>
              </p>
            </div>

            <SocialLinks variant="light" className="pt-2" />
          </div>

          {/* Useful Navigation Links (2 cols) */}
          <div className="md:col-span-2">
            <h3 className="text-[11px] font-sans font-semibold tracking-[0.15em] uppercase text-[#FFFDF9]/60 mb-3">
              Explore
            </h3>
            <ul className="space-y-2 font-sans text-xs md:text-sm" role="list">
              {[
                ['/', 'Home'],
                ['/menu', 'Menu'],
                ['/about', 'About'],
                ['/reservations', 'Reservations'],
                ['/contact', 'Contact'],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-[#FFFDF9]/75 hover:text-[#FFFDF9] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Integrated Interactive Map (6 cols) */}
          <div className="md:col-span-6 w-full">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-[11px] font-sans font-semibold tracking-[0.15em] uppercase text-[#FFFDF9]/60">
                Location Map
              </h3>
              <a
                href={siteConfig.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-[#A85C3A] hover:underline flex items-center gap-1 font-sans"
              >
                Open Google Maps ↗
              </a>
            </div>
            <div className="w-full h-44 md:h-52 rounded-[4px] overflow-hidden shadow-inner">
              <MapEmbed compact className="h-full" />
            </div>
          </div>

        </div>

        {/* Minimized bottom copyright bar */}
        <div className="mt-8 pt-4 border-t border-[#FFFDF9]/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#FFFDF9]/50 font-sans">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            Crafted for Hospitality by{' '}
            <span className="text-[#FFFDF9]/80 font-medium">AurnoQ</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
