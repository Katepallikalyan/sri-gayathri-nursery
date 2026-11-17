'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { PlantProduct } from '@/types';
import { BUSINESS_CONFIG } from '@/config/business';
import {
  X,
  Sun,
  Droplets,
  MessageCircle,
  Plus,
  Check,
} from 'lucide-react';

interface PlantModalProps {
  plant: PlantProduct | null;
  onClose: () => void;
  onAddEnquiry: (plant: PlantProduct) => void;
  isAdded?: boolean;
}

export function PlantModal({ plant, onClose, onAddEnquiry, isAdded = false }: PlantModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (plant) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [plant, onClose]);

  if (!plant) return null;

  const singleWhatsAppUrl = BUSINESS_CONFIG.whatsApp.buildEnquiryUrl([
    { name: plant.name, quantity: 1 },
  ]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="plant-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-ink/40"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-paper border border-rule-2 rounded-card overflow-hidden flex flex-col md:flex-row max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-pill bg-paper border border-rule text-ink hover:bg-paper-2 active:opacity-75 disabled:opacity-50 flex items-center justify-center transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          aria-label="Close plant details"
        >
          <X className="w-4 h-4" aria-hidden="true" />
        </button>

        {/* Left: Plant Photo */}
        <div className="relative w-full md:w-1/2 min-h-[260px] md:min-h-[380px] bg-paper-2">
          <Image
            src={plant.image}
            alt={plant.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center filter contrast-[1.06] saturate-[0.94]"
          />

          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-0.5 rounded-pill bg-paper border border-rule text-ink text-xs font-body font-medium">
              Sample stock
            </span>
          </div>

          {plant.dimensionsEstimate && (
            <div className="absolute bottom-3 left-3 bg-paper border border-rule px-2.5 py-0.5 rounded-pill text-[11px] font-body text-ink-2">
              Size: {plant.dimensionsEstimate}
            </div>
          )}
        </div>

        {/* Right: Botanical Details */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-body text-accent font-medium">
                {plant.categoryLabel}
              </span>
              <span className="text-xs font-body text-ink-muted">
                {plant.careLabel}
              </span>
            </div>

            <h2 id="plant-modal-title" className="font-display text-2xl text-ink font-semibold mb-1">
              {plant.name}
            </h2>

            {plant.botanicalName && (
              <p className="font-outlier italic text-xs text-ink-muted mb-4">
                {plant.botanicalName}
              </p>
            )}

            <p className="font-body text-xs sm:text-sm text-ink-2 leading-relaxed mb-5">
              {plant.description}
            </p>

            {/* Care Specs Hairline Grid */}
            <div className="grid grid-cols-2 gap-3 py-3 border-y border-rule mb-4 text-xs font-body">
              <div>
                <div className="flex items-center gap-1.5 text-ink font-medium mb-0.5">
                  <Sun className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                  <span>Sunlight</span>
                </div>
                <p className="text-ink-muted text-xs">{plant.lightLabel}</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-ink font-medium mb-0.5">
                  <Droplets className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                  <span>Watering</span>
                </div>
                <p className="text-ink-muted text-xs">{plant.waterLabel}</p>
              </div>
            </div>

            {/* Recommended Placements */}
            {plant.idealFor && plant.idealFor.length > 0 && (
              <div className="mb-4">
                <span className="text-xs font-body text-ink-muted block mb-1.5">
                  Recommended placements:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {plant.idealFor.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-body px-2.5 py-0.5 rounded-pill bg-paper-2 border border-rule text-ink-2"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-rule space-y-3">
            <div className="flex items-center justify-between text-xs font-body text-ink-muted">
              <span>Availability:</span>
              <span className="font-medium text-ink">Price on request</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => onAddEnquiry(plant)}
                className={`py-2 px-3 rounded-pill text-xs font-body font-medium whitespace-nowrap transition-colors duration-150 flex items-center justify-center gap-1.5 active:opacity-75 disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent ${
                  isAdded
                    ? 'bg-paper-2 border border-accent text-accent'
                    : 'border border-rule-2 bg-paper text-ink hover:border-ink'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>In list</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Enquire</span>
                  </>
                )}
              </button>

              <a
                href={singleWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 rounded-pill bg-accent text-accent-ink text-xs font-body font-medium hover:opacity-90 active:opacity-75 transition-opacity duration-150 flex items-center justify-center gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              >
                <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Enquire via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
