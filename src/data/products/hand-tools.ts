import { carpenter_tools } from "./carpenter_tools";
import { leather_kits } from "./leather-kits";
import { pliers_wrenches } from "./pliers&wrenches";
import { spanners } from "./spanners";

export const hand_tools = [
  {
    label: "Spanners",
    data: spanners,
    type: "spanners",
    pagination: true,
  },
  {
    label: "Pliers & Wrenches",
    data: pliers_wrenches,
    type: "pliers_wrenches",
    pagination: true,
  },
  {
    label: "Carpenter tools",
    data: carpenter_tools,
    type: "carpenter_tools",
    pagination: true,
  },
  {
    label: "Leather kits",
    data: leather_kits,
    type: "leather_kits",
    pagination: false,
  },
];
