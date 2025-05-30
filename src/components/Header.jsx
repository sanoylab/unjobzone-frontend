import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LinkedInPage from "./LinkedInPage";
import { ThemeContext } from "../contexts/ThemeContext";

function Header() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  
  return (
    <header className="rts__section rts__header absolute__header">
      <div className="container-none">
        <div className="rts__menu__background" style={{
          backgroundColor: darkMode ? '#1f1f1f' : ''
        }}>
          <div className="row">
            <div className="d-flex align-items-center justify-content-between">
              <div className="rts__logo">
                <h5>
                <Link to="/"><span style={{color: '#1791FF', fontWeight: 'bold'}}>un</span>jobzone</Link>

                  {/* <Link to="/">
                    {" "}
                    <img
                      src="/assets/images/logo.png"
                      alt="UN JobZone"
                      style={{ width: "200px" }}
                    />
                  </Link> */}
                </h5>
              </div>
              <div className="navigation d-none d-lg-block">
                <nav className="navigation__menu" id="offcanvas__menu">
                  <ul className="list-unstyled">
                  <li className="navigation__menu--item">
                      <Link to="/" className="navigation__menu--item__link" style={{
                        color: darkMode ? '#e4e4e4' : ''
                      }}>
                        Home
                      </Link>
                    </li>
                    <li className="navigation__menu--item">
                      <Link to="/jobs" className="navigation__menu--item__link" style={{
                        color: darkMode ? '#e4e4e4' : ''
                      }}>
                        Browse Jobs
                      </Link>
                    </li>
                    <li className="navigation__menu--item">
                    <Link to="/job-categories" className="navigation__menu--item__link" style={{
                      color: darkMode ? '#e4e4e4' : ''
                    }}>Job Category</Link>
                    
                  </li>
                    <li className="navigation__menu--item">
                      <Link
                        to="/organizations"
                        className="navigation__menu--item__link"
                        style={{
                          color: darkMode ? '#e4e4e4' : ''
                        }}
                      >
                        Organizations
                      </Link>
                    </li>
                    <li className="navigation__menu--item">
                      <Link
                        to="/duty-stations"
                        className="navigation__menu--item__link"
                        style={{
                          color: darkMode ? '#e4e4e4' : ''
                        }}
                      >
                        Duty Stations
                      </Link>
                    </li>
                    <li className="navigation__menu--item">
                      <Link
                        to="/blog"
                        className="navigation__menu--item__link"
                        style={{
                          color: darkMode ? '#e4e4e4' : ''
                        }}
                      >
                        Blog
                      </Link>
                    </li>
                    <li className="navigation__menu--item d-flex align-items-center">
                      <button 
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          height: '100%',
                          padding: '0 15px',
                          margin: 0,
                          position: 'relative',
                          color: darkMode ? '#e4e4e4' : ''
                        }}
                      >
                        <i className={darkMode ? "fa-regular fa-sun" : "fa-regular fa-moon"}></i>
                      </button>                    
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="header__right__btn d-flex gap-3">
                {/* <LinkedInPage /> */}
                <button className="d-md-block d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas"><i className="fa-sharp fa-regular fa-bars"></i></button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
