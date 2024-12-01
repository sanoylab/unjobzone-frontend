import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MobileMenu from "../components/MobileMenu";

function MainLayout() {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />

      <MobileMenu />
    </>
  );
}

export default MainLayout;
