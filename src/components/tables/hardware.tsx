import React, { useState } from "react";
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
  originalHeader: string;
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
  perPage?: number;
}

export function HardwareTable({
  data,
  columns,
  caption,
  perPage = 10,
}: TableProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const availableColumns = columns.filter((column) =>
    data.some((row) => row.hasOwnProperty(column.originalHeader)),
  );

  const totalPages = Math.ceil(data.length / perPage);
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
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
        <TableBody className="border-b border-b-[#ddd]">
          {currentData.map((row, rowIndex) => (
            <TableRow key={rowIndex} className="text-[12px] text-black">
              {availableColumns.map((column, cellIndex) => (
                <TableCell
                  key={cellIndex}
                  className={`${column.cellClassName || ""}`}
                  style={column.cellStyle}
                  colSpan={column.colSpan}
                  rowSpan={column.rowSpan}
                >
                  {column.render
                    ? column.render(row)
                    : parse(row[column.originalHeader] || "")}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
