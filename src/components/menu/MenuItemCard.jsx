import React from 'react';

const tagConfig = {
  vegetarian:  { label: 'Vegetarian',  color: 'bg-[#68705A]/10 text-[#68705A]' },
  'chefs-pick':{ label: "Chef's Pick", color: 'bg-[#A85C3A]/10 text-[#A85C3A]' },
  popular:     { label: 'Popular',     color: 'bg-[#241A17]/[0.06] text-[#302C29]' },
  spicy:       { label: 'Spicy',       color: 'bg-red-50 text-red-600' },
};

export default function MenuItemCard({ item, onSelect }) {
  return (
    <div
      className="w-72 md:w-80 flex-shrink-0 bg-[#FFFDF9] rounded-[6px] border border-[#DCCDBB]/60 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer group select-none"
      onClick={() => onSelect(item)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onSelect(item); }}
      aria-label={`View details for ${item.name}`}
    >
      {/* Card Image */}
      <div className="h-44 md:h-48 w-full overflow-hidden bg-[#DCCDBB]/30 relative">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-[#241A17]/85 backdrop-blur-sm text-[#FFFDF9] text-xs font-semibold px-2.5 py-1 rounded-[4px] shadow-sm">
          ₹{item.price}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-xl font-medium text-[#241A17] group-hover:text-[#A85C3A] transition-colors duration-200 line-clamp-1">
            {item.name}
          </h3>
        </div>

        <p className="mt-2 font-sans text-xs md:text-sm text-[#302C29]/65 leading-relaxed line-clamp-2 flex-1">
          {item.description}
        </p>

        {item.tags?.length > 0 && (
          <div className="flex gap-1.5 mt-3 flex-wrap">
            {item.tags.map(tag => {
              const cfg = tagConfig[tag];
              if (!cfg) return null;
              return (
                <span
                  key={tag}
                  className={`text-[9px] font-sans font-semibold tracking-[0.1em] uppercase px-2 py-0.5 rounded-sm ${cfg.color}`}
                >
                  {cfg.label}
                </span>
              );
            })}
          </div>
        )}

        <div className="mt-4 pt-3 border-t border-[#DCCDBB]/40 flex items-center justify-between text-xs">
          <span className="font-sans font-medium text-[#A85C3A] group-hover:underline">
            View details & reserve →
          </span>
        </div>
      </div>
    </div>
  );
}
