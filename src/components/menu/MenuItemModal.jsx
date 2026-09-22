import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

const tagConfig = {
  vegetarian:  { label: 'Vegetarian',  color: 'bg-[#68705A]/10 text-[#68705A]' },
  'chefs-pick':{ label: "Chef's Pick", color: 'bg-[#A85C3A]/10 text-[#A85C3A]' },
  popular:     { label: 'Popular',     color: 'bg-[#241A17]/[0.06] text-[#302C29]' },
  spicy:       { label: 'Spicy',       color: 'bg-red-50 text-red-600' },
};

export default function MenuItemModal({ item, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      {item && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] bg-[#241A17]/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[201] flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={item.name}
          >
            <div className="relative bg-[#FFFDF9] rounded-[6px] shadow-2xl w-full max-w-lg overflow-hidden flex flex-col">
              {/* Close button */}
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-[#241A17]/10 hover:bg-[#241A17]/20 transition-colors duration-200"
              >
                <X size={16} className="text-[#241A17]" />
              </button>

              {/* Image */}
              {item.image && (
                <div className="w-full h-52 sm:h-64 overflow-hidden bg-[#DCCDBB]/30 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6 flex flex-col gap-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-3">
                  <h2 className="font-display text-2xl md:text-3xl font-medium text-[#241A17] leading-tight">
                    {item.name}
                  </h2>
                  <span className="font-sans text-xl font-semibold text-[#A85C3A] flex-shrink-0 mt-1">
                    &#8377;{item.price}
                  </span>
                </div>

                {/* Tags */}
                {item.tags?.length > 0 && (
                  <div className="flex gap-1.5 flex-wrap">
                    {item.tags.map(tag => {
                      const cfg = tagConfig[tag];
                      if (!cfg) return null;
                      return (
                        <span
                          key={tag}
                          className={`text-[10px] font-sans font-semibold tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm ${cfg.color}`}
                        >
                          {cfg.label}
                        </span>
                      );
                    })}
                  </div>
                )}

                {/* Description */}
                <p className="font-sans text-sm text-[#302C29]/75 leading-relaxed">
                  {item.description}
                </p>

                {/* Divider */}
                <div className="h-px bg-[#DCCDBB]/50" />

                {/* CTA */}
                <Link
                  to="/reservations"
                  onClick={onClose}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#A85C3A] text-[#FFFDF9] font-sans text-sm font-medium tracking-wide rounded-[4px] hover:bg-[#8f4d30] transition-all duration-300 group"
                >
                  Reserve a Table
                  <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
