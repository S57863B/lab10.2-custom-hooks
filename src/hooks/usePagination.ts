import { useState } from 'react';

interface UsePaginationProps {
  totalItems: number;
  itemsPerPage?: number;
  initialPage?: number;
}

interface UsePaginationReturn {
  currentPage: number;
  totalPages: number;
  startIndex: number;
  endIndex: number;
  itemsOnCurrentPage: number;
  setPage: (pageNumber: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  canNextPage: boolean;
  canPrevPage: boolean;
}

export function usePagination({
  totalItems,
  itemsPerPage = 10,
  initialPage = 1,
}: UsePaginationProps): UsePaginationReturn {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));

  // Safety check to ensure current page doesn't exceed total pages if totalItems changes
  const safeCurrentPage = Math.min(Math.max(1, currentPage), totalPages);

  const startIndex = (safeCurrentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage - 1, totalItems - 1);
  const itemsOnCurrentPage = Math.max(0, endIndex - startIndex + 1);

  const canNextPage = safeCurrentPage < totalPages;
  const canPrevPage = safeCurrentPage > 1;

  const setPage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const nextPage = () => {
    if (canNextPage) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (canPrevPage) setCurrentPage((prev) => prev - 1);
  };

  return {
    currentPage: safeCurrentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    setPage,
    nextPage,
    prevPage,
    canNextPage,
    canPrevPage,
  };
}