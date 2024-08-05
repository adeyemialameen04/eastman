"use client";
import React, { useState, Children, cloneElement } from "react";

interface PaginatedContentProps {
  pageData: any[];
  itemsPerPage?: number;
  children: React.ReactNode;
  className?: string;
}

const DynmamicPagination: React.FC<PaginatedContentProps> = ({
  pageData,
  itemsPerPage = 6,
  children,
  className,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pageData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(pageData.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const PaginationControls = () => (
    <div className="col-span-full flex justify-center my-4 flex-wrap">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
        <button
          key={number}
          onClick={() => handlePageChange(number)}
          className={`px-3 py-1 border ts text-white text-xs ${
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
      <main className={className}>
        {Children.map(children, (child, index) => {
          if (React.isValidElement(child) && currentItems[index]) {
            return cloneElement(child, {
              ...currentItems[index],
              key: index,
            });
          }
          return null;
        })}
      </main>
      <PaginationControls />
    </>
  );
};

export default DynmamicPagination;
