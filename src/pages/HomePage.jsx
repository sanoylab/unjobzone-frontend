import React from 'react'
import HomeHero from "../components/HomeHero";
import OrganizationLogoSlider from "../components/OrganizationLogoSlider";
import JobCategoryCards from "../components/JobCategoryCards";
import Jobs from "../components/Jobs";
import Advertisment from "../components/Advertisment";
import RecentBlog from "../components/RecentBlog";
import HomeHeader from "../components/HomeHeader";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div>
      <HomeHeader />
      <HomeHero />
      {/* <OrganizationLogoSlider /> */}
      <JobCategoryCards />
      <Jobs isHome={true} />
      <Advertisment />
      <RecentBlog />
      <Footer />
      
    </div>
  );
}

export default HomePage