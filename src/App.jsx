import React from "react";
import Header from "./components/header";
import Hero from "./components/Hero";
import OrganizationSlider from "./components/OrganizationSlider";
import JobCategory from "./components/JobCategory";
import FeaturedJobs from "./components/FeaturedJobs";
import Advertisment from "./components/Advertisment";
import RecentBlog from "./components/RecentBlog";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <OrganizationSlider />
      <JobCategory />
      <FeaturedJobs />
      <Advertisment />
      <RecentBlog />
      <Footer /> 
    </div>
  );
};

export default App;
