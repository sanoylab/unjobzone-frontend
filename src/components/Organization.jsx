import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OrganizationCard from "./OrganizationCard";
import { getJobOrganization } from "../Api";
import Spinner from "./Spinner";

function Organization() {
  const [jobCategories, setJobCategories] = useState([]);
const [loading, setLoading] = useState(true);
const APP_URL = import.meta.env.VITE_APP_URI;

  useEffect(() => {
    async function fetchJobCategories() {
      try {
        const categories = await getJobOrganization();
        if (Array.isArray(categories)) {
          setJobCategories(categories);
        } else {
          console.error("Expected an array but got:", categories);
        }
      } catch (error) {
        console.error("Error fetching job categories:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchJobCategories();
  }, []);

  return (
    <div className="rts__section overflow-hidden mb-120">
      <div className="container">
        <div className="row g-30">
          {loading ? (
            <>
              <Spinner loading={loading} />
            </>
          ) : (
            <>              
              {jobCategories.map((category, index) => (
                <OrganizationCard
                  key={index}
                  title={category.dept}
                  image={`${APP_URL}/assets/logo/${category.logo}`}
                  totalJobs={category.total}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Organization;
