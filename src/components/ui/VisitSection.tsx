'use client';

import React from 'react';
import { BUSINESS_CONFIG } from '@/config/business';
import { MapPin, Navigation, Clock, ExternalLink } from 'lucide-react';

export function VisitSection() {
  const { address, landmarks, operatingHours } = BUSINESS_CONFIG;

  return (
    <section id="visit" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-paper border-b border-rule">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <h2 className="font-display text-2xl sm:text-4xl text-ink font-semibold leading-tight mb-3">
            Visit Sri Gayathri Nursery in KPHB
          </h2>
          <p className="font-body text-sm sm:text-base text-ink-2 leading-relaxed">
            Conveniently situated along the Kukatpally Housing Board corridor. Experience plant varieties in person and consult on soil and balcony arrangements.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Address Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Card */}
            <div className="rounded-card border border-rule bg-paper p-6">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 rounded-pill bg-paper-2 border border-rule flex items-center justify-center text-accent shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-ink font-semibold mb-1">
                    {BUSINESS_CONFIG.brandName}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-ink-2 leading-relaxed">
                    {address.fullAddress}
                  </p>
                </div>
              </div>

              {/* Landmarks */}
              <div className="border-t border-rule pt-4 mt-4">
                <span className="text-xs font-body text-ink font-medium block mb-2">
                  Neighbourhood landmarks:
                </span>
                <ul className="space-y-2">
                  {landmarks.map((lm, idx) => (
                    <li key={idx} className="text-xs font-body text-ink-2 leading-relaxed">
                      <span className="font-medium text-ink">{lm.name}:</span>{' '}
                      <span className="text-ink-muted">{lm.note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              <div className="border-t border-rule pt-4 mt-4">
                <a
                  href={address.mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-pill bg-accent text-accent-ink text-xs font-body font-medium hover:opacity-90 active:opacity-75 transition-opacity duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                >
                  <Navigation className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 opacity-80" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="rounded-card border border-rule bg-paper-2 p-5">
              <div className="flex items-center gap-2 mb-2 text-ink">
                <Clock className="w-4 h-4 text-accent" aria-hidden="true" />
                <h4 className="font-display text-base font-semibold">Operating hours</h4>
              </div>
              <p className="font-body text-xs sm:text-sm text-ink font-medium mb-1">
                {operatingHours.displayText}
              </p>
              <p className="font-body text-xs text-ink-muted leading-relaxed">
                {operatingHours.disclaimer}
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Map Embed (7 Cols) */}
          <div className="lg:col-span-7 rounded-card overflow-hidden border border-rule bg-paper-2 flex flex-col min-h-[400px]">
            <iframe
              src={address.mapsEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sri Gayathri Nursery KPHB Google Maps Location"
              className="w-full h-full min-h-[380px] flex-grow"
            />
            <div className="p-3 bg-paper border-t border-rule text-xs font-body text-ink-muted flex items-center justify-between gap-3">
              <span>KPHB Main Road, in front of Water Tank</span>
              <a
                href={address.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
