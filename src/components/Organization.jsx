import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OrganizationCard from "./OrganizationCard";
import { getJobOrganization } from "../Api";
import Spinner from "./Spinner";
import Masonry from 'react-masonry-css';

function Organization() {
  const [jobCategories, setJobCategories] = useState([]);
const [loading, setLoading] = useState(true);
const APP_URL = import.meta.env.VITE_APP_URI;

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};

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
            <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >              
              {jobCategories.map((category, index) => (
                <OrganizationCard
                  key={index}
                  title={category.dept}
                  description = {category.description}
                  image={`${APP_URL}/assets/logo/${category.logo}`}
                  totalJobs={category.total}
                />
              ))}
            </Masonry>
          )}
        </div>
      </div>
    </div>
  );
}

export default Organization;
