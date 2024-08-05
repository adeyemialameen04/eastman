export interface IndividualSpanner {
  sizes: string;
  inches: string | null;
  length: number;
  weight: number;
}

export interface SpannerSet {
  code: string;
  sizes: string[];
  weight: number;
}

export interface Spanner {
  title: string;
  img1: string;
  img2: string;
  panel: string;
  plating: string;
  individual: IndividualSpanner[];
  sets: {
    metric?: SpannerSet[];
    imperial?: SpannerSet[];
  };
}

export interface PliersAndWrenches {
  name: string;
  description: string;
  sizes: {
    mm: number[];
    ins: number[];
  };
  toOrder: string[];
  finish: string[];
  img: string;
}
export interface LeatherKit {
  title: string;
  img: string;
  desc: string[];
  toOrder: string;
}

export interface CarpenterTools {
  name: string;
  description: string;
  sizes: {
    gms: number[];
    ibs: number[];
  };
  toOrder?: string;
  finish?: string;
  img: string;
}

export interface HandToolsSchema {
  label: string;
  data: any;
  type: string;
  pagination: boolean;
}
