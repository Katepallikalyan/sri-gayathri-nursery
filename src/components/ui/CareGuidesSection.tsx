'use client';

import React from 'react';
import { CARE_GUIDES } from '@/data/care-guides';
import { SunMedium, CloudRain, Wind, Sprout, Check } from 'lucide-react';

export function CareGuidesSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'SunMedium':
        return <SunMedium className="w-4 h-4 text-accent" aria-hidden="true" />;
      case 'CloudRain':
        return <CloudRain className="w-4 h-4 text-accent" aria-hidden="true" />;
      case 'Wind':
        return <Wind className="w-4 h-4 text-accent" aria-hidden="true" />;
      default:
        return <Sprout className="w-4 h-4 text-accent" aria-hidden="true" />;
    }
  };

  return (
    <section id="care" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-paper border-b border-rule">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <h2 className="font-display text-2xl sm:text-4xl text-ink font-semibold leading-tight mb-3">
            Plant care for Hyderabad climate
          </h2>
          <p className="font-body text-sm sm:text-base text-ink-2 leading-relaxed">
            Practical gardening counsel for local weather conditions, from peak summer dry heat to monsoon humidity and balcony microclimates.
          </p>
        </div>

        {/* 4 Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CARE_GUIDES.map((guide) => (
            <article
              key={guide.id}
              className="rounded-card border border-rule bg-paper p-6 flex flex-col justify-between"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-pill bg-paper-2 border border-rule flex items-center justify-center">
                      {getIcon(guide.icon)}
                    </div>
                    <span className="text-xs font-body text-accent font-medium">
                      {guide.category}
                    </span>
                  </div>
                  <span className="text-xs font-body text-ink-muted">
                    {guide.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl text-ink font-semibold mb-2 leading-snug">
                  {guide.title}
                </h3>

                {/* Summary */}
                <p className="font-body text-xs sm:text-sm text-ink-2 leading-relaxed mb-4">
                  {guide.summary}
                </p>

                {/* Practices List - Flat list with hairlines, no card inside card */}
                <div className="border-t border-rule pt-3 mb-4">
                  <span className="text-xs font-body text-ink font-medium block mb-2">
                    Key practices:
                  </span>
                  <ul className="space-y-2">
                    {guide.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs font-body text-ink-2 leading-relaxed">
                        <Check className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Recommended Varieties */}
              <div className="border-t border-rule pt-3">
                <span className="text-xs font-body text-ink-muted block mb-1.5">
                  Recommended varieties:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {guide.recommendedPlants.map((plantName, i) => (
                    <span
                      key={i}
                      className="text-xs font-body px-2.5 py-0.5 rounded-pill bg-paper-2 border border-rule text-ink-2"
                    >
                      {plantName}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
