import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import { getBlogs } from "../Api";
import Spinner from "./Spinner";
import Masonry from 'react-masonry-css';

function Blog() {
  const [blogs, setBlogs] = useState([]);
const [loading, setLoading] = useState(true);
const APP_URL = import.meta.env.VITE_APP_URI;

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const blogList = await getBlogs();
        if (Array.isArray(blogList)) {
          setBlogs(blogList);
        } else {
          console.error("Expected an array but got:", categories);
        }
      } catch (error) {
        console.error("Error fetching job categories:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  return (
        <>
          {loading ? (
            <>
              <Spinner loading={loading} />
            </>
          ) : (
            <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >              
              {blogs.map((blog, index) => (
                <BlogCard
                  id={blog.id}
                  key={index}
                  title={blog.title}
                  thumbnail={`${blog.thumbnail}`}                  
                />
              ))}
            </Masonry>
          )}
        </>
  );
}

export default Blog;
