import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../branding/Logo';
import MobileMenu from './MobileMenu';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { siteConfig } from '../../config/siteConfig';

const navLinks = [
  { to: '/',            label: 'Home'         },
  { to: '/menu',        label: 'Menu'         },
  { to: '/about',       label: 'About'        },
  { to: '/contact',     label: 'Contact'      },
];

export default function Navbar({ transparent = false }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isScrolled } = useScrollPosition();

  const scrolled = isScrolled || !transparent;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#FFFDF9]/95 backdrop-blur-md border-b border-[#DCCDBB]/60 shadow-[0_1px_20px_rgba(36,26,23,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <nav
          className="container-wide flex items-center justify-between h-12 md:h-14"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Logo variant={scrolled ? 'dark' : 'light'} />

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-8" role="list">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `font-sans text-sm font-medium tracking-wide transition-colors duration-200 relative pb-0.5
                     after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full
                     ${ isActive ? 'after:w-full' : '' }
                     ${ scrolled
                         ? (isActive ? 'text-[#A85C3A]' : 'text-[#302C29] hover:text-[#241A17]')
                         : (isActive ? 'text-[#F7F1E8]' : 'text-[#FFFDF9]/80 hover:text-[#FFFDF9]')
                     }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
            {siteConfig.ordering?.enabled && (
              siteConfig.ordering.url?.startsWith('http') ? (
                <a
                  href={siteConfig.ordering.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hidden lg:inline-flex items-center gap-2 px-4 py-2.5 text-sm font-sans font-medium tracking-wide transition-colors ${
                    scrolled ? 'text-[#A85C3A] hover:text-[#241A17]' : 'text-[#FFFDF9]/90 hover:text-[#FFFDF9]'
                  }`}
                >
                  Order Online
                </a>
              ) : (
                <Link
                  to={siteConfig.ordering.url || '/menu'}
                  className={`hidden lg:inline-flex items-center gap-2 px-4 py-2.5 text-sm font-sans font-medium tracking-wide transition-colors ${
                    scrolled ? 'text-[#A85C3A] hover:text-[#241A17]' : 'text-[#FFFDF9]/90 hover:text-[#FFFDF9]'
                  }`}
                >
                  Order Online
                </Link>
              )
            )}
            <Link
              to="/reservations"
              className={`hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-sans font-medium tracking-wide border transition-all duration-300 rounded-[4px] ${
                scrolled
                  ? 'border-[#241A17] text-[#241A17] hover:bg-[#241A17] hover:text-[#FFFDF9]'
                  : 'border-[#FFFDF9]/70 text-[#FFFDF9] hover:bg-[#FFFDF9]/10'
              }`}
            >
              Reserve a Table
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              className={`lg:hidden p-2 rounded-sm transition-colors duration-200 ${
                scrolled ? 'text-[#241A17]' : 'text-[#FFFDF9]'
              }`}
            >
              <Menu size={22} />
            </button>
        </nav>
      </header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
      />
    </>
  );
}
