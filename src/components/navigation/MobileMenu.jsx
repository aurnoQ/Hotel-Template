import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from '../branding/Logo';
import { siteConfig } from '../../config/siteConfig';

export default function MobileMenu({ isOpen, onClose, links }) {
  // Prevent scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] bg-[#241A17] flex flex-col"
          aria-modal="true"
          role="dialog"
          aria-label="Navigation menu"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#FFFDF9]/10">
            <Logo variant="light" />
            <button
              onClick={onClose}
              aria-label="Close navigation menu"
              className="p-2 text-[#FFFDF9]/70 hover:text-[#FFFDF9] transition-colors"
            >
              <X size={22} />
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 flex flex-col justify-center px-8" aria-label="Mobile navigation">
            <ul className="space-y-1" role="list">
              {links.map(({ to, label }, i) => (
                <motion.li
                  key={to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.35 }}
                >
                  <NavLink
                    to={to}
                    end={to === '/'}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `block py-3 font-display text-4xl font-medium tracking-wide transition-colors duration-200 ${
                        isActive
                          ? 'text-[#F7F1E8]'
                          : 'text-[#FFFDF9]/50 hover:text-[#FFFDF9]/80'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Footer CTA */}
          <div className="px-8 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.35 }}
            >
              {siteConfig.ordering?.enabled && (
                siteConfig.ordering.url?.startsWith('http') ? (
                  <a
                    href={siteConfig.ordering.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="block w-full text-center px-6 py-3.5 mb-3 border border-[#FFFDF9]/30 text-[#FFFDF9] font-sans text-sm font-medium tracking-wide rounded-[4px] hover:bg-[#FFFDF9]/10 transition-colors"
                  >
                    Order Online
                  </a>
                ) : (
                  <Link
                    to={siteConfig.ordering.url || '/menu'}
                    onClick={onClose}
                    className="block w-full text-center px-6 py-3.5 mb-3 border border-[#FFFDF9]/30 text-[#FFFDF9] font-sans text-sm font-medium tracking-wide rounded-[4px] hover:bg-[#FFFDF9]/10 transition-colors"
                  >
                    Order Online
                  </Link>
                )
              )}
              <Link
                to="/reservations"
                onClick={onClose}
                className="block w-full text-center px-6 py-4 bg-[#A85C3A] text-[#FFFDF9] font-sans text-sm font-medium tracking-wide rounded-[4px] hover:bg-[#8f4d30] transition-colors duration-200"
              >
                Reserve a Table
              </Link>
              <p className="mt-4 text-center text-[#FFFDF9]/30 text-xs font-sans tracking-widest uppercase">
                {siteConfig.tagline}
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
