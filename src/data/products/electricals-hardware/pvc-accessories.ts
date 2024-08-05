export const pvc1 = {
  img: "/trunking-accessories1.jpg",
  size: "100 x 50",
  positions: ["Internal Angle", "External Angle", "End Terminal"],
};

export const pvc_accessories_table = {
  columns: ["Model", "Description", "Size (mm)"],
  items: [
    { Model: "SMTAA1625", Description: "Internal Angle", "Size (mm)": "16*25" },
    {
      Model: "SMTAA10050",
      Description: "Internal Angle",
      "Size (mm)": "100*50",
    },
    { Model: "SMTAA1625", Description: "External Angle", "Size (mm)": "16*25" },
    {
      Model: "SMTAA10050",
      Description: "External Angle",
      "Size (mm)": "100*50",
    },
    { Model: "SMTAF1625", Description: "Flat Angle", "Size (mm)": "16*25" },
    { Model: "SMTAF10050", Description: "Flat Angle", "Size (mm)": "100*50" },
    { Model: "SMTAT1625", Description: "T", "Size (mm)": "16*25" },
    { Model: "SMTAT10050", Description: "T", "Size (mm)": "100*50" },
    { Model: "SMTAJ1625", Description: "Junction", "Size (mm)": "16*25" },
    { Model: "SMTAJ10050", Description: "Junction", "Size (mm)": "100*50" },
    { Model: "SMTAE1625", Description: "End Terminal", "Size (mm)": "16*25" },
    { Model: "SMTAE10050", Description: "End Terminal", "Size (mm)": "100*50" },
  ],
};
export const pvc_accessories = [[pvc1, pvc1, pvc1], [pvc_accessories_table]];
