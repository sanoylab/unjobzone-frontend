import { Link } from "react-router-dom";

function MobileMenu() {
  return (
    <div
    className="offcanvas offcanvas-end"
    tabIndex="-1"
    id="offcanvas"
    aria-labelledby="offcanvasLabel"
  >
    <div className="offcanvas-header p-0 mb-5 mt-4">
      <a href="index.html" className="offcanvas-title" id="offcanvasLabel">
        <img src="assets/img/logo.png" alt="logo" />
      </a>
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
                    to="/daily-blog"
                    className="navigation__menu--item-mobile__link"
                  >
                    Daily Blog
                  </Link>
                </li>
              </ul>
            </nav>
      </div>
    </div>
   
  </div>
  )
}

export default MobileMenu