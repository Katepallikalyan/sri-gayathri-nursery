'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { EnquiryItem } from '@/types';
import { BUSINESS_CONFIG } from '@/config/business';
import {
  X,
  Plus,
  Minus,
  Trash2,
  MessageCircle,
  ShoppingBag,
  ExternalLink,
  Settings2,
  Copy,
  Check,
} from 'lucide-react';

interface WhatsAppDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: EnquiryItem[];
  onUpdateQuantity: (plantId: string, quantity: number) => void;
  onRemoveItem: (plantId: string) => void;
  onClearAll: () => void;
}

export function WhatsAppDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearAll,
}: WhatsAppDrawerProps) {
  const [testNumber, setTestNumber] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('sgn_test_phone');
      if (saved) setTestNumber(saved);
    } catch {}
  }, []);

  const handleTestNumberChange = (val: string) => {
    setTestNumber(val);
    try {
      if (val.trim()) {
        localStorage.setItem('sgn_test_phone', val);
      } else {
        localStorage.removeItem('sgn_test_phone');
      }
    } catch {}
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const totalItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const enquiryListPayload = items.map((i) => ({
    name: i.plant.name,
    quantity: i.quantity,
  }));

  const formattedMessage =
    items.length > 0
      ? `Hello Sri Gayathri Nursery!\n\nI visited your website and would like to enquire about these plants:\n\n${items
          .map((item, idx) => `${idx + 1}. ${item.plant.name} - ${item.quantity}`)
          .join('\n')}\n\nCould you please share their prices and availability in KPHB?\n\nThank you!`
      : `Hello Sri Gayathri Nursery!\n\nI visited your website and would like to enquire about available plants at your KPHB nursery.\n\nThank you!`;

  const activeWhatsAppUrl = BUSINESS_CONFIG.whatsApp.buildEnquiryUrl(
    enquiryListPayload,
    formattedMessage,
    testNumber.trim() ? testNumber.replace(/\D/g, '') : undefined
  );

  const copyMessageToClipboard = () => {
    navigator.clipboard.writeText(formattedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isConfigured = BUSINESS_CONFIG.whatsApp.isConfigured;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-drawer-title"
      className="fixed inset-0 z-50 flex justify-end bg-ink/40"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-paper border-l border-rule h-full flex flex-col justify-between p-6 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-rule">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-pill bg-paper-2 border border-rule flex items-center justify-center text-accent">
                <ShoppingBag className="w-4 h-4" aria-hidden="true" />
              </div>
              <div>
                <h2 id="enquiry-drawer-title" className="font-display text-xl text-ink font-semibold">
                  Plant enquiry list
                </h2>
                <span className="text-xs font-body text-ink-muted">
                  {totalItemsCount} {totalItemsCount === 1 ? 'item' : 'items'} selected
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowSettings(!showSettings)}
                className={`p-1.5 rounded border text-ink-2 hover:border-ink active:opacity-75 disabled:opacity-50 transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent ${
                  showSettings ? 'bg-paper-2 border-accent text-accent' : 'border-rule'
                }`}
                title="Configure test phone number"
                aria-label="Configure test phone number"
              >
                <Settings2 className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded border border-rule text-ink hover:bg-paper-2 active:opacity-75 disabled:opacity-50 transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                aria-label="Close enquiry drawer"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Test Phone Number Configurator */}
          {(!isConfigured || showSettings) && (
            <div className="mt-4 p-3 border-b border-rule text-xs font-body">
              <span className="font-medium text-ink block mb-1">
                Demonstration phone test:
              </span>
              <p className="text-xs text-ink-2 mb-3 leading-relaxed">
                Enter your test mobile number to test the prefilled enquiry message on your phone.
              </p>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={testNumber}
                  onChange={(e) => handleTestNumberChange(e.target.value)}
                  placeholder="e.g. 919876543210 (country code + number)"
                  className="flex-1 bg-paper border border-rule rounded-pill px-3 py-1.5 text-xs text-ink placeholder:text-ink-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                />
                {testNumber && (
                  <button
                    type="button"
                    onClick={() => handleTestNumberChange('')}
                    className="text-xs text-ink-muted hover:text-ink underline active:opacity-75 disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Items List */}
          <div className="mt-4 divide-y divide-rule">
            {items.length > 0 ? (
              items.map((item) => (
                <div
                  key={item.plant.id}
                  className="flex items-center justify-between gap-3 py-3"
                >
                  {/* Thumbnail */}
                  <div className="relative w-12 h-12 rounded-card border border-rule overflow-hidden shrink-0 bg-paper-2">
                    <Image
                      src={item.plant.image}
                      alt={item.plant.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-sm text-ink font-semibold truncate leading-tight">
                      {item.plant.name}
                    </h3>
                    <span className="text-xs font-body text-ink-muted block">
                      {item.plant.categoryLabel}
                    </span>
                  </div>

                  {/* Stepper & Remove */}
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="flex items-center border border-rule rounded-pill bg-paper-2 p-0.5">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.plant.id, item.quantity - 1)}
                        className="p-1 text-ink-2 hover:text-ink active:opacity-75 disabled:opacity-50 transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                        aria-label={`Decrease quantity of ${item.plant.name}`}
                      >
                        <Minus className="w-3 h-3" aria-hidden="true" />
                      </button>
                      <span className="w-6 text-center text-xs font-body font-medium text-ink">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.plant.id, item.quantity + 1)}
                        className="p-1 text-ink-2 hover:text-ink active:opacity-75 disabled:opacity-50 transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                        aria-label={`Increase quantity of ${item.plant.name}`}
                      >
                        <Plus className="w-3 h-3" aria-hidden="true" />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => onRemoveItem(item.plant.id)}
                      className="p-1.5 text-ink-muted hover:text-ink active:opacity-75 disabled:opacity-50 transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                      title="Remove item"
                      aria-label={`Remove ${item.plant.name}`}
                    >
                      <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-12 text-center">
                <div className="w-12 h-12 rounded-pill bg-paper-2 border border-rule flex items-center justify-center mx-auto mb-3 text-ink-muted">
                  <ShoppingBag className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg text-ink font-semibold mb-1">
                  Enquiry list is empty
                </h3>
                <p className="font-body text-xs text-ink-muted max-w-xs mx-auto mb-5 leading-relaxed">
                  Browse the plant collection to select varieties you want to enquire about.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2 rounded-pill bg-accent text-accent-ink text-xs font-body font-medium hover:opacity-90 active:opacity-75 disabled:opacity-50 transition-opacity duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                >
                  Browse plant collection
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Drawer Footer */}
        {items.length > 0 && (
          <div className="border-t border-rule pt-4 space-y-3">
            {/* Formatted Message Preview */}
            <div className="p-3 border border-rule bg-paper-2 text-xs font-body">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-medium text-ink">
                  WhatsApp message preview:
                </span>
                <button
                  type="button"
                  onClick={copyMessageToClipboard}
                  className="inline-flex items-center gap-1 text-xs text-ink hover:text-accent underline active:opacity-75 disabled:opacity-50 transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-accent" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" aria-hidden="true" />
                      <span>Copy text</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="font-body text-xs text-ink-2 whitespace-pre-wrap line-clamp-3 bg-paper p-2 border-t border-rule">
                {formattedMessage}
              </pre>
            </div>

            {/* Clear all link */}
            <div className="flex items-center justify-between text-xs font-body text-ink-muted">
              <span>{totalItemsCount} total items</span>
              <button
                type="button"
                onClick={onClearAll}
                className="text-ink-muted hover:text-ink underline active:opacity-75 disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              >
                Clear all
              </button>
            </div>

            {/* Primary Action Button */}
            <a
              href={activeWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-pill bg-accent text-accent-ink text-xs font-body font-medium hover:opacity-90 active:opacity-75 transition-opacity duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>Send enquiry on WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" aria-hidden="true" />
            </a>

            <p className="text-[11px] text-center text-ink-muted font-body">
              Opens WhatsApp with prefilled plant names and quantities.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
