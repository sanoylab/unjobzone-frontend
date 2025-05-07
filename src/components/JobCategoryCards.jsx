import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import JobCategory from "./JobCategory";
import { getJobCategories } from "../Api";

function JobCategoryCards() {
  const [jobCategories, setJobCategories] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [visibleCategories, setVisibleCategories] = useState(6);

  const initialLoadCount = 6;
  const loadMoreCount = 6;

  useEffect(() => {
    async function fetchJobCategories() {
      try {
        const categories = await getJobCategories();
        if (Array.isArray(categories)) {
          setJobCategories(categories);
        } else {
          console.error("Expected an array for job categories but got:", categories);
          setJobCategories([]);
        }
      } catch (error) {
        console.error("Error fetching job categories:", error);
        setJobCategories([]);
      }
    }
    fetchJobCategories();
  }, []);

  const handleToggleExpand = () => {
    if (isExpanded) {
      setVisibleCategories(initialLoadCount);
      setIsExpanded(false);
    } else {
      setVisibleCategories(jobCategories.length);
      setIsExpanded(true);
    }
  };

  const displayedCategories = jobCategories.slice(0, visibleCategories);

  return (
    <div className="job-categories-section" style={{
      background: 'transparent',
      padding: '5rem 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '0',
        transform: 'translateX(-50%)',
        zIndex: 0,
        opacity: 0.07,
        fontSize: '16rem',
        pointerEvents: 'none',
        width: '100%',
        textAlign: 'center',
        animation: 'floatSectionBlob 18s ease-in-out infinite',
      }}>
        <i className="fas fa-globe-africa"></i>
      </div>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '3.5rem',
        }}>
          <h2 style={{
            fontSize: '2.75rem',
            fontWeight: 800,
            color: '#1B4B82',
            marginBottom: '1rem',
            lineHeight: 1.2,
            letterSpacing: '-1px',
            background: 'linear-gradient(90deg, #1B8EF2 0%, #1B4B82 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Explore Opportunities by Category
          </h2>
          <p style={{
            fontSize: '1.15rem',
            color: '#4A5568',
            maxWidth: '650px',
            margin: '0 auto',
            lineHeight: 1.7,
            fontWeight: 500,
          }}>
            Discover diverse career paths within the United Nations. Find the category that aligns with your skills and passion to make a global impact.
          </p>
        </div>

        {jobCategories.length === 0 && (
          <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#4A5568' }}>Loading categories or no categories found.</p>
        )}

        {jobCategories.length > 0 && (
          <div className="row g-4 justify-content-center">
            {displayedCategories.map((category, index) => (
              <JobCategory
                key={category.id || index}
                title={category.jn}
                link={`/jobs?jn=${encodeURIComponent(category.jn)}`}
                totalJobs={category.total}
                iconIndex={index}
              />
            ))}
          </div>
        )}

        {jobCategories.length > initialLoadCount && (
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <button 
              onClick={handleToggleExpand}
              style={{
                background: 'linear-gradient(90deg, #1B8EF2 0%, #1B4B82 100%)',
                color: '#FFFFFF',
                padding: '0.95rem 2.3rem',
                borderRadius: '2rem',
                border: 'none',
                fontSize: '1.08rem',
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 4px 18px rgba(27, 75, 130, 0.13)',
                transition: 'background 0.2s, transform 0.2s',
              }}
              onMouseOver={e => {
                e.currentTarget.style.background = 'linear-gradient(90deg, #1B4B82 0%, #1B8EF2 100%)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = 'linear-gradient(90deg, #1B8EF2 0%, #1B4B82 100%)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {isExpanded ? "Show Fewer Categories" : "Explore More Categories"}
            </button>
          </div>
        )}
      </div>
      <style>{`
        @keyframes floatSectionBlob {
          0%, 100% { transform: translateX(-50%) scale(1); }
          50% { transform: translateX(-50%) scale(1.08); }
        }
      `}</style>
    </div>
  );
}

export default JobCategoryCards;
