import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import JobCategory from "./JobCategory";
import { getJobCategories } from "../Api";

function JobCategoryCards() {
  const [jobCategories, setJobCategories] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded) {
      document.querySelector(".category").scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    async function fetchJobCategories() {
      try {
        const categories = await getJobCategories();
        if (Array.isArray(categories)) {
          setJobCategories(categories);
        } else {
          console.error("Expected an array but got:", categories);
        }
      } catch (error) {
        console.error("Error fetching job categories:", error);
      }
    }

    fetchJobCategories();
  }, []);

  return (
    <div className="rts__section section__padding overflow-hidden category">
      <div className="container">
        <div className="row justify-content-between mb-50 gap-4 position-relative ">
          <div className="col-xl-6 col-lg-10">
            <div className="rts__section__content text-start  wow animated fadeInUp">
              <h3 className="rts__section__title section__mb">
                Browse Job Category
              </h3>
              <p className="rts__section__desc">
                Looking for your next career opportunity. Look no further
              </p>
            </div>
          </div>
          <div className="rts__links d-flex max-content align-items-end">
            <Link
              to="/job-categories"
              className="d-flex gap-2 align-items-center text-dark fw-medium"
            >
              View All<i className="fa-light fa-arrow-right"></i>
            </Link>
          </div>
        </div>
        <div className={`row g-30 ${isExpanded ? "" : "fixed-height"}`}>
          {jobCategories
            .slice(0, isExpanded ? jobCategories.length : 9)
            .map((category, index) => (
              <JobCategory
                key={index}
                title={category.jn}
                link={`/jobs?jn=${encodeURIComponent(category.jn)}`}
                image="/assets/img/home-6/icon/marketing.svg"
                totalJobs={category.total}
              />
            ))}
        </div>
        <button className="center-button" onClick={toggleExpand}>
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}

export default JobCategoryCards;
