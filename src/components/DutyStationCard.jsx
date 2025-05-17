import React from 'react';
import { Link } from 'react-router-dom';

// Helper function to determine region based on city name
const getRegionInfo = (locationName) => {
  // Define some simple region detection rules
  const regions = [
    { name: 'Europe', cities: ['Geneva', 'Rome', 'Vienna', 'Paris', 'Brussels', 'London', 'Copenhagen', 'Madrid', 'Budapest', 'Bonn'] },
    { name: 'North America', cities: ['New York', 'Washington', 'Montreal', 'San Francisco', 'Toronto'] },
    { name: 'Asia', cities: ['Bangkok', 'Beijing', 'Tokyo', 'Delhi', 'Jakarta', 'Seoul', 'Manila', 'Hanoi', 'Singapore'] },
    { name: 'Africa', cities: ['Nairobi', 'Cairo', 'Addis Ababa', 'Dakar', 'Lagos', 'Accra'] },
    { name: 'Middle East', cities: ['Amman', 'Beirut', 'Jerusalem', 'Dubai', 'Riyadh'] },
    { name: 'Latin America', cities: ['Santiago', 'Lima', 'Mexico City', 'Bogota', 'Brasilia'] },
    { name: 'Oceania', cities: ['Sydney', 'Melbourne', 'Wellington'] }
  ];

  // Try to find matching region
  for (const region of regions) {
    for (const city of region.cities) {
      if (locationName.includes(city)) {
        return { name: region.name, icon: getRegionIcon(region.name), color: getRegionColor(region.name) };
      }
    }
  }

  // Default to "International" if no match
  return { name: 'International', icon: 'fa-solid fa-globe', color: '#3182ce' };
};

// Get icon for region
const getRegionIcon = (regionName) => {
  const iconMap = {
    'Europe': 'fa-solid fa-landmark',
    'North America': 'fa-solid fa-mountain-city',
    'Asia': 'fa-solid fa-tower-observation',
    'Africa': 'fa-solid fa-tree',
    'Middle East': 'fa-solid fa-mosque',
    'Latin America': 'fa-solid fa-bridge',
    'Oceania': 'fa-solid fa-umbrella-beach',
    'International': 'fa-solid fa-globe'
  };
  
  return iconMap[regionName] || 'fa-solid fa-globe';
};

// Get color for region
const getRegionColor = (regionName) => {
  const colorMap = {
    'Europe': '#3182ce', // Blue
    'North America': '#805ad5', // Purple
    'Asia': '#dd6b20', // Orange
    'Africa': '#38a169', // Green
    'Middle East': '#d69e2e', // Yellow
    'Latin America': '#e53e3e', // Red
    'Oceania': '#319795', // Teal
    'International': '#4a5568' // Gray
  };
  
  return colorMap[regionName] || '#3182ce';
};

const DutyStationCard = ({ title, totalJobs, index = 0 }) => {
  // Create a delay for staggered animation effect
  const animationDelay = `${(index % 12) * 0.1}s`;
  
  // Get region information
  const region = getRegionInfo(title);
  
  return (
    <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
      <div 
        className="station-card" 
        style={{ 
          animationDelay,
          borderTop: `4px solid ${region.color}`
        }}
      >
        <div className="card-top">
          <div className="region-badge" style={{ backgroundColor: `${region.color}20` }}>
            <i className={`${region.icon} me-2`} style={{ color: region.color }}></i>
            {region.name}
          </div>
          
          <div className="job-count-badge">
            <span>{totalJobs}</span>
            <small>{totalJobs === 1 ? 'Job' : 'Jobs'}</small>
          </div>
        </div>
        
        <div className="card-content">
          <h3 className="station-name">{title}</h3>
          
          <div className="station-meta">
            <div className="meta-item">
              <i className="fa-solid fa-building me-2"></i>
              UN System
            </div>
            <div className="meta-item">
              <i className="fa-solid fa-location-dot me-2"></i>
              {region.name}
            </div>
          </div>
          
          <Link 
            to={`/jobs?duty_station=${encodeURIComponent(title)}`} 
            className="action-button"
            style={{ backgroundColor: region.color }}
          >
            View Opportunities <i className="fa-solid fa-arrow-right ms-2"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DutyStationCard;