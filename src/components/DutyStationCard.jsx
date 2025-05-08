import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Helper function to get a background image URL for each duty station
const getLocationImage = (locationName) => {
  // Map common city names to Unsplash URLs
  const locationMap = {
    'New York': 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    'Geneva': 'https://images.unsplash.com/photo-1576450791041-4c43358632c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    'Rome': 'https://images.unsplash.com/photo-1525874684015-58379d421a52?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    'Vienna': 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    'Paris': 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    'Bangkok': 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    'Nairobi': 'https://images.unsplash.com/photo-1611348524140-53c9a25263d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    'Cairo': 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    'Beijing': 'https://images.unsplash.com/photo-1590959651373-a3db0f38a961?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    'Tokyo': 'https://images.unsplash.com/photo-1547448526-5e9d57fa28f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    'London': 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    'Santiago': 'https://images.unsplash.com/photo-1536254120452-cbe2f1ce3155?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    'Brussels': 'https://images.unsplash.com/photo-1560969184-10fe8719e047?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
  };
  
  // If the location is in our map, return the URL
  for (const [city, url] of Object.entries(locationMap)) {
    if (locationName.includes(city)) {
      return url;
    }
  }
  
  // If not found in our map, get a random image index (1-9) to create variety
  const randomIndex = Math.floor((locationName.charCodeAt(0) % 9) + 1);
  return `https://source.unsplash.com/featured/500x300/?city,${randomIndex}`;
};

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
        return { name: region.name, icon: getRegionIcon(region.name) };
      }
    }
  }

  // Default to "International" if no match
  return { name: 'International', icon: 'fa-solid fa-globe' };
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

// Default image mapping with reliable URLs
const cityImageMap = {
  'New York': 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Geneva': 'https://images.pexels.com/photos/6002731/pexels-photo-6002731.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Rome': 'https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Vienna': 'https://images.pexels.com/photos/2404046/pexels-photo-2404046.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Paris': 'https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Bangkok': 'https://images.pexels.com/photos/1031659/pexels-photo-1031659.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Nairobi': 'https://images.pexels.com/photos/13458334/pexels-photo-13458334.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Tokyo': 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800',
  'London': 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Santiago': 'https://images.pexels.com/photos/2516415/pexels-photo-2516415.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Brussels': 'https://images.pexels.com/photos/1549326/pexels-photo-1549326.jpeg?auto=compress&cs=tinysrgb&w=800'
};

// Region default images for fallback
const regionDefaultImages = {
  'Europe': 'https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=800',
  'North America': 'https://images.pexels.com/photos/1796730/pexels-photo-1796730.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Asia': 'https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Africa': 'https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Middle East': 'https://images.pexels.com/photos/3689532/pexels-photo-3689532.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Latin America': 'https://images.pexels.com/photos/2868242/pexels-photo-2868242.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Oceania': 'https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=800',
  'International': 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800'
};

const DutyStationCard = ({ title, totalJobs, index = 0 }) => {
  // Create a delay for staggered animation effect
  const animationDelay = `${(index % 12) * 0.1}s`;
  
  // Get region information
  const region = getRegionInfo(title);
  
  // Extract the main city name from the duty station title
  const extractCityName = (fullName) => {
    // Common patterns in UN duty station names
    const patterns = [
      /([A-Za-z\s]+)(?:\s*\(.*\))?/,  // Matches "City Name (anything in parentheses)"
      /([A-Za-z\s]+)(?:\s*-.*)?/,     // Matches "City Name - anything after hyphen"
      /([A-Za-z\s]+)/                  // Just get the first part as city name
    ];

    for (const pattern of patterns) {
      const match = fullName.match(pattern);
      if (match && match[1]) {
        return match[1].trim();
      }
    }
    return fullName; // Return the original if no pattern matches
  };

  // Get image URL based on duty station name
  const getImageUrl = () => {
    const cityName = extractCityName(title);
    
    // Check if we have a predefined image for this city
    for (const [mappedCity, url] of Object.entries(cityImageMap)) {
      if (cityName.includes(mappedCity)) {
        return url;
      }
    }
    
    // Use region default if no specific city match
    const regionName = region.name;
    if (regionDefaultImages[regionName]) {
      return regionDefaultImages[regionName];
    }
    
    // Ultimate fallback
    return regionDefaultImages.International;
  };
  
  return (
    <div className="col-md-6 col-lg-4 col-xl-3 mb-4">
      <div 
        className="station-card" 
        style={{ animationDelay }}
      >
        <div className="station-image">
          <img 
            src={getImageUrl()} 
            alt={title} 
            loading="lazy"
          />
        </div>
        
        <div className="card-icon">
          <i className={region.icon}></i>
        </div>
        
        <div className="card-content">
          <h3 className="station-name">{title}</h3>
          <p className="station-region">
            <i className="fa-solid fa-location-dot me-2"></i>
            {region.name}
          </p>
          
          <div className="job-count">
            {totalJobs} {totalJobs === 1 ? 'Position Available' : 'Positions Available'}
          </div>
          
          <Link 
            to={`/jobs?duty_station=${encodeURIComponent(title)}`} 
            className="action-button mt-3"
          >
            View Jobs <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DutyStationCard;