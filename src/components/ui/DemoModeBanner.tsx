'use client';

import React, { useState } from 'react';
import { BUSINESS_CONFIG } from '@/config/business';
import { Info, X, MessageCircle } from 'lucide-react';

interface DemoModeBannerProps {
  onOpenEnquiryDrawer: () => void;
}

export function DemoModeBanner({ onOpenEnquiryDrawer }: DemoModeBannerProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const isConfigured = BUSINESS_CONFIG.whatsApp.isConfigured;

  return (
    <aside
      aria-label="Demonstration mode notice"
      className="bg-paper-2 border-b border-rule text-ink py-2 px-4 text-xs z-50 relative"
    >
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Info className="w-3.5 h-3.5 text-accent shrink-0" aria-hidden="true" />
          <p className="font-body text-xs text-ink-2">
            <span className="font-medium text-ink">Pitch demonstration:</span>{' '}
            Prepared for Sri Gayathri Nursery in KPHB Colony, Kukatpally.
            {!isConfigured ? (
              <span className="text-ink-muted">
                {' '}(WhatsApp enquiry is in demo mode with preview and direct link).
              </span>
            ) : (
              <span className="text-accent">
                {' '}(Live WhatsApp number connected).
              </span>
            )}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenEnquiryDrawer}
            className="inline-flex items-center gap-1.5 text-xs text-ink hover:text-accent active:opacity-75 disabled:opacity-50 disabled:cursor-not-allowed underline font-medium transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          >
            <MessageCircle className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
            <span>Open enquiry drawer</span>
          </button>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="text-ink-muted hover:text-ink active:opacity-75 disabled:opacity-50 disabled:cursor-not-allowed p-1 rounded transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            title="Dismiss notice"
            aria-label="Dismiss banner"
          >
            <X className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </aside>
  );
}
