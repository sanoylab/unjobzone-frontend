import React from 'react'
import { Link } from 'react-router-dom'

// Predefined list of simple icon placeholders (e.g., Font Awesome names or simple characters)
const modernIconsList = [
  'briefcase', 'globe-americas', 'users', 'chart-line', 'cogs', 'balance-scale', 
  'handshake', 'comments', 'bullhorn', 'shield-alt', 'microscope', 'seedling'
];

// Placeholder for a modern, minimalist icon component or SVG renderer
const ModernIcon = ({ iconName, size = '56px', color = '#1B4B82' }) => {
  return (
    <div style={{
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'linear-gradient(135deg, rgba(27,142,242,0.13) 0%, rgba(27,75,130,0.09) 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1.5px solid rgba(27, 75, 130, 0.13)',
      boxShadow: '0 0 0 6px rgba(27,142,242,0.07)',
      transition: 'box-shadow 0.3s',
      position: 'relative',
      zIndex: 2,
    }}>
      <i className={`fas fa-${iconName}`} style={{ fontSize: `2rem`, color: color, filter: 'drop-shadow(0 0 6px #1B8EF2AA)' }}></i>
    </div>
  );
};

const JobCategory = ({ title, link, totalJobs, iconIndex }) => {
  // Select an icon from the list based on the iconIndex, cycling through the list
  const selectedIconName = modernIconsList[iconIndex % modernIconsList.length];

  return (
    <div className="col-xl-4 col-lg-6 col-md-6 mb-4">
      <Link to={link} style={{ textDecoration: 'none' }}>
        <div style={{
          background: 'rgba(255,255,255,0.55)',
          backdropFilter: 'blur(18px) saturate(180%)',
          borderRadius: '2rem',
          border: '1.5px solid rgba(27, 75, 130, 0.10)',
          boxShadow: '0 8px 32px rgba(27, 75, 130, 0.10)',
          padding: '2.2rem 1.7rem 1.7rem 1.7rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          minHeight: '220px',
          position: 'relative',
          overflow: 'hidden',
          transition: 'transform 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s cubic-bezier(.22,1,.36,1)',
        }}
        onMouseOver={e => {
          e.currentTarget.style.transform = 'translateY(-10px) scale(1.035)';
          e.currentTarget.style.boxShadow = '0 16px 48px 0 rgba(27, 142, 242, 0.18)';
        }}
        onMouseOut={e => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(27, 75, 130, 0.10)';
        }}
        >
          <div style={{ marginBottom: '1.2rem', zIndex: 2 }}>
            <ModernIcon iconName={selectedIconName} />
          </div>
          <h3 style={{
            fontSize: '1.18rem',
            fontWeight: 700,
            color: '#1B4B82',
            marginBottom: '0.35rem',
            letterSpacing: '-0.5px',
            lineHeight: 1.25,
            zIndex: 2,
          }}>
            {title}
          </h3>
          <p style={{
            fontSize: '0.97rem',
            color: '#4A5568',
            margin: 0,
            fontWeight: 500,
            zIndex: 2,
          }}>
            {totalJobs}+ Open Positions
          </p>
        </div>
      </Link>
    </div>
  )
}

export default JobCategory