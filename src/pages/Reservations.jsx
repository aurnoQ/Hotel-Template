import React from 'react';
import MainLayout from '../layouts/MainLayout';
import SectionHeader from '../components/common/SectionHeader';
import ReservationForm from '../components/reservation/ReservationForm';
import LocationCard from '../components/location/LocationCard';
import { siteConfig } from '../config/siteConfig';
import { Phone, MessageCircle } from 'lucide-react';

export default function Reservations() {
  return (
    <MainLayout>
      {/* Header */}
      <div className="bg-[#241A17] pt-28 pb-16">
        <div className="container-narrow text-center">
          <SectionHeader
            eyebrow="Reservations"
            heading="Reserve your table."
            subtext="We look forward to hosting you. Fill in the form below and we'll confirm your table shortly."
            align="center"
            light
          />
        </div>
      </div>

      {/* Form + Sidebar */}
      <section className="section-padding bg-[#FFFDF9]" aria-label="Reservation form">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

            {/* Form — 2/3 */}
            <div className="lg:col-span-2">
              <ReservationForm />
            </div>

            {/* Info sidebar — 1/3 */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">
                <div>
                  <h2 className="font-display text-xl font-medium text-[#241A17] mb-5">Visit Us</h2>
                  <LocationCard />
                </div>

                <div className="border-t border-[#DCCDBB]/50 pt-6">
                  <p className="font-sans text-sm text-[#302C29]/60 mb-4">
                    Need help with your reservation?
                  </p>
                  <div className="flex flex-col gap-3">
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                      className="inline-flex items-center gap-2 font-sans text-sm font-medium text-[#302C29] hover:text-[#A85C3A] transition-colors duration-200"
                    >
                      <Phone size={14} aria-hidden="true" />
                      {siteConfig.contact.phone}
                    </a>
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-sans text-sm font-medium text-[#302C29] hover:text-[#A85C3A] transition-colors duration-200"
                    >
                      <MessageCircle size={14} aria-hidden="true" />
                      WhatsApp Us
                    </a>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="font-sans text-xs text-[#302C29]/50 hover:text-[#A85C3A] transition-colors duration-200"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
