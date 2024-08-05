import { DiscVariant } from "@/types/products/planters";
import { DynamicTable } from "./dynamic-table";

export const First = ({ data }: { data: DiscVariant[] }) => {
  const columns = [
    { header: "Type", accessor: "type" },
    { header: "Material", accessor: "material" },
    { header: "Thickness", accessor: "thickness" },
    { header: "Diameter", accessor: "diameter" },
    { header: "HRC", accessor: "hrc" },
  ];

  return <DynamicTable data={data} columns={columns} caption="" />;
};

export const PlantersDynamicTable = ({ data }: { data: DiscVariant[] }) => {
  const columns = [
    {
      header: "Model",
      accessor: "model",
    },
    {
      header: "Working width(m)",
      accessor: "workingWidth",
      cellClassName: "text-center",
    },
    {
      header: "Weight (kg)",
      accessor: "weight",
      cellClassName: "text-center",
    },
    {
      header: "Q'ty of disc",
      accessor: "qtyOfDisc",
      cellClassName: "text-center",
    },
    {
      header: "Matched power(HP)",
      accessor: "matchedPower",
      cellClassName: "text-center",
    },
  ];

  return <DynamicTable data={data} columns={columns} caption="" />;
};
