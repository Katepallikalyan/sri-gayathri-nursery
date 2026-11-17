# Sri Gayathri Nursery — KPHB, Kukatpally, Hyderabad

> **Professional Botanical Nursery Website & Client Handover Pitch**  
> **Entity:** Sri Gayathri Nursery (Sri Gayatri Nursery)  
> **Location:** KPHB Colony, Kukatpally, Hyderabad, Telangana 500085, India  
> **Design System:** Hallmark `Garden` Theme (Warm Oat Paper, Chlorophyll Ink, Leaf Accent, Vollkorn 600, Hanken Grotesk)

---

## Overview

A fast, accessible, grounded plant nursery website built for **Sri Gayathri Nursery** in KPHB Colony, Kukatpally, Hyderabad. Designed strictly to Hallmark principles: zero 3D WebGL bloat, zero AI slop, no cards-inside-cards, no decorative status dots, and fully responsive across mobile (390px), tablet (768px), and desktop (1280px+).

Visitors can browse 24 locally acclimated botanical specimens across 6 categories, inspect sunlight and watering requirements, compile multi-item enquiry lists with quantity steppers, and launch pre-filled enquiry messages directly into WhatsApp.

---

## Core Features & Experience

### 1. High-Trust Botanical Hero
- **Locality Bar:** Public address in KPHB Colony, opposite One City / Raintree Park, in front of the water tank.
- **Human Headline:** *"Fresh plants for homes and gardens in KPHB"*.
- **Calm Single-Sentence Description:** *"Locally nurtured indoor plants, fruit saplings, and terracotta pots in Kukatpally."*
- **Direct Dual Actions:** *"Explore plant collection"* (smooth scrolls to catalogue) and *"Chat on WhatsApp"* (direct chat launch).
- **Daylight Photography Frame:** Daylight botanical photograph with hairline borders, true natural color, and zero drop shadows.

### 2. Botanical Catalogue (24 Specimens)
- 24 botanical varieties across 6 categories:
  - **Indoor Foliage:** Monstera Deliciosa, Snake Plant Laurentii, Areca Palm, Peace Lily, Golden Pothos, ZZ Plant.
  - **Flowering Plants:** Kashmiri Fragrant Rose, Red Mandaram Hibiscus, Bougainvillea Cascade, Mogra Jasmine, Adenium Desert Rose, Crossandra Kanakambaram.
  - **Succulents & Cacti:** Jade Plant Crassula, Aloe Vera Barbadensis, Golden Barrel Cactus, Zebra Haworthia.
  - **Outdoor & Terrace:** Krishna Tulsi, Ficus Benjamina Variegata, Song of India Dracaena.
  - **Fruit Saplings:** Benishan / Banganapalle Mango, Taiwan Pink Guava.
  - **Planters & Pots:** Terracotta Fluted Planter, Glazed Emerald Ceramic Bowl, Handcrafted Macrame Hanger.
- **Search & Filtering:** Real-time query search, category tabs, sunlight requirement filter, and beginner-friendly care level toggle.
- **Stock Transparency:** Zero invented prices. Every plant is explicitly labeled *"Sample stock"* and *"Ask for price"*.
- **Inspection Dialog:** Accessible modal (`role="dialog"`) detailing botanical names in Newsreader outlier italics, care specifications, and recommended home placements.

### 3. WhatsApp Multi-Item Enquiry System
- **Enquiry Drawer:** Sliding drawer where visitors can review selected specimens, adjust quantities (+/-), or remove items.
- **Synchronized Message Generation:** Formats structured WhatsApp messages ready for 1-click dispatch:
  ```text
  Hello Sri Gayathri Nursery!

  I visited your website and would like to enquire about these plants:

  1. Monstera Deliciosa - 2
  2. Kashmiri Scented Red Rose - 3
  3. Benishan / Banganapalle Mango Sapling - 1

  Could you please share their prices and availability in KPHB?

  Thank you!
  ```
