export interface DiscVariant {
  type: string | null;
  material: string | null;
  thickness: string | null;
  diameter: string | null;
  hrc: string | null;
  model: string | null;
  workingWidth: number | null;
  weight: number | null;
  qtyOfDisc: number | null;
  matchedPower: number | string | null;
}

export interface DiscEquipment {
  name: string;
  img: string;
  variants: DiscVariant[];
}
