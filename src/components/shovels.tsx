"use client";
import React, { useState } from "react";
import ImageTitleCard from "./image-title-card";
import { CardImageTitle, ShovelSchema } from "@/types/products/garden";
import { TableDynamicDemo } from "./shovels-dynamic";

const ITEMS_PER_PAGE = 2; // Changed to 2 items per page

const PaginatedShovels = ({
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
    <div className="w-full">
      <main className="space-y-8 w-full">
        {currentItems.map((item: ShovelSchema, index: number) => (
          <div key={index}>
            <div className="grid grid-cols-1 w-full md:grid-cols-4">
              {item.products.map(
                (product_item: CardImageTitle, productIndex: number) => (
                  <ImageTitleCard
                    index={productIndex}
                    image={product_item.img}
                    title={product_item.title}
                    product={product}
                    imageClassName="!w-fit self-center"
                    key={productIndex}
                  />
                ),
              )}
            </div>
            <TableDynamicDemo table={item.table} />
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

export default PaginatedShovels;
