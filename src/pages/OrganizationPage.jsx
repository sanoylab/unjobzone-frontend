import React, { useState, useContext } from 'react';
import Hero from "../components/Hero";
import Organization from '../components/Organization';
import '../styles/OrganizationPage.css';
import { ThemeContext } from "../contexts/ThemeContext";

function OrganizationPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="organization-page">
      <Hero 
        title="UN Organizations" 
        
      />
      
      <div className="search-container container my-4">
        <div className="input-group">
          <span className="input-group-text bg-transparent border-end-0" style={{
            backgroundColor: darkMode ? '#2d2d2d !important' : '',
            borderColor: darkMode ? '#444' : '',
            color: darkMode ? '#e4e4e4' : ''
          }}>
            <i className="fa-solid fa-search" style={{ 
              color: darkMode ? '#4b90d6' : '#0d6efd'
            }}></i>
          </span>
          <input 
            type="text" 
            className="form-control border-start-0 ps-0" 
            placeholder="Search organizations..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search organizations"
            style={{
              backgroundColor: darkMode ? '#2d2d2d' : '',
              borderColor: darkMode ? '#444' : '',
              color: darkMode ? '#e4e4e4' : ''
            }}
          />
        </div>
      </div>

      <div className="statistics-bar container mb-4">
        <div className="row g-3">
          <div className="col-md-4">
            <div className="stat-card shadow-sm rounded-3 p-3 text-center h-100" style={{
              backgroundColor: darkMode ? '#1f1f1f' : 'white',
              color: darkMode ? '#e4e4e4' : ''
            }}>
              <h4 className="mb-0 fw-bold" style={{ color: darkMode ? '#4b90d6' : '#0d6efd' }}>25+</h4>
              <p className="mb-0" style={{ color: darkMode ? '#b0b0b0' : '#6c757d' }}>UN Organizations</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="stat-card shadow-sm rounded-3 p-3 text-center h-100" style={{
              backgroundColor: darkMode ? '#1f1f1f' : 'white',
              color: darkMode ? '#e4e4e4' : ''
            }}>
              <h4 className="mb-0 fw-bold" style={{ color: darkMode ? '#4b90d6' : '#0d6efd' }}>190+</h4>
              <p className="mb-0" style={{ color: darkMode ? '#b0b0b0' : '#6c757d' }}>Member Countries</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="stat-card shadow-sm rounded-3 p-3 text-center h-100" style={{
              backgroundColor: darkMode ? '#1f1f1f' : 'white',
              color: darkMode ? '#e4e4e4' : ''
            }}>
              <h4 className="mb-0 fw-bold" style={{ color: darkMode ? '#4b90d6' : '#0d6efd' }}>1,000+</h4>
              <p className="mb-0" style={{ color: darkMode ? '#b0b0b0' : '#6c757d' }}>Available Positions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="organization-content">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <div className="section-heading d-flex align-items-center">
                <div className="heading-line me-3" style={{ backgroundColor: darkMode ? '#4b90d6' : '#0d6efd' }}></div>
                <h2 className="h3 mb-0" style={{ color: darkMode ? '#e4e4e4' : '' }}>Find Your Next Opportunity</h2>
              </div>
              <p style={{ color: darkMode ? '#b0b0b0' : '#6c757d' }}>Browse UN organizations and discover meaningful career opportunities globally</p>
            </div>
          </div>
          
          <Organization searchFilter={searchTerm} />
        </div>
      </div>
    </div>
  );
}

export default OrganizationPage;