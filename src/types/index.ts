export type PlantCategory =
  | 'indoor'
  | 'flowering'
  | 'outdoor'
  | 'succulents'
  | 'fruit'
  | 'pots';

export type LightRequirement = 'low' | 'medium' | 'bright-indirect' | 'direct-sun';
export type WaterRequirement = 'low' | 'moderate' | 'frequent';
export type CareLevel = 'easy' | 'moderate' | 'expert';

export interface PlantProduct {
  id: string;
  name: string;
  botanicalName?: string;
  category: PlantCategory;
  categoryLabel: string;
  shortDescription: string;
  description: string;
  image: string;
  lightRequirement: LightRequirement;
  lightLabel: string;
  waterRequirement: WaterRequirement;
  waterLabel: string;
  careLevel: CareLevel;
  careLabel: string;
  idealFor: string[];
  dimensionsEstimate?: string;
  potIncluded?: boolean;
  isFeatured?: boolean;
  status: 'SAMPLE / TO BE CONFIRMED';
}

export interface EnquiryItem {
  plant: PlantProduct;
  quantity: number;
}

export interface CareGuide {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  tips: string[];
  recommendedPlants: string[];
  icon: string;
}