- **Copy to Clipboard:** 1-click button to copy formatted text with feedback.
- **Presenter / Demo Tool:** Built-in phone configurator with `localStorage` persistence to test pre-filled WhatsApp links with any test mobile number.

### 4. Practical Hyderabad Plant Care Wisdom
- Local climate guidance tailored to Hyderabad weather:
  - Peak summer heat protection (40°C+ shade net care and morning watering).
  - Monsoon root rot prevention and soil gravel drainage.
  - Indoor air conditioning microclimates and foliage misting.
  - Balcony wind management and terracotta pot weighting.

### 5. Verified Physical Nursery Location & Directions
- **Address:** 1-123, Kukatpally Housing Board Road, in front of the water tank, opposite One City, Kukatpally Housing Board Colony, Hyderabad, Telangana 500085.
- **Landmarks:** Opposite One City / Raintree Park, KPHB Water Tank, Sri Venugopala Swamy Temple, Nexus Hyderabad Mall.
- **Google Maps:** Direct external route CTA and responsive interactive embedded map.
- **Hours Disclaimer:** Estimated hours (8:00 AM – 8:00 PM) disclaimed pending owner confirmation.

---

## Design System: Hallmark `Garden`

- **Ground:** Warm Oat Paper (`oklch(95.8% 0.024 90)`)
- **Ink:** Deep Chlorophyll Ink (`oklch(23% 0.050 152)`)
- **Signal Accent:** Leaf Green (`oklch(46% 0.135 142)`)
- **Rules & Hairlines:** Natural Oat Hairlines (`oklch(83% 0.024 112)`)
- **Typography:**
  - Display: **Vollkorn** (600 weight, roman, sentence case)
  - Body: **Hanken Grotesk** (400 and 500 weight, old-style figures)
  - Botanical captions: **Newsreader** (italic, label scale)
- **Surfaces:** Flat paper aesthetic (`--shadow-card: none`), 4px rounded corners on media, pill-shaped action controls.

---

## Verification & Status Dossier

| Data Point | Status | Note |
| :--- | :--- | :--- |
| **Business Name** | **VERIFIED** | Sri Gayathri Nursery (Sri Gayatri Nursery) |
| **Physical Address** | **VERIFIED** | 1-123, KPHB Main Road, In front of Water Tank, Opp. One City, Hyderabad 500085 |
| **Landmarks** | **VERIFIED** | Water Tank, Opposite One City, Venugopala Swamy Temple, Nexus Hyderabad Mall |
| **Google Maps** | **VERIFIED** | Direct directions link to Kukatpally Housing Board corridor |
| **WhatsApp Number** | **UNVERIFIED (DEMO MODE)** | Configurable via `NEXT_PUBLIC_NURSERY_WHATSAPP_NUMBER` or in-drawer test number |
| **Hours** | **ESTIMATED (DISCLAIMED)** | 8:00 AM – 8:00 PM (Marked as estimated pending owner confirmation) |
| **Plant Inventory** | **SAMPLE (LABELED)** | 24 plausible varieties marked `SAMPLE / TO BE CONFIRMED` |

---

## Nursery Owner Handover Guide

All business data is organized in single-purpose configuration files:

1. **Activate Live WhatsApp Number:**
   In `.env.local`:
   ```env
   NEXT_PUBLIC_NURSERY_WHATSAPP_NUMBER=919876543210
   ```
   *(Country code `91` followed by 10-digit mobile number).*
   Alternatively, update `src/config/business.ts`.

2. **Add or Modify Plants:**
   Edit `src/data/products.ts`. All 24 plants follow the typed `PlantProduct` schema.

3. **Modify Address, Landmarks, or Hours:**
   Edit `src/config/business.ts`.

---

## Local Development & Build

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# TypeScript typecheck
npx tsc --noEmit

# Production build
npm run build

# Start production server
npm run start
```
