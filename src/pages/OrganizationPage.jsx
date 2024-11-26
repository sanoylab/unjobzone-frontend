import React from 'react'
import Hero from "../components/Hero";
import Organization from '../components/Organization';
function OrganizationPage() {
  return (
    <div>
      <Hero title="Organizations" />
      <div className="rts__section section__padding">
        <div className="container">
          <div className="row g-30">
            <div className="col-12"></div>
            <Organization />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrganizationPage