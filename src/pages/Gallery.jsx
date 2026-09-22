import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import SectionHeader from '../components/common/SectionHeader';
import GalleryFilter from '../components/gallery/GalleryFilter';
import GalleryGrid from '../components/gallery/GalleryGrid';
import { galleryCategories, galleryItems } from '../data/gallery';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <MainLayout>
      {/* Header */}
      <div className="bg-[#241A17] pt-28 pb-16">
        <div className="container-narrow text-center">
          <SectionHeader
            eyebrow="Gallery"
            heading="A look inside."
            subtext="From morning coffee to late evenings — moments captured at SAVORA."
            align="center"
            light
          />
        </div>
      </div>

      {/* Filter + Grid */}
      <section className="section-padding bg-[#FFFDF9]" aria-label="Photo gallery">
        <div className="container-wide">
          <GalleryFilter
            categories={galleryCategories}
            activeId={activeFilter}
            onSelect={setActiveFilter}
          />
          <div className="mt-8">
            <GalleryGrid items={filteredItems} />
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
