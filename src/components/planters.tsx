"use client";
import React, { useState } from "react";
import Image from "next/image";
import { First, PlantersDynamicTable } from "./planters-dynamic";

const ITEMS_PER_PAGE = 2; // Changed to 2 items per page

const PaginatedPlanters = ({
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

      <main className="space-y-8 w-full">
        {currentItems.map((item: any, index: number) => (
          <div key={index}>
            {index === 0 ? (
              <div className="flex flex-col gap-1">
                <Image
                  src={item.img}
                  height={231}
                  width={313}
                  alt=""
                  className="self-center"
                />
                <div className="flex gap-1">
                  <div className="p-4 bg-[#277e78] text-white flex items-center justify-center text-center h-[9.5rem] mt-4">
                    {item.name}
                  </div>
                  <First data={item.variants} />
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-1">
                <Image
                  src={item.img}
                  height={231}
                  width={313}
                  alt=""
                  className="self-center"
                />

                <div className="flex gap-1">
                  <div className="p-4 bg-[#277e78] text-white flex max-w-[102px] items-center justify-center text-center h-[70%] mt-4">
                    {item.name}
                  </div>

                  <PlantersDynamicTable data={item.variants} />
                </div>
              </div>
            )}
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

export default PaginatedPlanters;
