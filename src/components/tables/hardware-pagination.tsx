"use client";
import React, { useState } from "react";

interface PaginatedDisplayProps<T> {
  items: T[];
  itemsPerPage?: number;
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
}

function PaginatedDisplay<T>({
  items,
  itemsPerPage = 1,
  renderItem,
  className,
}: PaginatedDisplayProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  return (
    <div>
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <main className={className}>
        {currentItems.map((item, index) =>
          renderItem(item, startIndex + index),
        )}
      </main>
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default PaginatedDisplay;

const PaginationControls = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: any;
}) => {
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="col-span-full flex justify-center my-4 flex-wrap">
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className="px-3 py-0 border ts text-white text-xs bg-[#277e78]"
      >
        Back
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`px-3 py-1 border ts text-white text-xs ${currentPage === index + 1 ? "bg-black" : "bg-[#277e78]"}`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="px-3 py-0 border ts text-white text-xs bg-[#277e78]"
      >
        Next
      </button>
    </div>
  );
};
