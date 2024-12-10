import React, { useState } from 'react';

import { Link } from "react-router-dom";
import LinkedInPage from "./LinkedInPage";

function HomeHeader() {
  const [user, setUser] = useState(null);

  const handleLogin = (profile) => {
    setUser(profile);
  };

  const handleLogout = () => {
    setUser(null);
  };
  return (
    <header className="rts__section rts__header relative__header">
    <div className="container-none">
      <div className="rts__menu__background">
        <div className="row">
          <div className="d-flex align-items-center justify-content-between">
            <div className="rts__logo">
              <h5>
              <Link to="/"><span style={{color: '#1791FF', fontWeight: 'bold'}}>un</span>jobzone</Link>

              </h5>
            </div>
            <div className="navigation d-none d-lg-block">
              <nav className="navigation__menu">
                <ul className="list-unstyled">
                <li className="navigation__menu--item">
                      <Link to="/" className="navigation__menu--item__link">
                        Home
                      </Link>
                    </li>
                  <li className="navigation__menu--item">
                    <Link to="/jobs" className="navigation__menu--item__link">Browse Jobs</Link>
                    
                  </li>
                  <li className="navigation__menu--item">
                    <Link to="/job-categories" className="navigation__menu--item__link">Job Category</Link>
                    
                  </li>
                  <li className="navigation__menu--item">
                    <Link to="/organizations" className="navigation__menu--item__link">Organizations</Link>
                    
                  </li>
                  <li className="navigation__menu--item">
                    <Link to="/duty-stations" className="navigation__menu--item__link">Duty Stations</Link>
                   
                  </li>
                  <li className="navigation__menu--item">
                    <Link to="/blog" className="navigation__menu--item__link">Blog</Link>                    
                  </li>
                </ul>
              </nav>
            </div>

            <div className="rts__menu d-flex gap-5 align-items-center">
            <div className="header__right__btn d-flex gap-3">
            {/* <LinkedInPage /> */}
             <button className="d-md-block d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas"><i className="fa-sharp fa-regular fa-bars"></i></button>

                                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default HomeHeader