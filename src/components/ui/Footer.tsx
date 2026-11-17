'use client';

import React from 'react';
import Link from 'next/link';
import { BUSINESS_CONFIG } from '@/config/business';
import { Sprout, MessageCircle, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-paper-2 border-t border-rule text-ink pt-12 pb-24 lg:pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-rule">
          {/* Brand Info (5 Cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-pill bg-paper border border-rule flex items-center justify-center text-accent">
                <Sprout className="w-4 h-4" aria-hidden="true" />
              </div>
              <span className="font-display text-lg font-semibold text-ink">
                {BUSINESS_CONFIG.brandName}
              </span>
            </div>

            <p className="font-body text-xs sm:text-sm text-ink-2 max-w-sm leading-relaxed">
              Locally grown and acclimatised foliage, flowering plants, fruit saplings, and clay planters in KPHB Colony, Kukatpally, Hyderabad.
            </p>

            <div className="flex items-start gap-1.5 text-xs font-body text-ink-muted pt-1">
              <MapPin className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
              <span>1-123, KPHB Main Road, in front of the water tank, opposite One City, Hyderabad 500085</span>
            </div>
          </div>

          {/* Navigation Links (3 Cols) */}
          <div className="md:col-span-3 space-y-2">
            <span className="font-body text-xs font-medium text-ink block mb-2">
              Navigation
            </span>
            <ul className="space-y-1.5 text-xs font-body text-ink-2">
              <li>
                <a href="#catalogue" className="hover:text-accent hover:underline active:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
                  Plant collection (24 specimens)
                </a>
              </li>
              <li>
                <a href="#care" className="hover:text-accent hover:underline active:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
                  Hyderabad plant care guides
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-accent hover:underline active:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
                  Nursery location & directions
                </a>
              </li>
            </ul>
          </div>

          {/* Pitch Notice & WhatsApp (4 Cols) */}
          <div className="md:col-span-4 space-y-2">
            <span className="font-body text-xs font-medium text-ink block mb-2">
              Demonstration notice
            </span>
            <p className="font-body text-xs text-ink-muted leading-relaxed">
              This is an unofficial pitch demonstration website developed for the nursery owner. Plant items and hours reflect sample showcase data.
            </p>
            <div className="pt-2">
              <a
                href={BUSINESS_CONFIG.whatsApp.buildEnquiryUrl([])}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-body font-medium text-accent hover:underline active:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              >
                <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Test WhatsApp enquiry link</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-body text-ink-muted">
          <p>© {currentYear} Sri Gayathri Nursery demonstration pitch.</p>
          <p>
            Photograph:{' '}
            <a
              href="https://commons.wikimedia.org/wiki/File:Among_the_branches_of_a_potted_jade_plant.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink hover:text-accent underline active:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            >
              Potted Jade Plant
            </a>{' '}
            (CC0, Public Domain, Wikimedia Commons)
          </p>
        </div>
      </div>
    </footer>
  );
}
