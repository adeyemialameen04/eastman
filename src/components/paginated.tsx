"use client";
import React, { useState } from "react";
import ImageTitleCard from "@/components/image-title-card";

interface PaginatedContentProps {
  pageData: any[];
  product: string;
  children?: React.ReactNode;
}

const PaginatedContent: React.FC<PaginatedContentProps> = ({
  pageData,
  product,
  children,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Adjust this value as needed

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pageData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(pageData.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const PaginationControls = () => (
    <div className="col-span-full flex justify-center my-4">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
        <button
          key={number}
          onClick={() => handlePageChange(number)}
          className={`mx-1 px-3 py-1 border ts text-white text-xs ${
            currentPage === number ? "bg-black" : "bg-[#277e78]"
          }`}
        >
          {number}
        </button>
      ))}
    </div>
  );

  return (
    <>
      <PaginationControls />
      {currentItems.map((item, index: number) => (
        <ImageTitleCard
          index={index}
          image={item.img}
          title={item.title}
          product={product}
          key={index}
        />
      ))}
      <PaginationControls />
    </>
  );
};

export default PaginatedContent;
