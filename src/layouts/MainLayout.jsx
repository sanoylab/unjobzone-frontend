import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

function MainLayout() {
  return (
    <>
      <Header />
      <Hero />
      <div className="rts__section section__padding">
        <div className="container">
          <div className="row g-30">
            <div className="col-12">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
