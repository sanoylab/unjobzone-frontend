import React from 'react';
import Hero from "../components/Hero";
import DutyStation from "../components/DutyStation";
import '../styles/DutyStationPage.css';

function DutyStationPage() {
  return (
    <div className="duty-station-page">
      <Hero 
        title="UN Duty Stations" 
        subtitle="Explore opportunities in UN offices across the globe"
      />
      
      {/* World Map Visualization */}
      <div className="container">
        <div className="world-map-container">
          <div className="map-background"></div>
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
            <div className="duty-stats">
              <div className="stat-item">
                <h2>190+</h2>
                <p>Member States</p>
              </div>
              <div className="stat-item">
                <h2>80+</h2>
                <p>Duty Stations</p>
              </div>
              <div className="stat-item">
                <h2>1000+</h2>
                <p>Open Positions</p>
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