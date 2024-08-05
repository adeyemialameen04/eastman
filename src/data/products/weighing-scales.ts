export const two_dials1 = {
  productName: "Two Dials Platform Scale",
  img: "/7.jpg",
  modelNumber: "FD50-150KG",
  components: [
    {
      name: "Dial-Pole & Platform",
      packedSeparately: true,
      capacityRange: "FD-50kg / 100kg",
      measurements: "94x21.5x34cm",
      weight: {
        netWeight: "10.5kg",
        grossWeight: "12kg",
      },
    },
    {
      name: "Platform",
      singlePacking: true,
      measurements: "67x36.5x18cm",
      weight: {
        netWeight: "16.3kg",
        grossWeight: "17.5kg",
      },
    },
  ],
  containerCapacity: {
    "20feet": 350,
    "40feet": 720,
  },
  FD150kg: {
    dialPoles: {
      quantity: 2,
      packingType: "One Packing",
      measurements: "110 x 22 x 34cm",
      weight: {
        netWeight: "11.5kg",
        grossWeight: "13kg",
      },
    },
    platform: {
      singlePacking: true,
      measurements: "66.5 x 36.5 x 17cm",
      weight: {
        netWeight: "17.3kg",
        grossWeight: "18.5kg",
      },
    },
    containerCapacity: {
      "20feet": 320,
      "40feet": 648,
    },
  },
  specifications: [
    {
      model: "FD",
      maxCapacity: [
        "50kg",
        "100kg",
        "150kg",
        "50kg/110lb",
        "100kg/220lb",
        "150kg/330lb",
      ],
      minCapacity: ["1kg", "2kg", "5kg", "1kg/2lb", "2kg/4lb", "5kg/10lb"],
      graduation: [
        "100g",
        "200g",
        "500g",
        "100g/1/4lb",
        "200g/1/2 lb",
        "500g/1lb",
      ],
    },
  ],
};

export const single_dial1 = {
  img: "/weighing_scale1.jpg",
  title: "CA-199",
};
export const single_dials = [
  single_dial1,
  single_dial1,
  single_dial1,
  single_dial1,
  single_dial1,
];

export const two_dials = [two_dials1, two_dials1];

export const weighing_scales = [
  {
    single: single_dials,
  },
  {
    two_dials: two_dials,
  },
];
