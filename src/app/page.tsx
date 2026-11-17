'use client';

import React, { useState } from 'react';
import { DemoModeBanner } from '@/components/ui/DemoModeBanner';
import { Navbar } from '@/components/ui/Navbar';
import { HeroSection } from '@/components/ui/HeroSection';
import { CatalogueSection } from '@/components/ui/CatalogueSection';
import { CareGuidesSection } from '@/components/ui/CareGuidesSection';
import { VisitSection } from '@/components/ui/VisitSection';
import { Footer } from '@/components/ui/Footer';
import { PlantModal } from '@/components/ui/PlantModal';
import { WhatsAppDrawer } from '@/components/ui/WhatsAppDrawer';
import { WhatsAppFloatingButton } from '@/components/ui/WhatsAppFloatingButton';
import { PlantProduct, EnquiryItem } from '@/types';

export default function HomePage() {
  const [enquiryItems, setEnquiryItems] = useState<EnquiryItem[]>([]);
  const [isEnquiryDrawerOpen, setIsEnquiryDrawerOpen] = useState(false);
  const [selectedPlantModal, setSelectedPlantModal] = useState<PlantProduct | null>(null);

  const enquiryItemIds = new Set(enquiryItems.map((item) => item.plant.id));
  const enquiryItemCounts = enquiryItems.reduce<Record<string, number>>((acc, item) => {
    acc[item.plant.id] = item.quantity;
    return acc;
  }, {});

  const handleExplorePlants = () => {
    const el = document.getElementById('catalogue');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlant = (plant: PlantProduct) => {
    setSelectedPlantModal(plant);
  };

  const handleAddEnquiry = (plant: PlantProduct) => {
    setEnquiryItems((prev) => {
      const existing = prev.find((item) => item.plant.id === plant.id);
      if (existing) {
        return prev.map((item) =>
          item.plant.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { plant, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (plantId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(plantId);
      return;
    }
    setEnquiryItems((prev) =>
      prev.map((item) => (item.plant.id === plantId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (plantId: string) => {
    setEnquiryItems((prev) => prev.filter((item) => item.plant.id !== plantId));
  };

  const handleClearAll = () => {
    setEnquiryItems([]);
  };

  const totalEnquiryQuantity = enquiryItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col font-body antialiased">
      {/* Demonstration notice banner */}
      <DemoModeBanner onOpenEnquiryDrawer={() => setIsEnquiryDrawerOpen(true)} />

      {/* Main navigation */}
      <Navbar
        enquiryCount={totalEnquiryQuantity}
        onOpenEnquiryDrawer={() => setIsEnquiryDrawerOpen(true)}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection onExplorePlants={handleExplorePlants} />

        {/* Plant Catalogue with 24 Botanical Specimens */}
        <CatalogueSection
          onInspectPlant={handleSelectPlant}
          onAddEnquiry={handleAddEnquiry}
          enquiryItemIds={enquiryItemIds}
          enquiryItemCounts={enquiryItemCounts}
        />

        {/* Plant Care Wisdom for Hyderabad */}
        <CareGuidesSection />

        {/* Physical Nursery Location in KPHB & Directions */}
        <VisitSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Plant Details Modal */}
      <PlantModal
        plant={selectedPlantModal}
        onClose={() => setSelectedPlantModal(null)}
        onAddEnquiry={handleAddEnquiry}
        isAdded={selectedPlantModal ? enquiryItemIds.has(selectedPlantModal.id) : false}
      />

      {/* WhatsApp Cart & Enquiry Drawer */}
      <WhatsAppDrawer
        isOpen={isEnquiryDrawerOpen}
        onClose={() => setIsEnquiryDrawerOpen(false)}
        items={enquiryItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearAll={handleClearAll}
      />

      {/* WhatsApp Floating Action Button & Sticky Mobile Bar */}
      <WhatsAppFloatingButton
        enquiryCount={totalEnquiryQuantity}
        onOpenEnquiryDrawer={() => setIsEnquiryDrawerOpen(true)}
      />
    </div>
  );
}
