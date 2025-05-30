import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../styles/OrganizationCard.css'
import { ThemeContext } from "../contexts/ThemeContext";

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
  const { darkMode } = useContext(ThemeContext);
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
        opacity: 0,
        backgroundColor: darkMode ? '#1f1f1f' : 'white',
        borderColor: darkMode ? 'rgba(80, 80, 80, 0.3)' : 'rgba(0,0,0,0.08)'
      }}
    >
      <div className="org-logo-container" style={{
        backgroundColor: darkMode ? '#2d2d2d' : 'linear-gradient(135deg, #f6f9fc 0%, #f1f5f9 100%)'
      }}>
        <div className="org-logo-backdrop" style={{ 
          backgroundColor: darkMode ? 'rgba(75, 144, 214, 0.05)' : 'rgba(49, 130, 206, 0.05)'
        }}></div>
        <div className="org-logo-backdrop" style={{ 
          backgroundColor: darkMode ? 'rgba(75, 144, 214, 0.03)' : 'rgba(49, 130, 206, 0.03)'
        }}></div>
        <img 
          src={image} 
          alt={title} 
          className="org-logo" 
          style={{
            filter: darkMode ? 'brightness(1.2) drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.2))' : 'drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.05))'
          }}
        />
        <div className="job-count-badge" style={{ 
          backgroundColor: darkMode ? 'rgba(75, 144, 214, 0.15)' : 'rgba(49, 130, 206, 0.1)',
          color: darkMode ? '#4b90d6' : '#3182ce'
        }}>
          {formatCount(totalJobs)} {totalJobs === 1 ? 'Job' : 'Jobs'}
        </div>
      </div>
      
      <div className="card-body">
        <h3 className="org-title">
          <Link 
            to={`/jobs?dept=${encodeURIComponent(title)}`} 
            className="text-decoration-none stretched-link"
            style={{
              color: darkMode ? '#e4e4e4' : '#2d3748'
            }}
          >
            {title}
          </Link>
        </h3>
        
        {description && (
          <p className="org-description" style={{ color: darkMode ? '#b0b0b0' : '#718096' }}>
            {description}
          </p>
        )}
        
        <div className="org-meta" style={{ borderColor: darkMode ? 'rgba(80, 80, 80, 0.2)' : 'rgba(0, 0, 0, 0.08)' }}>
          <div className="org-meta-item" style={{ color: darkMode ? '#b0b0b0' : '#718096' }}>
            <i className="fa-solid fa-building" style={{ color: darkMode ? '#4b90d6' : '#3182ce' }}></i>
            {getOrgTypeLabel(title)}
          </div>
          
          {acronym && (
            <div className="org-meta-item" style={{ color: darkMode ? '#b0b0b0' : '#718096' }}>
              <i className="fa-solid fa-tag" style={{ color: darkMode ? '#4b90d6' : '#3182ce' }}></i>
              {acronym}
            </div>
          )}
        </div>
      </div>
      
      <div className="card-footer" style={{ 
        borderColor: darkMode ? 'rgba(80, 80, 80, 0.3)' : 'rgba(0, 0, 0, 0.05)',
        backgroundColor: darkMode ? '#1f1f1f' : 'white'
      }}>
        <Link 
          to={`/jobs?dept=${encodeURIComponent(title)}`} 
          className="action-button"
          style={{
            color: darkMode ? '#4b90d6' : '#3182ce',
            borderColor: darkMode ? 'rgba(75, 144, 214, 0.3)' : 'rgba(49, 130, 206, 0.3)',
            backgroundColor: 'transparent'
          }}
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
          border: 1px solid ${darkMode ? 'rgba(80, 80, 80, 0.3)' : 'rgba(0,0,0,0.08)'};
        }
        
        .org-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px ${darkMode ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)'} !important;
        }
        
        .org-card:hover .org-title a {
          color: ${darkMode ? '#4b90d6' : '#3182ce'} !important;
        }
        
        .org-card:hover .job-count-badge {
          background-color: ${darkMode ? '#1f3a60' : '#3182ce'} !important;
          color: white !important;
          box-shadow: 0 3px 10px ${darkMode ? 'rgba(31, 58, 96, 0.4)' : 'rgba(49, 130, 206, 0.3)'} !important;
        }
        
        .org-card:hover .action-button {
          background-color: ${darkMode ? '#1f3a60' : '#3182ce'} !important;
          color: white !important;
          border-color: ${darkMode ? '#1f3a60' : '#3182ce'} !important;
        }
        
        .org-card:hover .action-button i {
          transform: translateX(4px);
        }
      `}</style>
    </div>
  )
}

export default OrganizationCard