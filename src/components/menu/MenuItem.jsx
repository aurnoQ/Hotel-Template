import React, { useState } from 'react';
import MenuItemModal from './MenuItemModal';

const tagConfig = {
  vegetarian:  { label: 'Vegetarian',  color: 'bg-[#68705A]/10 text-[#68705A]' },
  'chefs-pick':{ label: "Chef's Pick", color: 'bg-[#A85C3A]/10 text-[#A85C3A]' },
  popular:     { label: 'Popular',     color: 'bg-[#241A17]/[0.06] text-[#302C29]' },
  spicy:       { label: 'Spicy',       color: 'bg-red-50 text-red-600' },
};

export default function MenuItem({ item }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <article
        className="group flex gap-4 py-5 border-b border-[#DCCDBB]/40 last:border-0 cursor-pointer"
        onClick={() => setModalOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setModalOpen(true); }}
        aria-label={`View details for ${item.name}`}
      >
        <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 overflow-hidden rounded-[3px] bg-[#DCCDBB]/30">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-lg md:text-xl font-medium text-[#241A17] leading-snug group-hover:text-[#A85C3A] transition-colors duration-200">
              {item.name}
            </h3>
            <span className="font-sans text-base font-semibold text-[#A85C3A] flex-shrink-0">
              &#8377;{item.price}
            </span>
          </div>
          <p className="mt-1 font-sans text-sm text-[#302C29]/60 leading-relaxed line-clamp-2">
            {item.description}
          </p>
          {item.tags?.length > 0 && (
            <div className="flex gap-1.5 mt-2.5 flex-wrap">
              {item.tags.map(tag => {
                const cfg = tagConfig[tag];
                if (!cfg) return null;
                return (
                  <span
                    key={tag}
                    className={`text-[10px] font-sans font-semibold tracking-[0.1em] uppercase px-2 py-0.5 rounded-sm ${cfg.color}`}
                  >
                    {cfg.label}
                  </span>
                );
              })}
            </div>
          )}
          <p className="mt-2 font-sans text-[11px] text-[#A85C3A]/70 font-medium tracking-wide">Tap to view →</p>
        </div>
      </article>

      {modalOpen && (
        <MenuItemModal item={item} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}
