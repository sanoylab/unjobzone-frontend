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
            <div className="col-lg-4 d-flex align-items-stretch" key={index}>
              <div
                className="modern-blog-card d-flex flex-column h-100 w-100"
                style={{
                  borderRadius: '1.7rem',
                  boxShadow: '0 8px 32px rgba(27, 75, 130, 0.10)',
                  border: '1.5px solid #B3D8FF',
                  padding: '0',
                  minHeight: '420px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.32s cubic-bezier(.22,1,.36,1), box-shadow 0.32s cubic-bezier(.22,1,.36,1)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  background: 'none',
                }}
                onMouseOver={e => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.025)';
                  e.currentTarget.style.boxShadow = '0 16px 48px 0 rgba(27, 142, 242, 0.18)';
                  e.currentTarget.style.borderColor = '#1B8EF2';
                }}
                onMouseOut={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(27, 75, 130, 0.10)';
                  e.currentTarget.style.borderColor = '#B3D8FF';
                }}
              >
                <div style={{ position: 'relative', overflow: 'hidden', borderTopLeftRadius: '1.7rem', borderTopRightRadius: '1.7rem' }}>
                  <Link to={`/blog/${blog.id}`} style={{ display: 'block' }}>
                    <img
                      src={`${blog.thumbnail}`}
                      alt=""
                      style={{
                        width: '100%',
                        height: '220px',
                        objectFit: 'cover',
                        borderTopLeftRadius: '1.7rem',
                        borderTopRightRadius: '1.7rem',
                        transition: 'transform 0.4s cubic-bezier(.22,1,.36,1)',
                      }}
                      onMouseOver={e => e.currentTarget.style.transform = 'scale(1.07)'}
                      onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    {/* Gradient overlay */}
                    <div style={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      bottom: 0,
                      height: '60px',
                      background: 'linear-gradient(0deg, rgba(27,75,130,0.18) 60%, transparent 100%)',
                      borderBottomLeftRadius: '1.7rem',
                      borderBottomRightRadius: '1.7rem',
                    }} />
                    {/* Category/tag badge floating over image */}
                    <span style={{
                      position: 'absolute',
                      top: '1.1rem',
                      left: '1.1rem',
                      background: 'linear-gradient(90deg, #1B8EF2 0%, #1B4B82 100%)',
                      color: '#fff',
                      padding: '0.38rem 1.1rem',
                      borderRadius: '1.2rem',
                      fontSize: '0.93rem',
                      fontWeight: 600,
                      letterSpacing: '0.5px',
                      boxShadow: '0 2px 8px rgba(27, 75, 130, 0.10)',
                      zIndex: 2,
                    }}>
                      Latest Blog
                    </span>
                  </Link>
                </div>
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Link to={`/blog/${blog.id}`} style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: '#1B4B82',
                    margin: '1.2rem 1.2rem 0 1.2rem',
                    textDecoration: 'none',
                    lineHeight: 1.3,
                    letterSpacing: '-0.5px',
                    display: 'block',
                    transition: 'color 0.2s',
                    borderBottom: '2.5px solid #B3D8FF',
                    paddingBottom: '0.2rem',
                  }}
                    onMouseOver={e => {
                      e.currentTarget.style.color = '#1B8EF2';
                      e.currentTarget.style.borderBottom = '2.5px solid transparent';
                    }}
                    onMouseOut={e => {
                      e.currentTarget.style.color = '#1B4B82';
                      e.currentTarget.style.borderBottom = '2.5px solid #B3D8FF';
                    }}
                  >
                    {blog.title}
                  </Link>
                  <div style={{ flex: 1 }} />
                  <Link to={`/blog/${blog.id}`} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#1B8EF2',
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    margin: '1.2rem 1.2rem 1.2rem auto',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    justifyContent: 'flex-end',
                  }}
                    onMouseOver={e => e.currentTarget.style.color = '#1B4B82'}
                    onMouseOut={e => e.currentTarget.style.color = '#1B8EF2'}
                  >
                    Read More <i className="fa-light fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default LatestBlog;
