import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React, { useState } from "react";
import blogs from "../data/blogs.json";

const PAGE_SIZES = [15, 25, 50, 100];


function BlogList() {
  const totalCount = blogs.posts.length;

  const [currentPage, setCurrentPage] = useState(1);
  const [currentPaginationData, setCurrentPaginationData] = useState(blogs.posts.slice(0, 15));
  const [pageSize, setPageSize] = useState(15);
  const [lastPage, setLastPage] = useState(Math.ceil(totalCount / pageSize));

  const updatePage = (page, size) => {
    setCurrentPage(page);
    setPageSize(size);
    setLastPage(Math.ceil(totalCount / size));
    const indexOfLastRecord = page * size;
    const indexOfFirstRecord = indexOfLastRecord - size;
    setCurrentPaginationData(blogs.posts.slice(indexOfFirstRecord, indexOfLastRecord));
  };

  const updateRowsPerPage = (size) => {
    setCurrentPage(1);
    setPageSize(size);
    setLastPage(Math.ceil(totalCount / size));
    updatePage(1, size);
  };

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        lastPage={lastPage}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
        pageSize={pageSize}
        pageSizeOptions={PAGE_SIZES}
        totalCount={totalCount}
      />
      <ul
        // Do not modify the aria-label below, it is used for Calgary Times automation.
        aria-label="blog list"
        >
        {currentPaginationData.map((blog) => (
          <BlogPost
            key={blog.id}
            id={blog.id}
            author={blog.author}
            title={blog.title}
            excerpt={blog.excerpt}
            featureImage={blog.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
