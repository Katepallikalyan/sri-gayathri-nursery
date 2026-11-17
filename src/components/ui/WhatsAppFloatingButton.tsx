'use client';

import React from 'react';
import { BUSINESS_CONFIG } from '@/config/business';
import { MessageCircle, ShoppingBag } from 'lucide-react';

interface WhatsAppFloatingButtonProps {
  enquiryCount: number;
  onOpenEnquiryDrawer: () => void;
}

export function WhatsAppFloatingButton({
  enquiryCount,
  onOpenEnquiryDrawer,
}: WhatsAppFloatingButtonProps) {
  const directWhatsAppUrl = BUSINESS_CONFIG.whatsApp.buildEnquiryUrl([]);

  return (
    <>
      {/* Desktop Floating Actions at Bottom-Right */}
      <div className="hidden lg:flex fixed bottom-6 right-6 z-40 items-center gap-3">
        {enquiryCount > 0 && (
          <button
            type="button"
            onClick={onOpenEnquiryDrawer}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-pill bg-paper border border-rule-2 text-ink text-xs font-body font-medium hover:border-ink active:opacity-75 disabled:opacity-50 transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
            <span>Review enquiry</span>
            <span className="px-1.5 py-0.5 rounded-pill bg-accent text-accent-ink text-[11px] font-semibold leading-none">
              {enquiryCount}
            </span>
          </button>
        )}

        <a
          href={directWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-pill bg-accent text-accent-ink text-xs font-body font-medium hover:opacity-90 active:opacity-75 transition-opacity duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          title="Direct WhatsApp chat"
        >
          <MessageCircle className="w-4 h-4" aria-hidden="true" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-paper border-t border-rule px-4 py-2.5">
        <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
          <button
            type="button"
            onClick={onOpenEnquiryDrawer}
            className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-pill border border-rule-2 bg-paper text-ink text-xs font-body font-medium active:opacity-75 disabled:opacity-50 transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
            <span>Enquiry ({enquiryCount})</span>
          </button>

          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-pill bg-accent text-accent-ink text-xs font-body font-medium active:opacity-75 transition-opacity duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          >
            <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
