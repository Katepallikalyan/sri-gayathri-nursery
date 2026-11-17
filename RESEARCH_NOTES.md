# Research & Verification Dossier: Sri Gayathri Nursery

> **Project:** Unofficial Demonstration Pitch Website (Hallmark Garden Architecture)  
> **Entity:** Sri Gayathri Nursery (also spelled Sri Gayatri Nursery)  
> **Target Locality:** KPHB, Kukatpally, Hyderabad, Telangana, India  
> **Date of Dossier:** November 2026  

---

## 1. Verified Public Business Information

| Attribute | Status | Public Verification Record |
| :--- | :--- | :--- |
| **Business Name** | **VERIFIED** | Sri Gayathri Nursery (also referenced locally as Sri Gayatri Nursery). |
| **Locality** | **VERIFIED** | KPHB (Kukatpally Housing Board Colony), Kukatpally, Hyderabad, Telangana 500085. |
| **Street Address** | **VERIFIED (PUBLIC DIRECTORY LISTING)** | 1-123, Kukatpally Housing Board Road, in front of the water tank, opposite One City / Raintree Park area, Kukatpally Housing Board Colony, Hyderabad, Telangana 500085, India. |
| **Major Area Landmarks** | **VERIFIED LOCALITY LANDMARKS** | • Opposite One City / Raintree Park corridor<br>• Water Tank, KPHB Main Road<br>• Nexus Hyderabad Mall (formerly Forum Sujana Mall - approx 1.5 km corridor)<br>• Sri Venugopala Swamy Temple, KPHB (prominent neighbourhood temple) |
| **Core Category** | **VERIFIED** | Plant Nursery, Gardening Greens, Outdoor & Indoor plants, Fruit saplings (e.g. Mango varieties), Soil & gardening supplies. |
| **Google Maps Query** | **VERIFIED LINK** | `https://www.google.com/maps/search/?api=1&query=Sri+Gayathri+Nursery+Kukatpally+Hyderabad` |

---

## 2. Unverified Items (Treated as Demonstration Placeholders)

The following items are **NOT** independently verified with certainty and must never be presented as confirmed nursery facts:

1. **WhatsApp / Direct Mobile Number**:
   - *Status*: **UNVERIFIED**.
   - *Solution in Demo*: Controlled by `NEXT_PUBLIC_NURSERY_WHATSAPP_NUMBER`. If unset or set to demo mode, the interface displays an explicit, friendly **Demo / Test Contact Mode** where the pitch presenter can enter any test number or preview the prefilled message without sending spam to unverified parties. When the owner shares their direct number, it can be updated in one place.

2. **Operating Hours**:
   - *Status*: **ESTIMATED PLACEHOLDER**.
   - *Standard local hours*: 8:00 AM – 8:00 PM (Monday – Sunday). Marked as *"Estimated nursery hours — please verify via WhatsApp before visiting"*.

3. **Product Inventory & Pricing**:
   - *Status*: **SAMPLE DEMONSTRATION STOCK**.
   - *Policy*: No invented prices are displayed. Every plant displays *"Ask for Price"* or *"Check Availability"*. Each product card bears an internal status tag `SAMPLE / TO BE CONFIRMED` so the owner knows these are illustrative items ready to be swapped with actual stock.

4. **Historical Claims / Reviews**:
   - *Status*: **OMITTED / ZERO FABRICATION**.
   - No fabricated quotes, star ratings, or years in business (e.g. no "serving for 25 years").

5. **Distance & Proximity Claims**:
   - Mentioned only as generic locality context ("Located in KPHB, Kukatpally, near prominent local landmarks") rather than fabricated walking times or specific meter distances.

---

## 3. Disambiguation Notice

- **Other Entities**: There is a large, well-known wholesale fruit tree nursery named "Sri Gayatri Nursery" located in Gudimalkapur / Mehdipatnam, Hyderabad, as well as a "Gayathri Nursery & Landscaping" near Malaysian Township / Phase 4.
- **Scope**: This demonstration focuses specifically on the neighborhood botanical nursery located at **KPHB Main Road, in front of the water tank, opposite One City, Kukatpally, Hyderabad**.

---

## 4. Single-Point Configuration Guide for the Owner Pitch

All business information is managed in `src/config/business.ts`:
- Change `WHATSAPP_NUMBER` to activate live 1-click customer enquiries.
- Add or swap plant listings in `src/data/products.ts`.
- Adjust Google Maps coordinates or opening hours in seconds.
