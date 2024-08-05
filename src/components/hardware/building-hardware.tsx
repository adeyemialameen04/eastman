import { cn } from "@/lib/utils";
import PaginatedDisplay from "../tables/hardware-pagination";
import Image from "next/image";
import { useState } from "react";

export const BuildingHardware = ({ pageData }: { pageData: any }) => {
  return (
    <PaginatedDisplay
      items={pageData}
      itemsPerPage={1}
      renderItem={(item, index) => {
        return (
          <>
            {index === 0 || index === 1 ? (
              <div className="grid grid-cols-1 gap-5">
                {pageData[index].map((pageItem: any, pageIndex: number) => (
                  <div className="flex flex-col gap-4" key={pageIndex}>
                    <div className="self-center flex flex-col">
                      <Image
                        src={pageItem.img}
                        alt=""
                        height={194}
                        width={613}
                      />
                      <p className="text-xl font-bold self-center">
                        Code: {pageItem.code}
                      </p>
                    </div>
                    <BuildingHardwareTable data={pageItem.tableData} />
                  </div>
                ))}
              </div>
            ) : (
              <div
                className={cn(
                  "grid grid-cols-1 border-y border-y-[#ddd] md:grid-cols-2 mt-3",
                  index === 2 && "lg:grid-cols-3",
                )}
              >
                {pageData[index].map((item: any, itemIndex: number) => (
                  <div
                    key={itemIndex}
                    className={cn(
                      "py-6 flex flex-col gap-4",
                      itemIndex % 2 === 0 && "md:border-r-[#ddd] border-r",
                      index === 2 &&
                        itemIndex % 3 === 1 &&
                        "lg:border-x-[#ddd] lg:border-x",
                    )}
                  >
                    <Image
                      src={item.img}
                      height={189}
                      width={205}
                      alt=""
                      className={cn("px-4 self-center")}
                    />
                    <div className="text-sm font-bold text-white text-center w-full bg-[#277e78] py-1">
                      {item.title}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        );
      }}
    />
  );
};

const BuildingHardwareTable = ({ data }: { data: any }) => {
  return (
    <table className="w-full border-collapse text-xs">
      <thead>
        <tr>
          {data.headers.map((header: string, index: number) => (
            <th
              key={index}
              className="text-black font-bold border-b border-r border-[#ddd] p-1.5"
              align="center"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row: any, rowIndex: number) => (
          <tr key={rowIndex}>
            {data.headers.map((header: any, colIndex: number) => (
              <td
                key={colIndex}
                className={cn(
                  "text-black font-bold border-b border-r border-[#ddd] p-1.5",
                  colIndex === 0 && "bg-[#277e78] text-white",
                )}
                align="center"
              >
                {row[header]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
