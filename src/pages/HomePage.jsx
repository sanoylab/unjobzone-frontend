import React from 'react'
import HomeHero from "../components/HomeHero";
import OrganizationLogoSlider from "../components/OrganizationLogoSlider";
import JobCategoryCards from "../components/JobCategoryCards";
import FeaturedJobs from "../components/FeaturedJobs";
import Advertisment from "../components/Advertisment";
import RecentBlog from "../components/RecentBlog";
import HomeHeader from "../components/HomeHeader";

function HomePage() {
  return (
    <div>
      <HomeHeader />
      <HomeHero />
      <OrganizationLogoSlider />
      <JobCategoryCards />
      <FeaturedJobs />
      <Advertisment />
      <RecentBlog />
     
    </div>
  );
}

export default HomePage