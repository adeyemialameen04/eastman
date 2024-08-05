import { buildingHardware } from "./building-hardware";
import { doorHandles, doorLocks, drawerLocks, padLocks } from "./door-locks";
import { electricMotorsAndPumps } from "./electric-motors";
import {
  artGlass,
  artMirror,
  figuredGlass,
  laminatedGlass,
  louverGlass,
  mirror,
  tintedFloadGlass,
} from "./glasses";
import { manholes } from "./manholes";
import { allPlywoods, plyWood } from "./plywood";
import { rivetsScrews } from "./rivets-screws";
import { weldingElectrodes } from "./welding-electrodes";
import { wheelBarrows } from "./wheel-barrows";

export const hardware = [
  {
    label: "Art Glass",
    data: artGlass,
    pagination: true,
    type: "",
  },
  {
    label: "Art Mirror",
    data: artMirror,
    pagination: false,
    type: "",
  },
  {
    label: "Laminated Glass",
    data: laminatedGlass,
    pagination: false,
    type: "",
  },
  {
    label: "Mirror",
    data: mirror,
    pagination: false,
    type: "",
  },
  {
    label: "Figured Glass",
    data: figuredGlass,
    pagination: false,
    type: "",
  },
  {
    label: "Tinted Float Glass",
    data: tintedFloadGlass,
    pagination: false,
    type: "",
  },
  {
    label: "Louver glass",
    data: louverGlass,
    pagination: false,
    type: "",
  },
  {
    label: "Wheel Barrows",
    data: wheelBarrows,
    pagination: false,
    type: "",
    banner: "/wheel-barrowa-head.jpg",
  },
  {
    label: "Welding Electrodes",
    data: weldingElectrodes,
    pagination: false,
    type: "",
    banner: "/welding-elctrodes-head2.jpg",
  },
  {
    label: "Electric Motors Water Pumps",
    data: electricMotorsAndPumps,
    type: "",
    banner: "/pump-head.jpg",
  },
  {
    label: "Rivets & Screws",
    data: rivetsScrews,
    type: "",
    banner: "/rivet-head.jpg",
  },
  {
    label: "Door Locks",
    data: doorLocks,
    type: "",
  },
  {
    label: "Pad Locks",
    data: padLocks,
    type: "",
  },
  {
    label: "Drawer Locks",
    data: drawerLocks,
  },
  {
    label: "Lock Handles",
    data: doorHandles,
  },
  {
    label: "Door Closer",
    data: "Custom",
    banner: "/door-head.jpg",
  },
  {
    label: "Threaded Bars",
    data: "Custom",
    banner: "/header (1).jpg",
  },
  {
    label: "Plywood",
    data: allPlywoods,
    banner: "/head1 (1).jpg",
  },
  {
    label: "Manholes",
    data: manholes,
    banner: "/header_manhole.jpg",
  },
  {
    label: "Hardware",
    data: buildingHardware,
  },
];
