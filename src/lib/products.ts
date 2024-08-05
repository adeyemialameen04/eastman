import slugify from "react-slugify";

const banners = [
  { title: "Garden tools", banner: "garden-head.jpg" },
  { title: "Hand tools", banner: "hand-tools.jpg" },
  { title: "Chemicals", banner: "chemicals-head.jpg" },
  { title: "Electricals Products", banner: "fan-head.jpg" },
  { title: "Electricals Hardware", banner: "header.jpg" },
  { title: "Household Products", banner: "header_vaccum1.jpg" },
  { title: "General Products", banner: "" },
  { title: "Utensils", banner: "utensilsheader.jpg" },
  { title: "Hardware", banner: "head1.jpg" },
];

export const getBannerInfo = (category: string, selectedItem: any) => {
  return (
    banners.find((item) => slugify(item.title) === category) || {
      title: "",
      banner: "",
    }
  );
};

export function generateColumns(columnsArray: string[], hide?: boolean) {
  return columnsArray.map((column: string, index: number) => {
    const isMiddleColumn = index > 0 && index < columnsArray.length - 1;
    const isFirstColumn = columnsArray.length === 2 && index === 0;

    return {
      header: hide && !isFirstColumn ? "" : column,
      accessor: column.toLowerCase(),
      className: "text-center",
      cellClassName: `text-center text-xs font-bold ${
        isMiddleColumn
          ? "border-x border-x-[#ddd]"
          : isFirstColumn
            ? "border-r border-r-[#ddd]"
            : ""
      }`,
    };
  });
}

export function generateHardwareColumns(
  columnsArray: string[],
  hide?: boolean,
) {
  return columnsArray.map((column: string, index: number) => {
    const isMiddleColumn = index > 0 && index < columnsArray.length - 1;
    const isFirstColumn = columnsArray.length === 2 && index === 0;
    return {
      header: hide && !isFirstColumn ? "" : column,
      accessor: column.toLowerCase().replace(/[^a-z0-9]/g, "_"),
      originalHeader: column, // Keep the original header for data access
      className: "text-center text-xs",
      cellClassName: `text-center text-xs font-bold ${
        isMiddleColumn
          ? "border-x border-x-[#ddd]"
          : isFirstColumn
            ? "border-r border-r-[#ddd]"
            : ""
      }`,
    };
  });
}
