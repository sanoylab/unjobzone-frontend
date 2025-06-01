import React, { useEffect, useState, useContext } from "react";
import { getBlogDetail } from "../Api";
import Hero from "../components/Hero";
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom";
import { marked } from "marked";
import { ThemeContext } from "../contexts/ThemeContext";

function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const APP_URL = import.meta.env.VITE_APP_URI;
  const { darkMode } = useContext(ThemeContext);
  console.log("id", id);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const data = await getBlogDetail(id);
        console.log(data);
        setBlog(data.data[0]);
      } catch (error) {
        console.error("Error fetching job detail:", error);
      } finally {
        setLoading(false); // Set loading to false after the fetch is complete
      }
    };
    fetchBlogDetail();
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  if (!blog) {
    return <div>No blog detail available.</div>;
  }

  return (
    <div>
      <Hero title={blog.title} />

      <div className="rts__section section__padding">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="rts__blog__details" style={{ 
                      backgroundColor: darkMode ? '#1f1f1f' : '#ffffff',
                      padding: '30px',
                      borderRadius: '12px',
                      boxShadow: darkMode ? '0 4px 20px rgba(0, 0, 0, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.05)'
                    }}>
                        <div className="blog-thumbnail-container" style={{
                          marginBottom: '30px',
                          borderRadius: '8px',
                          overflow: 'hidden',
                          backgroundColor: darkMode ? '#212121' : '#f7fafc',
                          border: darkMode ? '1px solid #333' : 'none'
                        }}>
                          <img 
                            src={blog.thumbnail.startsWith('http') ? blog.thumbnail : `${APP_URL}/assets/blog/${blog.thumbnail}`} 
                            alt={blog.title} 
                            className="blog-detail-thumbnail" 
                            style={{ 
                              width: '100%',
                              filter: darkMode ? 'brightness(0.85) contrast(1.1)' : 'none',
                              maxHeight: '500px',
                              objectFit: 'cover'
                            }} 
                          />
                        </div>
                        <div
                          dangerouslySetInnerHTML={{ __html: marked(blog.content) }}
                          style={{ color: darkMode ? '#e4e4e4' : '#2D3748' }}
                        />
                    </div>
                </div>
            </div>
        </div>
     </div>
    </div>
  );
}

export default BlogDetail;
