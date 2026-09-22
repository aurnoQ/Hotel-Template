import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, CalendarDays } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export default function MobileActionBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
      aria-label="Quick actions"
    >
      <div className="bg-[#FFFDF9]/95 backdrop-blur-md border-t border-[#DCCDBB]/60 shadow-[0_-4px_20px_rgba(36,26,23,0.08)]">
        <div className="flex items-stretch">
          <a
            href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
            aria-label={`Call us at ${siteConfig.contact.phone}`}
            className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-[#302C29] hover:text-[#A85C3A] transition-colors duration-200 min-h-[56px]"
          >
            <Phone size={18} aria-hidden="true" />
            <span className="text-[10px] font-sans font-semibold tracking-wider uppercase">Call</span>
          </a>

          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}`}
            aria-label="Message us on WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-[#302C29] hover:text-[#68705A] transition-colors duration-200 border-x border-[#DCCDBB]/60 min-h-[56px]"
          >
            <MessageCircle size={18} aria-hidden="true" />
            <span className="text-[10px] font-sans font-semibold tracking-wider uppercase">WhatsApp</span>
          </a>

          <Link
            to="/reservations"
            aria-label="Reserve a table"
            className="flex-1 flex flex-col items-center justify-center gap-1 py-3 text-[#FFFDF9] bg-[#241A17] hover:bg-[#302C29] transition-colors duration-200 min-h-[56px]"
          >
            <CalendarDays size={18} aria-hidden="true" />
            <span className="text-[10px] font-sans font-semibold tracking-wider uppercase">Reserve</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
