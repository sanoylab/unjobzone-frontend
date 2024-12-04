import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import { getLatestBlogs } from "../Api";
import Spinner from "./Spinner";
import { marked } from "marked";

function LatestBlog() {
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const APP_URL = import.meta.env.VITE_APP_URI;

  useEffect(() => {
    async function fetchLatestBlogs() {
      try {
        const blogList = await getLatestBlogs();
        if (Array.isArray(blogList)) {
          setLatestBlogs(blogList);
        } else {
          console.error("Expected an array but got:", blogList);
        }
      } catch (error) {
        console.error("Error fetching job categories:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchLatestBlogs();
  }, []);

  return (
    <>
      {loading ? (
        <>
          <Spinner loading={loading} />
        </>
      ) : (
        <>
          {latestBlogs.map((blog, index) => (
            <div className="col-lg-6">
              <div className="rts__single__blog style__six" >
                <Link to={`/blog/${blog.id}`} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                  <img
                    style={{ height: "400px" }}
                    src={`${APP_URL}/assets/blog/${blog.thumbnail}`}
                    alt=""
                    className="rounded-2"
                  />
                </Link>
                <Link to={`/blog/${blog.id}`}
                  
                  className="mt-30 mb-4 d-block max-content cat__link"
                >
                  Latest Blog
                </Link>
                <Link to={`/blog/${blog.id}`} className="blog__title h5">
                  {blog.title}
                </Link>
                
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default LatestBlog;
