import React from "react";
import parse from "html-react-parser";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Column {
  header: string;
  accessor: string;
  render?: (data: any) => JSX.Element;
  cellClassName?: string;
  className?: string;
  style?: any;
  cellStyle?: any;
  rowSpan?: number;
  colSpan?: number;
}

interface TableProps {
  data: any[];
  columns: Column[];
  caption?: string;
}

export function DynamicTable({ data, columns, caption }: TableProps) {
  const availableColumns = columns.filter((column) =>
    data.some((row) => row.hasOwnProperty(column.accessor)),
  );

  return (
    <Table className="mt-4 overflow-x-scroll">
      {caption && <TableCaption>{caption}</TableCaption>}
      <TableHeader>
        <TableRow>
          {availableColumns.map((column, index) => (
            <TableHead
              key={index}
              className={`bg-[#277e78] py-1 font-semibold text-[15px] text-white ${
                index !== availableColumns.length - 1
                  ? "border-r border-r-white"
                  : ""
              } ${column.className || ""}`}
              style={column.style}
            >
              {column.header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex} className="text-[12px] text-black">
            {availableColumns.map((column, cellIndex) => (
              <TableCell
                key={cellIndex}
                className={`${column.cellClassName || ""}`}
                style={column.cellStyle}
                colSpan={column.colSpan}
                rowSpan={column.rowSpan}
              >
                {column.render ? column.render(row) : row[column.accessor]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
