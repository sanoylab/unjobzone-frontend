import React from 'react'
import HomeHero from "../components/HomeHero";
import JobCategoryCards from "../components/JobCategoryCards";
import Jobs from "../components/Jobs";
import Advertisment from "../components/Advertisment";
import RecentBlog from "../components/RecentBlog";
import HomeHeader from "../components/HomeHeader";
import Footer from "../components/Footer";
import MobileMenu from '../components/MobileMenu';

function HomePage() {
  return (
    <div>
      <HomeHeader />
      <HomeHero />
      <JobCategoryCards />
      <Jobs isHome={true} />
      <Advertisment />
      <RecentBlog />
      <Footer />
      <MobileMenu />
    </div>
  );
}

export default HomePage