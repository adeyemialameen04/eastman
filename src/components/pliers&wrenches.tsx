"use client";
import React, { useState } from "react";
import Image from "next/image";
import { First, PlantersDynamicTable } from "./planters-dynamic";

const ITEMS_PER_PAGE = 2;

const PaginatedPliersAndWrenches = ({
  data,
  product,
}: {
  data: any;
  product: string;
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  console.log(data, "FROM ARE U THERE???? DYNAMIC");
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-full mt-4">
      <div className="mb-2 flex justify-center">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`mx-1 px-3 py-1 border ts text-white text-xs ${
              currentPage === page ? "bg-black" : "bg-[#277e78]"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <main className="w-full grid grid-cols-1 gap-3 md:grid-cols-2">
        {currentItems.map((item: any, index: number) => (
          <div key={index} className="flex flex-col gap-3">
            <Image
              src={item.img}
              height={225}
              width={337}
              className="w-full"
              alt=""
            />
            <div className="flex flex-col gap-1">
              <div className="p-1 bg-[#277e78] font-bold border-r text-white border-r-white">
                <p className="text-[15px]">{item.name}</p>
                <span className="text-xs">{item.description}</span>
              </div>
              <div className="flex">
                <div className="flex gap-1 text-xs text-white h-[65px] font-semibold bg-[#277e78]">
                  <div className="h-full flex items-center justify-center px-2">
                    Size
                  </div>
                  <div className="flex flex-col border-l-[2px] border-l-white items-center  justify-between py-2">
                    <div className="border-b border-b-white px-2 pb-2">
                      (MM)
                    </div>
                    <div>(INS)</div>
                  </div>
                </div>
                <div className="w-full flex flex-col justify-between">
                  <div className=" w-full flex items-start justify-evenly">
                    {item.sizes.mm.map((size: number, index: number) => (
                      <React.Fragment key={index}>
                        <span className="pt-2 text-xs font-bold">{size}</span>
                        {index !== item.sizes.mm.length - 1 && (
                          <div className="h-[calc(100%+10px)] w-[1px] bg-[#ddd]"></div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  <div className=" w-full flex items-start overflow-hidden pt-2 border-t border-t-[#ddd] justify-evenly">
                    {item.sizes.ins.map((size: number, index: number) => (
                      <React.Fragment key={index}>
                        <span className="text-xs pb-2 font-bold">{size}</span>
                        {index !== item.sizes.mm.length - 1 && (
                          <div className="h-[calc(100%+10px)] -mt-2 w-[1px] bg-[#ddd]"></div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="px-4 py-3 pl-3 min-w-[95px] flex items-center justify-center bg-[#277e78] text-white text-xs font-semibold">
                  To order
                </div>
                <div className="w-full">
                  <div className="text-xs pl-3 font-semibold py-4 border-y border-y-[#ddd]">
                    {item.toOrder
                      .map(
                        (order: string, index: number) =>
                          `${index + 1}. ${order}`,
                      )
                      .join(", ")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
      <div className="mt-6 flex justify-center">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`mx-1 px-3 py-1 border ${
              currentPage === page ? "bg-blue-500 text-white" : "bg-white"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaginatedPliersAndWrenches;
