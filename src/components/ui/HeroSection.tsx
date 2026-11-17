'use client';

import React from 'react';
import Image from 'next/image';
import { BUSINESS_CONFIG } from '@/config/business';
import { MapPin, MessageCircle, ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  onExplorePlants: () => void;
}

export function HeroSection({ onExplorePlants }: HeroSectionProps) {
  const whatsappUrl = BUSINESS_CONFIG.whatsApp.buildEnquiryUrl([]);

  return (
    <section className="bg-paper border-b border-rule pt-10 sm:pt-14 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Top Locality Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-rule text-xs font-body text-ink-muted">
          <div className="flex items-center gap-1.5 text-ink">
            <MapPin className="w-3.5 h-3.5 text-accent shrink-0" aria-hidden="true" />
            <span>KPHB Colony, Kukatpally, Hyderabad 500085</span>
          </div>
          <div>
            <span>Opposite One City, in front of the water tank</span>
          </div>
        </div>

        {/* Hero Main Grid: Headline & Actions on Left, Curated Nursery Frame on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headline, Sentence, Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl text-ink font-semibold leading-[1.08] mb-5">
              Plants for homes and gardens in KPHB
            </h1>

            <p className="font-body text-base sm:text-lg text-ink-2 leading-relaxed max-w-xl mb-8">
              Locally nurtured indoor plants, fruit saplings, and terracotta pots in Kukatpally.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={onExplorePlants}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-pill bg-accent text-accent-ink text-sm font-body font-medium hover:opacity-90 active:opacity-75 disabled:opacity-50 transition-opacity duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              >
                <span>Explore plant collection</span>
                <ArrowDown className="w-4 h-4" aria-hidden="true" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-pill border border-rule-2 bg-paper text-ink text-sm font-body font-medium hover:border-ink active:opacity-75 transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              >
                <MessageCircle className="w-4 h-4 text-accent" aria-hidden="true" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Quick Context Summary */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 mt-8 border-t border-rule text-xs font-body text-ink-muted">
              <div>
                <span className="font-medium text-ink block">24 specimens</span>
                <span>indoor to terrace plants</span>
              </div>
              <div>
                <span className="font-medium text-ink block">Daily nursery hours</span>
                <span>8:00 AM to 8:00 PM</span>
              </div>
              <div>
                <span className="font-medium text-ink block">WhatsApp enquiry</span>
                <span>direct stock and price check</span>
              </div>
            </div>
          </div>

          {/* Right Column: Grounded Daylight Botanical Photograph */}
          <div className="lg:col-span-5">
            <div className="rounded-card overflow-hidden border border-rule bg-paper-2 relative aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/3]">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Among_the_branches_of_a_potted_jade_plant.jpg/1280px-Among_the_branches_of_a_potted_jade_plant.jpg"
                alt="Thick succulent branches and jade green leaves of a potted plant in daylight"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center filter contrast-[1.06] saturate-[0.94]"
              />
              <div className="absolute bottom-0 inset-x-0 bg-paper border-t border-rule p-3 text-xs font-body text-ink-2 flex items-center justify-between">
                <span>Sri Gayathri Nursery inventory</span>
                <span className="text-ink-muted">KPHB Main Road</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
