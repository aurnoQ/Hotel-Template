import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import OpeningHours from '../common/OpeningHours';

export default function LocationCard({ light = false, className = '' }) {
  const text   = light ? 'text-[#FFFDF9]'    : 'text-[#302C29]';
  const muted  = light ? 'text-[#FFFDF9]/50' : 'text-[#302C29]/50';
  const accent = 'text-[#A85C3A]';

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Address */}
      <div className="flex gap-3">
        <MapPin size={16} className={`${accent} mt-0.5 flex-shrink-0`} aria-hidden="true" />
        <div>
          <p className={`font-sans text-xs font-semibold tracking-[0.12em] uppercase mb-1 ${muted}`}>Address</p>
          <address className={`not-italic font-sans text-sm leading-relaxed ${text}`}>
            {siteConfig.location.address}<br />
            {siteConfig.location.area}<br />
            {siteConfig.location.city}, {siteConfig.location.country}
          </address>
        </div>
      </div>

      {/* Hours */}
      <div className="flex gap-3">
        <Clock size={16} className={`${accent} mt-0.5 flex-shrink-0`} aria-hidden="true" />
        <div className="flex-1">
          <p className={`font-sans text-xs font-semibold tracking-[0.12em] uppercase mb-2 ${muted}`}>Hours</p>
          <OpeningHours light={light} />
        </div>
      </div>

      {/* Phone */}
      <div className="flex gap-3">
        <Phone size={16} className={`${accent} mt-0.5 flex-shrink-0`} aria-hidden="true" />
        <div>
          <p className={`font-sans text-xs font-semibold tracking-[0.12em] uppercase mb-1 ${muted}`}>Phone</p>
          <a
            href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
            className={`font-sans text-sm ${text} hover:text-[#A85C3A] transition-colors duration-200`}
          >
            {siteConfig.contact.phone}
          </a>
        </div>
      </div>

      {/* Email */}
      <div className="flex gap-3">
        <Mail size={16} className={`${accent} mt-0.5 flex-shrink-0`} aria-hidden="true" />
        <div>
          <p className={`font-sans text-xs font-semibold tracking-[0.12em] uppercase mb-1 ${muted}`}>Email</p>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className={`font-sans text-sm ${text} hover:text-[#A85C3A] transition-colors duration-200`}
          >
            {siteConfig.contact.email}
          </a>
        </div>
      </div>
    </div>
  );
}
