import "../css/blogs.scss";

import PropTypes from "prop-types";
import React from "react";

function BlogPost({ id, author, title, excerpt }) {
  return (
    <li className="blogsWrapper">
      <div className="blog">
        <div className="imageWrapper">
          <img
            className="authorImage"
            src={`https://robohash.org/${id}`}
            alt="Author"
          />
          <p className="authorName">{author}</p>
        </div>

        <p className="authorTitle">{title}</p>
        <p className="excerpt">{excerpt}</p>
      </div>
    </li>
  );
}

BlogPost.propTypes = {
  id: PropTypes.number,
  author: PropTypes.string,
  title: PropTypes.string,
  excerpt: PropTypes.string,
};

BlogPost.defaultProps = {
  id: "",
  author: "",
  title: "",
  excerpt: "",
};

export default BlogPost;
