# AURNOQ — SAVORA Hospitality Website Template

> **AurnoQ Premium Hospitality Website Template**  
> Designed for Restaurants, Cafés, Bakeries, Lounges, Fine Dining, Boutique Hotels, and Luxury Resorts.

---

## 1. Overview & Agency Design Philosophy

This website template was handcrafted for **AurnoQ** as a reusable, client-ready hospitality demo. It embodies restraint, editorial warmth, and premium typography:

* **Atmosphere**: Warm Cream (`#F7F1E8`), Deep Espresso (`#241A17`), Sand (`#DCCDBB`), and Terracotta (`#A85C3A`).
* **Typography**: **Cormorant Garamond** (display serif for headlines and editorial moments) paired with **Manrope** (clean, modern sans-serif for body and navigation).
* **Restraint over Gimmicks**: No SaaS badges, no tech startup gradients, no neon buttons, no generic cards. The layout feels like walking into an upscale establishment.
* **Full Responsive Design**: Desktop (1440px/1280px), Tablet (1024px/768px), and Mobile (390px/375px/360px) with dedicated mobile quick-action bar (`Call`, `WhatsApp`, `Reserve`) and safe bottom padding.

---

## 2. Default Brand: SAVORA

* **Brand**: SAVORA
* **Tagline**: *Good food. Slow moments.*
* **Concept**: A modern café and kitchen focused on seasonal food, handcrafted coffee, relaxed dining, and memorable gatherings in Hauz Khas, New Delhi.

---

## 3. Website Pages & Features

| Route | Page | Key Features |
|---|---|---|
| `/` | **Home** | Editorial Hero with scroll indicator, Brand Story, Parallax Experience section, Signature Menu plates with tags, Curated Testimonials, Sample Google Reviews cards, Reservation Teaser, Instagram visual grid |
| `/menu` | **Full Menu** | Sticky interactive category navigation (Breakfast, Small Plates, Mains, Pasta, Pizza, Desserts, Coffee, Drinks), responsive grid with tags (Vegetarian, Chef's Pick, Popular, Spicy), prices in ₹ |
| `/about` | **About** | The SAVORA Story, Key Stats (12+ Years, 35+ Seasonal Ingredients, 4.9 Rating), Pull quotes, Alternating editorial sections (Philosophy, Kitchen, Ingredients, Space), CTA banner |
| `/gallery` | **Gallery** | Filterable masonry-style photo grid (All, Food, Interior, Coffee, People, Events) with smooth animated filtering and hover captions |
| `/reservations` | **Reservations** | Complete booking form with Name, Phone, Email, Date, Lunch/Dinner time slots, Guest selector (1 to 6+), Occasion, Special requests, plus an instant confirmation view and sidebar details |
| `/contact` | **Contact** | Split layout with Address, Live Opening Hours, Phone (`tel:`), Email (`mailto:`), Social media links, Interactive contact form, and Google Maps embed |

---

## 4. Reusability for AurnoQ (One System → Many Clients)

Every piece of client data is centralized. **To customize this site for a new client, you do NOT rewrite components.** Simply adjust:

### A. Business Details & Features → `src/config/siteConfig.js`
* Change `name`, `shortName`, `tagline`, `description`
* Update phone, email, WhatsApp numbers
* Update address, coordinates, Google Maps embed URL
* Set opening hours for weekdays and weekends
* Toggle `ordering.enabled` to turn on "Order Online" buttons across the site
* Customize SEO metadata and Open Graph tags

### B. Color Scheme → `src/styles/variables.css`
Tweak the CSS variables to match any brand:
```css
:root {
  --color-primary:     #241A17; /* Main typography & dark backgrounds */
  --color-background:  #F7F1E8; /* Main page background */
  --color-surface:     #FFFDF9; /* Surface and card canvas */
  --color-accent:      #A85C3A; /* Terracotta highlight */
  --color-secondary:   #68705A; /* Olive accent */
  --color-border:      #DCCDBB; /* Divider borders */
}
```

### C. Menu Dishes → `src/data/menu.js`
* Add or edit categories (`menuCategories`)
* Add dishes with price, descriptions, dietary tags, and photography (`menuItems`)
* Update featured dishes array (`featuredDishes`)

### D. Gallery & Photos → `src/data/gallery.js`
* Categorized high-resolution images with category tags and grid span classes (`tall`, `wide`, `normal`)

### E. Reviews & Testimonials → `src/data/reviews.js` & `src/data/testimonials.js`

---

## 5. Quick Start & Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production deployment
npm run build

# 4. Preview production build
npm run preview
```

---

## 6. Architecture & Tech Stack

```text
src/
├── assets/           # Static icons & vectors
├── components/
│   ├── branding/     # Logo.jsx, LogoMark.jsx, BrandBadge.jsx
│   ├── common/       # Button.jsx, SectionHeader.jsx, ScrollReveal.jsx, OpeningHours.jsx
│   ├── contact/      # ContactForm.jsx
│   ├── gallery/      # GalleryGrid.jsx, GalleryFilter.jsx, GalleryItem.jsx
│   ├── home/         # HeroSection.jsx, StorySection.jsx, ExperienceSection.jsx,
│   │                 # FeaturedMenu.jsx, TestimonialsSection.jsx, ReviewsSection.jsx, ReservationTeaser.jsx
│   ├── layout/       # Footer.jsx, LoadingScreen.jsx, MobileActionBar.jsx
│   ├── location/     # LocationCard.jsx, MapEmbed.jsx
│   ├── menu/         # MenuCategory.jsx, MenuGrid.jsx, MenuItem.jsx
│   ├── navigation/   # Navbar.jsx, MobileMenu.jsx
│   ├── reservation/  # ReservationForm.jsx, TimeSlotPicker.jsx, GuestSelector.jsx, ConfirmationView.jsx
│   └── social/       # SocialLinks.jsx, InstagramGrid.jsx
├── config/
│   ├── siteConfig.js    # Centralized brand, hours, contact, SEO
│   └── integrations.js  # External platforms (WhatsApp, Maps, Instagram)
├── data/
│   ├── menu.js          # Categories & 24+ dishes
│   ├── gallery.js       # 12+ categorized editorial photos
│   ├── reviews.js       # Sample guest reviews
│   └── testimonials.js  # Curated guest quotes
├── hooks/
│   ├── useOpeningHours.js   # Live Open Now / Closed status calculator
│   └── useScrollPosition.js # Navbar transparency & blur transition
├── layouts/
│   └── MainLayout.jsx   # Shell with Navbar, Footer, Mobile Action Bar
├── pages/
│   ├── Home.jsx
│   ├── Menu.jsx
│   ├── About.jsx
│   ├── Gallery.jsx
│   ├── Reservations.jsx
│   └── Contact.jsx
├── styles/
│   ├── variables.css # Pure CSS variables for quick client re-theming
│   └── globals.css   # Tailwind base, utilities, font styling
├── App.jsx           # Routes, ScrollToTop, Branded Loading Screen
└── main.jsx          # React 18 DOM mount
```

---

## 7. Recording Walkthroughs for Social Media

* **Desktop Viewport**: Record at 1920x1080 or 1440x900. Smooth scrolling showcases the hero parallax, editorial dish transitions, and gallery animations.
* **Mobile Viewport**: Record at 390x844 (iPhone 14/15/16). Demonstrates the full-screen mobile menu, horizontal category scrolling, and the fixed mobile quick action bar (`Call`, `WhatsApp`, `Reserve`).

---

Crafted with excellence for **AurnoQ**.
