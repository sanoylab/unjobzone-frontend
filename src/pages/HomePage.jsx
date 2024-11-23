import React from 'react'
import Hero from "../components/Hero";
import OrganizationLogoSlider from "../components/OrganizationLogoSlider";
import JobCategoryCards from "../components/JobCategoryCards";
import FeaturedJobs from "../components/FeaturedJobs";
import Advertisment from "../components/Advertisment";
import RecentBlog from "../components/RecentBlog";

function HomePage() {
  return (
    <div>
      
      <Hero />
      <OrganizationLogoSlider />
      <JobCategoryCards />
      <FeaturedJobs />
      <Advertisment />
      <RecentBlog />
     
    </div>
  );
}

export default HomePage