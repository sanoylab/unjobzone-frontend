import React, { useEffect, useState } from 'react';
import { getJobFunctionCategories} from '../Api'
import JobCategory from '../components/JobCategory';
import Hero from '../components/Hero';

const images = [
  "/assets/img/home-6/icon/marketing.svg",
  "/assets/img/home-6/icon/data.svg",
  "/assets/img/home-6/icon/design.svg",
  "/assets/img/home-6/icon/development.svg",
  "/assets/img/home-6/icon/icon.svg"
];

const getRandomImage = () => {
  return images[Math.floor(Math.random() * images.length)];
};



function JobCategoryPage() {
  const [jobCategories, setJobCategories] = useState([]);
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

    <div>
    <Hero title="Job Categories" />
    <div className="rts__section section__padding overflow-hidden">
    <div className="container">
      
      <div className="row g-30">
        {jobCategories.map((category, index) => (
          <JobCategory key={index}
            title={category.jf}
            link={`/jobs?jf=${encodeURIComponent(category.jf)}`}
            image={getRandomImage()}
            totalJobs={category.total}
          />
        ))}
        
       
      </div>
    </div>
  </div>
  </div>


  
  )
}

export default JobCategoryPage