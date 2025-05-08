import React from 'react'
import { Link } from 'react-router-dom'

const OrganizationCard = ({image, title, description, totalJobs, index}) => {
  // Create a delay for staggered animation effect
  const animationDelay = `${(index % 9) * 0.1}s`;

  return (
    <div 
      className="org-card h-100 bg-white rounded-3 shadow-sm overflow-hidden" 
      style={{ 
        animation: 'fadeInUp 0.6s ease-out forwards',
        animationDelay: animationDelay,
        opacity: 0
      }}
    >
      <div className="card-top position-relative">
        <div className="org-logo-wrapper d-flex align-items-center justify-content-center p-4 bg-light">
          <img 
            src={image} 
            alt={title} 
            className="org-logo img-fluid" 
            style={{ maxHeight: '80px', maxWidth: '80%', objectFit: 'contain' }} 
          />
        </div>
        <div className="job-count position-absolute top-0 end-0 m-3">
          <span className="badge bg-primary rounded-pill">
            {totalJobs} {totalJobs === 1 ? 'Job' : 'Jobs'}
          </span>
        </div>
      </div>
      
      <div className="card-body p-4">
        <h3 className="org-title h5 mb-3 fw-bold text-primary">
          <Link 
            to={`/jobs?dept=${encodeURIComponent(title)}`} 
            className="text-decoration-none stretched-link text-primary"
          >
            {title}
          </Link>
        </h3>
        
        {description && (
          <p className="org-description mb-3 text-muted" style={{ 
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: '3',
            WebkitBoxOrient: 'vertical',
            fontSize: '0.95rem',
            lineHeight: '1.5'
          }}>
            {description}
          </p>
        )}
      </div>
      
      <div className="card-footer bg-white border-0 p-4 pt-0">
        <Link 
          to={`/jobs?dept=${encodeURIComponent(title)}`} 
          className="btn btn-outline-primary rounded-pill btn-sm d-inline-flex align-items-center"
        >
          View Opportunities
          <i className="fas fa-arrow-right ms-2"></i>
        </Link>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .org-card {
          transition: all 0.3s ease;
          border: 1px solid rgba(0,0,0,0.08);
        }
        
        .org-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1) !important;
        }
        
        .org-logo-wrapper {
          height: 140px;
          transition: all 0.3s ease;
        }
        
        .org-card:hover .org-logo-wrapper {
          background-color: rgba(0,123,255,0.05);
        }
      `}</style>
    </div>
  )
}

export default OrganizationCard