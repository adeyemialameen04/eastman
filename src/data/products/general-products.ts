import { weighing_scales } from "./weighing-scales";

const tv_stands = [
  "/tvstand1.jpg",
  "/tvstand1.jpg",
  "/tvstand1.jpg",
  "/tvstand1.jpg",
  "/tvstand1.jpg",
  "/tvstand1.jpg",
];
export const bag1 = { img: "/bag1.jpg", title: "CA-199" };
export const bags = [
  bag1,
  bag1,
  bag1,
  bag1,
  bag1,
  bag1,
  bag1,
  bag1,
  bag1,
  bag1,
  bag1,
  bag1,
  bag1,
  bag1,
  bag1,
  bag1,
  bag1,
  bag1,
  bag1,
  bag1,
  bag1,
  bag1,
  bag1,
  bag1,
  bag1,
  bag1,
  bag1,
];
const suitcases = [
  "/suitcase1.jpg",
  "/suitcase1.jpg",
  "/suitcase1.jpg",
  "/suitcase1.jpg",
  "/suitcase1.jpg",
  "/suitcase1.jpg",
  "/suitcase1.jpg",
  "/suitcase1.jpg",
  "/suitcase1.jpg",
  "/suitcase1.jpg",
  "/suitcase1.jpg",
  "/suitcase1.jpg",
  "/suitcase1.jpg",
  "/suitcase1.jpg",
  "/suitcase1.jpg",
  "/suitcase1.jpg",
  "/suitcase1.jpg",
];
const balloon = [
  "/ballon1.jpg",
  "/ballon2.jpg",
  "/ballon3.jpg",
  "/ballon4.jpg",
];

export const general_products = [
  {
    label: "Tv Stands",
    banner: "/header_tvtrolly.jpg",
    pagination: false,
    data: tv_stands,
  },
  {
    label: "Bags",
    banner: "/bags-banner.jpg",
    pagination: true,
    data: bags,
  },
  {
    label: "Balloon",
    banner: "/ballonhead.jpg",
    pagination: false,
    data: balloon,
  },
  {
    label: "Suitcases",
    banner: "/suitcase-head.jpg",
    pagination: false,
    data: suitcases,
  },
  {
    label: "Weighing Scales",
    banner: "/weigh-head.jpg",
    pagination: false,
    data: weighing_scales,
  },
];
