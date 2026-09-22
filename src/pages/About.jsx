import React from 'react';
import MainLayout from '../layouts/MainLayout';
import SectionHeader from '../components/common/SectionHeader';
import ScrollReveal from '../components/common/ScrollReveal';
import { ButtonText } from '../components/common/Button';

const stats = [
  { value: '12+', label: 'Years of craft' },
  { value: '35+', label: 'Seasonal ingredients' },
  { value: '4.9', label: 'Guest rating' },
];

const sections = [
  {
    eyebrow: 'Our Philosophy',
    heading: 'Food as a form of care.',
    body: 'We believe that a meal is one of the most generous things you can offer someone. Everything at SAVORA — from the way the tables are set to the herbs growing on the kitchen sill — is guided by a commitment to thoughtfulness. We cook the way we want to be fed.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80',
    imageAlt: 'Chef preparing a seasonal dish in the SAVORA kitchen',
    imageRight: false,
  },
  {
    eyebrow: 'Our Kitchen',
    heading: 'Built around the seasons.',
    body: 'Our menu changes throughout the year to follow the produce that\'s actually at its best. We work with local farmers and small suppliers to source ingredients that haven\'t travelled further than they need to. What\'s on the plate reflects what\'s happening outside.',
    image: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=900&q=80',
    imageAlt: 'Fresh seasonal vegetables on the prep counter',
    imageRight: true,
  },
  {
    eyebrow: 'Our Ingredients',
    heading: 'Grown with patience, prepared with respect.',
    body: 'We partner directly with small regenerative farms across Himachal and Uttarakhand for stone-ground flours, cold-pressed oils, and wild herbs. No greenhouse shortcuts, no out-of-season compromises. When an ingredient is at its peak, that is when it graces our tables.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=900&q=80',
    imageAlt: 'Artisanal organic grains and seasonal harvest',
    imageRight: false,
  },
  {
    eyebrow: 'Our Space',
    heading: 'Designed to slow you down.',
    body: 'The SAVORA space was designed with one brief: make it feel like someone\'s home, only better. Natural light, warm wood, linen and stone. No background noise that drowns conversation. A room that gets better as the day moves through it.',
    image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=900&q=80',
    imageAlt: 'Warm, naturally lit SAVORA dining room interior',
    imageRight: true,
  },
];

export default function About() {
  return (
    <MainLayout>
      {/* Dark hero header */}
      <div className="bg-[#241A17] pt-28 pb-20">
        <div className="container-narrow text-center">
          <SectionHeader
            eyebrow="About Us"
            heading="Good food starts with intention."
            subtext="SAVORA was born from a simple belief — that food shared slowly is food enjoyed fully."
            align="center"
            light
          />
          {/* Stats */}
          <div className="mt-14 grid grid-cols-3 gap-8 border-t border-[#FFFDF9]/10 pt-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl md:text-5xl font-medium text-[#F7F1E8]">{stat.value}</p>
                <p className="mt-1 font-sans text-xs tracking-[0.12em] uppercase text-[#FFFDF9]/40">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="section-padding bg-[#FFFDF9]" aria-label="Our story">
        <div className="container-narrow">
          <ScrollReveal>
            <span className="eyebrow">Our Story</span>
            <h2 className="display-heading text-[clamp(2rem,4vw,3rem)] text-[#241A17] mt-3 mb-6">
              A place to eat, gather, and stay awhile.
            </h2>
            <p className="font-sans text-[#302C29]/70 text-lg leading-relaxed mb-4">
              SAVORA opened in Hauz Khas in 2014 with four tables, a small kitchen, and a lot of conviction. We wanted to build a neighbourhood restaurant that felt like a real place — not a concept, not a brand exercise, but somewhere people came because the food was honest and the room felt good.
            </p>
            <p className="font-sans text-[#302C29]/70 text-base leading-relaxed mb-4">
              Twelve years later, we're still here. The menu has changed every season. The team has grown. The tables have been replaced twice. But the feeling hasn't changed: come in, sit down, let us take care of you.
            </p>
            {/* Pull quote */}
            <blockquote className="my-10 pl-6 border-l-2 border-[#A85C3A]">
              <p className="font-display text-2xl md:text-3xl italic font-medium text-[#241A17] leading-[1.4]">
                &ldquo;The best meals are the ones where nobody checks the time.&rdquo;
              </p>
              <cite className="block mt-3 font-sans text-sm text-[#302C29]/50 not-italic">— The SAVORA Kitchen</cite>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Alternating editorial sections */}
      {sections.map((s, i) => (
        <section
          key={s.eyebrow}
          className={`section-padding ${i % 2 === 0 ? 'bg-[#F7F1E8]' : 'bg-[#FFFDF9]'}`}
          aria-label={s.eyebrow}
        >
          <div className="container-wide">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
              <ScrollReveal delay={0} className={s.imageRight ? 'lg:order-2' : ''}>
                <div className="overflow-hidden rounded-[3px] aspect-[4/3]">
                  <img src={s.image} alt={s.imageAlt} loading="lazy" className="w-full h-full object-cover" />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.12} className={s.imageRight ? 'lg:order-1' : ''}>
                <div>
                  <span className="eyebrow">{s.eyebrow}</span>
                  <h2 className="display-heading text-[clamp(1.75rem,3vw,2.75rem)] text-[#241A17] mt-3 mb-5">
                    {s.heading}
                  </h2>
                  <p className="font-sans text-[#302C29]/70 text-base leading-relaxed">{s.body}</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* Dark CTA banner */}
      <section className="py-20 bg-[#241A17] text-center" aria-label="Call to action">
        <ScrollReveal>
          <p className="font-display text-[clamp(1.75rem,3vw,2.5rem)] text-[#F7F1E8] font-medium mb-8">
            Come and taste it for yourself.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <ButtonText to="/menu" className="text-[#DCCDBB] hover:text-[#FFFDF9]">View Our Menu</ButtonText>
            <ButtonText to="/reservations" className="text-[#DCCDBB] hover:text-[#FFFDF9]">Reserve a Table</ButtonText>
          </div>
        </ScrollReveal>
      </section>
    </MainLayout>
  );
}
