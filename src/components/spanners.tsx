"use client";
import React, { useState } from "react";
import ImageTitleCard from "./image-title-card";
import Wrapper from "./wrapper";
import { TableDemo } from "./shovels-table";
import { CardImageTitle, ShovelSchema } from "@/types/products/garden";
import { TableDynamicDemo } from "./shovels-dynamic";
import Image from "next/image";
import { Imperial, IndividualsTable, MetricsTable } from "./spanners-table";

const ITEMS_PER_PAGE = 2; // Changed to 2 items per page

const PaginatedSpanners = ({
  data,
  product,
}: {
  data: any;
  product: string;
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-full mt-4">
      <main className="flex flex-col gap-4">
        {currentItems.map((item: any, index: number) => (
          <div key={index} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3 self-center">
              <Image
                src={item.img1}
                height={225}
                width={337}
                alt="Image"
                className="w-full"
              />
              {item.img2 && (
                <Image
                  src={item.img2}
                  height={225}
                  width={337}
                  alt="Image"
                  className="w-full"
                />
              )}
            </div>
            <IndividualsTable data={item.individual} />
            {item.sets?.metric && <MetricsTable data={item.sets.metric} />}
            {item.sets?.imperial && <MetricsTable data={item.sets.imperial} />}
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

export default PaginatedSpanners;
