import "../css/pagination.scss";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import usePagination, { DOTS } from "../hooks/usePagination";

import PropTypes from "prop-types";
import React, { useMemo } from "react";
import { nanoid } from "nanoid";

function Pagination({
  currentPage,
  lastPage,
  onPageChange,
  onPageSizeOptionChange,
  pageSize,
  pageSizeOptions,
  totalCount
}) {

  const paginationRange = useMemo(() => usePagination(
    currentPage,
    pageSize,
    totalCount,
  ), [currentPage, pageSize, totalCount]);

  const onNext = () => {
    onPageChange(currentPage + 1, pageSize);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1, pageSize);
  };

  return (
    <ul
      className="wrapper"
      // Do not modify the aria-label below, it is used for Calgary Times automation.
      aria-label="Blog post pagination list"
    >
      <li className="paginationItem">
        <button
          type="button"
          className="arrowButton left"
          // Do not modify the aria-label below, it is used for Calgary Times automation.
          aria-label="Goto previous page"
          onClick={onPrevious}
          disabled={currentPage === 1} // change this line to disable a button.
        >
          <ChevronLeftIcon />
        </button>
      </li>

      {paginationRange.map((pageNumber) => {
        const key = nanoid();

        if (pageNumber === DOTS) {
          return (
            <li key={key} className="dots">
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={key}
            className="paginationItem"
            aria-current={pageNumber===currentPage
              ? "page" : "false"} // change this line to highlight a current page.
          >
            <button
              type="button"
              // Do not modify the aria-label below, it is used for Calgary Times automation.
              aria-label={`Goto page ${pageNumber}`}
              onClick={(e) => onPageChange(parseInt(e.target.innerText), pageSize)}
            >
              {pageNumber}
            </button>
          </li>
        );
      })}

      <li className="paginationItem">
        <button
          type="button"
          className="arrowButton right"
          // Do not modify the aria-label below, it is used for Calgary Times automation.
          aria-label="Goto next page"
          onClick={onNext}
          disabled={currentPage === lastPage} // change this line to disable a button.
        >
          <ChevronRightIcon />
        </button>
      </li>

      <select
        className="paginationSelector"
        // Do not modify the aria-label below, it is used for Calgary Times automation.
        aria-label="Select page size"
        // value={pageSize}
        onChange={(e) => {
          onPageSizeOptionChange(parseInt(e.target.value));
        }}
      >
        {pageSizeOptions.map((size) => (
          <option key={size} defaultValue={pageSize === size} value={size}>
            {size} per page
          </option>
        ))}
      </select>
    </ul>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number,
  lastPage: PropTypes.number,
  onPageChange: PropTypes.func,
  onPageSizeOptionChange: PropTypes.func,
  pageSize: PropTypes.number,
  pageSizeOptions: PropTypes.instanceOf(Array),
  totalCount: PropTypes.number,
};

Pagination.defaultProps = {
  currentPage: 1,
  lastPage: 44,
  onPageChange: () => {},
  onPageSizeOptionChange: () => {},
  pageSize: 15,
  pageSizeOptions: [15, 25, 50, 100],
  totalCount: 1,
};

export default Pagination;
