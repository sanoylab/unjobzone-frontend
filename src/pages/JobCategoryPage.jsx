import React, { useEffect, useState, useContext } from 'react';
import { getJobFunctionCategories} from '../Api'
import JobCategory from '../components/JobCategory';
import Hero from '../components/Hero';
import HomeHeader from '../components/HomeHeader';
import { ThemeContext } from "../contexts/ThemeContext";

// Define icon mapping for common UN job categories
const categoryIconMap = {
  // Administrative categories
  "ADMINISTRATION": "building",
  "MANAGEMENT": "tasks",
  "EXECUTIVE": "user-tie",
  "ADMINISTRATIVE": "clipboard",
  
  // Program/technical categories
  "PROGRAMME": "project-diagram",
  "ECONOMIC": "chart-line",
  "SOCIAL": "users",
  "POLITICAL": "landmark",
  "HUMANITARIAN": "hands-helping",
  "HUMAN RIGHTS": "balance-scale",
  
  // Specialized fields
  "INFORMATION": "info-circle",
  "LEGAL": "gavel",
  "FINANCE": "money-bill-wave",
  "SECURITY": "shield-alt",
  "LOGISTICS": "truck",
  "MEDICAL": "stethoscope",
  "PUBLIC HEALTH": "heartbeat",
  "ENGINEERING": "drafting-compass",
  "SCIENCE": "flask",
  "ENVIRONMENT": "leaf",
  "EDUCATION": "graduation-cap",
  "COMMUNICATIONS": "bullhorn",
  "HUMAN RESOURCES": "user-friends",
  "STATISTICS": "chart-bar",
  "INFORMATION TECHNOLOGY": "laptop-code",
  "CONFERENCE": "users-class",
  
  // Default icon for any unmatched categories
  "DEFAULT": "briefcase"
};

// Function to find the most appropriate icon for a job category
const findCategoryIcon = (categoryName) => {
  if (!categoryName) return "briefcase"; // Default icon
  
  const upperCaseName = categoryName.toUpperCase();
  
  // Try to find a direct match first
  if (categoryIconMap[upperCaseName]) {
    return categoryIconMap[upperCaseName];
  }
  
  // Try to find a partial match
  for (const [key, icon] of Object.entries(categoryIconMap)) {
    if (upperCaseName.includes(key)) {
      return icon;
    }
  }
  
  // Return default if no match found
  return categoryIconMap.DEFAULT;
};

function JobCategoryPage() {
  const [jobCategories, setJobCategories] = useState([]);
  const { darkMode } = useContext(ThemeContext);
  
  useEffect(() => {
    async function fetchJobCategories() {
      try {
        const categories = await getJobFunctionCategories();
        if (Array.isArray(categories)) {
          setJobCategories(categories);
        } else {
          console.error('Expected an array but got:', categories);
        }
      } catch (error) {
        console.error('Error fetching job categories:', error);
      }
    }

    fetchJobCategories();
  }, []);
  
  return (
    <div style={{ backgroundColor: darkMode ? '#121212' : '#fafbfc', minHeight: '100vh' }}>
      <Hero title="Job Categories" />
      <div className="rts__section section__padding overflow-hidden">
        <div className="container">
          <div className="row g-30">
            {jobCategories.map((category, index) => {
              const icon = findCategoryIcon(category.jf);
              return (
                <JobCategory 
                  key={index}
                  title={category.jf}
                  link={`/jobs?jf=${encodeURIComponent(category.jf)}`}
                  iconIndex={index}
                  iconName={icon}
                  totalJobs={category.total}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCategoryPage;