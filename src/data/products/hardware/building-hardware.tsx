const page1Item1 = {
  img: "/building-hardware1.jpg",
  code: "WX",
  tableData: {
    headers: [" ", "10", "12", "14", "16", "18"],
    rows: [
      { " ": "A", "10": 65, "12": 80, "14": 90, "16": 100, "18": 100 },
      { " ": "B", "10": 50, "12": 55, "14": 60, "16": 65, "18": 70 },
      { " ": "C", "10": 50, "12": 50, "14": 60, "16": 60, "18": 65 },
      { " ": "D", "10": 15, "12": 20, "14": 25, "16": 30, "18": 30 },
      { " ": "E", "10": 10, "12": 12, "14": 14, "16": 16, "18": 18 },
      { " ": "F", "10": 5.5, "12": 8, "14": 8, "16": 8, "18": 8 },
      { " ": "H", "10": 200, "12": 200, "14": 250, "16": 250, "18": 400 },
    ],
  },
};

const page2Item1 = {
  img: "/building-hardware1.jpg",
  code: "QJ",
  tableData: {
    headers: ["A", "85", "95", "115"],
    rows: [
      { A: "B", "85": 40, "95": 45, "115": 55 },
      { A: "C", "85": 12.5, "95": 12.5, "115": 12.5 },
      { A: "D", "85": 3, "95": 3, "115": 3.5 },
    ],
  },
};

// https://www.eastmanproducts.in/building-hardware.php?Id=hardware
// Let the pages Array be the itemsPerPage
const page1 = [
  page1Item1,
  page1Item1,
  page1Item1,
  page1Item1,
  page1Item1,
  page1Item1,
];

const page3Item1 = {
  img: "/building-hardware14.jpg",
  title: "Code:004",
};
const page3 = [
  page3Item1,
  page3Item1,
  page3Item1,
  page3Item1,
  page3Item1,
  page3Item1,
  page3Item1,
  page3Item1,
  page3Item1,
  page3Item1,
  page3Item1,
  page3Item1,
  page3Item1,
  page3Item1,
  page3Item1,
];
const page4Item1 = {
  img: "/building-hardware29.jpg",
  title: "Code:004",
};

const page4 = [
  page4Item1,
  page4Item1,
  page4Item1,
  page4Item1,
  page4Item1,
  page4Item1,
  page4Item1,
  page4Item1,
  page4Item1,
  page4Item1,
];

const page2 = [page2Item1, page2Item1, page2Item1, page2Item1, page2Item1];

export const buildingHardware = [page1, page2, page3, page4];
