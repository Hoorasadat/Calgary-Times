import React from "react";
import BlogList from "./components/BlogList";

function CalgaryBlog() {
  return (
    <div style={{ margin: "0 auto", width: "100%", padding: 20 }}>
      <h1 className="title">Calgary Times</h1>
      <div style={{ marginTop: 60, display: "flex" }}>
        <BlogList />
      </div>
    </div>
  );
}

export default CalgaryBlog;
