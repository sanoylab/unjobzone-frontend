import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

import HomeHeader from "../components/HomeHeader";
import MobileMenu from "../components/MobileMenu";

function MainLayout() {
  return (
    <>
      <HomeHeader />

      <Outlet />

      <Footer />

      <MobileMenu />
    </>
  );
}

export default MainLayout;
