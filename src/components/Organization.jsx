import React, { useEffect, useState } from "react";
import OrganizationCard from "./OrganizationCard";
import { getJobOrganization } from "../Api";
import Spinner from "./Spinner";

function Organization({ searchFilter = '' }) {
  const [organizations, setOrganizations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredOrgs, setFilteredOrgs] = useState([]);
  const APP_URL = import.meta.env.VITE_APP_URI;

  useEffect(() => {
    async function fetchOrganizations() {
      try {
        const data = await getJobOrganization();
        if (Array.isArray(data)) {
          setOrganizations(data);
          setFilteredOrgs(data);
        } else {
          console.error("Expected an array but got:", data);
        }
      } catch (error) {
        console.error("Error fetching organizations:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchOrganizations();
  }, []);

  useEffect(() => {
    if (searchFilter.trim() === '') {
      setFilteredOrgs(organizations);
    } else {
      const filtered = organizations.filter(org => 
        org.dept.toLowerCase().includes(searchFilter.toLowerCase()) ||
        (org.description && org.description.toLowerCase().includes(searchFilter.toLowerCase()))
      );
      setFilteredOrgs(filtered);
    }
  }, [searchFilter, organizations]);

  if (loading) {
    return <Spinner loading={loading} />;
  }

  if (filteredOrgs.length === 0) {
    return (
      <div className="row justify-content-center">
        <div className="col-md-8 text-center py-5">
          <div className="no-results">
            <i className="fa-solid fa-search fa-3x text-muted mb-3"></i>
            <h3>No organizations found</h3>
            <p className="text-muted">Try adjusting your search terms</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="organizations-grid">
      <div className="row g-4">
        {filteredOrgs.map((org, index) => (
          <div key={index} className="col-lg-4 col-md-6">
            <OrganizationCard
              title={org.dept}
              description={org.description}
              image={`${APP_URL}/assets/logo/${org.logo}`}
              totalJobs={org.total}
              index={index}
            />
          </div>
        ))}
      </div>
      
      {filteredOrgs.length > 0 && (
        <div className="row mt-5">
          <div className="col-12 text-center">
            <p className="text-muted mb-0">
              Showing {filteredOrgs.length} {filteredOrgs.length === 1 ? 'organization' : 'organizations'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Organization;
