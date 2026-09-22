import React from 'react';
import { ExternalLink } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';
import { siteConfig } from '../../config/siteConfig';
import SectionHeader from '../common/SectionHeader';
import ScrollReveal from '../common/ScrollReveal';

// Static demo images - structured for future Instagram API integration
const instagramPosts = [
  { id: 'ig1', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80', alt: 'Morning pour over coffee at SAVORA' },
  { id: 'ig2', image: 'https://images.unsplash.com/photo-1567327613485-fbc7bf196198?w=400&q=80', alt: 'Burnt Basque cheesecake slice' },
  { id: 'ig3', image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400&q=80', alt: 'Corner table with afternoon light' },
  { id: 'ig4', image: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?w=400&q=80', alt: 'Truffle mushroom toast' },
  { id: 'ig5', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80', alt: 'Guests dining at SAVORA' },
  { id: 'ig6', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80', alt: 'Cold brew coffee being served' },
];

export default function InstagramGrid() {
  return (
    <section className="section-padding bg-[#FFFDF9]" aria-label="Instagram feed">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <SectionHeader
            eyebrow="Follow the Table"
            heading={`@${siteConfig.name}`}
          />
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-sm font-medium text-[#A85C3A] hover:text-[#241A17] transition-colors duration-200 group flex-shrink-0"
            aria-label="Follow SAVORA on Instagram"
          >
            <InstagramIcon size={15} className="flex-shrink-0" />
            Follow on Instagram
            <ExternalLink size={12} className="opacity-50" aria-hidden="true" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {instagramPosts.map((post, i) => (
            <ScrollReveal key={post.id} delay={i * 0.05}>
              <div className="group relative aspect-square overflow-hidden rounded-[3px] cursor-pointer">
                <img
                  src={post.image}
                  alt={post.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#241A17]/0 group-hover:bg-[#241A17]/30 transition-all duration-300 flex items-center justify-center">
                  <InstagramIcon size={20} className="text-[#FFFDF9] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
