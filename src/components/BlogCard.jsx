import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({id, thumbnail, title}) => {
  return (
    <div className="modern-blog-card">
      <Link to={`/blog/${id}`} className="card-link">
        <div className="image-container">
          <img src={thumbnail} alt={title} className="card-image" />
          <div className="image-overlay"></div>
          <div className="category-badge">
            <span>Article</span>
          </div>
        </div>
        
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          
          <div className="card-meta">
            <div className="meta-item">
              <i className="fa-light fa-clock"></i>
              <span>5 min</span>
            </div>
            <span className="meta-dot"></span>
            <div className="meta-item">
              <i className="fa-light fa-calendar"></i>
              <span>Jun 12</span>
            </div>
          </div>
        </div>
      </Link>
      
      <style>{`
        .modern-blog-card {
          height: 100%;
          position: relative;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          max-height: 280px;
        }
        
        .card-link {
          display: flex;
          flex-direction: column;
          height: 100%;
          text-decoration: none;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transform: translateY(0);
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        
        .modern-blog-card:hover .card-link {
          transform: translateY(-6px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .modern-blog-card:hover .card-title {
          background-size: 100% 2px;
        }
        
        .image-container {
          position: relative;
          height: 140px;
          overflow: hidden;
        }
        
        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        
        .modern-blog-card:hover .card-image {
          transform: scale(1.08);
        }
        
        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.25) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .modern-blog-card:hover .image-overlay {
          opacity: 1;
        }
        
        .category-badge {
          position: absolute;
          top: 8px;
          left: 8px;
          z-index: 2;
        }
        
        .category-badge span {
          display: inline-block;
          padding: 3px 8px;
          background: #1B8EF2;
          color: white;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.5px;
          border-radius: 20px;
          box-shadow: 0 2px 8px rgba(27, 142, 242, 0.3);
        }
        
        .card-content {
          padding: 12px;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        
        .card-title {
          font-size: 18px;
          font-weight: 600;
          line-height: 1.4;
          color: #2D3748;
          margin: 0 0 8px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          background-image: linear-gradient(#1B8EF2, #1B8EF2);
          background-position: 0 100%;
          background-repeat: no-repeat;
          background-size: 0 2px;
          transition: background-size 0.3s ease;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        }
        
        .card-meta {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #718096;
          font-size: 13px;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        }
        
        .meta-item {
          display: flex;
          align-items: center;
          gap: 3px;
        }
        
        .meta-item i {
          color: #1B8EF2;
          font-size: 13px;
        }
        
        .meta-dot {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background-color: #CBD5E0;
        }
        
        .arrow-icon {
          transition: transform 0.3s ease;
          fill: none;
        }
        
        .modern-blog-card:hover .arrow-icon {
          transform: translateX(4px);
        }
      `}</style>
    </div>
  )
}

export default BlogCard