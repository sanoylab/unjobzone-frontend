import React, { useContext } from 'react';
import Hero from "../components/Hero";
import DutyStation from "../components/DutyStation";
import '../styles/DutyStationPage.css';
import { ThemeContext } from "../contexts/ThemeContext";

function DutyStationPage() {
  const { darkMode } = useContext(ThemeContext);
  
  return (
    <div className="duty-station-page">
      <Hero 
        title="UN Duty Stations" 
        subtitle=""
      />
      
      {/* World Map Visualization */}
      <div className="container">
        <div className="world-map-container" style={{
          backgroundColor: darkMode ? '#1f1f1f' : '',
          borderColor: darkMode ? 'rgba(80, 80, 80, 0.3)' : ''
        }}>
          <div className="map-background" style={{
            opacity: darkMode ? 0.2 : 0.1
          }}></div>
          <div className="map-overlay"></div>
          
          {/* Map Visualization Elements */}
          <div className="map-element" style={{ top: '55%', left: '50%' }}>
            <div className="location-dot africa"></div>
            <div className="location-pulse"></div>
          </div>
          
          <div className="map-element" style={{ top: '35%', left: '48%' }}>
            <div className="location-dot europe"></div>
            <div className="location-pulse"></div>
          </div>
          
          <div className="map-element" style={{ top: '40%', left: '70%' }}>
            <div className="location-dot asia"></div>
            <div className="location-pulse"></div>
          </div>
          
          <div className="map-element" style={{ top: '45%', left: '25%' }}>
            <div className="location-dot americas"></div>
            <div className="location-pulse"></div>
          </div>
          
          <div className="map-element" style={{ top: '45%', left: '58%' }}>
            <div className="location-dot middle-east"></div>
            <div className="location-pulse"></div>
          </div>
          
          {/* Stats Display */}
          <div className="world-stats-container">
            <div className="duty-stats" style={{
              backgroundColor: darkMode ? 'rgba(40, 40, 40, 0.8)' : 'rgba(255, 255, 255, 0.8)',
              borderColor: darkMode ? 'rgba(80, 80, 80, 0.3)' : ''
            }}>
              <div className="stat-item">
                <h2 style={{ color: darkMode ? '#e4e4e4' : '' }}>190+</h2>
                <p style={{ color: darkMode ? '#b0b0b0' : '' }}>Member States</p>
              </div>
              <div className="stat-item">
                <h2 style={{ color: darkMode ? '#e4e4e4' : '' }}>80+</h2>
                <p style={{ color: darkMode ? '#b0b0b0' : '' }}>Duty Stations</p>
              </div>
              <div className="stat-item">
                <h2 style={{ color: darkMode ? '#e4e4e4' : '' }}>1000+</h2>
                <p style={{ color: darkMode ? '#b0b0b0' : '' }}>Open Positions</p>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="decorative-shape shape-1"></div>
          <div className="decorative-shape shape-2"></div>
          <div className="decorative-shape shape-3"></div>
        </div>
      </div>
      
      {/* Search, Filter and Results */}
      <div className="duty-station-controls container">
        <DutyStation />
      </div>
    </div>
  );
}

export default DutyStationPage;