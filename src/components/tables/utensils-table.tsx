import React from "react";
import { DynamicTable } from "../dynamic-table";

export const UtensilsTable = ({ data }: { data: any }) => {
  const hasHeight = data.some((item: any) => "height" in item);
  const hasCapacity = data.some((item: any) => "capacity" in item);

  const columns = [
    {
      header: "Code",
      accessor: "code",
      className: "text-center",
      cellClassName: "text-center font-bold",
    },
    {
      header: "Size",
      accessor: "size",
      className: "text-center",
      cellClassName: "text-center font-bold border-x border-x-[#ddd]",
    },
    ...(hasHeight
      ? [
          {
            header: "Height",
            accessor: "height",
            className: "text-center",
            cellClassName: "text-center font-bold",
          },
        ]
      : []),
    ...(hasCapacity
      ? [
          {
            header: "Capacity",
            accessor: "capacity",
            className: "text-center",
            cellClassName: "text-center font-bold",
          },
        ]
      : []),
  ];

  return <DynamicTable data={data} columns={columns} />;
};
