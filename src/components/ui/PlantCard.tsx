'use client';

import React from 'react';
import Image from 'next/image';
import { PlantProduct } from '@/types';
import { Sun, Droplets, Plus, Check } from 'lucide-react';

interface PlantCardProps {
  plant: PlantProduct;
  onInspect: (plant: PlantProduct) => void;
  onAddEnquiry: (plant: PlantProduct) => void;
  isAdded?: boolean;
  quantity?: number;
}

export function PlantCard({
  plant,
  onInspect,
  onAddEnquiry,
  isAdded = false,
  quantity,
}: PlantCardProps) {
  return (
    <article className="rounded-card border border-rule bg-paper hover:border-rule-2 transition-colors duration-150 flex flex-col justify-between overflow-hidden">
      {/* Plant Image Container */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => onInspect(plant)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onInspect(plant);
          }
        }}
        className="relative w-full aspect-[4/3] bg-paper-2 overflow-hidden cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
        aria-label={`View details for ${plant.name}`}
      >
        <Image
          src={plant.image}
          alt={plant.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center filter contrast-[1.06] saturate-[0.94]"
        />

        {/* Status tag */}
        <div className="absolute top-2.5 left-2.5 pointer-events-none">
          <span className="inline-block px-2 py-0.5 rounded-pill bg-paper border border-rule text-ink text-[11px] font-body font-medium">
            Sample stock
          </span>
        </div>

        {/* Care Level */}
        <div className="absolute top-2.5 right-2.5 pointer-events-none">
          <span className="inline-block px-2 py-0.5 rounded-pill bg-paper border border-rule text-ink-muted text-[11px] font-body">
            {plant.careLabel}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between">
        <div>
          {/* Category & Botanical name */}
          <div className="flex items-baseline justify-between gap-2 mb-1">
            <span className="text-xs font-body text-accent font-medium">
              {plant.categoryLabel}
            </span>
            {plant.botanicalName && (
              <span className="text-xs font-outlier italic text-ink-muted truncate max-w-[140px]">
                {plant.botanicalName}
              </span>
            )}
          </div>

          {/* Plant Name */}
          <h3 className="font-display text-lg text-ink font-semibold mb-1.5 leading-snug">
            <button
              type="button"
              onClick={() => onInspect(plant)}
              className="text-left hover:text-accent transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded"
            >
              {plant.name}
            </button>
          </h3>

          {/* Short description */}
          <p className="font-body text-xs text-ink-2 leading-relaxed mb-4 line-clamp-2">
            {plant.shortDescription}
          </p>

          {/* Sunlight & Watering specs */}
          <div className="grid grid-cols-2 gap-2 py-2.5 border-y border-rule mb-4 text-xs font-body text-ink-muted">
            <div className="flex items-center gap-1.5 truncate">
              <Sun className="w-3.5 h-3.5 text-accent shrink-0" aria-hidden="true" />
              <span className="truncate">{plant.lightLabel}</span>
            </div>
            <div className="flex items-center gap-1.5 truncate">
              <Droplets className="w-3.5 h-3.5 text-accent shrink-0" aria-hidden="true" />
              <span className="truncate">{plant.waterLabel}</span>
            </div>
          </div>
        </div>

        {/* Footer: Price status and action buttons */}
        <div className="pt-1 flex items-center justify-between gap-2">
          <div>
            <span className="block text-[11px] text-ink-muted font-body leading-tight">
              Availability
            </span>
            <span className="text-xs font-body font-medium text-ink">
              Ask for price
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => onInspect(plant)}
              className="px-2.5 py-1.5 rounded-pill border border-rule text-xs font-body text-ink-2 hover:border-ink active:opacity-75 disabled:opacity-50 transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              aria-label={`Inspect ${plant.name}`}
            >
              Details
            </button>

            <button
              type="button"
              onClick={() => onAddEnquiry(plant)}
              className={`px-3 py-1.5 rounded-pill text-xs font-body font-medium transition-colors duration-150 active:opacity-75 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent flex items-center gap-1 ${
                isAdded
                  ? 'bg-paper-2 border border-accent text-accent'
                  : 'bg-accent text-accent-ink hover:opacity-90'
              }`}
              aria-label={
                isAdded
                  ? `Added ${quantity || 1} ${plant.name} to enquiry list. Click to add more.`
                  : `Add ${plant.name} to enquiry list`
              }
            >
              {isAdded ? (
                <>
                  <Check className="w-3 h-3" aria-hidden="true" />
                  <span>Added{quantity && quantity > 1 ? ` (${quantity})` : ''}</span>
                </>
              ) : (
                <>
                  <Plus className="w-3 h-3" aria-hidden="true" />
                  <span>Enquire</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
