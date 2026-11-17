'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BUSINESS_CONFIG } from '@/config/business';
import { Sprout, ShoppingBag, Menu, X, MessageCircle } from 'lucide-react';

interface NavbarProps {
  enquiryCount: number;
  onOpenEnquiryDrawer: () => void;
}

export function Navbar({ enquiryCount, onOpenEnquiryDrawer }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Plant collection', href: '#catalogue' },
    { name: 'Hyderabad care guide', href: '#care' },
    { name: 'Visit nursery', href: '#visit' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 bg-paper/95 backdrop-blur-sm transition-colors duration-200 border-b ${
        isScrolled ? 'border-rule-2' : 'border-rule'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand wordmark */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-ink hover:text-accent transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
        >
          <div className="w-8 h-8 rounded-pill bg-paper-2 border border-rule flex items-center justify-center text-accent">
            <Sprout className="w-4 h-4" aria-hidden="true" />
          </div>
          <div>
            <span className="font-display text-lg text-ink font-semibold block leading-tight">
              {BUSINESS_CONFIG.brandName}
            </span>
            <span className="font-body text-xs text-ink-muted block leading-none">
              KPHB Colony, Kukatpally
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-body text-ink-2 hover:text-accent hover:underline active:opacity-75 transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Enquiry Drawer Button */}
          <button
            type="button"
            onClick={onOpenEnquiryDrawer}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-pill border border-rule-2 bg-paper text-ink text-xs font-body font-medium hover:border-ink active:opacity-75 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            aria-label={`Open enquiry list with ${enquiryCount} items`}
          >
            <ShoppingBag className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
            <span className="hidden sm:inline">Enquiry list</span>
            {enquiryCount > 0 && (
              <span className="px-1.5 py-0.5 rounded-pill bg-accent text-accent-ink text-[11px] font-semibold leading-none">
                {enquiryCount}
              </span>
            )}
          </button>

          {/* Direct WhatsApp CTA */}
          <a
            href={BUSINESS_CONFIG.whatsApp.buildEnquiryUrl([])}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-pill bg-accent text-accent-ink text-xs font-body font-medium hover:opacity-90 active:opacity-75 transition-opacity duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          >
            <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Chat on WhatsApp</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded border border-rule text-ink hover:bg-paper-2 active:opacity-75 disabled:opacity-50 transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-rule bg-paper px-4 py-4">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-body text-ink-2 hover:text-accent py-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-rule flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiryDrawer();
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-2 rounded-pill border border-rule-2 text-xs font-medium text-ink hover:border-ink active:opacity-75 disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                <span>Enquiry list ({enquiryCount})</span>
              </button>
              <a
                href={BUSINESS_CONFIG.whatsApp.buildEnquiryUrl([])}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-2 rounded-pill bg-accent text-accent-ink text-xs font-medium hover:opacity-90 active:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              >
                <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
