import React from 'react';

export default function GalleryFilter({ categories, activeId, onSelect }) {
  return (
    <nav aria-label="Gallery filters" className="flex justify-center">
      <ul className="flex flex-wrap justify-center gap-2" role="list">
        {categories.map(cat => (
          <li key={cat.id}>
            <button
              onClick={() => onSelect(cat.id)}
              aria-pressed={activeId === cat.id}
              className={`px-4 py-2 font-sans text-sm font-medium rounded-[4px] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A85C3A] ${
                activeId === cat.id
                  ? 'bg-[#241A17] text-[#FFFDF9]'
                  : 'text-[#302C29]/60 hover:text-[#302C29] border border-[#DCCDBB] hover:border-[#302C29]'
              }`}
            >
              {cat.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
