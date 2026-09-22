import React from 'react';
import { motion } from 'framer-motion';

export default function GalleryItem({ item, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`group relative overflow-hidden rounded-[3px] bg-[#DCCDBB]/30 cursor-pointer ${
        item.span === 'wide' ? 'col-span-1 sm:col-span-2' : ''
      }`}
    >
      <div
        className={`relative overflow-hidden ${
          item.span === 'tall' ? 'aspect-[3/4]' : 'aspect-square'
        } w-full`}
      >
        <img
          src={item.image}
          alt={item.alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#241A17]/0 group-hover:bg-[#241A17]/30 transition-all duration-300 flex items-end p-4">
          <p className="text-[#FFFDF9] font-sans text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium tracking-wide line-clamp-1 drop-shadow-sm">
            {item.alt}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
