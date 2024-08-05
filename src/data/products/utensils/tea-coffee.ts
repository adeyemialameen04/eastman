export const teaSet = [
  {
    code: "RCD-0101",
    size: "",
    capacity: [
      "Tea Set 5pcs.",
      "Coffee Pot 24 oz",
      "Tea Pot 32 oz",
      "Milk Pot Sugar Pot, Tea Tray",
    ],
  },
  {
    code: "RCD-0201",
    size: "",
    capacity: [
      "Tea Set 4 Pcs.",
      "Tea Pot 24 oz",
      "Milk Pot, Sugar Pot, Tea Tray",
    ],
  },
];

export const pots = [
  {
    type: "Coffee Pot",
    img: "/tea2.jpg",
    columns: ["Code", "Capacity"],
    items: [
      { code: "RCY-0101", capacity: "20 oz" },
      { code: "RCY-0201", capacity: "24 oz" },
      { code: "RCY-0301", capacity: "32 oz" },
      { code: "RCY-0401", capacity: "48 oz" },
      { code: "RCY-0501", capacity: "70 oz" },
      { code: "RCY-0501", capacity: "100 oz" },
    ],
  },
  {
    type: "Tea Pot",
    img: "/tea3.jpg",
    columns: ["Code", "Size", "Capacity"],
    items: [
      { code: "RCF-0101", size: "10.5 cm", capacity: "24 oz" },
      { code: "RCF-0201", size: "12.2 cm", capacity: "32 oz" },
      { code: "RCF-0301", size: "14.0 cm", capacity: "48 oz" },
      { code: "RCF-0401", size: "16.0 cm", capacity: "70 oz" },
      { code: "RCF-0501", size: "19.0 cm", capacity: "100 oz" },
    ],
  },
  {
    type: "Butter Dish",
    img: "/tea4.jpg",
    columns: ["Code", "Capacity"],
    items: [
      { code: "RCF-0101", capacity: "10 oz" },
      { code: "RCF-0202", capacity: "20 oz" },
      { code: "RCF-0302", capacity: "24 oz" },
      { code: "RCF-0402", capacity: "32 oz" },
      { code: "RCF-01502", capacity: "48 oz" },
      { code: "RCF-01602", capacity: "70 oz" },
      { code: "RCF-01702", capacity: "100 oz" },
    ],
  },
];

export const coffe = [
  {
    type: "Coffee Warmer",
    img: "/tea5.jpg",
    columns: ["Code", "Capacity"],
    items: [
      { code: "RCT-0101", capacity: "200ml" },
      { code: "RCT-0201", capacity: "400ml" },
      { code: "RCT-0301", capacity: "600ml" },
      { code: "RCT-0401", capacity: "800ml" },
    ],
  },
  {
    type: "ASH Tray",
    img: "/tea6.jpg",
    columns: ["Code", "Height", "Weight"],
    items: [
      { code: "RCZ-0101", height: "25mm", weight: "85 gm" },
      { code: "RCZ-0201", height: "20mm", weight: "40 gm" },
    ],
  },
];

export const teaCoffeePots = [teaSet, pots, coffe];
