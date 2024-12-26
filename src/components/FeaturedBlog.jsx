import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import { getFeaturedBlog } from "../Api";
import Spinner from "./Spinner";
import { marked } from "marked";

function FeaturedBlog() {
  const [feacheredBlogs, setFeaturedBlogs] = useState([]);
const [loading, setLoading] = useState(true);
const APP_URL = import.meta.env.VITE_APP_URI;



  useEffect(() => {
    async function fetchFeaturedBlogs() {
      try {
        const blogList = await getFeaturedBlog();
        if (Array.isArray(blogList)) {
          setFeaturedBlogs(blogList);
        } else {
          console.error("Expected an array but got:", blogList);
        }
      } catch (error) {
        console.error("Error fetching job categories:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchFeaturedBlogs();
  }, []);

  return (
        <>
          {loading ? (
            <>
              <Spinner loading={loading} />
            </>
          ) : (
               <>          
              {feacheredBlogs.map((blog, index) => (

<div className="col-12 blog__slider mb-4">
<div className="blog__content d-flex flex-wrap flex-xl-nowrap gap-5 align-items-center">
    <div className="blog__thumb">
        <Link to={`/blog/${blog.id}`}  className="blog__thumbnail">
        <img className="rounded-2 w-50" src={`${blog.thumbnail}`} alt="" /> 
        </Link>
    </div>
    <div className="blog__content__meta">
        <a href="#" className="category d-block">Featured</a>
        <Link to={`/blog/${blog.id}`} className="blog__title l--3 h3">
            {blog.title}
        </Link>
        <div
                    dangerouslySetInnerHTML={{ __html: marked(blog.content.substring(0, 1200)) }}
                  />{" "}    
       
        
    </div>
</div>
</div>


               
              ))}
              </>
            
          )}
        </>
  );
}

export default FeaturedBlog;
