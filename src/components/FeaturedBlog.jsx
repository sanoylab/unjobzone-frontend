import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { getFeaturedBlog } from "../Api";
import Spinner from "./Spinner";
import { marked } from "marked";
import { ThemeContext } from "../contexts/ThemeContext";

function FeaturedBlog() {
  const [feacheredBlogs, setFeaturedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const APP_URL = import.meta.env.VITE_APP_URI;
  const { darkMode } = useContext(ThemeContext);

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
        console.error("Error fetching featured blogs:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchFeaturedBlogs();
  }, []);

  // Function to truncate text and strip HTML
  const truncateText = (htmlContent, maxLength) => {
    // Create a temporary div to hold the HTML content
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    
    // Get the text content without HTML tags
    const textContent = tempDiv.textContent || tempDiv.innerText || '';
    
    // Truncate and add ellipsis if necessary
    if (textContent.length <= maxLength) return textContent;
    return textContent.substring(0, maxLength) + '...';
  };

  return (
    <>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div className="featured-blogs-container">
          {feacheredBlogs.map((blog, index) => (
            <div key={index} className="featured-blog-item" style={{
              padding: '0',
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '12px',
                overflow: 'hidden',
                height: '100%',
                position: 'relative',
                background: darkMode ? '#1f1f1f' : 'white',
                border: darkMode ? '1px solid rgba(80, 80, 80, 0.3)' : 'none',
                boxShadow: darkMode ? '0 8px 32px rgba(0, 0, 0, 0.2)' : '0 8px 32px rgba(0, 0, 0, 0.05)',
              }}>
                {/* Featured Tag */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  zIndex: 3,
                  background: darkMode 
                    ? 'linear-gradient(135deg, #4b90d6 0%, #1f3a60 100%)'
                    : 'linear-gradient(135deg, #3182ce 0%, #2c5282 100%)',
                  color: 'white',
                  padding: '8px 18px',
                  borderRadius: '30px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  boxShadow: darkMode
                    ? '0 4px 12px rgba(0,0,0,0.25)'
                    : '0 4px 12px rgba(0,0,0,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}>
                  <i className="fa-solid fa-star" style={{ fontSize: '0.8rem' }}></i>
                  Featured
                </div>
                
                {/* Blog Content Wrapper */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(12, 1fr)',
                  gap: '0',
                  height: '100%',
                }}>
                  {/* Blog Image - Takes up 5/12 on large screens, full width on small */}
                  <div style={{
                    gridColumn: 'span 5',
                    position: 'relative',
                    minHeight: '300px',
                    overflow: 'hidden',
                  }} className="featured-image-container">
                    <img 
                      src={blog.thumbnail} 
                      alt={blog.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        transition: 'transform 0.6s ease',
                        filter: darkMode ? 'brightness(0.9)' : 'none',
                      }}
                      className="featured-blog-image"
                    />
                    <div className="image-overlay" style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,0.4))',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      zIndex: 1,
                    }}></div>
                  </div>
                  
                  {/* Blog Content - Takes up 7/12 on large screens, full width on small */}
                  <div style={{
                    gridColumn: 'span 7',
                    padding: '2.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }} className="featured-content-container">
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '16px',
                    }}>
                      <span style={{
                        fontSize: '0.85rem',
                        color: darkMode ? '#4b90d6' : '#3182ce',
                        fontWeight: '600',
                      }}>
                        UN Career
                      </span>
                      <span style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        background: darkMode ? '#555' : '#cbd5e0',
                      }}></span>
                      <span style={{
                        fontSize: '0.85rem',
                        color: darkMode ? '#b0b0b0' : '#718096',
                      }}>
                        8 min read
                      </span>
                    </div>
                    
                    <h2 style={{
                      fontSize: 'clamp(1.5rem, 2vw, 1.9rem)',
                      fontWeight: '800',
                      lineHeight: '1.3',
                      color: darkMode ? '#e4e4e4' : '#2d3748',
                      marginBottom: '16px',
                      transition: 'color 0.2s ease',
                    }} className="featured-blog-title">
                      <Link to={`/blog/${blog.id}`} style={{
                        color: 'inherit',
                        textDecoration: 'none',
                      }}>
                        {blog.title}
                      </Link>
                    </h2>
                    
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      color: darkMode ? '#b0b0b0' : '#4a5568',
                      marginBottom: '24px',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}>
                      {truncateText(marked(blog.content), 200)}
                    </p>
                    
                    <Link to={`/blog/${blog.id}`} style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: darkMode ? '#4b90d6' : '#3182ce',
                      fontWeight: '700',
                      fontSize: '1rem',
                      textDecoration: 'none',
                      marginTop: 'auto',
                      transition: 'all 0.2s ease',
                      width: 'fit-content',
                    }} className="read-more-featured">
                      Read Full Article
                      <i className="fa-light fa-arrow-right" style={{
                        transition: 'transform 0.2s ease',
                      }}></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <style>{`
        .featured-blogs-container {
          display: grid;
          gap: 2rem;
        }
        
        .featured-blog-item {
          transition: transform 0.3s ease;
        }
        
        .featured-blog-item:hover .featured-blog-image {
          transform: scale(1.05);
        }
        
        .featured-blog-item:hover .image-overlay {
          opacity: 1;
        }
        
        body.dark-mode .featured-blog-item:hover .featured-blog-title {
          color: #4b90d6;
        }
        
        .featured-blog-item:hover .featured-blog-title {
          color: #3182ce;
        }
        
        body.dark-mode .read-more-featured:hover {
          color: #1f3a60;
        }
        
        .read-more-featured:hover {
          color: #2c5282;
        }
        
        .read-more-featured:hover i {
          transform: translateX(4px);
        }
        
        @media (max-width: 992px) {
          .featured-content-container {
            grid-column: span 12 !important;
          }
          
          .featured-image-container {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </>
  );
}

export default FeaturedBlog;
