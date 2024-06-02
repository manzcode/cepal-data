import { useState } from "react";

export const usePaginationHooks = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const next = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  }
  const prev = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  }
    return {
        currentPage,
        next, 
        prev
    }
}