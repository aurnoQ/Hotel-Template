import React from 'react';
import { motion } from 'framer-motion';
import { ButtonText } from '../common/Button';
import ScrollReveal from '../common/ScrollReveal';

export default function StorySection() {
  return (
    <section className="section-padding bg-[#FFFDF9]" aria-label="Our story">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <ScrollReveal delay={0}>
            <div className="relative">
              <div className="overflow-hidden rounded-[3px] aspect-[4/5] lg:aspect-[3/4]">
                <motion.img
                  src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=900&q=80"
                  alt="Warm, naturally-lit corner of the SAVORA dining room"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
              </div>
              {/* Accent card */}
              <div className="absolute -bottom-6 -right-6 lg:-right-8 bg-[#A85C3A] text-[#FFFDF9] px-5 py-4 rounded-[3px] shadow-lg hidden md:block">
                <p className="font-display text-2xl font-medium">12+</p>
                <p className="font-sans text-xs tracking-wide opacity-80 mt-0.5">Years of craft</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal delay={0.15}>
            <div className="max-w-lg">
              <span className="eyebrow">Our Story</span>
              <h2 className="display-heading text-[clamp(2.25rem,4vw,3.25rem)] text-[#241A17] mt-4 mb-6">
                A place to eat,<br />gather, and stay awhile.
              </h2>
              <p className="font-sans text-[#302C29]/70 text-base md:text-lg leading-relaxed mb-4">
                SAVORA was born from a simple belief — that food shared slowly is food enjoyed fully. We opened our doors in the heart of Hauz Khas with a kitchen built around seasonal produce, honest cooking, and the rituals of a good meal.
              </p>
              <p className="font-sans text-[#302C29]/70 text-base leading-relaxed mb-8">
                Our space was designed to slow you down. Come for the coffee in the morning. Stay for the conversation at night. We'll keep the lights warm.
              </p>
              <ButtonText to="/about">Discover Our Story</ButtonText>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
