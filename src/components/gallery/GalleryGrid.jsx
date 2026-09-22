import React from 'react';
import { AnimatePresence } from 'framer-motion';
import GalleryItem from './GalleryItem';

export default function GalleryGrid({ items }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      <AnimatePresence mode="sync">
        {items.map((item, index) => (
          <GalleryItem key={item.id} item={item} index={index} />
        ))}
      </AnimatePresence>
    </div>
  );
}
