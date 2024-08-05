import { HandToolsSchema } from "./hand-tools";

export interface CardImageTitle {
  img: string;
  title: string;
}

export interface ShovelTableSchema {
  artNo: string;
  size?: string;
  length?: string;
  qtyPerPack: string;
  weight: string;
  measurement: string;
}

export interface ShovelSchema {
  title: string;
  products: CardImageTitle[];
  table: ShovelTableSchema[];
}

export interface GardenToolsSchema {
  label: string;
  data: any;
  type: string;
  pagination: boolean;
  banner?: string;
}

export interface SectionSchema {
  label: string;
  data: any;
  type?: string;
  pagination: boolean;
  banner?: string;
}

export interface ProductsSchema {
  garden_tools: SectionSchema[];
  hand_tools: SectionSchema[];
  electricals_products: SectionSchema[];
  electricals_hardware: SectionSchema[];
  household_products: SectionSchema[];
  general_products: SectionSchema[];
  utensils: SectionSchema[];
}
