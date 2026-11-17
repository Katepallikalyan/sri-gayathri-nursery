import { CareGuide } from '@/types';

export const CARE_GUIDES: CareGuide[] = [
  {
    id: 'hyderabad-summer-care',
    title: 'Managing Balcony Plants in Hyderabad Summers',
    category: 'Seasonal Care',
    readTime: '3 min read',
    summary:
      'With peak summer temperatures reaching 40°C+ in Kukatpally and KPHB, shielding your container garden requires smart shade and deep morning hydration.',
    tips: [
      'Water thoroughly in the early morning before 8:00 AM so roots can hydrate before the midday heat.',
      'Use green 50% agro-shade netting over west-facing apartment balconies to prevent leaf scorch.',
      'Group potted plants together to create a microclimate with naturally higher humidity.',
      'Add a 1-inch layer of organic mulch or coco chips on topsoil to cut evaporation by half.',
    ],
    recommendedPlants: ['Bougainvillea', 'Desert Rose (Adenium)', 'Jade Plant', 'Aloe Vera'],
    icon: 'SunMedium',
  },
  {
    id: 'monsoon-soil-drainage',
    title: 'Monsoon Root Care & Drainage Mastery',
    category: 'Soil & Moisture',
    readTime: '4 min read',
    summary:
      'Monsoon rains revive gardens, but stagnant water in plastic pots can lead to root rot within 48 hours. Here is how to keep soil aerated.',
    tips: [
      'Ensure every planter has an open drainage hole; clear any mud clogging the base saucer.',
      'Mix 30% coarse river sand or perlite into your potting soil for instant free-draining percolation.',
      'Tilt outdoor planters slightly on pot stands or bricks to elevate them off flooded terrace floors.',
      'Reduce watering frequency drastically; check moisture with your finger 2 inches below the surface.',
    ],
    recommendedPlants: ['Monstera Deliciosa', 'Areca Palm', 'ZZ Plant', 'Snake Plant'],
    icon: 'CloudRain',
  },
  {
    id: 'indoor-air-purification',
    title: 'Creating an Air-Purifying Indoor Sanctuary',
    category: 'Indoor Living',
    readTime: '3 min read',
    summary:
      'Select the top NASA-researched air-cleansing varieties that thrive inside modern air-conditioned Hyderabad apartments.',
    tips: [
      'Place Snake Plants and Peace Lilies in bedrooms for night-time oxygen exchange and VOC reduction.',
      'Wipe broad leaves monthly with a damp cloth to clear dust and allow clean photosynthesis.',
      'Keep indoor plants at least 4 feet away from direct air-conditioner blower blasts.',
      'Position plants near north or east-facing windows for gentle, consistent indirect daylight.',
    ],
    recommendedPlants: ['Snake Plant Laurentii', 'Peace Lily Sensation', 'Golden Pothos', 'Areca Palm'],
    icon: 'Wind',
  },
  {
    id: 'terrace-fruit-gardening',
    title: 'Growing Grafted Fruit Trees in Containers',
    category: 'Orchard & Balcony',
    readTime: '5 min read',
    summary:
      'You do not need an acre of farmland to harvest sweet Banganapalle mangoes and pink guavas in Telangana.',
    tips: [
      'Select grafted dwarf varieties bred to fruit within 1-2 years in containers.',
      'Use containers of at least 50–100 litres with sturdy handles or caster wheel bases.',
      'Feed monthly during flowering and fruit setting with well-rotted cow manure (vermicompost) and bone meal.',
      'Position fruit trees where they receive a minimum of 6 hours of unfiltered direct sunlight daily.',
    ],
    recommendedPlants: ['Benishan Mango Sapling', 'Taiwan Pink Guava Sapling'],
    icon: 'Sprout',
  },
];
