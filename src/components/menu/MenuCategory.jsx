import React from 'react';

export default function MenuCategory({ categories, activeId, onSelect }) {
  return (
    <nav aria-label="Menu categories" className="sticky top-12 md:top-14 z-30 bg-[#F7F1E8]/95 backdrop-blur-md border-b border-[#DCCDBB]/40">
      <div className="container-wide">
        <ul className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto py-3 no-scrollbar" role="list">
          {categories.map((cat) => {
            const isActive = activeId === cat.id;
            return (
              <li key={cat.id} className="flex-shrink-0">
                <button
                  onClick={() => onSelect(cat.id)}
                  aria-pressed={isActive}
                  className={`px-4 py-2 rounded-full font-sans text-xs md:text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A85C3A] ${
                    isActive
                      ? 'bg-[#241A17] text-[#FFFDF9] shadow-sm'
                      : 'text-[#302C29]/70 hover:text-[#241A17] hover:bg-[#DCCDBB]/30'
                  }`}
                >
                  {cat.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
