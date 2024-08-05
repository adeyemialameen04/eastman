import { ShovelTableSchema } from "@/types/products/garden";
import { DynamicTable } from "./dynamic-table";

export function TableDynamicDemo({ table }: { table: ShovelTableSchema[] }) {
  const columns = [
    {
      header: "Art No.",
      accessor: "artNo",
      className: "w-[101px]",
    },
    {
      header: "Overall Length (mm)",
      accessor: "length",
      cellClassName:
        "text-center border-l border-r border-r-[#ddd] border-l-[#ddd] w-[150px]",
    },
    {
      header: "Qty / Pack (doz)",
      accessor: "qtyPerPack",
      cellClassName: "text-center",
    },
    {
      header: "G.W. / N.W. (kg)",
      accessor: "weight",
      cellClassName:
        "w-[130px] text-center border-l border-r border-r-[#ddd] border-l-[#ddd]",
    },
    {
      header: "Measurement (cm)",
      accessor: "measurement",
      cellClassName: "text-right w-[150px]",
    },
  ];

  return (
    <DynamicTable
      data={table}
      columns={columns}
      caption="A list of your recent invoices."
    />
  );
}
