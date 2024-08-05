import { IndividualSpanner, SpannerSet } from "@/types/products/hand-tools";
import { DynamicTable } from "./dynamic-table";

const individualColumns = [
  {
    header: "Sizes (mm)",
    accessor: "sizes",
    cellClassName: "text-center font-bold",
    className: "text-center",
  },
  {
    header: "Sizes (inches)",
    accessor: "inches",
    cellClassName: "text-center border-l border-l-[#ddd] font-bold",
    className: "text-center",
  },
  {
    header: "Length (mm)",
    accessor: "length",
    cellClassName: "text-center border-l border-l-[#ddd] font-bold",
    className: "text-center",
  },
  {
    header: "Weight (g)",
    accessor: "weight",
    cellClassName: "text-center border-l border-l-[#ddd] font-bold",
    className: "text-center",
  },
];

const metricSetColumns = [
  {
    header: "Code",
    accessor: "code",
    cellClassName: "text-center w-[120px] border-r font-bold border-r-[#ddd]",
    className: "text-center",
  },
  {
    header: "Sizes Included",
    accessor: "sizes",
    render: (row: any) => row.sizes.join(", "),
    cellClassName: "font-bold ",
    className: "text-center",
  },
  {
    header: "Weight (g)",
    accessor: "weight",
    cellClassName: "text-center font-bold border-l border-l-[#ddd]",
    className: "text-center",
  },
];

const imperialSetColumns = [
  { header: "Code", accessor: "code" },
  {
    header: "Sizes Included",
    accessor: "sizes",
    render: (row: any) => row.sizes.join(", "),
  },
  { header: "Weight (g)", accessor: "weight", cellClassName: "text-center" },
];

export function IndividualsTable({ data }: { data: IndividualSpanner[] }) {
  return <DynamicTable data={data} columns={individualColumns} caption="" />;
}

export function MetricsTable({ data }: { data: SpannerSet[] }) {
  return <DynamicTable data={data} columns={metricSetColumns} caption="" />;
}
export function Imperial({ data }: { data: SpannerSet[] }) {
  return <DynamicTable data={data} columns={individualColumns} caption="" />;
}
