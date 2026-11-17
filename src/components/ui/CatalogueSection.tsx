'use client';

import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '@/data/products';
import { PlantCard } from './PlantCard';
import { PlantProduct, PlantCategory } from '@/types';
import { Search, X, Check } from 'lucide-react';

interface CatalogueSectionProps {
  onInspectPlant: (plant: PlantProduct) => void;
  onAddEnquiry: (plant: PlantProduct) => void;
  enquiryItemIds: Set<string>;
  enquiryItemCounts?: Record<string, number>;
}

export function CatalogueSection({
  onInspectPlant,
  onAddEnquiry,
  enquiryItemIds,
  enquiryItemCounts,
}: CatalogueSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<PlantCategory | 'all'>('all');
  const [easyCareOnly, setEasyCareOnly] = useState(false);
  const [selectedLight, setSelectedLight] = useState<string>('all');

  const categories: { id: PlantCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'All plants' },
    { id: 'indoor', label: 'Indoor foliage' },
    { id: 'flowering', label: 'Flowering' },
    { id: 'succulents', label: 'Succulents & cacti' },
    { id: 'outdoor', label: 'Outdoor' },
    { id: 'fruit', label: 'Fruit saplings' },
    { id: 'pots', label: 'Planters & pots' },
  ];

  const lightOptions = [
    { id: 'all', label: 'Any sunlight' },
    { id: 'low', label: 'Low or dappled light' },
    { id: 'bright-indirect', label: 'Bright indirect light' },
    { id: 'direct-sun', label: 'Direct sunlight' },
  ];

  const filteredPlants = useMemo(() => {
    return PRODUCTS.filter((plant) => {
      if (selectedCategory !== 'all' && plant.category !== selectedCategory) {
        return false;
      }
      if (easyCareOnly && plant.careLevel !== 'easy') {
        return false;
      }
      if (selectedLight !== 'all' && plant.lightRequirement !== selectedLight) {
        return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = plant.name.toLowerCase().includes(query);
        const matchesBotanical = plant.botanicalName?.toLowerCase().includes(query);
        const matchesDesc = plant.description.toLowerCase().includes(query);
        const matchesCategory = plant.categoryLabel.toLowerCase().includes(query);
        if (!matchesName && !matchesBotanical && !matchesDesc && !matchesCategory) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, easyCareOnly, selectedLight, searchQuery]);

  const hasActiveFilters =
    searchQuery !== '' ||
    selectedCategory !== 'all' ||
    easyCareOnly ||
    selectedLight !== 'all';

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setEasyCareOnly(false);
    setSelectedLight('all');
  };

  return (
    <section id="catalogue" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-paper border-b border-rule">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <h2 className="font-display text-2xl sm:text-4xl text-ink font-semibold leading-tight mb-3">
            Plant collection for homes and gardens
          </h2>
          <p className="font-body text-sm sm:text-base text-ink-2 leading-relaxed">
            Browse 24 botanical specimens suited for Hyderabad apartments, balconies, and gardens. Add plants to your enquiry list for direct WhatsApp availability.
          </p>
        </div>

        {/* Filter Controls Toolbar */}
        <div className="border border-rule rounded-card bg-paper-2 p-4 sm:p-5 mb-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-ink-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by plant name or variety (e.g. Monstera, Jasmine, Mango)"
                className="w-full bg-paper border border-rule rounded-pill pl-10 pr-9 py-2 text-xs sm:text-sm font-body text-ink placeholder:text-ink-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-muted hover:text-ink p-0.5 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              )}
            </div>

            {/* Sunlight dropdown */}
            <div className="shrink-0">
              <select
                value={selectedLight}
                onChange={(e) => setSelectedLight(e.target.value)}
                className="w-full md:w-auto bg-paper border border-rule rounded-pill px-4 py-2 text-xs sm:text-sm font-body text-ink cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                aria-label="Filter by sunlight requirement"
              >
                {lightOptions.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Beginner friendly checkbox toggle */}
            <div className="shrink-0">
              <button
                type="button"
                onClick={() => setEasyCareOnly(!easyCareOnly)}
                className={`w-full md:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-pill border text-xs sm:text-sm font-body font-medium transition-colors duration-150 active:opacity-75 disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent ${
                  easyCareOnly
                    ? 'bg-accent text-accent-ink border-accent'
                    : 'bg-paper text-ink border-rule hover:border-rule-2'
                }`}
                aria-pressed={easyCareOnly}
              >
                {easyCareOnly && <Check className="w-3.5 h-3.5" aria-hidden="true" />}
                <span>Beginner friendly only</span>
              </button>
            </div>

            {/* Reset button if active */}
            {hasActiveFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="text-xs font-body text-ink-muted hover:text-ink underline self-center px-2 py-1 rounded active:opacity-75 disabled:opacity-50 transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              >
                Reset filters
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-4 mt-4 border-t border-rule" aria-label="Filter by plant category">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-pill text-xs font-body transition-colors duration-150 shrink-0 active:opacity-75 disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent ${
                  selectedCategory === cat.id
                    ? 'bg-ink text-paper font-medium'
                    : 'bg-paper border border-rule text-ink-2 hover:border-ink'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Counter summary */}
        <div className="flex items-center justify-between text-xs font-body text-ink-muted mb-6">
          <span>
            Showing {filteredPlants.length} of {PRODUCTS.length} specimens
          </span>
          <span>Sample demonstration inventory</span>
        </div>

        {/* Plants Grid */}
        {filteredPlants.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 [grid-template-columns:repeat(auto-fill,minmax(260px,1fr))]">
            {filteredPlants.map((plant) => (
              <PlantCard
                key={plant.id}
                plant={plant}
                onInspect={onInspectPlant}
                onAddEnquiry={onAddEnquiry}
                isAdded={enquiryItemIds.has(plant.id)}
                quantity={enquiryItemCounts ? enquiryItemCounts[plant.id] : undefined}
              />
            ))}
          </div>
        ) : (
          <div className="py-16 text-center rounded-card border border-rule bg-paper-2">
            <h3 className="font-display text-xl text-ink font-semibold mb-2">No matching plants</h3>
            <p className="font-body text-xs text-ink-muted max-w-sm mx-auto mb-4">
              Try adjusting your search query or selecting a different sunlight filter.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="px-4 py-2 rounded-pill bg-accent text-accent-ink text-xs font-body font-medium hover:opacity-90 active:opacity-75 disabled:opacity-50 transition-opacity duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
