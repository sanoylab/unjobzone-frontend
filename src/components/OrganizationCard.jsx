import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/OrganizationCard.css'

// Function to determine organization category based on name
const getCategoryFromTitle = (title) => {
  title = title.toLowerCase();
  
  if (title.includes('programme') || title.includes('program')) {
    return 'programme';
  } else if (title.includes('fund')) {
    return 'fund';
  } else if (title.includes('specialized') || title.includes('agency')) {
    return 'specialized';
  } else if (title.includes('secretariat')) {
    return 'secretariat';
  } else {
    return 'other';
  }
};

// Function to get abbreviated count for large numbers
const formatCount = (count) => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count;
};

// Function to get organization type label
const getOrgTypeLabel = (title) => {
  title = title.toLowerCase();
  
  if (title.includes('programme') || title.includes('program')) {
    return 'Programme';
  } else if (title.includes('fund')) {
    return 'Fund';
  } else if (title.includes('specialized') || title.includes('agency')) {
    return 'Specialized Agency';
  } else if (title.includes('secretariat')) {
    return 'Secretariat';
  } else if (title.includes('office')) {
    return 'Office';
  } else if (title.includes('commission')) {
    return 'Commission';
  } else {
    return 'Organization';
  }
};

const OrganizationCard = ({image, title, description, totalJobs, index}) => {
  // Create a delay for staggered animation effect
  const animationDelay = `${(index % 9) * 0.1}s`;
  
  // Determine category for styling
  const category = getCategoryFromTitle(title);
  
  // Extract acronym from title (typically in parentheses)
  const acronymMatch = title.match(/\(([A-Z]+)\)/);
  const acronym = acronymMatch ? acronymMatch[1] : '';

  return (
    <div 
      className="org-card"
      data-category={category}
      style={{ 
        animation: 'fadeInUp 0.6s ease-out forwards',
        animationDelay: animationDelay,
        opacity: 0
      }}
    >
      <div className="org-logo-container">
        <div className="org-logo-backdrop"></div>
        <div className="org-logo-backdrop"></div>
        <img 
          src={image} 
          alt={title} 
          className="org-logo" 
        />
        <div className="job-count-badge">
          {formatCount(totalJobs)} {totalJobs === 1 ? 'Job' : 'Jobs'}
        </div>
      </div>
      
      <div className="card-body">
        <h3 className="org-title">
          <Link 
            to={`/jobs?dept=${encodeURIComponent(title)}`} 
            className="text-decoration-none stretched-link"
          >
            {title}
          </Link>
        </h3>
        
        {description && (
          <p className="org-description">
            {description}
          </p>
        )}
        
        <div className="org-meta">
          <div className="org-meta-item">
            <i className="fa-solid fa-building"></i>
            {getOrgTypeLabel(title)}
          </div>
          
          {acronym && (
            <div className="org-meta-item">
              <i className="fa-solid fa-tag"></i>
              {acronym}
            </div>
          )}
        </div>
      </div>
      
      <div className="card-footer">
        <Link 
          to={`/jobs?dept=${encodeURIComponent(title)}`} 
          className="action-button"
        >
          View Opportunities
          <i className="fa-solid fa-arrow-right"></i>
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