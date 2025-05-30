import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function MobileMenu() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  
  return (
    <div
    className="offcanvas offcanvas-end"
    tabIndex="-1"
    id="offcanvas"
    aria-labelledby="offcanvasLabel"
  >
    <div className="offcanvas-header p-0 mb-5 mt-4">
    <h5><Link to="/"><span style={{color: '#1791FF', fontWeight: 'bold'}}>UN</span> JobZone</Link></h5>

      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>

    <div className="mb-4 d-block d-sm-none">
      <div className="header__right__btn justify-content-center gap-3">
      <nav id="offcanvas__menu">
              <ul className="mobile-menu">
                <li className="navigation__menu--item-mobile">
                  <Link to="/" className="navigation__menu--item-mobile__link">
                    Home
                  </Link>
                </li>
                <li className="navigation__menu--item-mobile">
                  <Link to="/jobs" className="navigation__menu--item-mobile__link">
                    Browse Jobs
                  </Link>
                </li>
                <li className="navigation__menu--item-mobile">
                  <Link
                    to="/job-categories"
                    className="navigation__menu--item-mobile__link"
                  >
                    Job Category
                  </Link>
                </li>
                <li className="navigation__menu--item-mobile">
                  <Link
                    to="/organizations"
                    className="navigation__menu--item-mobile__link"
                  >
                    Organizations
                  </Link>
                </li>
                <li className="navigation__menu--item-mobile">
                  <Link
                    to="/duty-stations"
                    className="navigation__menu--item-mobile__link"
                  >
                    Duty Stations
                  </Link>
                </li>
                <li className="navigation__menu--item-mobile">
                  <Link
                    to="/blog"
                    className="navigation__menu--item-mobile__link"
                  >
                    Blog
                  </Link>
                </li>
                <li className="navigation__menu--item-mobile">
                  <button 
                    className="navigation__menu--item-mobile__link theme-toggle text-start w-100"
                    onClick={toggleTheme}
                    style={{border: 'none', background: 'none'}}
                  >
                    {darkMode ? 'Light Mode ' : 'Dark Mode '}
                    <i className={darkMode ? "fa-regular fa-sun" : "fa-regular fa-moon"}></i>
                  </button>
                </li>
              </ul>
            </nav>
      </div>
    </div>
   
  </div>
  )
}

export default MobileMenu