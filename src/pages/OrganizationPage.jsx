import React, { useState } from 'react';
import Hero from "../components/Hero";
import Organization from '../components/Organization';
import '../styles/OrganizationPage.css';

function OrganizationPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="organization-page">
      <Hero 
        title="UN Organizations" 
        
      />
      
      <div className="search-container container my-4">
        <div className="input-group">
          <span className="input-group-text bg-transparent border-end-0">
            <i className="fa-solid fa-search text-primary"></i>
          </span>
          <input 
            type="text" 
            className="form-control border-start-0 ps-0" 
            placeholder="Search organizations..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search organizations"
          />
        </div>
      </div>

      <div className="statistics-bar container mb-4">
        <div className="row g-3">
          <div className="col-md-4">
            <div className="stat-card bg-white shadow-sm rounded-3 p-3 text-center h-100">
              <h4 className="mb-0 fw-bold text-primary">25+</h4>
              <p className="mb-0 text-muted">UN Organizations</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="stat-card bg-white shadow-sm rounded-3 p-3 text-center h-100">
              <h4 className="mb-0 fw-bold text-primary">190+</h4>
              <p className="mb-0 text-muted">Member Countries</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="stat-card bg-white shadow-sm rounded-3 p-3 text-center h-100">
              <h4 className="mb-0 fw-bold text-primary">1,000+</h4>
              <p className="mb-0 text-muted">Available Positions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="organization-content">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <div className="section-heading d-flex align-items-center">
                <div className="heading-line me-3"></div>
                <h2 className="h3 mb-0">Find Your Next Opportunity</h2>
              </div>
              <p className="text-muted">Browse UN organizations and discover meaningful career opportunities globally</p>
            </div>
          </div>
          
          <Organization searchFilter={searchTerm} />
        </div>
      </div>
    </div>
  );
}

export default OrganizationPage;