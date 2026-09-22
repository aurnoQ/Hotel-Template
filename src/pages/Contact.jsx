import React from 'react';
import MainLayout from '../layouts/MainLayout';
import SectionHeader from '../components/common/SectionHeader';
import ContactForm from '../components/contact/ContactForm';
import LocationCard from '../components/location/LocationCard';
import MapEmbed from '../components/location/MapEmbed';
import SocialLinks from '../components/social/SocialLinks';
import ScrollReveal from '../components/common/ScrollReveal';

export default function Contact() {
  return (
    <MainLayout>
      {/* Header */}
      <div className="bg-[#241A17] pt-28 pb-16">
        <div className="container-narrow text-center">
          <SectionHeader
            eyebrow="Contact"
            heading="Let's talk."
            subtext="Whether it's a reservation, a private event, or just a question — we'd love to hear from you."
            align="center"
            light
          />
        </div>
      </div>

      {/* Content */}
      <section className="section-padding bg-[#FFFDF9]" aria-label="Contact information and form">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Left: Location + Map */}
            <ScrollReveal delay={0}>
              <div className="space-y-10">
                <LocationCard />
                <div className="pt-2 border-t border-[#DCCDBB]/40">
                  <p className="font-sans text-xs font-semibold tracking-[0.12em] uppercase text-[#302C29]/50 mb-3">Connect With Us</p>
                  <SocialLinks variant="dark" />
                </div>
                <MapEmbed />
              </div>
            </ScrollReveal>

            {/* Right: Form */}
            <ScrollReveal delay={0.12}>
              <div>
                <h2 className="font-display text-2xl font-medium text-[#241A17] mb-6">
                  Send us a message
                </h2>
                <ContactForm />
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </MainLayout>
  );
}
