import { ProductsSchema } from "@/types/products/garden";
import { gardenTools } from "./garden-tools";
import { hand_tools } from "./hand-tools";
import { all_fans } from "./fan";
import { electricals_hardware } from "./electricals-hardware";
import { household_products } from "./household-products";
import { general_products } from "./general-products";
import { utensils } from "./utensils";
import { hardware } from "./hardware/hardware";

export const products: any = {
  garden_tools: gardenTools,
  hand_tools: hand_tools,
  electricals_products: all_fans,
  electricals_hardware: electricals_hardware,
  household_products: household_products,
  general_products: general_products,
  utensils: utensils,
  hardware: hardware,
};
