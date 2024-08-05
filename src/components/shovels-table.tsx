import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ShovelTableSchema } from "@/types/products/garden";
import React from "react";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

// Group data by measurement
type GroupedByMeasurement = {
  [measurement: string]: ShovelTableSchema[];
};
const groupByMeasurement = (table: ShovelTableSchema[]) => {
  return table.reduce((acc: GroupedByMeasurement, item) => {
    if (!acc[item.measurement]) {
      acc[item.measurement] = [];
    }
    acc[item.measurement].push(item);
    return acc;
  }, {});
};

export function TableDemo({ table }: { table: any }) {
  console.log("TABLE", table);
  return (
    <Table className="mt-4 overflow-x-scroll">
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[101px] bg-[#277e78] border-r border-r-white py-1 font-semibold text-[15px] text-white">
            Art No.
          </TableHead>
          <TableHead className="bg-[#278e78] border-r border-r-white py-1 font-semibold text-center text-[15px] text-white">
            Overall Lenght (mm)
          </TableHead>
          <TableHead className="bg-[#278e78] border-r border-r-white py-1 font-semibold text-center text-[15px] text-white">
            Qty / Pack (doz)
          </TableHead>
          <TableHead className="bg-[#278e78] border-r border-r-white py-1 font-semibold text-center text-[15px] text-white">
            G.W. / N.W. (kg)
          </TableHead>
          <TableHead className="text-right bg-[#278e78] !mx-1 py-1 font-semibold text-[15px] text-white">
            Measurement (cm)
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.entries(groupByMeasurement(table)).map(
          ([measurement, items], measurementIndex) => (
            <React.Fragment key={measurementIndex}>
              {items.map((tableItem, tableIndex) => (
                <TableRow key={tableIndex} className="text-[12px] text-black">
                  <TableCell className="font-medium">
                    {tableItem.artNo}
                  </TableCell>
                  <TableCell className="text-center border-l border-r border-r-[#ddd] border-l-[#ddd] w-[150px]">
                    {tableItem.length || tableItem.size}
                  </TableCell>
                  <TableCell className="text-center">
                    {tableItem.qtyPerPack}
                  </TableCell>
                  <TableCell className="w-[130px] text-center border-l border-r border-r-[#ddd] border-l-[#ddd]">
                    {tableItem.weight}
                  </TableCell>
                  <TableCell className="text-right w-[150px]">
                    {tableItem.measurement}
                  </TableCell>
                </TableRow>
              ))}
            </React.Fragment>
          ),
        )}
      </TableBody>
    </Table>
  );
}
