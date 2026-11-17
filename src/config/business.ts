/**
 * Central Business Configuration for Sri Gayathri Nursery Demonstration Website.
 *
 * NOTE FOR OWNER / CLIENT HANDOVER:
 * To activate live WhatsApp enquiries with your real phone number:
 * 1. Add your phone number with country code (e.g., '919876543210' for India)
 *    in your .env.local file as:
 *    NEXT_PUBLIC_NURSERY_WHATSAPP_NUMBER=919876543210
 *    OR update the default fallback in this file below.
 */

export const BUSINESS_CONFIG = {
  // Brand Identity
  brandName: 'Sri Gayathri Nursery',
  alternateSpelling: 'Sri Gayatri Nursery',
  tagline: 'Step Into a Greener World',
  subTagline:
    'Discover the beauty of plants, thoughtfully presented for homes, balconies and gardens in KPHB, Hyderabad.',

  // Verification Statuses
  verificationStatus: {
    name: 'VERIFIED',
    address: 'VERIFIED (Public Directory Listing)',
    landmarks: 'VERIFIED LOCALITY LANDMARKS',
    whatsApp: 'UNVERIFIED (Demo Mode Active)',
    hours: 'ESTIMATED (Pending Owner Confirmation)',
    inventory: 'SAMPLE DEMO DATA',
  },

  // Address & Physical Location
  address: {
    line1: '1-123, Kukatpally Housing Board Road',
    landmark: 'In front of the water tank, opposite One City',
    area: 'Kukatpally Housing Board Colony (KPHB)',
    city: 'Hyderabad',
    state: 'Telangana',
    postalCode: '500085',
    country: 'India',
    fullAddress:
      '1-123, Kukatpally Housing Board Road, in front of the water tank, opposite One City, Kukatpally Housing Board Colony, Hyderabad, Telangana 500085, India',
    mapsSearchUrl:
      'https://www.google.com/maps/search/?api=1&query=Sri+Gayathri+Nursery+Kukatpally+Hyderabad',
    // Embedded map query targeting the verified KPHB address
    mapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.2753232824637!2d78.3912!3d17.4938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91f3b392a3f7%3A0x6b404d805847e30!2sKukatpally%20Housing%20Board%20Colony%2C%20Hyderabad%2C%20Telangana%20500085!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  },

  // Nearby Verified Locality Context
  landmarks: [
    {
      name: 'Water Tank, KPHB Main Road',
      note: 'Directly in front of the nursery entrance',
    },
    {
      name: 'Opposite One City / Raintree Park Corridor',
      note: 'Across the main road',
    },
    {
      name: 'Sri Venugopala Swamy Temple, KPHB',
      note: 'Prominent neighbourhood temple landmark',
    },
    {
      name: 'Nexus Hyderabad Mall (formerly Forum Sujana)',
      note: 'Major shopping destination in the Kukatpally corridor',
    },
  ],

  // Operating Hours (Marked explicitly as estimated)
  operatingHours: {
    displayText: 'Mon – Sun: 8:00 AM – 8:00 PM',
    isEstimated: true,
    disclaimer:
      'Hours are estimated based on local nursery conventions. Please confirm availability via WhatsApp before visiting.',
  },

  // WhatsApp & Communication Configuration
  whatsApp: {
    // Read from environment variable or fallback to null (triggers Demo Mode)
    configuredNumber: process.env.NEXT_PUBLIC_NURSERY_WHATSAPP_NUMBER || '',
    isConfigured: Boolean(process.env.NEXT_PUBLIC_NURSERY_WHATSAPP_NUMBER),
    demoPhoneNumber: '919876543210', // Demo dummy placeholder for pitch testing

    /**
     * Build standard pre-filled WhatsApp enquiry link.
     */
    buildEnquiryUrl: (
      items: { name: string; quantity: number }[],
      customMessage?: string,
      targetNumberOverride?: string
    ) => {
      const activeNumber =
        targetNumberOverride ||
        process.env.NEXT_PUBLIC_NURSERY_WHATSAPP_NUMBER ||
        '919876543210';

      let message = customMessage;

      if (!message) {
        if (items.length > 0) {
          const itemList = items
            .map((item, index) => `${index + 1}. ${item.name} - ${item.quantity}`)
            .join('\n');

          message = `Hello Sri Gayathri Nursery!\n\nI visited your website and would like to enquire about these plants:\n\n${itemList}\n\nCould you please share their prices and availability?\n\nThank you!`;
        } else {
          message = `Hello Sri Gayathri Nursery!\n\nI visited your website and would like to enquire about available plants and visiting your nursery in KPHB.\n\nThank you!`;
        }
      }

      const encoded = encodeURIComponent(message);
      return `https://wa.me/${activeNumber}?text=${encoded}`;
    },
  },

  // Pitch Demonstration Notice
  pitchNotice: {
    isPitchDemo: true,
    bannerText:
      'Unofficial demonstration pitch prepared for Sri Gayathri Nursery, KPHB. WhatsApp ordering and live inventory ready for nursery owner handover.',
  },
};
