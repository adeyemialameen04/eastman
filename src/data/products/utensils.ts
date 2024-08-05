import { colanderProducts } from "./colanders";
import {
  bar_accessories,
  kitchen_accessories,
  table_accessories,
} from "./utensils/accessories";
import { containersAndMugs } from "./utensils/containers-mugs";
import { cookingPotsAndPans } from "./utensils/cooking-pots-pans";
import { jugsTubmbers } from "./utensils/jugs-tumblers";
import { mixingBowls } from "./utensils/mixing-bowls";
import { pet_utensils } from "./utensils/pets-utensils";
import { platesAndTrays } from "./utensils/plates-trays";
import { teaCoffeePots } from "./utensils/tea-coffee";

export const utensils = [
  {
    label: "Colanders",
    type: "utensils",
    pagination: false,
    data: colanderProducts,
  },
  {
    label: "Mixing Bowls",
    type: "utensils",
    pagination: false,
    data: mixingBowls,
  },
  {
    label: "Cooking pots & pans",
    type: "utensils",
    pagination: false,
    data: cookingPotsAndPans,
  },
  {
    label: "Plates & Trays",
    type: "utensils",
    pagination: false,
    data: platesAndTrays,
  },
  {
    label: "Containers & Mugs",
    type: "utensils",
    pagination: false,
    data: containersAndMugs,
  },
  {
    label: "Jugs & Tumblers",
    type: "utensils",
    pagination: false,
    data: jugsTubmbers,
  },
  {
    label: "Tea coffee pots",
    type: "utensils",
    pagination: false,
    data: teaCoffeePots,
  },
  {
    label: "Table accessories",
    type: "utensils",
    pagination: false,
    data: table_accessories,
  },
  {
    label: "Bar accessories",
    type: "utensils",
    pagination: false,
    data: bar_accessories,
  },
  {
    label: "Kitchen tools cutlery",
    type: "utensils",
    pagination: false,
    data: kitchen_accessories,
  },
  {
    label: "Pet Utensils",
    type: "utensils",
    pagination: false,
    data: pet_utensils,
  },
];
