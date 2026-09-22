import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { menuItems, featuredDishes } from '../../data/menu';
import ScrollReveal from '../common/ScrollReveal';
import SectionHeader from '../common/SectionHeader';
import MenuItemModal from '../menu/MenuItemModal';

function FeaturedDishCard({ item, index }) {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <>
      <ScrollReveal delay={index * 0.08}>
        <article
          className="group flex flex-col sm:flex-row gap-4 py-6 border-b border-[#DCCDBB]/50 last:border-0 cursor-pointer"
          onClick={() => setModalOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setModalOpen(true); }}
          aria-label={`View details for ${item.name}`}
        >
          {/* Image */}
          <div className="flex-shrink-0 w-full sm:w-28 h-44 sm:h-28 overflow-hidden rounded-[3px] bg-[#DCCDBB]/30">
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          {/* Info */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-xl font-medium text-[#241A17] group-hover:text-[#A85C3A] transition-colors duration-200">
                {item.name}
              </h3>
              <span className="font-sans text-base font-semibold text-[#A85C3A] flex-shrink-0">
                ₹{item.price}
              </span>
            </div>
            <p className="mt-1.5 font-sans text-sm text-[#302C29]/60 leading-relaxed">
              {item.description}
            </p>
            {item.tags?.length > 0 && (
              <div className="flex gap-2 mt-3 flex-wrap">
                {item.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-[10px] font-sans font-semibold tracking-[0.12em] uppercase px-2 py-0.5 rounded-sm bg-[#DCCDBB]/40 text-[#68705A]"
                  >
                    {tag === 'chefs-pick' ? "Chef's Pick" : tag === 'vegetarian' ? 'Vegetarian' : tag.charAt(0).toUpperCase() + tag.slice(1)}
                  </span>
                ))}
              </div>
            )}
            <p className="mt-2 font-sans text-[11px] text-[#A85C3A]/70 font-medium tracking-wide">Tap to view →</p>
          </div>
        </article>
      </ScrollReveal>

      {modalOpen && (
        <MenuItemModal item={item} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}

export default function FeaturedMenu() {
  const featured = featuredDishes.map(id => menuItems.find(item => item.id === id)).filter(Boolean);

  return (
    <section className="section-padding bg-[#F7F1E8]" aria-label="Featured menu">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="From Our Kitchen"
            heading="Handcrafted Flavors & Seasonal Plates"
            subtext="Carefully prepared with locally-sourced ingredients and passion for authentic hospitality."
            className="max-w-xl"
          />
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-[#A85C3A] hover:text-[#241A17] transition-colors duration-200 group flex-shrink-0"
          >
            View Full Menu
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {featured.map((item, index) => (
            <FeaturedDishCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
