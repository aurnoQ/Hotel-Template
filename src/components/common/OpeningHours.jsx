import React from 'react';
import { useOpeningHours } from '../../hooks/useOpeningHours';
import { siteConfig } from '../../config/siteConfig';

export default function OpeningHours({ light = false, className = '' }) {
  const { isOpen, schedule } = useOpeningHours();
  const textColor = light ? 'text-[#FFFDF9]' : 'text-[#302C29]';
  const mutedColor = light ? 'text-[#FFFDF9]/50' : 'text-[#302C29]/50';

  return (
    <div className={`font-sans ${className}`}>
      <div className="flex items-center gap-2 mb-2">
        <span
          className={`inline-block w-2 h-2 rounded-full ${
            isOpen ? 'bg-[#68705A]' : 'bg-[#A85C3A]/50'
          }`}
          aria-hidden="true"
        />
        <span className={`text-xs font-semibold tracking-widest uppercase ${isOpen ? 'text-[#68705A]' : mutedColor}`}>
          {isOpen ? 'Open Now' : 'Closed'}
        </span>
      </div>
      <dl className="space-y-1">
        <div className="flex justify-between gap-6">
          <dt className={`text-sm ${mutedColor}`}>{siteConfig.openingHours.weekdays.label}</dt>
          <dd className={`text-sm font-medium ${textColor}`}>{siteConfig.openingHours.weekdays.display}</dd>
        </div>
        <div className="flex justify-between gap-6">
          <dt className={`text-sm ${mutedColor}`}>{siteConfig.openingHours.weekends.label}</dt>
          <dd className={`text-sm font-medium ${textColor}`}>{siteConfig.openingHours.weekends.display}</dd>
        </div>
      </dl>
    </div>
  );
}
