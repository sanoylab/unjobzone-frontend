import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from "../contexts/ThemeContext";

// Predefined list of simple icon placeholders (e.g., Font Awesome names or simple characters)
const modernIconsList = [
  'briefcase', 'globe-americas', 'users', 'chart-line', 'cogs', 'balance-scale', 
  'handshake', 'comments', 'bullhorn', 'shield-alt', 'microscope', 'seedling'
];

// Placeholder for a modern, minimalist icon component or SVG renderer
const ModernIcon = ({ iconName, size = '56px', color = '#1B4B82', darkMode = false }) => {
  return (
    <div style={{
      width: size,
      height: size,
      borderRadius: '50%',
      background: darkMode 
        ? 'linear-gradient(135deg, rgba(31, 58, 96, 0.25) 0%, rgba(75, 144, 214, 0.15) 100%)'
        : 'linear-gradient(135deg, rgba(27,142,242,0.13) 0%, rgba(27,75,130,0.09) 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: darkMode 
        ? '1.5px solid rgba(75, 144, 214, 0.2)'
        : '1.5px solid rgba(27, 75, 130, 0.13)',
      boxShadow: darkMode 
        ? '0 0 0 6px rgba(75, 144, 214, 0.07)'
        : '0 0 0 6px rgba(27,142,242,0.07)',
      transition: 'box-shadow 0.3s',
      position: 'relative',
      zIndex: 2,
    }}>
      <i className={`fas fa-${iconName}`} style={{ 
        fontSize: `2rem`, 
        color: darkMode ? '#4b90d6' : color, 
        filter: darkMode ? 'drop-shadow(0 0 6px rgba(75, 144, 214, 0.6))' : 'drop-shadow(0 0 6px #1B8EF2AA)' 
      }}></i>
    </div>
  );
};

const JobCategory = ({ title, link, totalJobs, iconIndex }) => {
  const { darkMode } = useContext(ThemeContext);
  // Select an icon from the list based on the iconIndex, cycling through the list
  const selectedIconName = modernIconsList[iconIndex % modernIconsList.length];

  return (
    <div className="col-xl-4 col-lg-6 col-md-6 mb-4">
      <Link to={link} style={{ textDecoration: 'none' }}>
        <div style={{
          background: darkMode ? 'rgba(40, 40, 40, 0.7)' : 'rgba(255,255,255,0.55)',
          backdropFilter: 'blur(18px) saturate(180%)',
          borderRadius: '2rem',
          border: darkMode ? '1.5px solid rgba(80, 80, 80, 0.3)' : '1.5px solid rgba(27, 75, 130, 0.10)',
          boxShadow: darkMode ? '0 8px 32px rgba(0, 0, 0, 0.2)' : '0 8px 32px rgba(27, 75, 130, 0.10)',
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
          e.currentTarget.style.boxShadow = darkMode 
            ? '0 16px 48px 0 rgba(0, 0, 0, 0.3)'
            : '0 16px 48px 0 rgba(27, 142, 242, 0.18)';
        }}
        onMouseOut={e => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = darkMode 
            ? '0 8px 32px rgba(0, 0, 0, 0.2)'
            : '0 8px 32px rgba(27, 75, 130, 0.10)';
        }}
        >
          <div style={{ marginBottom: '1.2rem', zIndex: 2 }}>
            <ModernIcon iconName={selectedIconName} darkMode={darkMode} />
          </div>
          <h3 style={{
            fontSize: '1.18rem',
            fontWeight: 700,
            color: darkMode ? '#e4e4e4' : '#1B4B82',
            marginBottom: '0.35rem',
            letterSpacing: '-0.5px',
            lineHeight: 1.25,
            zIndex: 2,
          }}>
            {title}
          </h3>
          <p style={{
            fontSize: '0.97rem',
            color: darkMode ? '#b0b0b0' : '#4A5568',
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