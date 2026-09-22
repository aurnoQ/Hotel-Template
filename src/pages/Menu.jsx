import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import MenuCategory from '../components/menu/MenuCategory';
import MenuItemCard from '../components/menu/MenuItemCard';
import MenuItemModal from '../components/menu/MenuItemModal';
import SectionHeader from '../components/common/SectionHeader';
import { menuCategories, menuItems } from '../data/menu';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const [selectedItem, setSelectedItem] = useState(null);

  // Active category items for the spotlight category marquee
  const activeItems = menuItems.filter(item => item.category === activeCategory);
  const activeCategoryObj = menuCategories.find(c => c.id === activeCategory);

  // Triple items for continuous infinite scroll
  const marqueeItems = activeItems.length > 0 
    ? [...activeItems, ...activeItems, ...activeItems]
    : [];

  // All popular items across all categories for general showcase
  const popularItems = menuItems.filter(item => item.tags?.includes('popular') || item.tags?.includes('chefs-pick'));
  const allPopularMarquee = [...popularItems, ...popularItems];

  const isModalOpen = Boolean(selectedItem);

  return (
    <MainLayout>
      {/* Page Header */}
      <div className="bg-[#241A17] pt-28 pb-16">
        <div className="container-narrow text-center">
          <SectionHeader
            eyebrow="Kitchen"
            heading="Our Menu"
            subtext="Simple ingredients. Thoughtful plates. Handcrafted with the seasons."
            align="center"
            light
          />
        </div>
      </div>

      {/* Category Navigation */}
      <MenuCategory
        categories={menuCategories}
        activeId={activeCategory}
        onSelect={setActiveCategory}
      />

      {/* Dynamic Category Items Marquee */}
      <section className="bg-[#FFFDF9] py-14 overflow-hidden" aria-label="Menu items marquee">
        <div className="container-wide mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <span className="text-xs font-sans font-semibold tracking-[0.18em] uppercase text-[#A85C3A]">
              Category Selection
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-[#241A17] mt-1">
              {activeCategoryObj?.label || 'Selected Items'}
            </h2>
          </div>
          <p className="font-sans text-xs md:text-sm text-[#302C29]/60">
            Hover to pause &bull; Click to view full details in one clear pop-up
          </p>
        </div>

        {/* Marquee Track */}
        <div className="relative group/menuMarquee">
          {/* Edge gradients */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-[#FFFDF9] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-[#FFFDF9] to-transparent z-10" />

          <div
            className={`flex gap-6 py-4 px-4 marquee-track ${isModalOpen ? 'paused-animation' : ''}`}
            style={{
              display: 'flex',
              width: 'max-content',
              animation: 'menuItemsMarquee 26s linear infinite',
              animationPlayState: isModalOpen ? 'paused' : undefined,
            }}
          >
            {marqueeItems.map((item, idx) => (
              <MenuItemCard 
                key={`${item.id}-${idx}`} 
                item={item} 
                onSelect={(clickedItem) => setSelectedItem(clickedItem)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Second Highlight Marquee: Chef's Picks & House Favorites */}
      <section className="bg-[#F7F1E8] py-14 overflow-hidden border-t border-[#DCCDBB]/40" aria-label="Chef's favorites">
        <div className="container-wide mb-8">
          <span className="text-xs font-sans font-semibold tracking-[0.18em] uppercase text-[#A85C3A]">
            Chef's Highlights
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-[#241A17] mt-1">
            House Favorites & Signature Plates
          </h2>
        </div>

        {/* Reverse Marquee */}
        <div className="relative group/highlightMarquee">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-[#F7F1E8] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-[#F7F1E8] to-transparent z-10" />

          <div
            className={`flex gap-6 py-4 px-4 ${isModalOpen ? 'paused-animation' : ''}`}
            style={{
              display: 'flex',
              width: 'max-content',
              animation: 'reverseMenuMarquee 30s linear infinite',
              animationPlayState: isModalOpen ? 'paused' : undefined,
            }}
          >
            {allPopularMarquee.map((item, idx) => (
              <MenuItemCard 
                key={`popular-${item.id}-${idx}`} 
                item={item} 
                onSelect={(clickedItem) => setSelectedItem(clickedItem)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Single, centralized modal at the root of the page (never moves or duplicates) */}
      {selectedItem && (
        <MenuItemModal 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)} 
        />
      )}

      <style>{`
        @keyframes menuItemsMarquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes reverseMenuMarquee {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .group\\/menuMarquee:hover .marquee-track,
        .group\\/highlightMarquee:hover > div {
          animation-play-state: paused !important;
        }
        .paused-animation {
          animation-play-state: paused !important;
        }
      `}</style>
    </MainLayout>
  );
}
