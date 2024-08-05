import { cooking_range } from "./cooking-range";
import { kerosene_stove } from "./kerosene-stove";
import { lantern } from "./lantern";
import { shoe_polish } from "./shoe-polish";
import { gas_stove } from "./stoves";
import { vacuum_flask } from "./vacuum-flash";

export const household_products = [
  {
    label: "Cooking Range",
    data: cooking_range,
    type: "range",
    pagination: false,
  },
  {
    label: "Shoe Polish",
    data: shoe_polish,
    type: "shoe",
    pagination: false,
  },
  {
    label: "Gas Stove",
    data: gas_stove,
    type: "stove",
    pagination: true,
  },
  {
    label: "Vacuum Flask",
    data: vacuum_flask,
    type: "vacuum",
    pagination: true,
  },
  {
    label: "Kerosene Stove",
    data: kerosene_stove,
    type: "kerosene",
    pagination: false,
  },
  {
    label: "Lantern",
    data: lantern,
    type: "vacuum",
    pagination: true,
  },
];
// <DynmamicPagination
//   pageData={pageData}
//   itemsPerPage={5}
//   className="grid grid-cols-1 md:grid-cols-2 mt-3"
// >
//   {pageData.map((item: any, index: number) => (
//     <div
//       key={index}
//       className="border-b border-b-[#ddd] border-r-[#ddd] border-r py-6 flex flex-col gap-4 "
//     >
//       <Image
//         src={item}
//         height={218}
//         width={172}
//         alt=""
//         className="px-4 self-center"
//       />
//       <div className="text-xs font-bold text-white text-center w-full bg-[#277e78] py-4"></div>
//     </div>
//   ))}
// </DynmamicPagination>
//
